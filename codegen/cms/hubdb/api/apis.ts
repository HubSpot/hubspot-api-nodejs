export * from './rowsApi';
import { RowsApi } from './rowsApi';
export * from './rowsBatchApi';
import { RowsBatchApi } from './rowsBatchApi';
export * from './tablesApi';
import { TablesApi } from './tablesApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [RowsApi, RowsBatchApi, TablesApi];
