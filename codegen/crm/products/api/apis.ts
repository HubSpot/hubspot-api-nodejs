export * from './associationsApi';
import { AssociationsApi } from './associationsApi';
export * from './basicApi';
import { BasicApi } from './basicApi';
export * from './batchApi';
import { BatchApi } from './batchApi';
export * from './searchApi';
import { SearchApi } from './searchApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AssociationsApi, BasicApi, BatchApi, SearchApi];
