import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { IndexedData } from '../models/IndexedData';
import { PublicSearchResults } from '../models/PublicSearchResults';

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiGetByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetById
     */
    contentId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetById
     */
    type?: string
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Return all indexed data for an asset (e.g., page, blog post, HubDB table), specified by ID. This is useful when debugging why a particular asset is not returned from a custom search.
     * Get indexed properties
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<IndexedData>> {
        return this.api.getByIdWithHttpInfo(param.contentId, param.type,  options).toPromise();
    }

    /**
     * Return all indexed data for an asset (e.g., page, blog post, HubDB table), specified by ID. This is useful when debugging why a particular asset is not returned from a custom search.
     * Get indexed properties
     * @param param the request object
     */
    public getById(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<IndexedData> {
        return this.api.getById(param.contentId, param.type,  options).toPromise();
    }

}

import { ObservableSearchApi } from "./ObservableAPI";
import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";

export interface SearchApiCmsSiteSearchV3SearchRequest {
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof SearchApicmsSiteSearchV3Search
     */
    analytics?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof SearchApicmsSiteSearchV3Search
     */
    autocomplete?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof SearchApicmsSiteSearchV3Search
     */
    boostLimit?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SearchApicmsSiteSearchV3Search
     */
    boostRecent?: string
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof SearchApicmsSiteSearchV3Search
     */
    domain?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof SearchApicmsSiteSearchV3Search
     */
    groupId?: Array<number>
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SearchApicmsSiteSearchV3Search
     */
    hubdbQuery?: string
    /**
     * 
     * Defaults to: undefined
     * @type &#39;aa&#39; | &#39;ab&#39; | &#39;ae&#39; | &#39;af&#39; | &#39;af-na&#39; | &#39;af-za&#39; | &#39;agq&#39; | &#39;agq-cm&#39; | &#39;ak&#39; | &#39;ak-gh&#39; | &#39;am&#39; | &#39;am-et&#39; | &#39;an&#39; | &#39;ann&#39; | &#39;ann-ng&#39; | &#39;ar&#39; | &#39;ar-001&#39; | &#39;ar-ae&#39; | &#39;ar-bh&#39; | &#39;ar-dj&#39; | &#39;ar-dz&#39; | &#39;ar-eg&#39; | &#39;ar-eh&#39; | &#39;ar-er&#39; | &#39;ar-il&#39; | &#39;ar-iq&#39; | &#39;ar-jo&#39; | &#39;ar-km&#39; | &#39;ar-kw&#39; | &#39;ar-lb&#39; | &#39;ar-ly&#39; | &#39;ar-ma&#39; | &#39;ar-mr&#39; | &#39;ar-om&#39; | &#39;ar-ps&#39; | &#39;ar-qa&#39; | &#39;ar-sa&#39; | &#39;ar-sd&#39; | &#39;ar-so&#39; | &#39;ar-ss&#39; | &#39;ar-sy&#39; | &#39;ar-td&#39; | &#39;ar-tn&#39; | &#39;ar-ye&#39; | &#39;as&#39; | &#39;as-in&#39; | &#39;asa&#39; | &#39;asa-tz&#39; | &#39;ast&#39; | &#39;ast-es&#39; | &#39;av&#39; | &#39;ay&#39; | &#39;az&#39; | &#39;az-az&#39; | &#39;ba&#39; | &#39;bal&#39; | &#39;bal-pk&#39; | &#39;bas&#39; | &#39;bas-cm&#39; | &#39;be&#39; | &#39;be-by&#39; | &#39;bem&#39; | &#39;bem-zm&#39; | &#39;bez&#39; | &#39;bez-tz&#39; | &#39;bg&#39; | &#39;bg-bg&#39; | &#39;bgc&#39; | &#39;bgc-in&#39; | &#39;bho&#39; | &#39;bho-in&#39; | &#39;bi&#39; | &#39;blo&#39; | &#39;blo-bj&#39; | &#39;bm&#39; | &#39;bm-ml&#39; | &#39;bn&#39; | &#39;bn-bd&#39; | &#39;bn-in&#39; | &#39;bo&#39; | &#39;bo-cn&#39; | &#39;bo-in&#39; | &#39;br&#39; | &#39;br-fr&#39; | &#39;brx&#39; | &#39;brx-in&#39; | &#39;bs&#39; | &#39;bs-ba&#39; | &#39;ca&#39; | &#39;ca-ad&#39; | &#39;ca-es&#39; | &#39;ca-fr&#39; | &#39;ca-it&#39; | &#39;ccp&#39; | &#39;ccp-bd&#39; | &#39;ccp-in&#39; | &#39;ce&#39; | &#39;ce-ru&#39; | &#39;ceb&#39; | &#39;ceb-ph&#39; | &#39;cgg&#39; | &#39;cgg-ug&#39; | &#39;ch&#39; | &#39;chr&#39; | &#39;chr-us&#39; | &#39;ckb&#39; | &#39;ckb-iq&#39; | &#39;ckb-ir&#39; | &#39;co&#39; | &#39;cr&#39; | &#39;cs&#39; | &#39;cs-cz&#39; | &#39;csw&#39; | &#39;csw-ca&#39; | &#39;cu&#39; | &#39;cu-ru&#39; | &#39;cv&#39; | &#39;cv-ru&#39; | &#39;cy&#39; | &#39;cy-gb&#39; | &#39;da&#39; | &#39;da-dk&#39; | &#39;da-gl&#39; | &#39;dav&#39; | &#39;dav-ke&#39; | &#39;de&#39; | &#39;de-at&#39; | &#39;de-be&#39; | &#39;de-ch&#39; | &#39;de-de&#39; | &#39;de-gr&#39; | &#39;de-it&#39; | &#39;de-li&#39; | &#39;de-lu&#39; | &#39;dje&#39; | &#39;dje-ne&#39; | &#39;doi&#39; | &#39;doi-in&#39; | &#39;dsb&#39; | &#39;dsb-de&#39; | &#39;dua&#39; | &#39;dua-cm&#39; | &#39;dv&#39; | &#39;dyo&#39; | &#39;dyo-sn&#39; | &#39;dz&#39; | &#39;dz-bt&#39; | &#39;ebu&#39; | &#39;ebu-ke&#39; | &#39;ee&#39; | &#39;ee-gh&#39; | &#39;ee-tg&#39; | &#39;el&#39; | &#39;el-cy&#39; | &#39;el-gr&#39; | &#39;en&#39; | &#39;en-001&#39; | &#39;en-150&#39; | &#39;en-ae&#39; | &#39;en-ag&#39; | &#39;en-ai&#39; | &#39;en-as&#39; | &#39;en-at&#39; | &#39;en-au&#39; | &#39;en-bb&#39; | &#39;en-be&#39; | &#39;en-bi&#39; | &#39;en-bm&#39; | &#39;en-bs&#39; | &#39;en-bw&#39; | &#39;en-bz&#39; | &#39;en-ca&#39; | &#39;en-cc&#39; | &#39;en-ch&#39; | &#39;en-ck&#39; | &#39;en-cm&#39; | &#39;en-cn&#39; | &#39;en-cx&#39; | &#39;en-cy&#39; | &#39;en-cz&#39; | &#39;en-de&#39; | &#39;en-dg&#39; | &#39;en-dk&#39; | &#39;en-dm&#39; | &#39;en-ee&#39; | &#39;en-eg&#39; | &#39;en-er&#39; | &#39;en-es&#39; | &#39;en-fi&#39; | &#39;en-fj&#39; | &#39;en-fk&#39; | &#39;en-fm&#39; | &#39;en-fr&#39; | &#39;en-gb&#39; | &#39;en-gd&#39; | &#39;en-gg&#39; | &#39;en-gh&#39; | &#39;en-gi&#39; | &#39;en-gm&#39; | &#39;en-gs&#39; | &#39;en-gu&#39; | &#39;en-gy&#39; | &#39;en-hk&#39; | &#39;en-hu&#39; | &#39;en-id&#39; | &#39;en-ie&#39; | &#39;en-il&#39; | &#39;en-im&#39; | &#39;en-in&#39; | &#39;en-io&#39; | &#39;en-it&#39; | &#39;en-je&#39; | &#39;en-jm&#39; | &#39;en-ke&#39; | &#39;en-ki&#39; | &#39;en-kn&#39; | &#39;en-ky&#39; | &#39;en-lc&#39; | &#39;en-lr&#39; | &#39;en-ls&#39; | &#39;en-lu&#39; | &#39;en-mg&#39; | &#39;en-mh&#39; | &#39;en-mo&#39; | &#39;en-mp&#39; | &#39;en-ms&#39; | &#39;en-mt&#39; | &#39;en-mu&#39; | &#39;en-mv&#39; | &#39;en-mw&#39; | &#39;en-mx&#39; | &#39;en-my&#39; | &#39;en-na&#39; | &#39;en-nf&#39; | &#39;en-ng&#39; | &#39;en-nl&#39; | &#39;en-no&#39; | &#39;en-nr&#39; | &#39;en-nu&#39; | &#39;en-nz&#39; | &#39;en-pg&#39; | &#39;en-ph&#39; | &#39;en-pk&#39; | &#39;en-pl&#39; | &#39;en-pn&#39; | &#39;en-pr&#39; | &#39;en-pt&#39; | &#39;en-pw&#39; | &#39;en-ro&#39; | &#39;en-rw&#39; | &#39;en-sb&#39; | &#39;en-sc&#39; | &#39;en-sd&#39; | &#39;en-se&#39; | &#39;en-sg&#39; | &#39;en-sh&#39; | &#39;en-si&#39; | &#39;en-sk&#39; | &#39;en-sl&#39; | &#39;en-ss&#39; | &#39;en-sx&#39; | &#39;en-sz&#39; | &#39;en-tc&#39; | &#39;en-th&#39; | &#39;en-tk&#39; | &#39;en-tn&#39; | &#39;en-to&#39; | &#39;en-tt&#39; | &#39;en-tv&#39; | &#39;en-tz&#39; | &#39;en-ug&#39; | &#39;en-um&#39; | &#39;en-us&#39; | &#39;en-vc&#39; | &#39;en-vg&#39; | &#39;en-vi&#39; | &#39;en-vn&#39; | &#39;en-vu&#39; | &#39;en-ws&#39; | &#39;en-za&#39; | &#39;en-zm&#39; | &#39;en-zw&#39; | &#39;eo&#39; | &#39;eo-001&#39; | &#39;es&#39; | &#39;es-419&#39; | &#39;es-ar&#39; | &#39;es-bo&#39; | &#39;es-br&#39; | &#39;es-bz&#39; | &#39;es-cl&#39; | &#39;es-co&#39; | &#39;es-cr&#39; | &#39;es-cu&#39; | &#39;es-do&#39; | &#39;es-ea&#39; | &#39;es-ec&#39; | &#39;es-es&#39; | &#39;es-gq&#39; | &#39;es-gt&#39; | &#39;es-hn&#39; | &#39;es-ic&#39; | &#39;es-mx&#39; | &#39;es-ni&#39; | &#39;es-pa&#39; | &#39;es-pe&#39; | &#39;es-ph&#39; | &#39;es-pr&#39; | &#39;es-py&#39; | &#39;es-sv&#39; | &#39;es-us&#39; | &#39;es-uy&#39; | &#39;es-ve&#39; | &#39;et&#39; | &#39;et-ee&#39; | &#39;eu&#39; | &#39;eu-es&#39; | &#39;ewo&#39; | &#39;ewo-cm&#39; | &#39;fa&#39; | &#39;fa-af&#39; | &#39;fa-ir&#39; | &#39;ff&#39; | &#39;ff-bf&#39; | &#39;ff-cm&#39; | &#39;ff-gh&#39; | &#39;ff-gm&#39; | &#39;ff-gn&#39; | &#39;ff-gw&#39; | &#39;ff-lr&#39; | &#39;ff-mr&#39; | &#39;ff-ne&#39; | &#39;ff-ng&#39; | &#39;ff-sl&#39; | &#39;ff-sn&#39; | &#39;fi&#39; | &#39;fi-fi&#39; | &#39;fil&#39; | &#39;fil-ph&#39; | &#39;fj&#39; | &#39;fo&#39; | &#39;fo-dk&#39; | &#39;fo-fo&#39; | &#39;fr&#39; | &#39;fr-be&#39; | &#39;fr-bf&#39; | &#39;fr-bi&#39; | &#39;fr-bj&#39; | &#39;fr-bl&#39; | &#39;fr-ca&#39; | &#39;fr-cd&#39; | &#39;fr-cf&#39; | &#39;fr-cg&#39; | &#39;fr-ch&#39; | &#39;fr-ci&#39; | &#39;fr-cm&#39; | &#39;fr-dj&#39; | &#39;fr-dz&#39; | &#39;fr-fr&#39; | &#39;fr-ga&#39; | &#39;fr-gf&#39; | &#39;fr-gn&#39; | &#39;fr-gp&#39; | &#39;fr-gq&#39; | &#39;fr-ht&#39; | &#39;fr-km&#39; | &#39;fr-lu&#39; | &#39;fr-ma&#39; | &#39;fr-mc&#39; | &#39;fr-mf&#39; | &#39;fr-mg&#39; | &#39;fr-ml&#39; | &#39;fr-mq&#39; | &#39;fr-mr&#39; | &#39;fr-mu&#39; | &#39;fr-nc&#39; | &#39;fr-ne&#39; | &#39;fr-pf&#39; | &#39;fr-pm&#39; | &#39;fr-re&#39; | &#39;fr-rw&#39; | &#39;fr-sc&#39; | &#39;fr-sn&#39; | &#39;fr-sy&#39; | &#39;fr-td&#39; | &#39;fr-tg&#39; | &#39;fr-tn&#39; | &#39;fr-vu&#39; | &#39;fr-wf&#39; | &#39;fr-yt&#39; | &#39;frr&#39; | &#39;frr-de&#39; | &#39;fur&#39; | &#39;fur-it&#39; | &#39;fy&#39; | &#39;fy-nl&#39; | &#39;ga&#39; | &#39;ga-gb&#39; | &#39;ga-ie&#39; | &#39;gaa&#39; | &#39;gaa-gh&#39; | &#39;gd&#39; | &#39;gd-gb&#39; | &#39;gl&#39; | &#39;gl-es&#39; | &#39;gn&#39; | &#39;gsw&#39; | &#39;gsw-ch&#39; | &#39;gsw-fr&#39; | &#39;gsw-li&#39; | &#39;gu&#39; | &#39;gu-in&#39; | &#39;guz&#39; | &#39;guz-ke&#39; | &#39;gv&#39; | &#39;gv-im&#39; | &#39;ha&#39; | &#39;ha-gh&#39; | &#39;ha-ne&#39; | &#39;ha-ng&#39; | &#39;haw&#39; | &#39;haw-us&#39; | &#39;he&#39; | &#39;he-il&#39; | &#39;hi&#39; | &#39;hi-in&#39; | &#39;hmn&#39; | &#39;ho&#39; | &#39;hr&#39; | &#39;hr-ba&#39; | &#39;hr-hr&#39; | &#39;hsb&#39; | &#39;hsb-de&#39; | &#39;ht&#39; | &#39;ht-ht&#39; | &#39;hu&#39; | &#39;hu-hu&#39; | &#39;hy&#39; | &#39;hy-am&#39; | &#39;hz&#39; | &#39;ia&#39; | &#39;ia-001&#39; | &#39;id&#39; | &#39;id-id&#39; | &#39;ie&#39; | &#39;ie-ee&#39; | &#39;ig&#39; | &#39;ig-ng&#39; | &#39;ii&#39; | &#39;ii-cn&#39; | &#39;ik&#39; | &#39;io&#39; | &#39;is&#39; | &#39;is-is&#39; | &#39;it&#39; | &#39;it-ch&#39; | &#39;it-it&#39; | &#39;it-sm&#39; | &#39;it-va&#39; | &#39;iu&#39; | &#39;ja&#39; | &#39;ja-jp&#39; | &#39;jgo&#39; | &#39;jgo-cm&#39; | &#39;jmc&#39; | &#39;jmc-tz&#39; | &#39;jv&#39; | &#39;jv-id&#39; | &#39;ka&#39; | &#39;ka-ge&#39; | &#39;kab&#39; | &#39;kab-dz&#39; | &#39;kam&#39; | &#39;kam-ke&#39; | &#39;kar&#39; | &#39;kde&#39; | &#39;kde-tz&#39; | &#39;kea&#39; | &#39;kea-cv&#39; | &#39;kg&#39; | &#39;kgp&#39; | &#39;kgp-br&#39; | &#39;kh&#39; | &#39;khq&#39; | &#39;khq-ml&#39; | &#39;ki&#39; | &#39;ki-ke&#39; | &#39;kj&#39; | &#39;kk&#39; | &#39;kk-kz&#39; | &#39;kkj&#39; | &#39;kkj-cm&#39; | &#39;kl&#39; | &#39;kl-gl&#39; | &#39;kln&#39; | &#39;kln-ke&#39; | &#39;km&#39; | &#39;km-kh&#39; | &#39;kn&#39; | &#39;kn-in&#39; | &#39;ko&#39; | &#39;ko-cn&#39; | &#39;ko-kp&#39; | &#39;ko-kr&#39; | &#39;kok&#39; | &#39;kok-in&#39; | &#39;kr&#39; | &#39;ks&#39; | &#39;ks-in&#39; | &#39;ksb&#39; | &#39;ksb-tz&#39; | &#39;ksf&#39; | &#39;ksf-cm&#39; | &#39;ksh&#39; | &#39;ksh-de&#39; | &#39;ku&#39; | &#39;ku-tr&#39; | &#39;kv&#39; | &#39;kw&#39; | &#39;kw-gb&#39; | &#39;kxv&#39; | &#39;kxv-in&#39; | &#39;ky&#39; | &#39;ky-kg&#39; | &#39;la&#39; | &#39;lag&#39; | &#39;lag-tz&#39; | &#39;lb&#39; | &#39;lb-lu&#39; | &#39;lg&#39; | &#39;lg-ug&#39; | &#39;li&#39; | &#39;lij&#39; | &#39;lij-it&#39; | &#39;lkt&#39; | &#39;lkt-us&#39; | &#39;lmo&#39; | &#39;lmo-it&#39; | &#39;ln&#39; | &#39;ln-ao&#39; | &#39;ln-cd&#39; | &#39;ln-cf&#39; | &#39;ln-cg&#39; | &#39;lo&#39; | &#39;lo-la&#39; | &#39;lrc&#39; | &#39;lrc-iq&#39; | &#39;lrc-ir&#39; | &#39;lt&#39; | &#39;lt-lt&#39; | &#39;lu&#39; | &#39;lu-cd&#39; | &#39;luo&#39; | &#39;luo-ke&#39; | &#39;luy&#39; | &#39;luy-ke&#39; | &#39;lv&#39; | &#39;lv-lv&#39; | &#39;mai&#39; | &#39;mai-in&#39; | &#39;mas&#39; | &#39;mas-ke&#39; | &#39;mas-tz&#39; | &#39;mdf&#39; | &#39;mdf-ru&#39; | &#39;mer&#39; | &#39;mer-ke&#39; | &#39;mfe&#39; | &#39;mfe-mu&#39; | &#39;mg&#39; | &#39;mg-mg&#39; | &#39;mgh&#39; | &#39;mgh-mz&#39; | &#39;mgo&#39; | &#39;mgo-cm&#39; | &#39;mh&#39; | &#39;mi&#39; | &#39;mi-nz&#39; | &#39;mk&#39; | &#39;mk-mk&#39; | &#39;ml&#39; | &#39;ml-in&#39; | &#39;mn&#39; | &#39;mn-mn&#39; | &#39;mni&#39; | &#39;mni-in&#39; | &#39;mr&#39; | &#39;mr-in&#39; | &#39;ms&#39; | &#39;ms-bn&#39; | &#39;ms-id&#39; | &#39;ms-my&#39; | &#39;ms-sg&#39; | &#39;mt&#39; | &#39;mt-mt&#39; | &#39;mua&#39; | &#39;mua-cm&#39; | &#39;my&#39; | &#39;my-mm&#39; | &#39;mzn&#39; | &#39;mzn-ir&#39; | &#39;na&#39; | &#39;naq&#39; | &#39;naq-na&#39; | &#39;nb&#39; | &#39;nb-no&#39; | &#39;nb-sj&#39; | &#39;nd&#39; | &#39;nd-zw&#39; | &#39;nds&#39; | &#39;nds-de&#39; | &#39;nds-nl&#39; | &#39;ne&#39; | &#39;ne-in&#39; | &#39;ne-np&#39; | &#39;ng&#39; | &#39;nl&#39; | &#39;nl-aw&#39; | &#39;nl-be&#39; | &#39;nl-bq&#39; | &#39;nl-ch&#39; | &#39;nl-cw&#39; | &#39;nl-lu&#39; | &#39;nl-nl&#39; | &#39;nl-sr&#39; | &#39;nl-sx&#39; | &#39;nmg&#39; | &#39;nmg-cm&#39; | &#39;nn&#39; | &#39;nn-no&#39; | &#39;nnh&#39; | &#39;nnh-cm&#39; | &#39;no&#39; | &#39;no-no&#39; | &#39;nqo&#39; | &#39;nqo-gn&#39; | &#39;nr&#39; | &#39;nso&#39; | &#39;nso-za&#39; | &#39;nus&#39; | &#39;nus-ss&#39; | &#39;nv&#39; | &#39;ny&#39; | &#39;nyn&#39; | &#39;nyn-ug&#39; | &#39;oc&#39; | &#39;oc-es&#39; | &#39;oc-fr&#39; | &#39;oj&#39; | &#39;om&#39; | &#39;om-et&#39; | &#39;om-ke&#39; | &#39;or&#39; | &#39;or-in&#39; | &#39;os&#39; | &#39;os-ge&#39; | &#39;os-ru&#39; | &#39;pa&#39; | &#39;pa-in&#39; | &#39;pa-pk&#39; | &#39;pcm&#39; | &#39;pcm-ng&#39; | &#39;pi&#39; | &#39;pis&#39; | &#39;pis-sb&#39; | &#39;pl&#39; | &#39;pl-pl&#39; | &#39;prg&#39; | &#39;prg-001&#39; | &#39;ps&#39; | &#39;ps-af&#39; | &#39;ps-pk&#39; | &#39;pt&#39; | &#39;pt-ao&#39; | &#39;pt-br&#39; | &#39;pt-ch&#39; | &#39;pt-cv&#39; | &#39;pt-gq&#39; | &#39;pt-gw&#39; | &#39;pt-lu&#39; | &#39;pt-mo&#39; | &#39;pt-mz&#39; | &#39;pt-pt&#39; | &#39;pt-st&#39; | &#39;pt-tl&#39; | &#39;qu&#39; | &#39;qu-bo&#39; | &#39;qu-ec&#39; | &#39;qu-pe&#39; | &#39;raj&#39; | &#39;raj-in&#39; | &#39;rm&#39; | &#39;rm-ch&#39; | &#39;rn&#39; | &#39;rn-bi&#39; | &#39;ro&#39; | &#39;ro-md&#39; | &#39;ro-ro&#39; | &#39;rof&#39; | &#39;rof-tz&#39; | &#39;ru&#39; | &#39;ru-by&#39; | &#39;ru-kg&#39; | &#39;ru-kz&#39; | &#39;ru-md&#39; | &#39;ru-ru&#39; | &#39;ru-ua&#39; | &#39;rw&#39; | &#39;rw-rw&#39; | &#39;rwk&#39; | &#39;rwk-tz&#39; | &#39;sa&#39; | &#39;sa-in&#39; | &#39;sah&#39; | &#39;sah-ru&#39; | &#39;saq&#39; | &#39;saq-ke&#39; | &#39;sat&#39; | &#39;sat-in&#39; | &#39;sbp&#39; | &#39;sbp-tz&#39; | &#39;sc&#39; | &#39;sc-it&#39; | &#39;sd&#39; | &#39;sd-in&#39; | &#39;sd-pk&#39; | &#39;se&#39; | &#39;se-fi&#39; | &#39;se-no&#39; | &#39;se-se&#39; | &#39;seh&#39; | &#39;seh-mz&#39; | &#39;ses&#39; | &#39;ses-ml&#39; | &#39;sg&#39; | &#39;sg-cf&#39; | &#39;shi&#39; | &#39;shi-ma&#39; | &#39;si&#39; | &#39;si-lk&#39; | &#39;sk&#39; | &#39;sk-sk&#39; | &#39;sl&#39; | &#39;sl-si&#39; | &#39;sm&#39; | &#39;smn&#39; | &#39;smn-fi&#39; | &#39;sms&#39; | &#39;sms-fi&#39; | &#39;sn&#39; | &#39;sn-zw&#39; | &#39;so&#39; | &#39;so-dj&#39; | &#39;so-et&#39; | &#39;so-ke&#39; | &#39;so-so&#39; | &#39;sq&#39; | &#39;sq-al&#39; | &#39;sq-mk&#39; | &#39;sq-xk&#39; | &#39;sr&#39; | &#39;sr-ba&#39; | &#39;sr-cs&#39; | &#39;sr-me&#39; | &#39;sr-rs&#39; | &#39;sr-xk&#39; | &#39;ss&#39; | &#39;st&#39; | &#39;st-ls&#39; | &#39;st-za&#39; | &#39;su&#39; | &#39;su-id&#39; | &#39;sv&#39; | &#39;sv-ax&#39; | &#39;sv-fi&#39; | &#39;sv-se&#39; | &#39;sw&#39; | &#39;sw-cd&#39; | &#39;sw-ke&#39; | &#39;sw-tz&#39; | &#39;sw-ug&#39; | &#39;sy&#39; | &#39;syr&#39; | &#39;syr-iq&#39; | &#39;syr-sy&#39; | &#39;szl&#39; | &#39;szl-pl&#39; | &#39;ta&#39; | &#39;ta-in&#39; | &#39;ta-lk&#39; | &#39;ta-my&#39; | &#39;ta-sg&#39; | &#39;te&#39; | &#39;te-in&#39; | &#39;teo&#39; | &#39;teo-ke&#39; | &#39;teo-ug&#39; | &#39;tg&#39; | &#39;tg-tj&#39; | &#39;th&#39; | &#39;th-th&#39; | &#39;ti&#39; | &#39;ti-er&#39; | &#39;ti-et&#39; | &#39;tk&#39; | &#39;tk-tm&#39; | &#39;tl&#39; | &#39;tn&#39; | &#39;tn-bw&#39; | &#39;tn-za&#39; | &#39;to&#39; | &#39;to-to&#39; | &#39;tok&#39; | &#39;tok-001&#39; | &#39;tr&#39; | &#39;tr-cy&#39; | &#39;tr-tr&#39; | &#39;ts&#39; | &#39;tt&#39; | &#39;tt-ru&#39; | &#39;tw&#39; | &#39;twq&#39; | &#39;twq-ne&#39; | &#39;ty&#39; | &#39;tzm&#39; | &#39;tzm-ma&#39; | &#39;ug&#39; | &#39;ug-cn&#39; | &#39;uk&#39; | &#39;uk-ua&#39; | &#39;ur&#39; | &#39;ur-in&#39; | &#39;ur-pk&#39; | &#39;uz&#39; | &#39;uz-af&#39; | &#39;uz-uz&#39; | &#39;vai&#39; | &#39;vai-lr&#39; | &#39;ve&#39; | &#39;vec&#39; | &#39;vec-it&#39; | &#39;vi&#39; | &#39;vi-vn&#39; | &#39;vmw&#39; | &#39;vmw-mz&#39; | &#39;vo&#39; | &#39;vo-001&#39; | &#39;vun&#39; | &#39;vun-tz&#39; | &#39;wa&#39; | &#39;wae&#39; | &#39;wae-ch&#39; | &#39;wo&#39; | &#39;wo-sn&#39; | &#39;xh&#39; | &#39;xh-za&#39; | &#39;xnr&#39; | &#39;xnr-in&#39; | &#39;xog&#39; | &#39;xog-ug&#39; | &#39;yav&#39; | &#39;yav-cm&#39; | &#39;yi&#39; | &#39;yi-001&#39; | &#39;yi-ua&#39; | &#39;yo&#39; | &#39;yo-bj&#39; | &#39;yo-ng&#39; | &#39;yrl&#39; | &#39;yrl-br&#39; | &#39;yrl-co&#39; | &#39;yrl-ve&#39; | &#39;yue&#39; | &#39;yue-cn&#39; | &#39;yue-hk&#39; | &#39;yue-mo&#39; | &#39;za&#39; | &#39;za-cn&#39; | &#39;zgh&#39; | &#39;zgh-ma&#39; | &#39;zh&#39; | &#39;zh-cn&#39; | &#39;zh-hans&#39; | &#39;zh-hant&#39; | &#39;zh-hk&#39; | &#39;zh-mo&#39; | &#39;zh-my&#39; | &#39;zh-sg&#39; | &#39;zh-tw&#39; | &#39;zu&#39; | &#39;zu-za&#39;
     * @memberof SearchApicmsSiteSearchV3Search
     */
    language?: 'aa' | 'ab' | 'ae' | 'af' | 'af-na' | 'af-za' | 'agq' | 'agq-cm' | 'ak' | 'ak-gh' | 'am' | 'am-et' | 'an' | 'ann' | 'ann-ng' | 'ar' | 'ar-001' | 'ar-ae' | 'ar-bh' | 'ar-dj' | 'ar-dz' | 'ar-eg' | 'ar-eh' | 'ar-er' | 'ar-il' | 'ar-iq' | 'ar-jo' | 'ar-km' | 'ar-kw' | 'ar-lb' | 'ar-ly' | 'ar-ma' | 'ar-mr' | 'ar-om' | 'ar-ps' | 'ar-qa' | 'ar-sa' | 'ar-sd' | 'ar-so' | 'ar-ss' | 'ar-sy' | 'ar-td' | 'ar-tn' | 'ar-ye' | 'as' | 'as-in' | 'asa' | 'asa-tz' | 'ast' | 'ast-es' | 'av' | 'ay' | 'az' | 'az-az' | 'ba' | 'bal' | 'bal-pk' | 'bas' | 'bas-cm' | 'be' | 'be-by' | 'bem' | 'bem-zm' | 'bez' | 'bez-tz' | 'bg' | 'bg-bg' | 'bgc' | 'bgc-in' | 'bho' | 'bho-in' | 'bi' | 'blo' | 'blo-bj' | 'bm' | 'bm-ml' | 'bn' | 'bn-bd' | 'bn-in' | 'bo' | 'bo-cn' | 'bo-in' | 'br' | 'br-fr' | 'brx' | 'brx-in' | 'bs' | 'bs-ba' | 'ca' | 'ca-ad' | 'ca-es' | 'ca-fr' | 'ca-it' | 'ccp' | 'ccp-bd' | 'ccp-in' | 'ce' | 'ce-ru' | 'ceb' | 'ceb-ph' | 'cgg' | 'cgg-ug' | 'ch' | 'chr' | 'chr-us' | 'ckb' | 'ckb-iq' | 'ckb-ir' | 'co' | 'cr' | 'cs' | 'cs-cz' | 'csw' | 'csw-ca' | 'cu' | 'cu-ru' | 'cv' | 'cv-ru' | 'cy' | 'cy-gb' | 'da' | 'da-dk' | 'da-gl' | 'dav' | 'dav-ke' | 'de' | 'de-at' | 'de-be' | 'de-ch' | 'de-de' | 'de-gr' | 'de-it' | 'de-li' | 'de-lu' | 'dje' | 'dje-ne' | 'doi' | 'doi-in' | 'dsb' | 'dsb-de' | 'dua' | 'dua-cm' | 'dv' | 'dyo' | 'dyo-sn' | 'dz' | 'dz-bt' | 'ebu' | 'ebu-ke' | 'ee' | 'ee-gh' | 'ee-tg' | 'el' | 'el-cy' | 'el-gr' | 'en' | 'en-001' | 'en-150' | 'en-ae' | 'en-ag' | 'en-ai' | 'en-as' | 'en-at' | 'en-au' | 'en-bb' | 'en-be' | 'en-bi' | 'en-bm' | 'en-bs' | 'en-bw' | 'en-bz' | 'en-ca' | 'en-cc' | 'en-ch' | 'en-ck' | 'en-cm' | 'en-cn' | 'en-cx' | 'en-cy' | 'en-cz' | 'en-de' | 'en-dg' | 'en-dk' | 'en-dm' | 'en-ee' | 'en-eg' | 'en-er' | 'en-es' | 'en-fi' | 'en-fj' | 'en-fk' | 'en-fm' | 'en-fr' | 'en-gb' | 'en-gd' | 'en-gg' | 'en-gh' | 'en-gi' | 'en-gm' | 'en-gs' | 'en-gu' | 'en-gy' | 'en-hk' | 'en-hu' | 'en-id' | 'en-ie' | 'en-il' | 'en-im' | 'en-in' | 'en-io' | 'en-it' | 'en-je' | 'en-jm' | 'en-ke' | 'en-ki' | 'en-kn' | 'en-ky' | 'en-lc' | 'en-lr' | 'en-ls' | 'en-lu' | 'en-mg' | 'en-mh' | 'en-mo' | 'en-mp' | 'en-ms' | 'en-mt' | 'en-mu' | 'en-mv' | 'en-mw' | 'en-mx' | 'en-my' | 'en-na' | 'en-nf' | 'en-ng' | 'en-nl' | 'en-no' | 'en-nr' | 'en-nu' | 'en-nz' | 'en-pg' | 'en-ph' | 'en-pk' | 'en-pl' | 'en-pn' | 'en-pr' | 'en-pt' | 'en-pw' | 'en-ro' | 'en-rw' | 'en-sb' | 'en-sc' | 'en-sd' | 'en-se' | 'en-sg' | 'en-sh' | 'en-si' | 'en-sk' | 'en-sl' | 'en-ss' | 'en-sx' | 'en-sz' | 'en-tc' | 'en-th' | 'en-tk' | 'en-tn' | 'en-to' | 'en-tt' | 'en-tv' | 'en-tz' | 'en-ug' | 'en-um' | 'en-us' | 'en-vc' | 'en-vg' | 'en-vi' | 'en-vn' | 'en-vu' | 'en-ws' | 'en-za' | 'en-zm' | 'en-zw' | 'eo' | 'eo-001' | 'es' | 'es-419' | 'es-ar' | 'es-bo' | 'es-br' | 'es-bz' | 'es-cl' | 'es-co' | 'es-cr' | 'es-cu' | 'es-do' | 'es-ea' | 'es-ec' | 'es-es' | 'es-gq' | 'es-gt' | 'es-hn' | 'es-ic' | 'es-mx' | 'es-ni' | 'es-pa' | 'es-pe' | 'es-ph' | 'es-pr' | 'es-py' | 'es-sv' | 'es-us' | 'es-uy' | 'es-ve' | 'et' | 'et-ee' | 'eu' | 'eu-es' | 'ewo' | 'ewo-cm' | 'fa' | 'fa-af' | 'fa-ir' | 'ff' | 'ff-bf' | 'ff-cm' | 'ff-gh' | 'ff-gm' | 'ff-gn' | 'ff-gw' | 'ff-lr' | 'ff-mr' | 'ff-ne' | 'ff-ng' | 'ff-sl' | 'ff-sn' | 'fi' | 'fi-fi' | 'fil' | 'fil-ph' | 'fj' | 'fo' | 'fo-dk' | 'fo-fo' | 'fr' | 'fr-be' | 'fr-bf' | 'fr-bi' | 'fr-bj' | 'fr-bl' | 'fr-ca' | 'fr-cd' | 'fr-cf' | 'fr-cg' | 'fr-ch' | 'fr-ci' | 'fr-cm' | 'fr-dj' | 'fr-dz' | 'fr-fr' | 'fr-ga' | 'fr-gf' | 'fr-gn' | 'fr-gp' | 'fr-gq' | 'fr-ht' | 'fr-km' | 'fr-lu' | 'fr-ma' | 'fr-mc' | 'fr-mf' | 'fr-mg' | 'fr-ml' | 'fr-mq' | 'fr-mr' | 'fr-mu' | 'fr-nc' | 'fr-ne' | 'fr-pf' | 'fr-pm' | 'fr-re' | 'fr-rw' | 'fr-sc' | 'fr-sn' | 'fr-sy' | 'fr-td' | 'fr-tg' | 'fr-tn' | 'fr-vu' | 'fr-wf' | 'fr-yt' | 'frr' | 'frr-de' | 'fur' | 'fur-it' | 'fy' | 'fy-nl' | 'ga' | 'ga-gb' | 'ga-ie' | 'gaa' | 'gaa-gh' | 'gd' | 'gd-gb' | 'gl' | 'gl-es' | 'gn' | 'gsw' | 'gsw-ch' | 'gsw-fr' | 'gsw-li' | 'gu' | 'gu-in' | 'guz' | 'guz-ke' | 'gv' | 'gv-im' | 'ha' | 'ha-gh' | 'ha-ne' | 'ha-ng' | 'haw' | 'haw-us' | 'he' | 'he-il' | 'hi' | 'hi-in' | 'hmn' | 'ho' | 'hr' | 'hr-ba' | 'hr-hr' | 'hsb' | 'hsb-de' | 'ht' | 'ht-ht' | 'hu' | 'hu-hu' | 'hy' | 'hy-am' | 'hz' | 'ia' | 'ia-001' | 'id' | 'id-id' | 'ie' | 'ie-ee' | 'ig' | 'ig-ng' | 'ii' | 'ii-cn' | 'ik' | 'io' | 'is' | 'is-is' | 'it' | 'it-ch' | 'it-it' | 'it-sm' | 'it-va' | 'iu' | 'ja' | 'ja-jp' | 'jgo' | 'jgo-cm' | 'jmc' | 'jmc-tz' | 'jv' | 'jv-id' | 'ka' | 'ka-ge' | 'kab' | 'kab-dz' | 'kam' | 'kam-ke' | 'kar' | 'kde' | 'kde-tz' | 'kea' | 'kea-cv' | 'kg' | 'kgp' | 'kgp-br' | 'kh' | 'khq' | 'khq-ml' | 'ki' | 'ki-ke' | 'kj' | 'kk' | 'kk-kz' | 'kkj' | 'kkj-cm' | 'kl' | 'kl-gl' | 'kln' | 'kln-ke' | 'km' | 'km-kh' | 'kn' | 'kn-in' | 'ko' | 'ko-cn' | 'ko-kp' | 'ko-kr' | 'kok' | 'kok-in' | 'kr' | 'ks' | 'ks-in' | 'ksb' | 'ksb-tz' | 'ksf' | 'ksf-cm' | 'ksh' | 'ksh-de' | 'ku' | 'ku-tr' | 'kv' | 'kw' | 'kw-gb' | 'kxv' | 'kxv-in' | 'ky' | 'ky-kg' | 'la' | 'lag' | 'lag-tz' | 'lb' | 'lb-lu' | 'lg' | 'lg-ug' | 'li' | 'lij' | 'lij-it' | 'lkt' | 'lkt-us' | 'lmo' | 'lmo-it' | 'ln' | 'ln-ao' | 'ln-cd' | 'ln-cf' | 'ln-cg' | 'lo' | 'lo-la' | 'lrc' | 'lrc-iq' | 'lrc-ir' | 'lt' | 'lt-lt' | 'lu' | 'lu-cd' | 'luo' | 'luo-ke' | 'luy' | 'luy-ke' | 'lv' | 'lv-lv' | 'mai' | 'mai-in' | 'mas' | 'mas-ke' | 'mas-tz' | 'mdf' | 'mdf-ru' | 'mer' | 'mer-ke' | 'mfe' | 'mfe-mu' | 'mg' | 'mg-mg' | 'mgh' | 'mgh-mz' | 'mgo' | 'mgo-cm' | 'mh' | 'mi' | 'mi-nz' | 'mk' | 'mk-mk' | 'ml' | 'ml-in' | 'mn' | 'mn-mn' | 'mni' | 'mni-in' | 'mr' | 'mr-in' | 'ms' | 'ms-bn' | 'ms-id' | 'ms-my' | 'ms-sg' | 'mt' | 'mt-mt' | 'mua' | 'mua-cm' | 'my' | 'my-mm' | 'mzn' | 'mzn-ir' | 'na' | 'naq' | 'naq-na' | 'nb' | 'nb-no' | 'nb-sj' | 'nd' | 'nd-zw' | 'nds' | 'nds-de' | 'nds-nl' | 'ne' | 'ne-in' | 'ne-np' | 'ng' | 'nl' | 'nl-aw' | 'nl-be' | 'nl-bq' | 'nl-ch' | 'nl-cw' | 'nl-lu' | 'nl-nl' | 'nl-sr' | 'nl-sx' | 'nmg' | 'nmg-cm' | 'nn' | 'nn-no' | 'nnh' | 'nnh-cm' | 'no' | 'no-no' | 'nqo' | 'nqo-gn' | 'nr' | 'nso' | 'nso-za' | 'nus' | 'nus-ss' | 'nv' | 'ny' | 'nyn' | 'nyn-ug' | 'oc' | 'oc-es' | 'oc-fr' | 'oj' | 'om' | 'om-et' | 'om-ke' | 'or' | 'or-in' | 'os' | 'os-ge' | 'os-ru' | 'pa' | 'pa-in' | 'pa-pk' | 'pcm' | 'pcm-ng' | 'pi' | 'pis' | 'pis-sb' | 'pl' | 'pl-pl' | 'prg' | 'prg-001' | 'ps' | 'ps-af' | 'ps-pk' | 'pt' | 'pt-ao' | 'pt-br' | 'pt-ch' | 'pt-cv' | 'pt-gq' | 'pt-gw' | 'pt-lu' | 'pt-mo' | 'pt-mz' | 'pt-pt' | 'pt-st' | 'pt-tl' | 'qu' | 'qu-bo' | 'qu-ec' | 'qu-pe' | 'raj' | 'raj-in' | 'rm' | 'rm-ch' | 'rn' | 'rn-bi' | 'ro' | 'ro-md' | 'ro-ro' | 'rof' | 'rof-tz' | 'ru' | 'ru-by' | 'ru-kg' | 'ru-kz' | 'ru-md' | 'ru-ru' | 'ru-ua' | 'rw' | 'rw-rw' | 'rwk' | 'rwk-tz' | 'sa' | 'sa-in' | 'sah' | 'sah-ru' | 'saq' | 'saq-ke' | 'sat' | 'sat-in' | 'sbp' | 'sbp-tz' | 'sc' | 'sc-it' | 'sd' | 'sd-in' | 'sd-pk' | 'se' | 'se-fi' | 'se-no' | 'se-se' | 'seh' | 'seh-mz' | 'ses' | 'ses-ml' | 'sg' | 'sg-cf' | 'shi' | 'shi-ma' | 'si' | 'si-lk' | 'sk' | 'sk-sk' | 'sl' | 'sl-si' | 'sm' | 'smn' | 'smn-fi' | 'sms' | 'sms-fi' | 'sn' | 'sn-zw' | 'so' | 'so-dj' | 'so-et' | 'so-ke' | 'so-so' | 'sq' | 'sq-al' | 'sq-mk' | 'sq-xk' | 'sr' | 'sr-ba' | 'sr-cs' | 'sr-me' | 'sr-rs' | 'sr-xk' | 'ss' | 'st' | 'st-ls' | 'st-za' | 'su' | 'su-id' | 'sv' | 'sv-ax' | 'sv-fi' | 'sv-se' | 'sw' | 'sw-cd' | 'sw-ke' | 'sw-tz' | 'sw-ug' | 'sy' | 'syr' | 'syr-iq' | 'syr-sy' | 'szl' | 'szl-pl' | 'ta' | 'ta-in' | 'ta-lk' | 'ta-my' | 'ta-sg' | 'te' | 'te-in' | 'teo' | 'teo-ke' | 'teo-ug' | 'tg' | 'tg-tj' | 'th' | 'th-th' | 'ti' | 'ti-er' | 'ti-et' | 'tk' | 'tk-tm' | 'tl' | 'tn' | 'tn-bw' | 'tn-za' | 'to' | 'to-to' | 'tok' | 'tok-001' | 'tr' | 'tr-cy' | 'tr-tr' | 'ts' | 'tt' | 'tt-ru' | 'tw' | 'twq' | 'twq-ne' | 'ty' | 'tzm' | 'tzm-ma' | 'ug' | 'ug-cn' | 'uk' | 'uk-ua' | 'ur' | 'ur-in' | 'ur-pk' | 'uz' | 'uz-af' | 'uz-uz' | 'vai' | 'vai-lr' | 've' | 'vec' | 'vec-it' | 'vi' | 'vi-vn' | 'vmw' | 'vmw-mz' | 'vo' | 'vo-001' | 'vun' | 'vun-tz' | 'wa' | 'wae' | 'wae-ch' | 'wo' | 'wo-sn' | 'xh' | 'xh-za' | 'xnr' | 'xnr-in' | 'xog' | 'xog-ug' | 'yav' | 'yav-cm' | 'yi' | 'yi-001' | 'yi-ua' | 'yo' | 'yo-bj' | 'yo-ng' | 'yrl' | 'yrl-br' | 'yrl-co' | 'yrl-ve' | 'yue' | 'yue-cn' | 'yue-hk' | 'yue-mo' | 'za' | 'za-cn' | 'zgh' | 'zgh-ma' | 'zh' | 'zh-cn' | 'zh-hans' | 'zh-hant' | 'zh-hk' | 'zh-mo' | 'zh-my' | 'zh-sg' | 'zh-tw' | 'zu' | 'zu-za'
    /**
     * 
     * Defaults to: undefined
     * @type &#39;LONG&#39; | &#39;SHORT&#39;
     * @memberof SearchApicmsSiteSearchV3Search
     */
    length?: 'LONG' | 'SHORT'
    /**
     * The maximum number of results to display per page.
     * Defaults to: undefined
     * @type number
     * @memberof SearchApicmsSiteSearchV3Search
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof SearchApicmsSiteSearchV3Search
     */
    matchPrefix?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof SearchApicmsSiteSearchV3Search
     */
    offset?: number
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof SearchApicmsSiteSearchV3Search
     */
    pathPrefix?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof SearchApicmsSiteSearchV3Search
     */
    popularityBoost?: number
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof SearchApicmsSiteSearchV3Search
     */
    property?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SearchApicmsSiteSearchV3Search
     */
    q?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof SearchApicmsSiteSearchV3Search
     */
    tableId?: number
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof SearchApicmsSiteSearchV3Search
     */
    type?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;&#39;LANDING_PAGE&#39; | &#39;BLOG_POST&#39; | &#39;SITE_PAGE&#39; | &#39;KNOWLEDGE_ARTICLE&#39; | &#39;LISTING_PAGE&#39; | &#39;STRUCTURED_CONTENT&#39;&gt;
     * @memberof SearchApicmsSiteSearchV3Search
     */
    types?: Array<'LANDING_PAGE' | 'BLOG_POST' | 'SITE_PAGE' | 'KNOWLEDGE_ARTICLE' | 'LISTING_PAGE' | 'STRUCTURED_CONTENT'>
}

