import localVarRequest = require('request');
import { OAuth } from '../../codegen/crm/objects/model/models'

export class OAuthCustom extends OAuth {
    public applyToRequest(requestOptions: localVarRequest.Options): void {
        if (!this.accessToken) {
            return;
        }
        super.applyToRequest(requestOptions)
    }
}
