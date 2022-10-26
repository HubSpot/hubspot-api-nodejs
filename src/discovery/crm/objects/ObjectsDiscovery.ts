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
import { IConfiguration } from '../../../configuration/IConfiguration'
import { initObject } from '../../../services/initObject'
import { BaseDiscovery } from '../../BaseDiscovery'

export default class ObjectsDiscovery extends BaseDiscovery {
  public associationsApi: AssociationsApi
  public basicApi: BasicApi
  public batchApi: BatchApi
  protected _calls: any
  protected _emails: any
  public gdprApi: GDPRApi
  protected _feedbackSubmissions: any
  protected _meetings: any
  protected _notes: any
  public publicObjectApi: PublicObjectApi
  protected _tasks: any
  public searchApi: SearchApi

  constructor(config: IConfiguration) {
    super(config)
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
    this.gdprApi = new GDPRApi(configuration)
    this.publicObjectApi = new PublicObjectApi(configuration)
    this.searchApi = new SearchApi(configuration)
  }

  /**
  * Getter
  * @returns CallsDiscovery
  */
   get calls() {
    if(!this._calls) {
      this._calls = initObject('crm/objects/calls/CallsDiscovery', this.config)
    }
    
    return this._calls
  }

  /**
  * Getter
  * @returns EmailsDiscovery
  */
   get emails() {
    if(!this._emails) {
      this._emails = initObject('crm/objects/emails/EmailsDiscovery', this.config)
    }

    return this._emails
  }

  /**
  * Getter
  * @returns FeedbackSubmissionsDiscovery
  */
   get feedbackSubmissions() {
    if(!this._feedbackSubmissions) {
      this._feedbackSubmissions = initObject('crm/objects/feedback_submissions/FeedbackSubmissionsDiscovery', this.config)
    }

    return this._feedbackSubmissions
  }

  /**
  * Getter
  * @returns MeetingsDiscovery
  */
   get meetings() {
    if(!this._meetings) {
      this._meetings = initObject('crm/objects/meetings/MeetingsDiscovery', this.config)
    }

    return this._meetings
  }

  /**
  * Getter
  * @returns NotesDiscovery
  */
   get notes() {
    if(!this._notes) {
      this._notes = initObject('crm/objects/notes/NotesDiscovery', this.config)
    }

    return this._notes
  }

  /**
  * Getter
  * @returns TasksDiscovery
  */
   get tasks() {
    if(!this._tasks) {
      this._tasks = initObject('crm/objects/tasks/TasksDiscovery', this.config)
    }

    return this._tasks
  }
}
