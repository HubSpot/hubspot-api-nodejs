const { By, until } = require('selenium-webdriver')

module.exports = async (driver) => {
    const authorizationButton = await driver.wait(until.elementLocated(By.xpath(`.//a[text()="Authorize"][1]`)), 2000)

    return {
        authorize: async () => {
            await authorizationButton.click()
        },
    }
}
