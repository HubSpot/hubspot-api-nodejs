// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { IndexedData } from '../models/IndexedData';
import { PublicSearchResults } from '../models/PublicSearchResults';

/**
 * no description
 */
export class PublicApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * For a given account and document ID (page ID, blog post ID, HubDB row ID, etc.), return all indexed data for that document. This is useful when debugging why a particular document is not returned from a custom search.
     * Get indexed properties.
     * @param contentId ID of the target document when searching for indexed properties.
     * @param type The type of document. Can be one of &#x60;SITE_PAGE&#x60;, &#x60;BLOG_POST&#x60;, or &#x60;KNOWLEDGE_ARTICLE&#x60;.
     */
    public async getById(contentId: string, type?: 'LANDING_PAGE' | 'BLOG_POST' | 'SITE_PAGE' | 'KNOWLEDGE_ARTICLE' | 'LISTING_PAGE', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'contentId' is not null or undefined
        if (contentId === null || contentId === undefined) {
            throw new RequiredError("PublicApi", "getById", "contentId");
        }



        // Path Params
        const localVarPath = '/cms/v3/site-search/indexed-data/{contentId}'
            .replace('{' + 'contentId' + '}', encodeURIComponent(String(contentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "'LANDING_PAGE' | 'BLOG_POST' | 'SITE_PAGE' | 'KNOWLEDGE_ARTICLE' | 'LISTING_PAGE'", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns any website content matching the given search criteria for a given HubSpot account. Searches can be filtered by content type, domain, or URL path.
     * Search your site.
     * @param q The term to search for.
     * @param limit Specifies the number of results to be returned in a single response. Defaults to &#x60;10&#x60;. Maximum value is &#x60;100&#x60;.
     * @param offset Used to page through the results. If there are more results than specified by the &#x60;limit&#x60; parameter, you will need to use the value of offset returned in the previous request to get the next set of results.
     * @param language Specifies the language of content to be searched. This value must be a valid [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g. &#x60;es&#x60; for Spanish)
     * @param matchPrefix Inverts the behavior of the pathPrefix filter when set to &#x60;false&#x60;. Defaults to &#x60;true&#x60;.
     * @param autocomplete Specifies whether or not you are showing autocomplete results. Defaults to false.
     * @param popularityBoost Specifies how strongly a result is boosted based on its view count. Defaults to 1.0.
     * @param boostLimit Specifies the maximum amount a result will be boosted based on its view count. Defaults to 5.0. Read more about elasticsearch boosting [here](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-boost.html).
     * @param boostRecent Specifies a relative time window where scores of documents published outside this time window decay. This can only be used for blog posts. For example, boostRecent&#x3D;10d will boost documents published within the last 10 days. Supported timeunits are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days).
     * @param tableId Specifies a specific HubDB table to search. Only returns results from the specified table. Can be used in tandem with the &#x60;hubdbQuery&#x60; parameter to further filter results.
     * @param hubdbQuery Specify a HubDB query to further filter the search results.
     * @param domain A domain to match search results for. Multiple domains can be provided with &amp;.
     * @param type Specifies the type of content to search. Can be one or more of SITE_PAGE, LANDING_PAGE, BLOG_POST, LISTING_PAGE, and KNOWLEDGE_ARTICLE. Defaults to all content types except LANDING_PAGE and KNOWLEDGE_ARTICLE
     * @param pathPrefix Specifies a path prefix to filter search results. Will only return results with URL paths that start with the specified parameter. Can be used multiple times.
     * @param property Specifies which properties to include in the search. Options include &#x60;title&#x60;, &#x60;description&#x60;, and &#x60;html&#x60;. All properties will be searched by default.
     * @param length Specifies the length of the search results. Can be set to &#x60;LONG&#x60; or &#x60;SHORT&#x60;. &#x60;SHORT&#x60; will return the first 128 characters of the content\&#39;s meta description. &#x60;LONG&#x60; will build a more detailed content snippet based on the html/content of the page.
     * @param groupId Specifies which blog(s) to be searched by blog ID. Can be used multiple times to search more than one blog.
     */
    public async search(q?: string, limit?: number, offset?: number, language?: 'af' | 'af-na' | 'af-za' | 'agq' | 'agq-cm' | 'ak' | 'ak-gh' | 'am' | 'am-et' | 'ar' | 'ar-001' | 'ar-ae' | 'ar-bh' | 'ar-dj' | 'ar-dz' | 'ar-eg' | 'ar-eh' | 'ar-er' | 'ar-il' | 'ar-iq' | 'ar-jo' | 'ar-km' | 'ar-kw' | 'ar-lb' | 'ar-ly' | 'ar-ma' | 'ar-mr' | 'ar-om' | 'ar-ps' | 'ar-qa' | 'ar-sa' | 'ar-sd' | 'ar-so' | 'ar-ss' | 'ar-sy' | 'ar-td' | 'ar-tn' | 'ar-ye' | 'as' | 'as-in' | 'asa' | 'asa-tz' | 'ast' | 'ast-es' | 'az' | 'az-az' | 'bas' | 'bas-cm' | 'be' | 'be-by' | 'bem' | 'bem-zm' | 'bez' | 'bez-tz' | 'bg' | 'bg-bg' | 'bm' | 'bm-ml' | 'bn' | 'bn-bd' | 'bn-in' | 'bo' | 'bo-cn' | 'bo-in' | 'br' | 'br-fr' | 'brx' | 'brx-in' | 'bs' | 'bs-ba' | 'ca' | 'ca-ad' | 'ca-es' | 'ca-fr' | 'ca-it' | 'ccp' | 'ccp-bd' | 'ccp-in' | 'ce' | 'ce-ru' | 'ceb' | 'ceb-ph' | 'cgg' | 'cgg-ug' | 'chr' | 'chr-us' | 'ckb' | 'ckb-iq' | 'ckb-ir' | 'cs' | 'cs-cz' | 'cu' | 'cu-ru' | 'cy' | 'cy-gb' | 'da' | 'da-dk' | 'da-gl' | 'dav' | 'dav-ke' | 'de' | 'de-at' | 'de-be' | 'de-ch' | 'de-de' | 'de-gr' | 'de-it' | 'de-li' | 'de-lu' | 'dje' | 'dje-ne' | 'doi' | 'doi-in' | 'dsb' | 'dsb-de' | 'dua' | 'dua-cm' | 'dyo' | 'dyo-sn' | 'dz' | 'dz-bt' | 'ebu' | 'ebu-ke' | 'ee' | 'ee-gh' | 'ee-tg' | 'el' | 'el-cy' | 'el-gr' | 'en' | 'en-001' | 'en-150' | 'en-ae' | 'en-ag' | 'en-ai' | 'en-as' | 'en-at' | 'en-au' | 'en-bb' | 'en-be' | 'en-bi' | 'en-bm' | 'en-bs' | 'en-bw' | 'en-bz' | 'en-ca' | 'en-cc' | 'en-ch' | 'en-ck' | 'en-cm' | 'en-cn' | 'en-cx' | 'en-cy' | 'en-de' | 'en-dg' | 'en-dk' | 'en-dm' | 'en-er' | 'en-fi' | 'en-fj' | 'en-fk' | 'en-fm' | 'en-gb' | 'en-gd' | 'en-gg' | 'en-gh' | 'en-gi' | 'en-gm' | 'en-gu' | 'en-gy' | 'en-hk' | 'en-ie' | 'en-il' | 'en-im' | 'en-in' | 'en-io' | 'en-je' | 'en-jm' | 'en-ke' | 'en-ki' | 'en-kn' | 'en-ky' | 'en-lc' | 'en-lr' | 'en-ls' | 'en-lu' | 'en-mg' | 'en-mh' | 'en-mo' | 'en-mp' | 'en-ms' | 'en-mt' | 'en-mu' | 'en-mw' | 'en-mx' | 'en-my' | 'en-na' | 'en-nf' | 'en-ng' | 'en-nl' | 'en-nr' | 'en-nu' | 'en-nz' | 'en-pg' | 'en-ph' | 'en-pk' | 'en-pn' | 'en-pr' | 'en-pw' | 'en-rw' | 'en-sb' | 'en-sc' | 'en-sd' | 'en-se' | 'en-sg' | 'en-sh' | 'en-si' | 'en-sl' | 'en-ss' | 'en-sx' | 'en-sz' | 'en-tc' | 'en-tk' | 'en-to' | 'en-tt' | 'en-tv' | 'en-tz' | 'en-ug' | 'en-um' | 'en-us' | 'en-vc' | 'en-vg' | 'en-vi' | 'en-vu' | 'en-ws' | 'en-za' | 'en-zm' | 'en-zw' | 'eo' | 'eo-001' | 'es' | 'es-419' | 'es-ar' | 'es-bo' | 'es-br' | 'es-bz' | 'es-cl' | 'es-co' | 'es-cr' | 'es-cu' | 'es-do' | 'es-ea' | 'es-ec' | 'es-es' | 'es-gq' | 'es-gt' | 'es-hn' | 'es-ic' | 'es-mx' | 'es-ni' | 'es-pa' | 'es-pe' | 'es-ph' | 'es-pr' | 'es-py' | 'es-sv' | 'es-us' | 'es-uy' | 'es-ve' | 'et' | 'et-ee' | 'eu' | 'eu-es' | 'ewo' | 'ewo-cm' | 'fa' | 'fa-af' | 'fa-ir' | 'ff' | 'ff-bf' | 'ff-cm' | 'ff-gh' | 'ff-gm' | 'ff-gn' | 'ff-gw' | 'ff-lr' | 'ff-mr' | 'ff-ne' | 'ff-ng' | 'ff-sl' | 'ff-sn' | 'fi' | 'fi-fi' | 'fil' | 'fil-ph' | 'fo' | 'fo-dk' | 'fo-fo' | 'fr' | 'fr-be' | 'fr-bf' | 'fr-bi' | 'fr-bj' | 'fr-bl' | 'fr-ca' | 'fr-cd' | 'fr-cf' | 'fr-cg' | 'fr-ch' | 'fr-ci' | 'fr-cm' | 'fr-dj' | 'fr-dz' | 'fr-fr' | 'fr-ga' | 'fr-gf' | 'fr-gn' | 'fr-gp' | 'fr-gq' | 'fr-ht' | 'fr-km' | 'fr-lu' | 'fr-ma' | 'fr-mc' | 'fr-mf' | 'fr-mg' | 'fr-ml' | 'fr-mq' | 'fr-mr' | 'fr-mu' | 'fr-nc' | 'fr-ne' | 'fr-pf' | 'fr-pm' | 'fr-re' | 'fr-rw' | 'fr-sc' | 'fr-sn' | 'fr-sy' | 'fr-td' | 'fr-tg' | 'fr-tn' | 'fr-vu' | 'fr-wf' | 'fr-yt' | 'fur' | 'fur-it' | 'fy' | 'fy-nl' | 'ga' | 'ga-gb' | 'ga-ie' | 'gd' | 'gd-gb' | 'gl' | 'gl-es' | 'gsw' | 'gsw-ch' | 'gsw-fr' | 'gsw-li' | 'gu' | 'gu-in' | 'guz' | 'guz-ke' | 'gv' | 'gv-im' | 'ha' | 'ha-gh' | 'ha-ne' | 'ha-ng' | 'haw' | 'haw-us' | 'he' | 'hi' | 'hi-in' | 'hr' | 'hr-ba' | 'hr-hr' | 'hsb' | 'hsb-de' | 'hu' | 'hu-hu' | 'hy' | 'hy-am' | 'ia' | 'ia-001' | 'id' | 'ig' | 'ig-ng' | 'ii' | 'ii-cn' | 'id-id' | 'is' | 'is-is' | 'it' | 'it-ch' | 'it-it' | 'it-sm' | 'it-va' | 'he-il' | 'ja' | 'ja-jp' | 'jgo' | 'jgo-cm' | 'yi' | 'yi-001' | 'jmc' | 'jmc-tz' | 'jv' | 'jv-id' | 'ka' | 'ka-ge' | 'kab' | 'kab-dz' | 'kam' | 'kam-ke' | 'kde' | 'kde-tz' | 'kea' | 'kea-cv' | 'khq' | 'khq-ml' | 'ki' | 'ki-ke' | 'kk' | 'kk-kz' | 'kkj' | 'kkj-cm' | 'kl' | 'kl-gl' | 'kln' | 'kln-ke' | 'km' | 'km-kh' | 'kn' | 'kn-in' | 'ko' | 'ko-kp' | 'ko-kr' | 'kok' | 'kok-in' | 'ks' | 'ks-in' | 'ksb' | 'ksb-tz' | 'ksf' | 'ksf-cm' | 'ksh' | 'ksh-de' | 'kw' | 'kw-gb' | 'ku' | 'ku-tr' | 'ky' | 'ky-kg' | 'lag' | 'lag-tz' | 'lb' | 'lb-lu' | 'lg' | 'lg-ug' | 'lkt' | 'lkt-us' | 'ln' | 'ln-ao' | 'ln-cd' | 'ln-cf' | 'ln-cg' | 'lo' | 'lo-la' | 'lrc' | 'lrc-iq' | 'lrc-ir' | 'lt' | 'lt-lt' | 'lu' | 'lu-cd' | 'luo' | 'luo-ke' | 'luy' | 'luy-ke' | 'lv' | 'lv-lv' | 'mai' | 'mai-in' | 'mas' | 'mas-ke' | 'mas-tz' | 'mer' | 'mer-ke' | 'mfe' | 'mfe-mu' | 'mg' | 'mg-mg' | 'mgh' | 'mgh-mz' | 'mgo' | 'mgo-cm' | 'mi' | 'mi-nz' | 'mk' | 'mk-mk' | 'ml' | 'ml-in' | 'mn' | 'mn-mn' | 'mni' | 'mni-in' | 'mr' | 'mr-in' | 'ms' | 'ms-bn' | 'ms-id' | 'ms-my' | 'ms-sg' | 'mt' | 'mt-mt' | 'mua' | 'mua-cm' | 'my' | 'my-mm' | 'mzn' | 'mzn-ir' | 'naq' | 'naq-na' | 'nb' | 'nb-no' | 'nb-sj' | 'nd' | 'nd-zw' | 'nds' | 'nds-de' | 'nds-nl' | 'ne' | 'ne-in' | 'ne-np' | 'nl' | 'nl-aw' | 'nl-be' | 'nl-ch' | 'nl-bq' | 'nl-cw' | 'nl-lu' | 'nl-nl' | 'nl-sr' | 'nl-sx' | 'nmg' | 'nmg-cm' | 'nn' | 'nn-no' | 'nnh' | 'nnh-cm' | 'no' | 'no-no' | 'nus' | 'nus-ss' | 'nyn' | 'nyn-ug' | 'om' | 'om-et' | 'om-ke' | 'or' | 'or-in' | 'os' | 'os-ge' | 'os-ru' | 'pa' | 'pa-in' | 'pa-pk' | 'pcm' | 'pcm-ng' | 'pl' | 'pl-pl' | 'prg' | 'prg-001' | 'ps' | 'ps-af' | 'ps-pk' | 'pt' | 'pt-ao' | 'pt-br' | 'pt-ch' | 'pt-cv' | 'pt-gq' | 'pt-gw' | 'pt-lu' | 'pt-mo' | 'pt-mz' | 'pt-pt' | 'pt-st' | 'pt-tl' | 'qu' | 'qu-bo' | 'qu-ec' | 'qu-pe' | 'rm' | 'rm-ch' | 'rn' | 'rn-bi' | 'ro' | 'ro-md' | 'ro-ro' | 'rof' | 'rof-tz' | 'ru' | 'ru-by' | 'ru-kg' | 'ru-kz' | 'ru-md' | 'ru-ru' | 'ru-ua' | 'rw' | 'rw-rw' | 'rwk' | 'rwk-tz' | 'sa' | 'sa-in' | 'sah' | 'sah-ru' | 'saq' | 'saq-ke' | 'sat' | 'sat-in' | 'sbp' | 'sbp-tz' | 'sd' | 'sd-in' | 'sd-pk' | 'se' | 'se-fi' | 'se-no' | 'se-se' | 'seh' | 'seh-mz' | 'ses' | 'ses-ml' | 'sg' | 'sg-cf' | 'shi' | 'shi-ma' | 'si' | 'si-lk' | 'sk' | 'sk-sk' | 'sl' | 'sl-si' | 'smn' | 'smn-fi' | 'sn' | 'sn-zw' | 'so' | 'so-dj' | 'so-et' | 'so-ke' | 'so-so' | 'sq' | 'sq-al' | 'sq-mk' | 'sq-xk' | 'sr' | 'sr-ba' | 'sr-cs' | 'sr-me' | 'sr-rs' | 'sr-xk' | 'su' | 'su-id' | 'sv' | 'sv-ax' | 'sv-fi' | 'sv-se' | 'sw' | 'sw-cd' | 'sw-ke' | 'sw-tz' | 'sw-ug' | 'sy' | 'ta' | 'ta-in' | 'ta-lk' | 'ta-my' | 'ta-sg' | 'te' | 'te-in' | 'teo' | 'teo-ke' | 'teo-ug' | 'tg' | 'tg-tj' | 'th' | 'th-th' | 'ti' | 'ti-er' | 'ti-et' | 'tk' | 'tk-tm' | 'tl' | 'to' | 'to-to' | 'tr' | 'tr-cy' | 'tr-tr' | 'tt' | 'tt-ru' | 'twq' | 'twq-ne' | 'tzm' | 'tzm-ma' | 'ug' | 'ug-cn' | 'uk' | 'uk-ua' | 'ur' | 'ur-in' | 'ur-pk' | 'uz' | 'uz-af' | 'uz-uz' | 'vai' | 'vai-lr' | 'vi' | 'vi-vn' | 'vo' | 'vo-001' | 'vun' | 'vun-tz' | 'wae' | 'wae-ch' | 'wo' | 'wo-sn' | 'xh' | 'xh-za' | 'xog' | 'xog-ug' | 'yav' | 'yav-cm' | 'yo' | 'yo-bj' | 'yo-ng' | 'yue' | 'yue-cn' | 'yue-hk' | 'zgh' | 'zgh-ma' | 'zh' | 'zh-cn' | 'zh-hk' | 'zh-mo' | 'zh-sg' | 'zh-tw' | 'zh-hans' | 'zh-hant' | 'zu' | 'zu-za', matchPrefix?: boolean, autocomplete?: boolean, popularityBoost?: number, boostLimit?: number, boostRecent?: string, tableId?: number, hubdbQuery?: string, domain?: Array<string>, type?: Array<'LANDING_PAGE' | 'BLOG_POST' | 'SITE_PAGE' | 'KNOWLEDGE_ARTICLE' | 'LISTING_PAGE'>, pathPrefix?: Array<string>, property?: Array<string>, length?: 'SHORT' | 'LONG', groupId?: Array<number>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


















        // Path Params
        const localVarPath = '/cms/v3/site-search/search';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", "int32"));
        }

        // Query Params
        if (language !== undefined) {
            requestContext.setQueryParam("language", ObjectSerializer.serialize(language, "'af' | 'af-na' | 'af-za' | 'agq' | 'agq-cm' | 'ak' | 'ak-gh' | 'am' | 'am-et' | 'ar' | 'ar-001' | 'ar-ae' | 'ar-bh' | 'ar-dj' | 'ar-dz' | 'ar-eg' | 'ar-eh' | 'ar-er' | 'ar-il' | 'ar-iq' | 'ar-jo' | 'ar-km' | 'ar-kw' | 'ar-lb' | 'ar-ly' | 'ar-ma' | 'ar-mr' | 'ar-om' | 'ar-ps' | 'ar-qa' | 'ar-sa' | 'ar-sd' | 'ar-so' | 'ar-ss' | 'ar-sy' | 'ar-td' | 'ar-tn' | 'ar-ye' | 'as' | 'as-in' | 'asa' | 'asa-tz' | 'ast' | 'ast-es' | 'az' | 'az-az' | 'bas' | 'bas-cm' | 'be' | 'be-by' | 'bem' | 'bem-zm' | 'bez' | 'bez-tz' | 'bg' | 'bg-bg' | 'bm' | 'bm-ml' | 'bn' | 'bn-bd' | 'bn-in' | 'bo' | 'bo-cn' | 'bo-in' | 'br' | 'br-fr' | 'brx' | 'brx-in' | 'bs' | 'bs-ba' | 'ca' | 'ca-ad' | 'ca-es' | 'ca-fr' | 'ca-it' | 'ccp' | 'ccp-bd' | 'ccp-in' | 'ce' | 'ce-ru' | 'ceb' | 'ceb-ph' | 'cgg' | 'cgg-ug' | 'chr' | 'chr-us' | 'ckb' | 'ckb-iq' | 'ckb-ir' | 'cs' | 'cs-cz' | 'cu' | 'cu-ru' | 'cy' | 'cy-gb' | 'da' | 'da-dk' | 'da-gl' | 'dav' | 'dav-ke' | 'de' | 'de-at' | 'de-be' | 'de-ch' | 'de-de' | 'de-gr' | 'de-it' | 'de-li' | 'de-lu' | 'dje' | 'dje-ne' | 'doi' | 'doi-in' | 'dsb' | 'dsb-de' | 'dua' | 'dua-cm' | 'dyo' | 'dyo-sn' | 'dz' | 'dz-bt' | 'ebu' | 'ebu-ke' | 'ee' | 'ee-gh' | 'ee-tg' | 'el' | 'el-cy' | 'el-gr' | 'en' | 'en-001' | 'en-150' | 'en-ae' | 'en-ag' | 'en-ai' | 'en-as' | 'en-at' | 'en-au' | 'en-bb' | 'en-be' | 'en-bi' | 'en-bm' | 'en-bs' | 'en-bw' | 'en-bz' | 'en-ca' | 'en-cc' | 'en-ch' | 'en-ck' | 'en-cm' | 'en-cn' | 'en-cx' | 'en-cy' | 'en-de' | 'en-dg' | 'en-dk' | 'en-dm' | 'en-er' | 'en-fi' | 'en-fj' | 'en-fk' | 'en-fm' | 'en-gb' | 'en-gd' | 'en-gg' | 'en-gh' | 'en-gi' | 'en-gm' | 'en-gu' | 'en-gy' | 'en-hk' | 'en-ie' | 'en-il' | 'en-im' | 'en-in' | 'en-io' | 'en-je' | 'en-jm' | 'en-ke' | 'en-ki' | 'en-kn' | 'en-ky' | 'en-lc' | 'en-lr' | 'en-ls' | 'en-lu' | 'en-mg' | 'en-mh' | 'en-mo' | 'en-mp' | 'en-ms' | 'en-mt' | 'en-mu' | 'en-mw' | 'en-mx' | 'en-my' | 'en-na' | 'en-nf' | 'en-ng' | 'en-nl' | 'en-nr' | 'en-nu' | 'en-nz' | 'en-pg' | 'en-ph' | 'en-pk' | 'en-pn' | 'en-pr' | 'en-pw' | 'en-rw' | 'en-sb' | 'en-sc' | 'en-sd' | 'en-se' | 'en-sg' | 'en-sh' | 'en-si' | 'en-sl' | 'en-ss' | 'en-sx' | 'en-sz' | 'en-tc' | 'en-tk' | 'en-to' | 'en-tt' | 'en-tv' | 'en-tz' | 'en-ug' | 'en-um' | 'en-us' | 'en-vc' | 'en-vg' | 'en-vi' | 'en-vu' | 'en-ws' | 'en-za' | 'en-zm' | 'en-zw' | 'eo' | 'eo-001' | 'es' | 'es-419' | 'es-ar' | 'es-bo' | 'es-br' | 'es-bz' | 'es-cl' | 'es-co' | 'es-cr' | 'es-cu' | 'es-do' | 'es-ea' | 'es-ec' | 'es-es' | 'es-gq' | 'es-gt' | 'es-hn' | 'es-ic' | 'es-mx' | 'es-ni' | 'es-pa' | 'es-pe' | 'es-ph' | 'es-pr' | 'es-py' | 'es-sv' | 'es-us' | 'es-uy' | 'es-ve' | 'et' | 'et-ee' | 'eu' | 'eu-es' | 'ewo' | 'ewo-cm' | 'fa' | 'fa-af' | 'fa-ir' | 'ff' | 'ff-bf' | 'ff-cm' | 'ff-gh' | 'ff-gm' | 'ff-gn' | 'ff-gw' | 'ff-lr' | 'ff-mr' | 'ff-ne' | 'ff-ng' | 'ff-sl' | 'ff-sn' | 'fi' | 'fi-fi' | 'fil' | 'fil-ph' | 'fo' | 'fo-dk' | 'fo-fo' | 'fr' | 'fr-be' | 'fr-bf' | 'fr-bi' | 'fr-bj' | 'fr-bl' | 'fr-ca' | 'fr-cd' | 'fr-cf' | 'fr-cg' | 'fr-ch' | 'fr-ci' | 'fr-cm' | 'fr-dj' | 'fr-dz' | 'fr-fr' | 'fr-ga' | 'fr-gf' | 'fr-gn' | 'fr-gp' | 'fr-gq' | 'fr-ht' | 'fr-km' | 'fr-lu' | 'fr-ma' | 'fr-mc' | 'fr-mf' | 'fr-mg' | 'fr-ml' | 'fr-mq' | 'fr-mr' | 'fr-mu' | 'fr-nc' | 'fr-ne' | 'fr-pf' | 'fr-pm' | 'fr-re' | 'fr-rw' | 'fr-sc' | 'fr-sn' | 'fr-sy' | 'fr-td' | 'fr-tg' | 'fr-tn' | 'fr-vu' | 'fr-wf' | 'fr-yt' | 'fur' | 'fur-it' | 'fy' | 'fy-nl' | 'ga' | 'ga-gb' | 'ga-ie' | 'gd' | 'gd-gb' | 'gl' | 'gl-es' | 'gsw' | 'gsw-ch' | 'gsw-fr' | 'gsw-li' | 'gu' | 'gu-in' | 'guz' | 'guz-ke' | 'gv' | 'gv-im' | 'ha' | 'ha-gh' | 'ha-ne' | 'ha-ng' | 'haw' | 'haw-us' | 'he' | 'hi' | 'hi-in' | 'hr' | 'hr-ba' | 'hr-hr' | 'hsb' | 'hsb-de' | 'hu' | 'hu-hu' | 'hy' | 'hy-am' | 'ia' | 'ia-001' | 'id' | 'ig' | 'ig-ng' | 'ii' | 'ii-cn' | 'id-id' | 'is' | 'is-is' | 'it' | 'it-ch' | 'it-it' | 'it-sm' | 'it-va' | 'he-il' | 'ja' | 'ja-jp' | 'jgo' | 'jgo-cm' | 'yi' | 'yi-001' | 'jmc' | 'jmc-tz' | 'jv' | 'jv-id' | 'ka' | 'ka-ge' | 'kab' | 'kab-dz' | 'kam' | 'kam-ke' | 'kde' | 'kde-tz' | 'kea' | 'kea-cv' | 'khq' | 'khq-ml' | 'ki' | 'ki-ke' | 'kk' | 'kk-kz' | 'kkj' | 'kkj-cm' | 'kl' | 'kl-gl' | 'kln' | 'kln-ke' | 'km' | 'km-kh' | 'kn' | 'kn-in' | 'ko' | 'ko-kp' | 'ko-kr' | 'kok' | 'kok-in' | 'ks' | 'ks-in' | 'ksb' | 'ksb-tz' | 'ksf' | 'ksf-cm' | 'ksh' | 'ksh-de' | 'kw' | 'kw-gb' | 'ku' | 'ku-tr' | 'ky' | 'ky-kg' | 'lag' | 'lag-tz' | 'lb' | 'lb-lu' | 'lg' | 'lg-ug' | 'lkt' | 'lkt-us' | 'ln' | 'ln-ao' | 'ln-cd' | 'ln-cf' | 'ln-cg' | 'lo' | 'lo-la' | 'lrc' | 'lrc-iq' | 'lrc-ir' | 'lt' | 'lt-lt' | 'lu' | 'lu-cd' | 'luo' | 'luo-ke' | 'luy' | 'luy-ke' | 'lv' | 'lv-lv' | 'mai' | 'mai-in' | 'mas' | 'mas-ke' | 'mas-tz' | 'mer' | 'mer-ke' | 'mfe' | 'mfe-mu' | 'mg' | 'mg-mg' | 'mgh' | 'mgh-mz' | 'mgo' | 'mgo-cm' | 'mi' | 'mi-nz' | 'mk' | 'mk-mk' | 'ml' | 'ml-in' | 'mn' | 'mn-mn' | 'mni' | 'mni-in' | 'mr' | 'mr-in' | 'ms' | 'ms-bn' | 'ms-id' | 'ms-my' | 'ms-sg' | 'mt' | 'mt-mt' | 'mua' | 'mua-cm' | 'my' | 'my-mm' | 'mzn' | 'mzn-ir' | 'naq' | 'naq-na' | 'nb' | 'nb-no' | 'nb-sj' | 'nd' | 'nd-zw' | 'nds' | 'nds-de' | 'nds-nl' | 'ne' | 'ne-in' | 'ne-np' | 'nl' | 'nl-aw' | 'nl-be' | 'nl-ch' | 'nl-bq' | 'nl-cw' | 'nl-lu' | 'nl-nl' | 'nl-sr' | 'nl-sx' | 'nmg' | 'nmg-cm' | 'nn' | 'nn-no' | 'nnh' | 'nnh-cm' | 'no' | 'no-no' | 'nus' | 'nus-ss' | 'nyn' | 'nyn-ug' | 'om' | 'om-et' | 'om-ke' | 'or' | 'or-in' | 'os' | 'os-ge' | 'os-ru' | 'pa' | 'pa-in' | 'pa-pk' | 'pcm' | 'pcm-ng' | 'pl' | 'pl-pl' | 'prg' | 'prg-001' | 'ps' | 'ps-af' | 'ps-pk' | 'pt' | 'pt-ao' | 'pt-br' | 'pt-ch' | 'pt-cv' | 'pt-gq' | 'pt-gw' | 'pt-lu' | 'pt-mo' | 'pt-mz' | 'pt-pt' | 'pt-st' | 'pt-tl' | 'qu' | 'qu-bo' | 'qu-ec' | 'qu-pe' | 'rm' | 'rm-ch' | 'rn' | 'rn-bi' | 'ro' | 'ro-md' | 'ro-ro' | 'rof' | 'rof-tz' | 'ru' | 'ru-by' | 'ru-kg' | 'ru-kz' | 'ru-md' | 'ru-ru' | 'ru-ua' | 'rw' | 'rw-rw' | 'rwk' | 'rwk-tz' | 'sa' | 'sa-in' | 'sah' | 'sah-ru' | 'saq' | 'saq-ke' | 'sat' | 'sat-in' | 'sbp' | 'sbp-tz' | 'sd' | 'sd-in' | 'sd-pk' | 'se' | 'se-fi' | 'se-no' | 'se-se' | 'seh' | 'seh-mz' | 'ses' | 'ses-ml' | 'sg' | 'sg-cf' | 'shi' | 'shi-ma' | 'si' | 'si-lk' | 'sk' | 'sk-sk' | 'sl' | 'sl-si' | 'smn' | 'smn-fi' | 'sn' | 'sn-zw' | 'so' | 'so-dj' | 'so-et' | 'so-ke' | 'so-so' | 'sq' | 'sq-al' | 'sq-mk' | 'sq-xk' | 'sr' | 'sr-ba' | 'sr-cs' | 'sr-me' | 'sr-rs' | 'sr-xk' | 'su' | 'su-id' | 'sv' | 'sv-ax' | 'sv-fi' | 'sv-se' | 'sw' | 'sw-cd' | 'sw-ke' | 'sw-tz' | 'sw-ug' | 'sy' | 'ta' | 'ta-in' | 'ta-lk' | 'ta-my' | 'ta-sg' | 'te' | 'te-in' | 'teo' | 'teo-ke' | 'teo-ug' | 'tg' | 'tg-tj' | 'th' | 'th-th' | 'ti' | 'ti-er' | 'ti-et' | 'tk' | 'tk-tm' | 'tl' | 'to' | 'to-to' | 'tr' | 'tr-cy' | 'tr-tr' | 'tt' | 'tt-ru' | 'twq' | 'twq-ne' | 'tzm' | 'tzm-ma' | 'ug' | 'ug-cn' | 'uk' | 'uk-ua' | 'ur' | 'ur-in' | 'ur-pk' | 'uz' | 'uz-af' | 'uz-uz' | 'vai' | 'vai-lr' | 'vi' | 'vi-vn' | 'vo' | 'vo-001' | 'vun' | 'vun-tz' | 'wae' | 'wae-ch' | 'wo' | 'wo-sn' | 'xh' | 'xh-za' | 'xog' | 'xog-ug' | 'yav' | 'yav-cm' | 'yo' | 'yo-bj' | 'yo-ng' | 'yue' | 'yue-cn' | 'yue-hk' | 'zgh' | 'zgh-ma' | 'zh' | 'zh-cn' | 'zh-hk' | 'zh-mo' | 'zh-sg' | 'zh-tw' | 'zh-hans' | 'zh-hant' | 'zu' | 'zu-za'", ""));
        }

        // Query Params
        if (matchPrefix !== undefined) {
            requestContext.setQueryParam("matchPrefix", ObjectSerializer.serialize(matchPrefix, "boolean", ""));
        }

        // Query Params
        if (autocomplete !== undefined) {
            requestContext.setQueryParam("autocomplete", ObjectSerializer.serialize(autocomplete, "boolean", ""));
        }

        // Query Params
        if (popularityBoost !== undefined) {
            requestContext.setQueryParam("popularityBoost", ObjectSerializer.serialize(popularityBoost, "number", ""));
        }

        // Query Params
        if (boostLimit !== undefined) {
            requestContext.setQueryParam("boostLimit", ObjectSerializer.serialize(boostLimit, "number", ""));
        }

        // Query Params
        if (boostRecent !== undefined) {
            requestContext.setQueryParam("boostRecent", ObjectSerializer.serialize(boostRecent, "string", ""));
        }

        // Query Params
        if (tableId !== undefined) {
            requestContext.setQueryParam("tableId", ObjectSerializer.serialize(tableId, "number", "int64"));
        }

        // Query Params
        if (hubdbQuery !== undefined) {
            requestContext.setQueryParam("hubdbQuery", ObjectSerializer.serialize(hubdbQuery, "string", ""));
        }

        // Query Params
        if (domain !== undefined) {
            requestContext.setQueryParam("domain", ObjectSerializer.serialize(domain, "Array<string>", ""));
        }

        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "Array<'LANDING_PAGE' | 'BLOG_POST' | 'SITE_PAGE' | 'KNOWLEDGE_ARTICLE' | 'LISTING_PAGE'>", ""));
        }

        // Query Params
        if (pathPrefix !== undefined) {
            requestContext.setQueryParam("pathPrefix", ObjectSerializer.serialize(pathPrefix, "Array<string>", ""));
        }

        // Query Params
        if (property !== undefined) {
            requestContext.setQueryParam("property", ObjectSerializer.serialize(property, "Array<string>", ""));
        }

        // Query Params
        if (length !== undefined) {
            requestContext.setQueryParam("length", ObjectSerializer.serialize(length, "'SHORT' | 'LONG'", ""));
        }

        // Query Params
        if (groupId !== undefined) {
            requestContext.setQueryParam("groupId", ObjectSerializer.serialize(groupId, "Array<number>", "int64"));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class PublicApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<IndexedData >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: IndexedData = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IndexedData", ""
            ) as IndexedData;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "An error occurred.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: IndexedData = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IndexedData", ""
            ) as IndexedData;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to search
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PublicSearchResults >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PublicSearchResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicSearchResults", ""
            ) as PublicSearchResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "An error occurred.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PublicSearchResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicSearchResults", ""
            ) as PublicSearchResults;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
