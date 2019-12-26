import localVarRequest = require('request');
import { ApiKeyAuth } from '../../codegen/crm/objects/model/models'

export class ApiKeyAuthCustom extends ApiKeyAuth {
    constructor(location: string, paramName: string) {
        super(location, paramName)
    }

    public applyToRequest(requestOptions: localVarRequest.Options): void {
        if (!this.apiKey) {
            return;
        }
        super.applyToRequest(requestOptions)
    }
}
