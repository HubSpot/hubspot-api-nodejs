export * from './filesApi';
import { FilesApi } from './filesApi';
export * from './foldersApi';
import { FoldersApi } from './foldersApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [FilesApi, FoldersApi];
