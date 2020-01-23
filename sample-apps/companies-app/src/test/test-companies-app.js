const _ = require('lodash')
const Promise = require('bluebird')
const chai = require('chai')
const expect = chai.expect
const driverHelper = require('./helpers/driver-helper')
const authorizationHelper = require('./helpers/authorization-helper')
const environmentHelper = require('./helpers/environment-helper')
const BASE_PATH = `http://localhost:3000`
const companiesListFactory = require('./pages-factories/companies-list')
const companyFactory = require('./pages-factories/company')
const manageContactsFactory = require('./pages-factories/manage-contacts')

const newCompanyProperties = {
    address: 'test address 03',
    annualrevenue: 30000,
    city: 'test city 03',
    country: 'test country 03',
    description: 'Company created for test',
    domain: 'companies.sample.test.com3',
    founded_year: '2030',
    name: 'Company created for test companies-sample 03',
}

const updatedCompanyProperties = {
    address: 'test address 02 updated',
    annualrevenue: 40000,
    city: 'test city 02 updated',
    country: 'test country 02 updated',
    description: 'Company created for test updated',
    domain: 'companies.sample.test.com2.updated',
    founded_year: '2040',
    name: 'Company created for test companies-sample 02',
}

const companyPropertiesNames = _.keys(environmentHelper.createdCompanies[0].properties)
const companiesNames = _.map(environmentHelper.createdCompanies, 'properties.name')
const contactName01 = `${environmentHelper.createdContacts[0].properties.firstname} ${environmentHelper.createdContacts[0].properties.lastname}`
const contactName02 = `${environmentHelper.createdContacts[1].properties.firstname} ${environmentHelper.createdContacts[1].properties.lastname}`

const navigateToUpdateCompanyPage = async (driver, companyName) => {
    await driver.get(`${BASE_PATH}/companies`)
    const companiesListPage = await companiesListFactory(driver, companiesNames)
    return companiesListPage.openCompany(companyName)
}

