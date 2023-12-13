import {
  BusinessUnitApi,
  createConfiguration,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
} from '../../../../codegen/settings/business_units/index'
import { Observable } from '../../../../codegen/settings/business_units/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'

export default class BusinessUnitsDiscovery {
  public businessUnitApi: BusinessUnitApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<{}>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.businessUnitApi = ApiDecoratorService.getInstance().apply<BusinessUnitApi>(new BusinessUnitApi(configuration))
  }
}
