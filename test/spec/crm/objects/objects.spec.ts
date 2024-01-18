import { BasicApi, BatchApi, GDPRApi, PublicObjectApi, SearchApi } from '../../../../codegen/crm/objects/index'
import { Client } from '../../../../index'
import CallsDiscovery from '../../../../src/discovery/crm/objects/calls/CallsDiscovery'
import CommunicationsDiscovery from '../../../../src/discovery/crm/objects/communications/CommunicationsDiscovery'
import EmailsDiscovery from '../../../../src/discovery/crm/objects/emails/EmailsDiscovery'
import FeedbackSubmissionsDiscovery from '../../../../src/discovery/crm/objects/feedback_submissions/FeedbackSubmissionsDiscovery'
import GoalsDiscovery from '../../../../src/discovery/crm/objects/goals/GoalsDiscovery'
import MeetingsDiscovery from '../../../../src/discovery/crm/objects/meetings/MeetingsDiscovery'
import NotesDiscovery from '../../../../src/discovery/crm/objects/notes/NotesDiscovery'
import PostalMailDiscovery from '../../../../src/discovery/crm/objects/postal_mail/PostalMailDiscovery'
import TasksDiscovery from '../../../../src/discovery/crm/objects/tasks/TasksDiscovery'
import TaxesDiscovery from '../../../../src/discovery/crm/objects/taxes/TaxesDiscovery'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.objects
    expect(CommunicationsDiscovery.name).toBe(client.communications.constructor.name)
    expect(CallsDiscovery.name).toBe(client.calls.constructor.name)
    expect(EmailsDiscovery.name).toBe(client.emails.constructor.name)
    expect(FeedbackSubmissionsDiscovery.name).toBe(client.feedbackSubmissions.constructor.name)
    expect(GoalsDiscovery.name).toBe(client.goals.constructor.name)
    expect(MeetingsDiscovery.name).toBe(client.meetings.constructor.name)
    expect(NotesDiscovery.name).toBe(client.notes.constructor.name)
    expect(PostalMailDiscovery.name).toBe(client.postalMail.constructor.name)
    expect(TasksDiscovery.name).toBe(client.tasks.constructor.name)
    expect(TaxesDiscovery.name).toBe(client.taxes.constructor.name)
    expect(client.hasOwnProperty('basicApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.basicApi.constructor.name)
    expect(client.hasOwnProperty('batchApi')).toBeTruthy()
    expect(BatchApi.name).toBe(client.batchApi.constructor.name)
    expect(client.hasOwnProperty('gdprApi')).toBeTruthy()
    expect(GDPRApi.name).toBe(client.gdprApi.constructor.name)
    expect(client.hasOwnProperty('publicObjectApi')).toBeTruthy()
    expect(PublicObjectApi.name).toBe(client.publicObjectApi.constructor.name)
    expect(client.hasOwnProperty('searchApi')).toBeTruthy()
    expect(SearchApi.name).toBe(client.searchApi.constructor.name)
  })
})
