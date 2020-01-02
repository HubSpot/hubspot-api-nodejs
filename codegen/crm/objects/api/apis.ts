export * from './associationsApi';
import { AssociationsApi } from './associationsApi';
export * from './basicApi';
import { BasicApi } from './basicApi';
export * from './batchApi';
import { BatchApi } from './batchApi';
export * from './createNativeObjectsApi';
import { CreateNativeObjectsApi } from './createNativeObjectsApi';
export * from './searchApi';
import { SearchApi } from './searchApi';
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

export const APIS = [AssociationsApi, BasicApi, BatchApi, CreateNativeObjectsApi, SearchApi];
