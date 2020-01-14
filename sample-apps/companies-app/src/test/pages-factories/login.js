const { By, until } = require('selenium-webdriver')

module.exports = async (driver) => {
    const authorizationButton = await driver.wait(until.elementLocated(By.id('authorize-button')), 2000)

    return {
        authorize: async () => {
            await authorizationButton.click()
        },
    }
}
