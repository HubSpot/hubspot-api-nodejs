const { By, until } = require('selenium-webdriver')
const Promise = require('bluebird')

module.exports = async (driver) => {
    const mutablePropertiesLink = await driver.wait(
        until.elementLocated(By.xpath(`.//a[text()="Mutable Properties"]`)),
        30000,
    )

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
        openMutablePropertiesLink: () => {
            return mutablePropertiesLink.click()
        },
    }
}
