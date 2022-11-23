import { createConfiguration } from '../../../codegen/files/configuration'
import {
  FilesApi,
  FoldersApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
} from '../../../codegen/files/index'
import { Observable } from '../../../codegen/files/rxjsStub'
import { ApiClientConfigurator } from '../../configuration/ApiClientConfigurator'
import IConfiguration from '../../configuration/IConfiguration'

export default class FilesDiscovery {
  public filesApi: FilesApi
  public foldersApi: FoldersApi

  constructor(config: IConfiguration = {}) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<{}>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.filesApi = new FilesApi(configuration)
    this.foldersApi = new FoldersApi(configuration)
  }
}
