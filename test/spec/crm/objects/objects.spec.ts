import { Client } from '../../../../index'
import CallsDiscovery from '../../../../src/discovery/crm/objects/calls/CallsDiscovery'
import EmailsDiscovery from '../../../../src/discovery/crm/objects/emails/EmailsDiscovery'
import FeedbackSubmissionsDiscovery from '../../../../src/discovery/crm/objects/feedback_submissions/FeedbackSubmissionsDiscovery'
import MeetingsDiscovery from '../../../../src/discovery/crm/objects/meetings/MeetingsDiscovery'
import NotesDiscovery from '../../../../src/discovery/crm/objects/notes/NotesDiscovery'
import TasksDiscovery from '../../../../src/discovery/crm/objects/tasks/TasksDiscovery'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.objects
    expect(CallsDiscovery.name).toBe(client.calls.constructor.name)
    expect(EmailsDiscovery.name).toBe(client.emails.constructor.name)
    expect(FeedbackSubmissionsDiscovery.name).toBe(client.feedbackSubmissions.constructor.name)
    expect(MeetingsDiscovery.name).toBe(client.meetings.constructor.name)
    expect(NotesDiscovery.name).toBe(client.notes.constructor.name)
    expect(TasksDiscovery.name).toBe(client.tasks.constructor.name)
    expect(client.hasOwnProperty('associationsApi')).toBeTruthy()
    expect(client.hasOwnProperty('basicApi')).toBeTruthy()
    expect(client.hasOwnProperty('batchApi')).toBeTruthy()
    expect(client.hasOwnProperty('gdprApi')).toBeTruthy()
    expect(client.hasOwnProperty('publicObjectApi')).toBeTruthy()
    expect(client.hasOwnProperty('searchApi')).toBeTruthy()
  })
})
