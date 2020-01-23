const driverHelper = require('./driver-helper')
const APPLICATION_TITLE = 'HubSpot JavaScript Sample Contacts App'

const verifyTitle = async (driver) => {
    const pageTitle = await driver.getTitle()
    console.log('pageTitle:', pageTitle)

    if (APPLICATION_TITLE !== pageTitle) {
        throw new Error('Sample Contacts APP not started')
    }
}

exports.verifyApplication = async (basePath) => {
    const driver = driverHelper.getDriver()
    await driver.get(`${basePath}`)
    await verifyTitle(driver)
}
