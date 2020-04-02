export * from './eventsApi';
import { EventsApi } from './eventsApi';
export * from './templatesApi';
import { TemplatesApi } from './templatesApi';
export * from './tokensApi';
import { TokensApi } from './tokensApi';
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

export const APIS = [EventsApi, TemplatesApi, TokensApi];
