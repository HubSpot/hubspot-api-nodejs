export * from './definitionApi';
import { DefinitionApi } from './definitionApi';
export * from './statusApi';
import { StatusApi } from './statusApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [DefinitionApi, StatusApi];
