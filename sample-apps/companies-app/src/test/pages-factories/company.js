const { By, until, Key, error } = require('selenium-webdriver')
const Promise = require('bluebird')
const _ = require('lodash')

module.exports = async (driver, companiesPropertiesNames, contactsNames) => {
    const companiesPropertiesInputs = {}
    const contacts = {}
    let manageContactsButton

    await Promise.map(companiesPropertiesNames, async (companyPropertyName) => {
        const companyPropertyInput = await driver.wait(until.elementLocated(By.id(companyPropertyName)), 30000)
        await driver.wait(until.elementIsVisible(companyPropertyInput))
        _.set(companiesPropertiesInputs, companyPropertyName, companyPropertyInput)
    })

    const saveButton = await driver.wait(until.elementLocated(By.xpath(`.//input[@value="Save"]`)), 30000)

    if (contactsNames) {
        await Promise.map(contactsNames, async (contactName) => {
            const contact = await driver.wait(until.elementLocated(By.xpath(`.//tr/td[text()="${contactName}"]`)), 30000)
            await driver.wait(until.elementIsVisible(contact))
            _.set(contacts, contactName, contact)
        })
        manageContactsButton = await driver.wait(
            until.elementLocated(By.xpath(`.//input[@value="Manage Contacts"]`)),
            30000,
        )
    }

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
        saveCompany: () => {
            return saveButton.click()
        },
        getPropertyValue: (companyPropertyName) => {
            return companiesPropertiesInputs[companyPropertyName].getAttribute('value')
        },
        setValueForProperty: async (companyPropertyName, companyPropertyValue) => {
            await companiesPropertiesInputs[companyPropertyName].click()
            await companiesPropertiesInputs[companyPropertyName].clear()
            return companiesPropertiesInputs[companyPropertyName].sendKeys(companyPropertyValue)
        },
        openManageContactsPage: () => {
            return manageContactsButton.click()
        },
        isContactListed: async (contactName) => {
            try {
                await driver.findElement(By.xpath(`.//tr/td[text()="${contactName}"]`))
                return true
            } catch (e) {
                if (e instanceof error.NoSuchElementError) {
                    return false
                } else {
                    throw e
                }
            }
        },
    }
}
