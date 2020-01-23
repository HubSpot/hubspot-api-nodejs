const { By, until, Key, error } = require('selenium-webdriver')
const Promise = require('bluebird')
const _ = require('lodash')

module.exports = async (driver, contactsNames) => {
    const searchInput = await driver.wait(until.elementLocated(By.id(`search`)), 30000)
    const contactsLinks = {}

    await Promise.map(contactsNames, async (contactName) => {
        const contactLink = await driver.wait(
            until.elementLocated(By.xpath(`.//td[text()="${contactName}"]/preceding-sibling::td/a[1]`)),
            30000,
        )
        await driver.wait(until.elementIsVisible(contactLink), 10000)
        _.set(contactsLinks, contactName, contactLink)
    })

    const createNewContactButton = await driver.wait(until.elementLocated(By.id(`create-new-contact-button`)), 30000)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
        openContact: async (contactName) => {
            await contactsLinks[contactName].click()
        },
        searchContacts: async (domain) => {
            await searchInput.sendKeys(domain)
            await searchInput.sendKeys(Key.ENTER)
        },
        isContactListed: async (contactName) => {
            try {
                await driver.findElement(By.xpath(`.//td[text()="${contactName}"]/preceding-sibling::td/a[1]`))
                return true
            } catch (e) {
                if (e instanceof error.NoSuchElementError) {
                    return false
                } else {
                    throw e
                }
            }
        },
        openNewContactPage: async () => {
            await createNewContactButton.click()
        },
    }
}
