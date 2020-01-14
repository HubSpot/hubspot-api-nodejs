const { By, until } = require('selenium-webdriver')

module.exports = async (driver, accountName) => {
    const accountLink = await driver.wait(
        until.elementLocated(By.xpath(`.//span[@class="private-truncated-string"]/span/span[text()="${accountName}"]`)),
        5000,
    )

    return {
        selectAccount: async () => {
            await accountLink.click()
        },
    }
}
