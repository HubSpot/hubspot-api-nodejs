export * from './accessTokensApi';
import { AccessTokensApi } from './accessTokensApi';
export * from './refreshTokensApi';
import { RefreshTokensApi } from './refreshTokensApi';
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

export const APIS = [AccessTokensApi, RefreshTokensApi, TokensApi];
