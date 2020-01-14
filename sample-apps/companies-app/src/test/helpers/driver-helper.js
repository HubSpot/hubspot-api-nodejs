require('chromedriver')
const webdriver = require('selenium-webdriver')
let driver

exports.getDriver = () => {
    if (!driver) {
        driver = new webdriver.Builder().forBrowser('chrome').build()
    }

    return driver
}

exports.quitDriver = async () => {
    if (driver) {
        await driver.quit()
    }

    driver = undefined
}
