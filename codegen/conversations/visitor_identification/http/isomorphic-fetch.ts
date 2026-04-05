import {HttpLibrary, RequestContext, ResponseContext} from './http';
import { from, Observable } from '../rxjsStub';
import { sendBufferedRequest } from '../../../../src/services/http/Transport';

export class IsomorphicFetchHttpLibrary implements HttpLibrary {

    public send(request: RequestContext): Observable<ResponseContext> {
        const resultPromise = sendBufferedRequest(request.getUrl(), {
            method: request.getHttpMethod().toString(),
            body: request.getBody(),
            headers: request.getHeaders(),
            agent: request.getAgent(),
        }).then((response) => {
            const body = {
              text: () => response.text(),
              binary: () => response.binary()
            };
            return new ResponseContext(response.status, response.headers, body);
        });

        return from<Promise<ResponseContext>>(resultPromise);

    }
}
