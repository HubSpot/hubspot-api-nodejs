export * from './batchApi';
import { BatchApi } from './batchApi';
export * from './typesApi';
import { TypesApi } from './typesApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [BatchApi, TypesApi];
