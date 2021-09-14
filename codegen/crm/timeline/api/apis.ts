export * from './eventsApi';
import { EventsApi } from './eventsApi';
export * from './templatesApi';
import { TemplatesApi } from './templatesApi';
export * from './tokensApi';
import { TokensApi } from './tokensApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [EventsApi, TemplatesApi, TokensApi];
