const { By, until } = require('selenium-webdriver')

module.exports = async (driver) => {
    const usernameInputElement = await driver.wait(until.elementLocated(By.id('username')))
    const passwordInputElement = await driver.wait(until.elementLocated(By.id('password')))
    const loginButton = await driver.wait(until.elementLocated(By.id('loginBtn')))

    return {
        login: async (email, password) => {
            await usernameInputElement.sendKeys(email)
            await passwordInputElement.sendKeys(password)
            await loginButton.click()
        },
    }
}
