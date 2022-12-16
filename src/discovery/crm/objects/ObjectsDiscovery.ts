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
import { initObject } from '../../../services/initObject'
import BaseDiscovery from '../../BaseDiscovery'
import type CallsDiscovery from './calls/CallsDiscovery'
import type EmailsDiscovery from './emails/EmailsDiscovery'
import type FeedbackSubmissionsDiscovery from './feedback_submissions/FeedbackSubmissionsDiscovery'
import type MeetingsDiscovery from './meetings/MeetingsDiscovery'
import type NotesDiscovery from './notes/NotesDiscovery'
import type PostalMailDiscovery from './postal_mail/PostalMailDiscovery'
import type TasksDiscovery from './tasks/TasksDiscovery'

export default class ObjectsDiscovery extends BaseDiscovery {
  public associationsApi: AssociationsApi
  public basicApi: BasicApi
  public batchApi: BatchApi
  public gdprApi: GDPRApi
  public publicObjectApi: PublicObjectApi
  public searchApi: SearchApi
  protected _calls: CallsDiscovery | undefined
  protected _emails: EmailsDiscovery | undefined
  protected _feedbackSubmissions: FeedbackSubmissionsDiscovery | undefined
  protected _meetings: MeetingsDiscovery | undefined
  protected _notes: NotesDiscovery | undefined
  protected _postalMail: PostalMailDiscovery | undefined
  protected _tasks: TasksDiscovery | undefined

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
    if (!this._calls) {
      this._calls = initObject<CallsDiscovery>('crm/objects/calls/CallsDiscovery', this.config)
    }

    return this._calls
  }

  /**
   * Getter
   * @returns EmailsDiscovery
   */
  get emails() {
    if (!this._emails) {
      this._emails = initObject<EmailsDiscovery>('crm/objects/emails/EmailsDiscovery', this.config)
    }

    return this._emails
  }

  /**
   * Getter
   * @returns FeedbackSubmissionsDiscovery
   */
  get feedbackSubmissions() {
    if (!this._feedbackSubmissions) {
      this._feedbackSubmissions = initObject<FeedbackSubmissionsDiscovery>(
        'crm/objects/feedback_submissions/FeedbackSubmissionsDiscovery',
        this.config,
      )
    }

    return this._feedbackSubmissions
  }

  /**
   * Getter
   * @returns MeetingsDiscovery
   */
  get meetings() {
    if (!this._meetings) {
      this._meetings = initObject<MeetingsDiscovery>('crm/objects/meetings/MeetingsDiscovery', this.config)
    }

    return this._meetings
  }

  /**
   * Getter
   * @returns NotesDiscovery
   */
  get notes() {
    if (!this._notes) {
      this._notes = initObject<NotesDiscovery>('crm/objects/notes/NotesDiscovery', this.config)
    }

    return this._notes
  }

  /**
   * Getter
   * @returns PostalMailDiscovery
   */
  get postalMail() {
    if (!this._postalMail) {
      this._postalMail = initObject<PostalMailDiscovery>('crm/objects/postal_mail/PostalMailDiscovery', this.config)
    }

    return this._postalMail
  }

  /**
   * Getter
   * @returns TasksDiscovery
   */
  get tasks() {
    if (!this._tasks) {
      this._tasks = initObject<TasksDiscovery>('crm/objects/tasks/TasksDiscovery', this.config)
    }

    return this._tasks
  }
}
