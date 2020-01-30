const { By, until } = require('selenium-webdriver')
const Promise = require('bluebird')
const _ = require('lodash')

module.exports = async (driver, contactsNames) => {
    const contacts = {}

    await Promise.map(contactsNames, async (contactName) => {
        const contact = await driver.wait(
            until.elementLocated(By.xpath(`.//td[text()="${contactName}"][1]`)),
            30000,
        )
        await driver.wait(until.elementIsVisible(contact))
        _.set(contacts, contactName, contact)
    })

    const accessTokenElement = await driver.wait(
        until.elementLocated(By.xpath(`.//td[text()="Access Token"]/following-sibling::td[1]`)),
        30000,
    )

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
        getAccessTokenValue: () => {
            return accessTokenElement.getText()
        },
    }
}
