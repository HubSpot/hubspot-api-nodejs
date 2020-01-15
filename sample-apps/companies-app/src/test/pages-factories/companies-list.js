const { By, until, Key, error } = require('selenium-webdriver')
const Promise = require('bluebird')
const _ = require('lodash')

module.exports = async (driver, companiesNames) => {
    const searchByDomainInput = await driver.wait(until.elementLocated(By.id(`search-companies-by-domain`)), 30000)
    const companiesLinks = {}

    await Promise.map(companiesNames, async (companyName) => {
        const companyLink = await driver.wait(
            until.elementLocated(By.xpath(`.//td[text()="${companyName}"]/preceding-sibling::td/a[1]`)),
        )
        await driver.wait(until.elementIsVisible(companyLink))
        _.set(companiesLinks, companyName, companyLink)
    })

    const createNewCompanyButton = await driver.wait(until.elementLocated(By.id(`create-new-company-button`)), 30000)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
        openCompany: async (companyName) => {
            await companiesLinks[companyName].click()
        },
        searchCompaniesByDomain: async (domain) => {
            await searchByDomainInput.sendKeys(domain)
            await searchByDomainInput.sendKeys(Key.ENTER)
        },
        isCompanyListed: async (companyName) => {
            try {
                await driver.findElement(By.xpath(`.//td[text()="${companyName}"]/preceding-sibling::td/a[1]`))
                return true
            } catch (e) {
                if (e instanceof error.NoSuchElementError) {
                    return false
                } else {
                    throw e
                }
            }
        },
        openNewCompanyPage: async () => {
            await createNewCompanyButton.click()
        },
    }
}
