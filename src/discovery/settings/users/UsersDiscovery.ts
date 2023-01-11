import {
  Configuration,
  createConfiguration,
  RequestContext,
  ResponseContext,
  RolesApi,
  ServerConfiguration,
  TeamsApi,
  UsersApi,
} from '../../../../codegen/settings/users/index'
import { Observable } from '../../../../codegen/settings/users/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'

export default class UsersDiscovery {
  public rolesApi: RolesApi
  public teamsApi: TeamsApi
  public usersApi: UsersApi

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

    this.rolesApi = ApiDecoratorService.getInstance().apply<RolesApi, Configuration>(
      new RolesApi(configuration),
      configuration,
    )
    this.teamsApi = ApiDecoratorService.getInstance().apply<TeamsApi, Configuration>(
      new TeamsApi(configuration),
      configuration,
    )
    this.usersApi = ApiDecoratorService.getInstance().apply<UsersApi, Configuration>(
      new UsersApi(configuration),
      configuration,
    )
  }
}
