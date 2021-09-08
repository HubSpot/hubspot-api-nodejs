export * from './coreApi';
import { CoreApi } from './coreApi';
export * from './publicImportsApi';
import { PublicImportsApi } from './publicImportsApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [CoreApi, PublicImportsApi];
