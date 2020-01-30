const { By, until } = require('selenium-webdriver')
const Promise = require('bluebird')

module.exports = async (driver) => {
    const refreshAccessTokenLink = await driver.wait(
        until.elementLocated(By.xpath(`.//a[text()="Refresh Access Token"]`)),
        30000,
    )

    const oauthLink = await driver.wait(until.elementLocated(By.xpath(`.//a[text()="OAuth2"]`)), 30000)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
        pressRefreshAccessTokenLink: () => {
            return refreshAccessTokenLink.click()
        },
        pressOauthLink: () => {
            return oauthLink.click()
        },
    }
}