describe('companies-sample', () => {
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

    describe('Companies list', () => {
        it('User should be redirected to companies list after authorization', async () => {
            await driver.get(`${BASE_PATH}/login`)
            await companiesListFactory(driver, companiesNames)
        })

        it('User can search companies by domain', async () => {
            await driver.get(`${BASE_PATH}/companies`)
            const companiesListPage = await companiesListFactory(driver, companiesNames)
            await companiesListPage.searchCompaniesByDomain(environmentHelper.createdCompanies[0].properties.domain)

            const isTestCompany01Listed = await companiesListPage.isCompanyListed(
                environmentHelper.createdCompanies[0].properties.name,
            )
            const isTestCompany02Listed = await companiesListPage.isCompanyListed(
                environmentHelper.createdCompanies[1].properties.name,
            )
            expect(isTestCompany01Listed).to.be.true
            expect(isTestCompany02Listed).to.be.false
        })

        it('User can navigate to Create New Company page', async () => {
            await driver.get(`${BASE_PATH}/companies`)
            const companiesListPage = await companiesListFactory(driver, companiesNames)
            await companiesListPage.openNewCompanyPage()
            const companyPropertiesNames = _.keys(environmentHelper.createdCompanies[0].properties)
            await companyFactory(driver, companyPropertiesNames)
        })
    })
    describe('Create new company', () => {
        it('Verify new company page', async () => {
            await driver.get(`${BASE_PATH}/companies/new`)
            await companyFactory(driver, companyPropertiesNames)
        })

        it('User can create new company', async () => {
            await driver.get(`${BASE_PATH}/companies/new`)
            const newCompanyPage = await companyFactory(driver, companyPropertiesNames)

            await Promise.map(companyPropertiesNames, (companyPropertyName) =>
                newCompanyPage.setValueForProperty(companyPropertyName, newCompanyProperties[companyPropertyName]),
            )
            await newCompanyPage.saveCompany()

            const updateCompanyPage = await companyFactory(driver, companyPropertiesNames)

            await Promise.map(companyPropertiesNames, async (companyPropertyName) => {
                const propertyValue = await updateCompanyPage.getPropertyValue(companyPropertyName)

                expect(propertyValue).to.equal(newCompanyProperties[companyPropertyName].toString())
            })
        })
    })

    describe('Update company', () => {
        it('Verify update company page', async () => {
            await navigateToUpdateCompanyPage(driver, environmentHelper.createdCompanies[0].properties.name)
            const updateCompanyPage = await companyFactory(driver, companyPropertiesNames, [contactName01])
            await Promise.map(companyPropertiesNames, async (companyPropertyName) => {
                const propertyValue = await updateCompanyPage.getPropertyValue(companyPropertyName)

                expect(propertyValue).to.equal(
                    environmentHelper.createdCompanies[0].properties[companyPropertyName].toString(),
                )
            })
        })

        it('User can navigate to Manage Contacts page', async () => {
            await navigateToUpdateCompanyPage(driver, environmentHelper.createdCompanies[0].properties.name)
            const updateCompanyPage = await companyFactory(driver, companyPropertiesNames, [])
            await updateCompanyPage.openManageContactsPage()
            await manageContactsFactory(driver, [contactName01, contactName02])
        })

        it('User can update company', async () => {
            await navigateToUpdateCompanyPage(driver, environmentHelper.createdCompanies[1].properties.name)
            let updateCompanyPage = await companyFactory(driver, companyPropertiesNames)

            await Promise.map(companyPropertiesNames, (companyPropertyName) =>
                updateCompanyPage.setValueForProperty(
                    companyPropertyName,
                    updatedCompanyProperties[companyPropertyName],
                ),
            )
            await updateCompanyPage.saveCompany()

            updateCompanyPage = await companyFactory(driver, companyPropertiesNames)

            await Promise.map(companyPropertiesNames, async (companyPropertyName) => {
                const propertyValue = await updateCompanyPage.getPropertyValue(companyPropertyName)

                expect(propertyValue).to.equal(updatedCompanyProperties[companyPropertyName].toString())
            })
        })
    })

    describe('Manage contacts', () => {
        it('User can search contacts', async () => {
            await navigateToUpdateCompanyPage(driver, environmentHelper.createdCompanies[0].properties.name)
            const updateCompanyPage = await companyFactory(driver, companyPropertiesNames, [])
            await updateCompanyPage.openManageContactsPage()
            let manageContactsPage = await manageContactsFactory(driver, [contactName01, contactName02])
            await manageContactsPage.searchContacts(contactName02)
            manageContactsPage = await manageContactsFactory(driver, [contactName02])

            const isContact01Listed = await manageContactsPage.isContactListed(contactName01)
            const isContact02Listed = await manageContactsPage.isContactListed(contactName02)
            expect(isContact01Listed).to.be.false
            expect(isContact02Listed).to.be.true
        })

        it('User can associate contacts to company', async () => {
            await navigateToUpdateCompanyPage(driver, environmentHelper.createdCompanies[1].properties.name)
            const updateCompanyPage = await companyFactory(driver, companyPropertiesNames, [])

            const isContact01Listed = await updateCompanyPage.isContactListed(contactName01)
            const isContact02Listed = await updateCompanyPage.isContactListed(contactName02)
            expect(isContact01Listed).to.be.false
            expect(isContact02Listed).to.be.false

            await updateCompanyPage.openManageContactsPage()
            const manageContactsPage = await manageContactsFactory(driver, [contactName01, contactName02])
            await manageContactsPage.selectContact(contactName01)
            await manageContactsPage.selectContact(contactName02)
            await manageContactsPage.pressAddSelectedToCompanyButton()
            await companyFactory(driver, companyPropertiesNames, [contactName01, contactName02])
        })

        it('User can delete contacts association to company', async () => {
            await navigateToUpdateCompanyPage(driver, environmentHelper.createdCompanies[0].properties.name)
            const updateCompanyPage = await companyFactory(driver, companyPropertiesNames, [contactName01])

            const isContact02Listed = await updateCompanyPage.isContactListed(contactName02)
            expect(isContact02Listed).to.be.false

            await updateCompanyPage.openManageContactsPage()
            const manageContactsPage = await manageContactsFactory(driver, [contactName01, contactName02])
            await manageContactsPage.selectContact(contactName01)
            await manageContactsPage.pressDeleteSelectedFromCompanyButton()
            await companyFactory(driver, companyPropertiesNames, [])

            const isContact01Listed = await updateCompanyPage.isContactListed(contactName01)
            expect(isContact01Listed).to.be.false
        })
    })
})
