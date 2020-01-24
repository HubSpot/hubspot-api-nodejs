const { By, until, error } = require('selenium-webdriver')
const Promise = require('bluebird')
const _ = require('lodash')

module.exports = async (driver, propertiesInputsNames) => {
    const propertiesInputs = {}

    await Promise.map(propertiesInputsNames, async (propertyInputName) => {
        const propertyInput = await driver.wait(until.elementLocated(By.id(propertyInputName)), 30000)
        await driver.wait(until.elementIsVisible(propertyInput))
        _.set(propertiesInputs, propertyInputName, propertyInput)
    })

    const saveButton = await driver.wait(until.elementLocated(By.xpath(`.//input[@value="Save"]`)), 30000)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
        saveProperty: () => {
            return saveButton.click()
        },
        getPropertyInputValue: (propertyName) => {
            return propertiesInputs[propertyName].getAttribute('value')
        },
        setValueForInputProperty: async (propertyName, propertyValue) => {
            await propertiesInputs[propertyName].click()
            await propertiesInputs[propertyName].clear()
            return propertiesInputs[propertyName].sendKeys(propertyValue)
        },
        isGroupOptionAvailable: async (optionName) => {
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
        selectGroupOption: async (optionName) => {
            const ownerOption = await driver.findElement(By.xpath(`.//select/option[text()="${optionName}"]`))
            return ownerOption.click()
        },
        isGroupOptionSelected: async (optionName) => {
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
