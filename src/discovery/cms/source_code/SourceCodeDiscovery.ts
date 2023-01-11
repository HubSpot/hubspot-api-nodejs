import {
  Configuration,
  ContentApi,
  createConfiguration,
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
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'

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

    this.contentApi = ApiDecoratorService.getInstance().apply<ContentApi, Configuration>(
      new ContentApi(configuration),
      configuration,
    )
    this.extractApi = ApiDecoratorService.getInstance().apply<ExtractApi, Configuration>(
      new ExtractApi(configuration),
      configuration,
    )
    this.metadataApi = ApiDecoratorService.getInstance().apply<MetadataApi, Configuration>(
      new MetadataApi(configuration),
      configuration,
    )
    this.sourceCodeExtractApi = ApiDecoratorService.getInstance().apply<SourceCodeExtractApi, Configuration>(
      new SourceCodeExtractApi(configuration),
      configuration,
    )
    this.validationApi = ApiDecoratorService.getInstance().apply<ValidationApi, Configuration>(
      new ValidationApi(configuration),
      configuration,
    )
  }
}
