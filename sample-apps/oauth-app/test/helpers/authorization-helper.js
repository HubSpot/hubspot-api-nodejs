const driverHelper = require('./driver-helper')
const hubspotLoginFactory = require('../pages-factories/hubspot-login')
const loginFactory = require('../pages-factories/login')
const hubspotAccountsListFactory = require('../pages-factories/hubspot-accounts-list')
const companiesListFactory = require('../pages-factories/contacts-list')

const APPLICATION_TITLE = 'HubSpot JavaScript Sample Oauth'

const verifyTitle = async (driver) => {
    const pageTitle = await driver.getTitle()

    if (APPLICATION_TITLE !== pageTitle) {
        throw new Error('Sample Companies APP not started')
    }
}

exports.tryToAuthorize = async (basePath) => {
    const driver = driverHelper.getDriver()
    await driver.get(`${basePath}/login`)
    await verifyTitle(driver)
    let loginPage

    try {
        loginPage = await loginFactory(driver)
    } catch (e) {
        return
    }

    await loginPage.authorize()
    const hubspotLoginPage = await hubspotLoginFactory(driver)
    await hubspotLoginPage.login(process.env.HUBSPOT_AUTHORIZATION_EMAIL, process.env.HUBSPOT_AUTHORIZATION_PASSWORD)
    const hubspotAccountsListPage = await hubspotAccountsListFactory(driver, process.env.HUBSPOT_ACCOUNT_NAME)
    await hubspotAccountsListPage.selectAccount()
    await companiesListFactory(driver, [])
}
