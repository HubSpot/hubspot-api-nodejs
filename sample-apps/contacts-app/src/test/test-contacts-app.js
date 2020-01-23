const _ = require('lodash')
const Promise = require('bluebird')
const chai = require('chai')
const expect = chai.expect
const driverHelper = require('./helpers/driver-helper')
const applicationHelper = require('./helpers/application-helper')
const environmentHelper = require('./helpers/environment-helper')
const BASE_PATH = `http://localhost:3000`
const OWNER_NAME = `${process.env.HUBSPOT_USER_NAME} ${process.env.HUBSPOT_USER_LAST_NAME}`
const contactsListFactory = require('./pages-factories/contacts-list')
const contactFactory = require('./pages-factories/contact')
const addEngagementFactory = require('./pages-factories/add-engagement')

const newContactProperties = {
    address: 'test address 03',
    email: 'contacts.sample.test.03@hubspot.com',
    city: 'test city 03',
    country: 'test country 03',
    firstname: 'Contact created for test contacts-sample',
    lastname: '03',
}

const updatedContactProperties = {
    address: 'test address 02 updated',
    email: 'contacts.sample.test.02@hubspot.com',
    city: 'test city 02 updated',
    country: 'test country 02 updated',
    firstname: 'Contact created for test contacts-sample',
    lastname: '02',
}

const contactPropertiesInputsNames = _.keys(environmentHelper.createdContacts[0].properties)

const navigateToUpdateContactPage = async (driver, contactName) => {
    await driver.get(`${BASE_PATH}/contacts`)
    const contactsListPage = await contactsListFactory(driver, [contactName01, contactName02])
    return contactsListPage.openContact(contactName)
}

const getContactName = (contact) => `${contact.properties.firstname} ${contact.properties.lastname}`

const contactName01 = getContactName(environmentHelper.createdContacts[0])
const contactName02 = getContactName(environmentHelper.createdContacts[1])

describe('contacts-sample', () => {
    let driver

    before(async () => {
        try {
            await environmentHelper.initializeEnvironment()
            driver = driverHelper.getDriver()
            await applicationHelper.verifyApplication(BASE_PATH)
        } catch (e) {
            console.log('Error received on test initialization:', e)
            throw e
        }
    })

    after(async () => {
        await driver.quit()
    })

    describe('Contacts list', () => {
        it('Verify contact list page', async () => {
            await driver.get(`${BASE_PATH}/contacts`)
            return contactsListFactory(driver, [contactName01, contactName02])
        })

        it('Verify user redirected to contact list page from initial location', async () => {
            await driver.get(`${BASE_PATH}`)
            await contactsListFactory(driver, [contactName01, contactName02])
        })

        it('User can search contacts', async () => {
            await driver.get(`${BASE_PATH}/contacts`)
            const contactsListPage = await contactsListFactory(driver, [contactName01, contactName02])
            await contactsListPage.searchContacts(contactName02)

            const isTestContact01Listed = await contactsListPage.isContactListed(contactName01)
            const isTestContact02Listed = await contactsListPage.isContactListed(contactName02)
            expect(isTestContact01Listed).to.be.false
            expect(isTestContact02Listed).to.be.true
        })

        it('User can navigate to Create New Contact page', async () => {
            await driver.get(`${BASE_PATH}/contacts`)
            const contactsListPage = await contactsListFactory(driver, [contactName01, contactName02])
            await contactsListPage.openNewContactPage()
            await contactFactory(driver, contactPropertiesInputsNames)
        })
    })
    describe('Create new contact', () => {
        it('Verify new contact page', async () => {
            await driver.get(`${BASE_PATH}/contacts/new`)
            const newContactPage = await contactFactory(driver, contactPropertiesInputsNames)
            const isOwnerListedInOwnerOptions = await newContactPage.isOwnerOptionAvailable(OWNER_NAME)
            expect(isOwnerListedInOwnerOptions).to.be.true
        })

        it('User can create new contact', async () => {
            await driver.get(`${BASE_PATH}/contacts/new`)
            const newContactPage = await contactFactory(driver, contactPropertiesInputsNames)

            await Promise.map(contactPropertiesInputsNames, (contactPropertyName) =>
                newContactPage.setValueForInputProperty(contactPropertyName, newContactProperties[contactPropertyName]),
            )
            await newContactPage.saveContact()

            const updateContactPage = await contactFactory(driver, contactPropertiesInputsNames)

            await Promise.map(contactPropertiesInputsNames, async (contactPropertyName) => {
                const propertyValue = await updateContactPage.getPropertyInputValue(contactPropertyName)

                expect(propertyValue).to.equal(newContactProperties[contactPropertyName].toString())
            })
        })
    })

    describe('Update contact', () => {
        it('Verify update contact page', async () => {
            await navigateToUpdateContactPage(driver, contactName01)
            const updateContactPage = await contactFactory(driver, contactPropertiesInputsNames, [])
            await Promise.map(contactPropertiesInputsNames, async (contactPropertyName) => {
                const propertyValue = await updateContactPage.getPropertyInputValue(contactPropertyName)

                expect(propertyValue).to.equal(
                    environmentHelper.createdContacts[0].properties[contactPropertyName].toString(),
                )
            })
            const isOwnerListedInOwnerOptions = await updateContactPage.isOwnerOptionAvailable(OWNER_NAME)
            expect(isOwnerListedInOwnerOptions).to.be.true
        })

        it('User can navigate to Add Engagements page', async () => {
            await navigateToUpdateContactPage(driver, contactName01)
            const updateCompanyPage = await contactFactory(driver, contactPropertiesInputsNames, [])
            await updateCompanyPage.openAddEngagementPage()
            await addEngagementFactory(driver)
        })

        it('User can update contact', async () => {
            await navigateToUpdateContactPage(driver, contactName02)
            let updateContactPage = await contactFactory(driver, contactPropertiesInputsNames)

            await Promise.map(contactPropertiesInputsNames, (contactPropertyName) =>
                updateContactPage.setValueForInputProperty(
                    contactPropertyName,
                    updatedContactProperties[contactPropertyName],
                ),
            )

            await updateContactPage.selectOwnerOption(OWNER_NAME)

            await updateContactPage.saveContact()

            updateContactPage = await contactFactory(driver, contactPropertiesInputsNames)

            await Promise.map(contactPropertiesInputsNames, async (companyPropertyName) => {
                const propertyValue = await updateContactPage.getPropertyInputValue(companyPropertyName)

                expect(propertyValue).to.equal(updatedContactProperties[companyPropertyName].toString())
            })

            const isOwnerSelected = await updateContactPage.isOwnerOptionSelected(OWNER_NAME)
            expect(isOwnerSelected).to.be.true
        })
    })

    describe('Engagements', () => {
        it('User can create Engagement', async () => {
            await navigateToUpdateContactPage(driver, contactName01)
            const updateCompanyPage = await contactFactory(driver, contactPropertiesInputsNames, [])
            await updateCompanyPage.openAddEngagementPage()
            const engagementTitle = 'Test engagement creation'
            const addEngagementPage = await addEngagementFactory(driver)
            await addEngagementPage.createEngagementWithTitle(engagementTitle)
            await contactFactory(driver, contactPropertiesInputsNames, [engagementTitle])
        })
    })
})
