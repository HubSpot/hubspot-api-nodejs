import { createConfiguration } from '../../../../codegen/settings/users/configuration'
import {
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

    this.rolesApi = new RolesApi(configuration)
    this.teamsApi = new TeamsApi(configuration)
    this.usersApi = new UsersApi(configuration)
  }
}
