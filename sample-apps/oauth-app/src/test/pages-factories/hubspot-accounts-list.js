const { By, until } = require('selenium-webdriver')

module.exports = async (driver, accountName) => {
    const accountLink = await driver.wait(
        until.elementLocated(By.xpath(`.//span[@class="private-truncated-string"]/span/span[text()="${accountName}"]`)),
    )
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
        selectAccount: () => {
            return accountLink.click()
        },
    }
}
