export * from './cardsApi';
import { CardsApi } from './cardsApi';
export * from './sampleResponseApi';
import { SampleResponseApi } from './sampleResponseApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [CardsApi, SampleResponseApi];
