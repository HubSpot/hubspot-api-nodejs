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
const headerFactory = require('./pages-factories/header')
const propertiesListFactory = require('./pages-factories/properties-list')
const propertyFactory = require('./pages-factories/property')

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

const newProperty = {
    name: 'contacts_sample_test_03',
    label: 'Contact sample test 03',
    description: 'Property created for test contacts-sample',
    type: 'string',
    fieldType: 'text',
}

const updatedProperty = {
    name: 'contacts_sample_test_01',
    label: 'Contact sample test 01 updated',
    description: 'Property created for test contacts-sample updated',
    type: 'string',
    fieldType: 'text',
}

const contactPropertiesInputsNames = _.keys(environmentHelper.createdContacts[0].properties)
const propertiesInputsNames = _.keys(newProperty)

const navigateToUpdateContactPage = async (driver, contactName) => {
    await driver.get(`${BASE_PATH}/contacts`)
    const contactsListPage = await contactsListFactory(driver, [contactName01, contactName02])
    return contactsListPage.openContact(contactName)
}

const navigateToUpdatePropertyPage = async (driver, propertyName) => {
    await driver.get(`${BASE_PATH}/properties`)
    const propertiesListPage = await propertiesListFactory(driver, [propertyName01, propertyName02])
    return propertiesListPage.openProperty(propertyName)
}

const getContactName = (contact) => `${contact.properties.firstname} ${contact.properties.lastname}`

const verifyContactValues = async (driver, contact) => {
    const contactPage = await contactFactory(driver, contactPropertiesInputsNames)

    await Promise.map(contactPropertiesInputsNames, async (contactPropertyInputName) => {
        const propertyValue = await contactPage.getPropertyInputValue(contactPropertyInputName)

        expect(propertyValue).to.equal(contact[contactPropertyInputName].toString())
    })

    const isOwnerSelected = await contactPage.isOwnerOptionSelected(OWNER_NAME)
    expect(isOwnerSelected).to.be.true
}

const verifyPropertyValues = async (driver, property) => {
    const propertyPage = await propertyFactory(driver, propertiesInputsNames)

    await Promise.map(propertiesInputsNames, async (propertyInputName) => {
        const propertyValue = await propertyPage.getPropertyInputValue(propertyInputName)

        expect(propertyValue).to.equal(property[propertyInputName].toString())
    })

    const isGroupSelected = await propertyPage.isGroupOptionSelected(environmentHelper.createdPropertyGroup.label)
    expect(isGroupSelected).to.be.true
}

const contactName01 = getContactName(environmentHelper.createdContacts[0])
const contactName02 = getContactName(environmentHelper.createdContacts[1])
const propertyName01 = environmentHelper.createdProperties[0].name
const propertyName02 = environmentHelper.createdProperties[1].name

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
            await propertyFactory(driver, contactPropertiesInputsNames)
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
            await newContactPage.selectOwnerOption(OWNER_NAME)
            await newContactPage.saveContact()

            await verifyContactValues(driver, newContactProperties)
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
            const updateContactPage = await contactFactory(driver, contactPropertiesInputsNames)

            await Promise.map(contactPropertiesInputsNames, (contactPropertyName) =>
                updateContactPage.setValueForInputProperty(
                    contactPropertyName,
                    updatedContactProperties[contactPropertyName],
                ),
            )

            await updateContactPage.selectOwnerOption(OWNER_NAME)
            await updateContactPage.saveContact()

            await verifyContactValues(driver, updatedContactProperties)
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

    describe('Mutable properties list', () => {
        it('Verify mutable properties list page', async () => {
            await driver.get(`${BASE_PATH}/properties`)
            await propertiesListFactory(driver, [propertyName01, propertyName02])
        })

        it('User can navigate to mutable properties list page from header', async () => {
            await driver.get(`${BASE_PATH}/contacts`)
            const header = await headerFactory(driver)
            await header.openMutablePropertiesLink()
            await propertiesListFactory(driver, [propertyName01, propertyName02])
        })

        it('User can navigate to Create Property page', async () => {
            await driver.get(`${BASE_PATH}/properties`)
            const propertiesList = await propertiesListFactory(driver, [propertyName01, propertyName02])
            await propertiesList.openNewPropertyPage()
            await propertyFactory(driver, propertiesInputsNames)
        })
    })

    describe('Create new property', () => {
        it('Verify create new property page', async () => {
            await driver.get(`${BASE_PATH}/properties/new`)
            const newPropertyPage = await propertyFactory(driver, propertiesInputsNames)
            const isGroupListedInGroupOptions = await newPropertyPage.isGroupOptionAvailable(
                environmentHelper.createdPropertyGroup.label,
            )
            expect(isGroupListedInGroupOptions).to.be.true
        })

        it('User can create new property', async () => {
            await driver.get(`${BASE_PATH}/properties/new`)
            const newPropertyPage = await propertyFactory(driver, propertiesInputsNames)

            await Promise.map(propertiesInputsNames, (propertyInputName) =>
                newPropertyPage.setValueForInputProperty(propertyInputName, newProperty[propertyInputName]),
            )

            await newPropertyPage.selectGroupOption(environmentHelper.createdPropertyGroup.label)
            await newPropertyPage.saveProperty()

            await verifyPropertyValues(driver, newProperty)
        })
    })

    describe('Update property', () => {
        it('Verify update property page', async () => {
            await navigateToUpdatePropertyPage(driver, propertyName01)
            const updatePropertyPage = await propertyFactory(driver, propertiesInputsNames)

            await Promise.map(propertiesInputsNames, async (propertyInputName) => {
                const propertyValue = await updatePropertyPage.getPropertyInputValue(propertyInputName)

                expect(propertyValue).to.equal(environmentHelper.createdProperties[0][propertyInputName].toString())
            })

            const isGroupSelected = await updatePropertyPage.isGroupOptionSelected(
                environmentHelper.createdPropertyGroup.label,
            )
            expect(isGroupSelected).to.be.true
        })

        it('User can update property', async () => {
            await navigateToUpdatePropertyPage(driver, propertyName01)
            const updatePropertyPage = await propertyFactory(driver, propertiesInputsNames)

            await Promise.map(propertiesInputsNames, (propertyInoutName) =>
                updatePropertyPage.setValueForInputProperty(propertyInoutName, updatedProperty[propertyInoutName]),
            )

            await updatePropertyPage.saveProperty()

            await verifyPropertyValues(driver, updatedProperty)
        })
    })
})
