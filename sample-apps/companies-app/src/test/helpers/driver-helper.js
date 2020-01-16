if (!process.env.USE_SELENIUM_SERVER) {
    require('chromedriver')
}
const webdriver = require('selenium-webdriver')
let driver

exports.getDriver = () => {
    if (!driver) {
        if (process.env.USE_SELENIUM_SERVER) {
            const chromeCapabilities = webdriver.Capabilities.chrome()
            chromeCapabilities.set('chromeOptions', {
                args: ['--headless', '--no-sandbox'],
            })
            driver = new webdriver.Builder()
                .forBrowser('chrome')
                .usingServer('http://localhost:4444/wd/hub')
                .withCapabilities(chromeCapabilities)
                .build()
        } else {
            driver = new webdriver.Builder().forBrowser('chrome').build()
        }
    }

    return driver
}

exports.quitDriver = async () => {
    if (driver) {
        await driver.quit()
    }

    driver = undefined
}
