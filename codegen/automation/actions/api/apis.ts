export * from './callbacksApi';
import { CallbacksApi } from './callbacksApi';
export * from './definitionsApi';
import { DefinitionsApi } from './definitionsApi';
export * from './functionsApi';
import { FunctionsApi } from './functionsApi';
export * from './revisionsApi';
import { RevisionsApi } from './revisionsApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [CallbacksApi, DefinitionsApi, FunctionsApi, RevisionsApi];
