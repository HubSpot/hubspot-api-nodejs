const { By, until, Key } = require('selenium-webdriver')
const Promise = require('bluebird')
const _ = require('lodash')

module.exports = async (driver) => {
    const titleInput = await driver.wait(until.elementLocated(By.id(`title`)), 30000)
    const bodyInput = await driver.wait(until.elementLocated(By.id(`body`)), 30000)
    const startTimeInput = await driver.wait(until.elementLocated(By.id(`startTime`)), 30000)
    const endTimeInput = await driver.wait(until.elementLocated(By.id(`endTime`)), 30000)
    const saveButton = await driver.wait(until.elementLocated(By.xpath(`.//input[@value="Save"]`)), 30000)
    await driver.wait(until.elementIsVisible(titleInput))
    await driver.wait(until.elementIsVisible(bodyInput))
    await driver.wait(until.elementIsVisible(startTimeInput))
    await driver.wait(until.elementIsVisible(endTimeInput))
    await driver.wait(until.elementIsVisible(saveButton))

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
        createEngagementWithTitle: async (title) => {
            await titleInput.clear()
            await titleInput.sendKeys(title)
            await bodyInput.clear()
            await bodyInput.sendKeys('Test engagement creation')
            await startTimeInput.clear()
            await startTimeInput.sendKeys('01.01.2020')
            await startTimeInput.sendKeys(Key.ARROW_RIGHT)
            await startTimeInput.sendKeys('01:01')
            await startTimeInput.sendKeys(Key.ARROW_RIGHT)
            await startTimeInput.sendKeys('am')
            await endTimeInput.clear()
            await endTimeInput.sendKeys('01.01.2020')
            await endTimeInput.sendKeys(Key.ARROW_RIGHT)
            await endTimeInput.sendKeys('02:10')
            await endTimeInput.sendKeys(Key.ARROW_RIGHT)
            await endTimeInput.sendKeys('am')
            await saveButton.click()
        },
    }
}
