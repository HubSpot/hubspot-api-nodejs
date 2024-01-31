import {
  BasicApi,
  BatchApi,
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
import BaseDiscovery from '../../BaseDiscovery'
import type CallsDiscovery from './calls/CallsDiscovery'
import type CommunicationsDiscovery from './communications/CommunicationsDiscovery'
import type EmailsDiscovery from './emails/EmailsDiscovery'
import type FeedbackSubmissionsDiscovery from './feedback_submissions/FeedbackSubmissionsDiscovery'
import type GoalsDiscovery from './goals/GoalsDiscovery'
import type MeetingsDiscovery from './meetings/MeetingsDiscovery'
import type NotesDiscovery from './notes/NotesDiscovery'
import type PostalMailDiscovery from './postal_mail/PostalMailDiscovery'
import type TasksDiscovery from './tasks/TasksDiscovery'
import type TaxesDiscovery from './taxes/TaxesDiscovery'

export default class ObjectsDiscovery extends BaseDiscovery {
  public basicApi: BasicApi
  public batchApi: BatchApi
  public gdprApi: GDPRApi
  public publicObjectApi: PublicObjectApi
  public searchApi: SearchApi
  protected _communications: CommunicationsDiscovery | undefined
  protected _calls: CallsDiscovery | undefined
  protected _emails: EmailsDiscovery | undefined
  protected _feedbackSubmissions: FeedbackSubmissionsDiscovery | undefined
  protected _goals: GoalsDiscovery | undefined
  protected _meetings: MeetingsDiscovery | undefined
  protected _notes: NotesDiscovery | undefined
  protected _postalMail: PostalMailDiscovery | undefined
  protected _tasks: TasksDiscovery | undefined
  protected _taxes: TaxesDiscovery | undefined

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

    this.basicApi = ApiDecoratorService.getInstance().apply<BasicApi>(new BasicApi(configuration))
    this.batchApi = ApiDecoratorService.getInstance().apply<BatchApi>(new BatchApi(configuration))
    this.gdprApi = ApiDecoratorService.getInstance().apply<GDPRApi>(new GDPRApi(configuration))
    this.publicObjectApi = ApiDecoratorService.getInstance().apply<PublicObjectApi>(new PublicObjectApi(configuration))
    this.searchApi = ApiDecoratorService.getInstance().apply<SearchApi>(new SearchApi(configuration))
  }

  /**
   * Getter
   * @returns CommunicationsDiscovery
   */
  get communications() {
    if (!this._communications) {
      const requiredClass = require('./communications/CommunicationsDiscovery')
      this._communications = new requiredClass.default(this.config) as CommunicationsDiscovery
    }

    return this._communications
  }

  /**
   * Getter
   * @returns CallsDiscovery
   */
  get calls() {
    if (!this._calls) {
      const requiredClass = require('./calls/CallsDiscovery')
      this._calls = new requiredClass.default(this.config) as CallsDiscovery
    }

    return this._calls
  }

  /**
   * Getter
   * @returns EmailsDiscovery
   */
  get emails() {
    if (!this._emails) {
      const requiredClass = require('./emails/EmailsDiscovery')
      this._emails = new requiredClass.default(this.config) as EmailsDiscovery
    }

    return this._emails
  }

  /**
   * Getter
   * @returns FeedbackSubmissionsDiscovery
   */
  get feedbackSubmissions() {
    if (!this._feedbackSubmissions) {
      const requiredClass = require('./feedback_submissions/FeedbackSubmissionsDiscovery')
      this._feedbackSubmissions = new requiredClass.default(this.config) as FeedbackSubmissionsDiscovery
    }

    return this._feedbackSubmissions
  }

  /**
   * Getter
   * @returns GoalsDiscovery
   */
  get goals() {
    if (!this._goals) {
      const requiredClass = require('./goals/GoalsDiscovery')
      this._goals = new requiredClass.default(this.config) as GoalsDiscovery
    }

    return this._goals
  }

  /**
   * Getter
   * @returns MeetingsDiscovery
   */
  get meetings() {
    if (!this._meetings) {
      const requiredClass = require('./meetings/MeetingsDiscovery')
      this._meetings = new requiredClass.default(this.config) as MeetingsDiscovery
    }

    return this._meetings
  }

  /**
   * Getter
   * @returns NotesDiscovery
   */
  get notes() {
    if (!this._notes) {
      const requiredClass = require('./notes/NotesDiscovery')
      this._notes = new requiredClass.default(this.config) as NotesDiscovery
    }

    return this._notes
  }

  /**
   * Getter
   * @returns PostalMailDiscovery
   */
  get postalMail() {
    if (!this._postalMail) {
      const requiredClass = require('./postal_mail/PostalMailDiscovery')
      this._postalMail = new requiredClass.default(this.config) as PostalMailDiscovery
    }

    return this._postalMail
  }

  /**
   * Getter
   * @returns TasksDiscovery
   */
  get tasks() {
    if (!this._tasks) {
      const requiredClass = require('./tasks/TasksDiscovery')
      this._tasks = new requiredClass.default(this.config) as TasksDiscovery
    }

    return this._tasks
  }

  /**
   * Getter
   * @returns TasksDiscovery
   */
  get taxes() {
    if (!this._taxes) {
      const requiredClass = require('./taxes/TaxesDiscovery')
      this._taxes = new requiredClass.default(this.config) as TaxesDiscovery
    }

    return this._taxes
  }
}
