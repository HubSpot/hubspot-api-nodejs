const { By, until, Key, error } = require('selenium-webdriver')
const Promise = require('bluebird')
const _ = require('lodash')

module.exports = async (driver, contactPropertiesInputsNames, engagementTitles) => {
    const contactPropertiesInputs = {}
    const engagements = {}
    let addEngagementButton

    await Promise.map(contactPropertiesInputsNames, async (contactPropertyInputName) => {
        const contactPropertyInput = await driver.wait(until.elementLocated(By.id(contactPropertyInputName)), 30000)
        await driver.wait(until.elementIsVisible(contactPropertyInput))
        _.set(contactPropertiesInputs, contactPropertyInputName, contactPropertyInput)
    })

    const saveButton = await driver.wait(until.elementLocated(By.xpath(`.//input[@value="Save"]`)), 30000)

    if (engagementTitles) {
        await Promise.map(engagementTitles, async (engagementTitle) => {
            const engagement = await driver.wait(
                until.elementLocated(
                    By.xpath(`.//td[text()="MEETING"]/following-sibling::td[text()="${engagementTitle}"]`),
                ),
                30000,
            )
            await driver.wait(until.elementIsVisible(engagement))
            _.set(engagements, engagementTitle, engagement)
        })

        addEngagementButton = await driver.wait(
            until.elementLocated(By.xpath(`.//input[@value="Add Engagement"]`)),
            30000,
        )
    }

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
        saveContact: () => {
            return saveButton.click()
        },
        getPropertyInputValue: (contactPropertyName) => {
            return contactPropertiesInputs[contactPropertyName].getAttribute('value')
        },
        setValueForInputProperty: async (companyPropertyName, companyPropertyValue) => {
            await contactPropertiesInputs[companyPropertyName].click()
            await contactPropertiesInputs[companyPropertyName].clear()
            return contactPropertiesInputs[companyPropertyName].sendKeys(companyPropertyValue)
        },
        openAddEngagementPage: () => {
            return addEngagementButton.click()
        },
        isOwnerOptionAvailable: async (optionName) => {
            try {
                await driver.findElement(By.xpath(`.//select/option[text()="${optionName}"]`))
                return true
            } catch (e) {
                if (e instanceof error.NoSuchElementError) {
                    return false
                } else {
                    throw e
                }
            }
        },
        selectOwnerOption: async (optionName) => {
            const ownerOption = await driver.findElement(By.xpath(`.//select/option[text()="${optionName}"]`))
            return ownerOption.click()
        },
        isOwnerOptionSelected: async (optionName) => {
            try {
                await driver.findElement(By.xpath(`.//select/option[text()="${optionName}" and @selected]`))
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
