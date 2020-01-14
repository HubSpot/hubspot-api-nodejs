const { By, until, Key, error } = require('selenium-webdriver')
const Promise = require('bluebird')
const _ = require('lodash')

module.exports = async (driver, contactsNames) => {
    const searchInput = await driver.wait(until.elementLocated(By.id(`search`)), 30000)
    const contactsCheckboxes = {}

    await Promise.map(contactsNames, async (contactName) => {
        const contactCheckbox = await driver.wait(
            until.elementLocated(By.xpath(`.//td[text()="${contactName}"]/following-sibling::td/input[1]`)),
            30000,
        )
        await driver.wait(until.elementIsVisible(contactCheckbox))
        _.set(contactsCheckboxes, contactName, contactCheckbox)
    })

    const addSelectedToCompanyButton = await driver.wait(
        until.elementLocated(By.xpath(`.//input[@value="Add selected to company"]`)),
        5000,
    )

    const deleteSelectedFromCompanyButton = await driver.wait(
        until.elementLocated(By.xpath(`.//input[@value="Delete selected from Company"]`)),
        30000,
    )

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
        selectContact: (contactName) => {
            return contactsCheckboxes[contactName].click()
        },
        searchContacts: async (searchQuery) => {
            await searchInput.sendKeys(searchQuery)
            return searchInput.sendKeys(Key.ENTER)
        },
        isContactListed: async (contactName) => {
            try {
                await driver.findElement(By.xpath(`.//td[text()="${contactName}"]/following-sibling::td/input[1]`))
                return true
            } catch (e) {
                if (e instanceof error.NoSuchElementError) {
                    return false
                } else {
                    throw e
                }
            }
        },
        pressAddSelectedToCompanyButton: () => {
            return addSelectedToCompanyButton.click()
        },
        pressDeleteSelectedFromCompanyButton: () => {
            return deleteSelectedFromCompanyButton.click()
        },
    }
}
