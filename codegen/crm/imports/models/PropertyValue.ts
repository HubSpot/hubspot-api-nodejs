/**
 * Imports
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class PropertyValue {
    'sourceId': string;
    'selectedByUser': boolean;
    'sourceLabel': string;
    'source': PropertyValueSourceEnum;
    'updatedByUserId': number;
    'persistenceTimestamp': number;
    'sourceMetadata': string;
    'dataSensitivity': PropertyValueDataSensitivityEnum;
    'sourceVid': Array<number>;
    'unit': string;
    'requestId': string;
    'isEncrypted': boolean;
    'name': string;
    'useTimestampAsPersistenceTimestamp': boolean;
    'value': string;
    'selectedByUserTimestamp': number;
    'timestamp': number;
    'isLargeValue': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "sourceId",
            "baseName": "sourceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "selectedByUser",
            "baseName": "selectedByUser",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sourceLabel",
            "baseName": "sourceLabel",
            "type": "string",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "PropertyValueSourceEnum",
            "format": ""
        },
        {
            "name": "updatedByUserId",
            "baseName": "updatedByUserId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "persistenceTimestamp",
            "baseName": "persistenceTimestamp",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "sourceMetadata",
            "baseName": "sourceMetadata",
            "type": "string",
            "format": ""
        },
        {
            "name": "dataSensitivity",
            "baseName": "dataSensitivity",
            "type": "PropertyValueDataSensitivityEnum",
            "format": ""
        },
        {
            "name": "sourceVid",
            "baseName": "sourceVid",
            "type": "Array<number>",
            "format": "int64"
        },
        {
            "name": "unit",
            "baseName": "unit",
            "type": "string",
            "format": ""
        },
        {
            "name": "requestId",
            "baseName": "requestId",
            "type": "string",
            "format": ""
        },
        {
            "name": "isEncrypted",
            "baseName": "isEncrypted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "useTimestampAsPersistenceTimestamp",
            "baseName": "useTimestampAsPersistenceTimestamp",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "selectedByUserTimestamp",
            "baseName": "selectedByUserTimestamp",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "isLargeValue",
            "baseName": "isLargeValue",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PropertyValue.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum PropertyValueSourceEnum {
    Unknown = 'UNKNOWN',
    Import = 'IMPORT',
    Api = 'API',
    Form = 'FORM',
    Analytics = 'ANALYTICS',
    Migration = 'MIGRATION',
    Salesforce = 'SALESFORCE',
    Integration = 'INTEGRATION',
    ContactsWeb = 'CONTACTS_WEB',
    WalIncremental = 'WAL_INCREMENTAL',
    Task = 'TASK',
    Email = 'EMAIL',
    Workflows = 'WORKFLOWS',
    Calculated = 'CALCULATED',
    Social = 'SOCIAL',
    BatchUpdate = 'BATCH_UPDATE',
    Signals = 'SIGNALS',
    Biden = 'BIDEN',
    Default = 'DEFAULT',
    Companies = 'COMPANIES',
    Deals = 'DEALS',
    Assists = 'ASSISTS',
    Presentations = 'PRESENTATIONS',
    Tally = 'TALLY',
    Sidekick = 'SIDEKICK',
    CrmUi = 'CRM_UI',
    MergeContacts = 'MERGE_CONTACTS',
    PortalUserAssociator = 'PORTAL_USER_ASSOCIATOR',
    IntegrationsPlatform = 'INTEGRATIONS_PLATFORM',
    BccToCrm = 'BCC_TO_CRM',
    ForwardToCrm = 'FORWARD_TO_CRM',
    Engagements = 'ENGAGEMENTS',
    Sales = 'SALES',
    Heisenberg = 'HEISENBERG',
    Leadin = 'LEADIN',
    GmailIntegration = 'GMAIL_INTEGRATION',
    Academy = 'ACADEMY',
    SalesMessages = 'SALES_MESSAGES',
    AvatarsService = 'AVATARS_SERVICE',
    MergeCompanies = 'MERGE_COMPANIES',
    Sequences = 'SEQUENCES',
    CompanyFamilies = 'COMPANY_FAMILIES',
    MobileIos = 'MOBILE_IOS',
    MobileAndroid = 'MOBILE_ANDROID',
    Contacts = 'CONTACTS',
    Associations = 'ASSOCIATIONS',
    Extension = 'EXTENSION',
    Success = 'SUCCESS',
    Bot = 'BOT',
    IntegrationsSync = 'INTEGRATIONS_SYNC',
    AutomationPlatform = 'AUTOMATION_PLATFORM',
    Conversations = 'CONVERSATIONS',
    EmailIntegration = 'EMAIL_INTEGRATION',
    ContentMembership = 'CONTENT_MEMBERSHIP',
    Quotes = 'QUOTES',
    BetAssignment = 'BET_ASSIGNMENT',
    Quotas = 'QUOTAS',
    BetCrmConnector = 'BET_CRM_CONNECTOR',
    Meetings = 'MEETINGS',
    MergeObjects = 'MERGE_OBJECTS',
    RecyclingBin = 'RECYCLING_BIN',
    Ads = 'ADS',
    AiGroup = 'AI_GROUP',
    Communicator = 'COMMUNICATOR',
    Settings = 'SETTINGS',
    PropertySettings = 'PROPERTY_SETTINGS',
    PipelineSettings = 'PIPELINE_SETTINGS',
    CompanyInsights = 'COMPANY_INSIGHTS',
    BehavioralEvents = 'BEHAVIORAL_EVENTS',
    Payments = 'PAYMENTS',
    Goals = 'GOALS',
    PortalObjectSync = 'PORTAL_OBJECT_SYNC',
    Approvals = 'APPROVALS',
    FileManager = 'FILE_MANAGER',
    Marketplace = 'MARKETPLACE',
    InternalProcessing = 'INTERNAL_PROCESSING',
    Forecasting = 'FORECASTING',
    SlackIntegration = 'SLACK_INTEGRATION',
    CrmUiBulkAction = 'CRM_UI_BULK_ACTION',
    WorkflowContactDeleteAction = 'WORKFLOW_CONTACT_DELETE_ACTION',
    AcceptanceTest = 'ACCEPTANCE_TEST',
    Playbooks = 'PLAYBOOKS',
    Chatspot = 'CHATSPOT',
    FlywheelProductDataSync = 'FLYWHEEL_PRODUCT_DATA_SYNC',
    HelpDesk = 'HELP_DESK',
    Billing = 'BILLING',
    DataEnrichment = 'DATA_ENRICHMENT',
    AutomationJourney = 'AUTOMATION_JOURNEY',
    Microapps = 'MICROAPPS',
    Intent = 'INTENT',
    ProspectingAgent = 'PROSPECTING_AGENT'
}
export enum PropertyValueDataSensitivityEnum {
    None = 'none',
    Standard = 'standard',
    High = 'high'
}

