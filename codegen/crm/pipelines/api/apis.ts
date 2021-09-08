export * from './pipelineStagesApi';
import { PipelineStagesApi } from './pipelineStagesApi';
export * from './pipelinesApi';
import { PipelinesApi } from './pipelinesApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [PipelineStagesApi, PipelinesApi];
