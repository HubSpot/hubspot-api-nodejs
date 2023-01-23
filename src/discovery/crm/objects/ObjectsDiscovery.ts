import {
  AssociationsApi,
  BasicApi,
  BatchApi,
  Configuration,
  createConfiguration,
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
import ApiDecoratorService from '../../../services/ApiDecoratorService'
import { initObjectOld} from '../../../services/initObjectOld'
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

    this.associationsApi = ApiDecoratorService.getInstance().apply<AssociationsApi, Configuration>(
      new AssociationsApi(configuration),
      configuration,
    )
    this.basicApi = ApiDecoratorService.getInstance().apply<BasicApi, Configuration>(
      new BasicApi(configuration),
      configuration,
    )
    this.batchApi = ApiDecoratorService.getInstance().apply<BatchApi, Configuration>(
      new BatchApi(configuration),
      configuration,
    )
    this.gdprApi = ApiDecoratorService.getInstance().apply<GDPRApi, Configuration>(
      new GDPRApi(configuration),
      configuration,
    )
    this.publicObjectApi = ApiDecoratorService.getInstance().apply<PublicObjectApi, Configuration>(
      new PublicObjectApi(configuration),
      configuration,
    )
    this.searchApi = ApiDecoratorService.getInstance().apply<SearchApi, Configuration>(
      new SearchApi(configuration),
      configuration,
    )
  }
  /**
   * Getter
   * @returns CallsDiscovery
   */
  get calls() {
    if (!this._calls) {
      this._calls = initObjectOld<CallsDiscovery>('crm/objects/calls/CallsDiscovery', this.config)
    }

    return this._calls
  }

  /**
   * Getter
   * @returns EmailsDiscovery
   */
  get emails() {
    if (!this._emails) {
      this._emails = initObjectOld<EmailsDiscovery>('crm/objects/emails/EmailsDiscovery', this.config)
    }

    return this._emails
  }

  /**
   * Getter
   * @returns FeedbackSubmissionsDiscovery
   */
  get feedbackSubmissions() {
    if (!this._feedbackSubmissions) {
      this._feedbackSubmissions = initObjectOld<FeedbackSubmissionsDiscovery>(
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
      this._meetings = initObjectOld<MeetingsDiscovery>('crm/objects/meetings/MeetingsDiscovery', this.config)
    }

    return this._meetings
  }

  /**
   * Getter
   * @returns NotesDiscovery
   */
  get notes() {
    if (!this._notes) {
      this._notes = initObjectOld<NotesDiscovery>('crm/objects/notes/NotesDiscovery', this.config)
    }

    return this._notes
  }

  /**
   * Getter
   * @returns PostalMailDiscovery
   */
  get postalMail() {
    if (!this._postalMail) {
      this._postalMail = initObjectOld<PostalMailDiscovery>('crm/objects/postal_mail/PostalMailDiscovery', this.config)
    }

    return this._postalMail
  }

  /**
   * Getter
   * @returns TasksDiscovery
   */
  get tasks() {
    if (!this._tasks) {
      this._tasks = initObjectOld<TasksDiscovery>('crm/objects/tasks/TasksDiscovery', this.config)
    }

    return this._tasks
  }
}
