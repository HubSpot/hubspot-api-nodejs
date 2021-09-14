export * from './callbacksApi';
import { CallbacksApi } from './callbacksApi';
export * from './invoiceApi';
import { InvoiceApi } from './invoiceApi';
export * from './settingsApi';
import { SettingsApi } from './settingsApi';
export * from './syncApi';
import { SyncApi } from './syncApi';
export * from './userAccountsApi';
import { UserAccountsApi } from './userAccountsApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [CallbacksApi, InvoiceApi, SettingsApi, SyncApi, UserAccountsApi];
