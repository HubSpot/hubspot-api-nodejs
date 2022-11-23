import { createConfiguration } from '../../../../codegen/crm/objects/configuration'
import {
  AssociationsApi,
  BasicApi,
  BatchApi,
  GDPRApi,
  PublicObjectApi,
  RequestContext,
  ResponseContext,
  SearchApi,
  ServerConfiguration,
} from '../../../../codegen/crm/objects/index'
import { Observable } from '../../../../codegen/crm/objects/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import CallsDiscovery from './calls/CallsDiscovery'
import EmailsDiscovery from './emails/EmailsDiscovery'
import FeedbackSubmissionsDiscovery from './feedback_submissions/FeedbackSubmissionsDiscovery'
import MeetingsDiscovery from './meetings/MeetingsDiscovery'
import NotesDiscovery from './notes/NotesDiscovery'
import TasksDiscovery from './tasks/TasksDiscovery'

export default class ObjectsDiscovery {
  public associationsApi: AssociationsApi
  public basicApi: BasicApi
  public batchApi: BatchApi
  public calls: CallsDiscovery
  public emails: EmailsDiscovery
  public gdprApi: GDPRApi
  public feedbackSubmissions: FeedbackSubmissionsDiscovery
  public meetings: MeetingsDiscovery
  public notes: NotesDiscovery
  public publicObjectApi: PublicObjectApi
  public tasks: TasksDiscovery
  public searchApi: SearchApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<{}>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.associationsApi = new AssociationsApi(configuration)
    this.basicApi = new BasicApi(configuration)
    this.batchApi = new BatchApi(configuration)
    this.calls = new CallsDiscovery(config)
    this.emails = new EmailsDiscovery(config)
    this.gdprApi = new GDPRApi(configuration)
    this.feedbackSubmissions = new FeedbackSubmissionsDiscovery(config)
    this.meetings = new MeetingsDiscovery(config)
    this.notes = new NotesDiscovery(config)
    this.publicObjectApi = new PublicObjectApi(configuration)
    this.tasks = new TasksDiscovery(config)
    this.searchApi = new SearchApi(configuration)
  }
}
