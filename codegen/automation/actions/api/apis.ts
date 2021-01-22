export * from './callbacksApi';
import { CallbacksApi } from './callbacksApi';
export * from './definitionsApi';
import { DefinitionsApi } from './definitionsApi';
export * from './functionsApi';
import { FunctionsApi } from './functionsApi';
export * from './revisionsApi';
import { RevisionsApi } from './revisionsApi';
import * as fs from 'fs';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

export const APIS = [CallbacksApi, DefinitionsApi, FunctionsApi, RevisionsApi];
