const { By, until, error } = require('selenium-webdriver')
const Promise = require('bluebird')
const _ = require('lodash')

module.exports = async (driver, propertiesNames) => {
    const propertiesLinks = {}

    await Promise.map(propertiesNames, async (propertyName) => {
        const propertyLink = await driver.wait(
            until.elementLocated(By.xpath(`.//td/a[text()="${propertyName}"][1]`)),
            30000,
        )
        await driver.wait(until.elementIsVisible(propertyLink), 10000)
        _.set(propertiesLinks, propertyName, propertyLink)
    })

    const createNewPropertyButton = await driver.wait(until.elementLocated(By.xpath(`.//input[@value="New Property"]`)), 30000)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
        openProperty: async (propertyName) => {
            await propertiesLinks[propertyName].click()
        },
        openNewPropertyPage: () => {
            return createNewPropertyButton.click()
        },
    }
}
