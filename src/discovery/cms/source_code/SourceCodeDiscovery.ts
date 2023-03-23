import {
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

    this.contentApi = ApiDecoratorService.getInstance().apply<ContentApi>(new ContentApi(configuration))
    this.extractApi = ApiDecoratorService.getInstance().apply<ExtractApi>(new ExtractApi(configuration))
    this.metadataApi = ApiDecoratorService.getInstance().apply<MetadataApi>(new MetadataApi(configuration))
    this.sourceCodeExtractApi = ApiDecoratorService.getInstance().apply<SourceCodeExtractApi>(
      new SourceCodeExtractApi(configuration),
    )
    this.validationApi = ApiDecoratorService.getInstance().apply<ValidationApi>(new ValidationApi(configuration))
  }
}