export class ObjectSearchApi {
    private api: ObservableSearchApi

    public constructor(configuration: Configuration, requestFactory?: SearchApiRequestFactory, responseProcessor?: SearchApiResponseProcessor) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns any website content matching the given search criteria for a given HubSpot account. Searches can be filtered by content type, domain, or URL path. Includes options for weighing results by recency and popularity, along with language support.
     * Search your site
     * @param param the request object
     */
    public cmsSiteSearchV3SearchWithHttpInfo(param: SearchApiCmsSiteSearchV3SearchRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PublicSearchResults>> {
        return this.api.cmsSiteSearchV3SearchWithHttpInfo(param.analytics, param.autocomplete, param.boostLimit, param.boostRecent, param.domain, param.groupId, param.hubdbQuery, param.language, param.length, param.limit, param.matchPrefix, param.offset, param.pathPrefix, param.popularityBoost, param.property, param.q, param.tableId, param.type, param.types,  options).toPromise();
    }

    /**
     * Returns any website content matching the given search criteria for a given HubSpot account. Searches can be filtered by content type, domain, or URL path. Includes options for weighing results by recency and popularity, along with language support.
     * Search your site
     * @param param the request object
     */
    public cmsSiteSearchV3Search(param: SearchApiCmsSiteSearchV3SearchRequest = {}, options?: ConfigurationOptions): Promise<PublicSearchResults> {
        return this.api.cmsSiteSearchV3Search(param.analytics, param.autocomplete, param.boostLimit, param.boostRecent, param.domain, param.groupId, param.hubdbQuery, param.language, param.length, param.limit, param.matchPrefix, param.offset, param.pathPrefix, param.popularityBoost, param.property, param.q, param.tableId, param.type, param.types,  options).toPromise();
    }

}
