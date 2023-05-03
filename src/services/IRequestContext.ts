import * as http from 'http';
import * as https from 'https';

export interface IRequestContext {
  setHeaderParam(key: string, value: string): void
  setAgent(agent: http.Agent | https.Agent): void
}
