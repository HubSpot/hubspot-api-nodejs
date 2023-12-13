import { Client } from '../../../index'
import AssociationsDiscovery from '../../../src/discovery/crm/associations/AssociationsDiscovery'
import CompaniesDiscovery from '../../../src/discovery/crm/companies/CompaniesDiscovery'
import ContactsDiscovery from '../../../src/discovery/crm/contacts/ContactsDiscovery'
import DealsDiscovery from '../../../src/discovery/crm/deals/DealsDiscovery'
import ExtensionsDiscovery from '../../../src/discovery/crm/extensions/ExtensionsDiscovery'
import ImportsDiscovery from '../../../src/discovery/crm/imports/ImportsDiscovery'
import LineItemsDiscovery from '../../../src/discovery/crm/line_items/LineItemsDiscovery'
import ListsDiscovery from '../../../src/discovery/crm/lists/ListsDiscovery'
import ObjectsDiscovery from '../../../src/discovery/crm/objects/ObjectsDiscovery'
import OwnersDiscovery from '../../../src/discovery/crm/owners/OwnersDiscovery'
import PipelinesDiscovery from '../../../src/discovery/crm/pipelines/PipelinesDiscovery'
import ProductsDiscovery from '../../../src/discovery/crm/products/ProductsDiscovery'
import PropertiesDiscovery from '../../../src/discovery/crm/properties/PropertiesDiscovery'
import QuotesDiscovery from '../../../src/discovery/crm/quotes/QuotesDiscovery'
import SchemasDiscovery from '../../../src/discovery/crm/schemas/SchemasDiscovery'
import TicketsDiscovery from '../../../src/discovery/crm/tickets/TicketsDiscovery'
import TimelineDiscovery from '../../../src/discovery/crm/timeline/TimelineDiscovery'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm
    expect(AssociationsDiscovery.name).toBe(client.associations.constructor.name)
    expect(CompaniesDiscovery.name).toBe(client.companies.constructor.name)
    expect(ContactsDiscovery.name).toBe(client.contacts.constructor.name)
    expect(DealsDiscovery.name).toBe(client.deals.constructor.name)
    expect(ExtensionsDiscovery.name).toBe(client.extensions.constructor.name)
    expect(ImportsDiscovery.name).toBe(client.imports.constructor.name)
    expect(LineItemsDiscovery.name).toBe(client.lineItems.constructor.name)
    expect(ListsDiscovery.name).toBe(client.lists.constructor.name)
    expect(ObjectsDiscovery.name).toBe(client.objects.constructor.name)
    expect(OwnersDiscovery.name).toBe(client.owners.constructor.name)
    expect(PipelinesDiscovery.name).toBe(client.pipelines.constructor.name)
    expect(ProductsDiscovery.name).toBe(client.products.constructor.name)
    expect(PropertiesDiscovery.name).toBe(client.properties.constructor.name)
    expect(QuotesDiscovery.name).toBe(client.quotes.constructor.name)
    expect(SchemasDiscovery.name).toBe(client.schemas.constructor.name)
    expect(TicketsDiscovery.name).toBe(client.tickets.constructor.name)
    expect(TimelineDiscovery.name).toBe(client.timeline.constructor.name)
  })
})
