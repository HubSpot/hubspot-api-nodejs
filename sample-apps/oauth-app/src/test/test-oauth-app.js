const _ = require('lodash')
const chai = require('chai')
const expect = chai.expect
const driverHelper = require('./helpers/driver-helper')
const authorizationHelper = require('./helpers/authorization-helper')
const environmentHelper = require('./helpers/environment-helper')
const BASE_PATH = `http://localhost:3000`
const contactsListFactory = require('./pages-factories/contacts-list')
const headerFactory = require('./pages-factories/header')
const loginFactory = require('./pages-factories/login')
const hubspotAccountsListFactory = require('./pages-factories/hubspot-accounts-list')

const getContactName = (contact) => `${contact.properties.firstname} ${contact.properties.lastname}`
const contactName01 = getContactName(environmentHelper.createdContacts[0])
const contactName02 = getContactName(environmentHelper.createdContacts[1])
const contactNames = [contactName01, contactName02]

describe('oauth-sample', () => {
    let driver

    before(async () => {
        try {
            await environmentHelper.initializeEnvironment()
            driver = driverHelper.getDriver()
            await authorizationHelper.tryToAuthorize(BASE_PATH)
        } catch (e) {
            console.log('Error received on test initialization:', e)
            throw e
        }
    })

    after(async () => {
        await driver.quit()
    })

    it('Contacts list displayed after authorization', async () => {
        await driver.get(`${BASE_PATH}`)
        await contactsListFactory(driver, contactNames)
    })

    it('User can refresh access token', async () => {
        await driver.get(`${BASE_PATH}`)
        let contactsListPage = await contactsListFactory(driver, contactNames)
        const oldAccessToken = await contactsListPage.getAccessTokenValue()
        const header = await headerFactory(driver)
        await header.pressRefreshAccessTokenLink()
        contactsListPage = await contactsListFactory(driver, contactNames)
        const newAccessToken = await contactsListPage.getAccessTokenValue()
        const isTokenChanged = !_.isEqual(oldAccessToken, newAccessToken)

        expect(isTokenChanged).to.be.true
    })

    it('User can reauthorize', async () => {
        await driver.get(`${BASE_PATH}`)
        let contactsListPage = await contactsListFactory(driver, contactNames)
        const oldAccessToken = await contactsListPage.getAccessTokenValue()
        const header = await headerFactory(driver)
        await header.pressOauthLink()
        const loginPage = await loginFactory(driver)
        await loginPage.authorize()
        const hubspotAccountsListPage = await hubspotAccountsListFactory(driver, process.env.HUBSPOT_ACCOUNT_NAME)
        await hubspotAccountsListPage.selectAccount()
        contactsListPage = await contactsListFactory(driver, contactNames)
        const newAccessToken = await contactsListPage.getAccessTokenValue()
        const isTokenChanged = !_.isEqual(oldAccessToken, newAccessToken)

        expect(isTokenChanged).to.be.true
    })
})
