import { createConfiguration } from '../../../../codegen/cms/source_code/configuration'
import {
  ContentApi,
  ExtractApi,
  MetadataApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  SourceCodeExtractApi,
  ValidationApi,
} from '../../../../codegen/cms/source_code/index'
import { Observable } from '../../../../codegen/cms/source_code/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export default class SourceCodeDiscovery {
  public contentApi: ContentApi
  public extractApi: ExtractApi
  public metadataApi: MetadataApi
  public sourceCodeExtractApi: SourceCodeExtractApi
  public validationApi: ValidationApi

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

    this.contentApi = new ContentApi(configuration)
    this.extractApi = new ExtractApi(configuration)
    this.metadataApi = new MetadataApi(configuration)
    this.sourceCodeExtractApi = new SourceCodeExtractApi(configuration)
    this.validationApi = new ValidationApi(configuration)
  }
}
