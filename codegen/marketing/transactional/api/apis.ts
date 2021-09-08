export * from './publicSmtpTokensApi';
import { PublicSmtpTokensApi } from './publicSmtpTokensApi';
export * from './singleSendApi';
import { SingleSendApi } from './singleSendApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [PublicSmtpTokensApi, SingleSendApi];
