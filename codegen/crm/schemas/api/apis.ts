export * from './coreApi';
import { CoreApi } from './coreApi';
export * from './publicObjectSchemasApi';
import { PublicObjectSchemasApi } from './publicObjectSchemasApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [CoreApi, PublicObjectSchemasApi];
