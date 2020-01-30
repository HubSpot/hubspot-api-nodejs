const { By, until } = require('selenium-webdriver')

module.exports = async (driver) => {
    const usernameInputElement = await driver.wait(until.elementLocated(By.id('username')), 30000)
    const passwordInputElement = await driver.wait(until.elementLocated(By.id('password')), 30000)
    const loginButton = await driver.wait(until.elementLocated(By.id('loginBtn')), 30000)

    return {
        login: async (email, password) => {
            await usernameInputElement.sendKeys(email)
            await passwordInputElement.sendKeys(password)
            await loginButton.click()
        },
    }
}
