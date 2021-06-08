var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// TODO: better import syntax?
var baseapi_1 = require('./baseapi');
var http_1 = require('../http/http');
var ObjectSerializer_1 = require('../models/ObjectSerializer');
var exception_1 = require('./exception');
var util_1 = require('../util');
var IndexedData_1 = require('../models/IndexedData');
var PublicSearchResults_1 = require('../models/PublicSearchResults');
/**
 * no description
 */
var DefaultApiRequestFactory = (function (_super) {
    __extends(DefaultApiRequestFactory, _super);
    function DefaultApiRequestFactory() {
        _super.apply(this, arguments);
        /**
         * For a given account and document ID (page ID, blog post ID, HubDB row ID, etc.), return all indexed data for that document. This is useful when debugging why a particular document is not returned from a custom search.
         * Get indexed properties.
         * @param contentId ID of the target document when searching for indexed properties.
         * @param type The type of document. Can be one of &#x60;SITE_PAGE&#x60;, &#x60;BLOG_POST&#x60;, or &#x60;KNOWLEDGE_ARTICLE&#x60;.
         */
        this.async = getById(contentId, string, type ?  : 'LANDING_PAGE' | 'BLOG_POST' | 'SITE_PAGE' | 'KNOWLEDGE_ARTICLE' | 'LISTING_PAGE', _options ?  : Configuration);
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
         * @param minScore Specifies the minimum search score threshold for returned results. This value is intentionally set low by default in order to return many results. Increase this for higher precision, but less recall.
         * @param boostRecent Specifies a relative time window where scores of documents published outside this time window decay. This can only be used for blog posts. For example, boostRecent&#x3D;10d will boost documents published within the last 10 days. Supported timeunits are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days).
         * @param tableId Specifies a specific HubDB table to search. Only returns results from the specified table. Can be used in tandem with the &#x60;hubdbQuery&#x60; parameter to further filter results.
         * @param hubdbQuery Specify a HubDB query to further filter the search results.
         * @param domain A domain to match search results for. Multiple domains can be provided with &amp;.
         * @param type Specifies the type of content to search. Can be one or more of SITE_PAGE, LANDING_PAGE, BLOG_POST, LISTING_PAGE, and KNOWLEDGE_ARTICLE. Defaults to all content types except LANDING_PAGE and KNOWLEDGE_ARTICLE
         * @param pathPrefix Specifies a path prefix to filter search results. Will only return results with URL paths that start with the specified parameter. Can be used multiple times.
         * @param property Specifies which properties to include in the search. Options include &#x60;title&#x60;, &#x60;description&#x60;, and &#x60;html&#x60;. All properties will be searched by default.
         * @param length Specifies the length of the search results. Can be set to &#x60;LONG&#x60; or &#x60;SHORT&#x60;. &#x60;SHORT&#x60; will return the first 128 characters of the content&#39;s meta description. &#x60;LONG&#x60; will build a more detailed content snippet based on the html/content of the page.
         * @param groupId Specifies which blog(s) to be searched by blog ID. Can be used multiple times to search more than one blog.
         */
        this.async = search(q ?  : string, limit ?  : number, offset ?  : number, language ?  : 'af' | 'af-na' | 'af-za' | 'agq' | 'agq-cm' | 'ak' | 'ak-gh' | 'am' | 'am-et' | 'ar' | 'ar-001' | 'ar-ae' | 'ar-bh' | 'ar-dj' | 'ar-dz' | 'ar-eg' | 'ar-eh' | 'ar-er' | 'ar-il' | 'ar-iq' | 'ar-jo' | 'ar-km' | 'ar-kw' | 'ar-lb' | 'ar-ly' | 'ar-ma' | 'ar-mr' | 'ar-om' | 'ar-ps' | 'ar-qa' | 'ar-sa' | 'ar-sd' | 'ar-so' | 'ar-ss' | 'ar-sy' | 'ar-td' | 'ar-tn' | 'ar-ye' | 'as' | 'as-in' | 'asa' | 'asa-tz' | 'ast' | 'ast-es' | 'az' | 'az-az' | 'bas' | 'bas-cm' | 'be' | 'be-by' | 'bem' | 'bem-zm' | 'bez' | 'bez-tz' | 'bg' | 'bg-bg' | 'bm' | 'bm-ml' | 'bn' | 'bn-bd' | 'bn-in' | 'bo' | 'bo-cn' | 'bo-in' | 'br' | 'br-fr' | 'brx' | 'brx-in' | 'bs' | 'bs-ba' | 'ca' | 'ca-ad' | 'ca-es' | 'ca-fr' | 'ca-it' | 'ccp' | 'ccp-bd' | 'ccp-in' | 'ce' | 'ce-ru' | 'cgg' | 'cgg-ug' | 'chr' | 'chr-us' | 'ckb' | 'ckb-iq' | 'ckb-ir' | 'cs' | 'cs-cz' | 'cu' | 'cu-ru' | 'cy' | 'cy-gb' | 'da' | 'da-dk' | 'da-gl' | 'dav' | 'dav-ke' | 'de' | 'de-at' | 'de-be' | 'de-ch' | 'de-de' | 'de-gr' | 'de-it' | 'de-li' | 'de-lu' | 'dje' | 'dje-ne' | 'dsb' | 'dsb-de' | 'dua' | 'dua-cm' | 'dyo' | 'dyo-sn' | 'dz' | 'dz-bt' | 'ebu' | 'ebu-ke' | 'ee' | 'ee-gh' | 'ee-tg' | 'el' | 'el-cy' | 'el-gr' | 'en' | 'en-001' | 'en-150' | 'en-ag' | 'en-ai' | 'en-as' | 'en-at' | 'en-au' | 'en-bb' | 'en-be' | 'en-bi' | 'en-bm' | 'en-bs' | 'en-bw' | 'en-bz' | 'en-ca' | 'en-cc' | 'en-ch' | 'en-ck' | 'en-cm' | 'en-cx' | 'en-cy' | 'en-de' | 'en-dg' | 'en-dk' | 'en-dm' | 'en-er' | 'en-fi' | 'en-fj' | 'en-fk' | 'en-fm' | 'en-gb' | 'en-gd' | 'en-gg' | 'en-gh' | 'en-gi' | 'en-gm' | 'en-gu' | 'en-gy' | 'en-hk' | 'en-ie' | 'en-il' | 'en-im' | 'en-in' | 'en-io' | 'en-je' | 'en-jm' | 'en-ke' | 'en-ki' | 'en-kn' | 'en-ky' | 'en-lc' | 'en-lr' | 'en-ls' | 'en-mg' | 'en-mh' | 'en-mo' | 'en-mp' | 'en-ms' | 'en-mt' | 'en-mu' | 'en-mw' | 'en-my' | 'en-na' | 'en-nf' | 'en-ng' | 'en-nl' | 'en-nr' | 'en-nu' | 'en-nz' | 'en-pg' | 'en-ph' | 'en-pk' | 'en-pn' | 'en-pr' | 'en-pw' | 'en-rw' | 'en-sb' | 'en-sc' | 'en-sd' | 'en-se' | 'en-sg' | 'en-sh' | 'en-si' | 'en-sl' | 'en-ss' | 'en-sx' | 'en-sz' | 'en-tc' | 'en-tk' | 'en-to' | 'en-tt' | 'en-tv' | 'en-tz' | 'en-ug' | 'en-um' | 'en-us' | 'en-vc' | 'en-vg' | 'en-vi' | 'en-vu' | 'en-ws' | 'en-za' | 'en-zm' | 'en-zw' | 'eo' | 'eo-001' | 'es' | 'es-419' | 'es-ar' | 'es-bo' | 'es-br' | 'es-bz' | 'es-cl' | 'es-co' | 'es-cr' | 'es-cu' | 'es-do' | 'es-ea' | 'es-ec' | 'es-es' | 'es-gq' | 'es-gt' | 'es-hn' | 'es-ic' | 'es-mx' | 'es-ni' | 'es-pa' | 'es-pe' | 'es-ph' | 'es-pr' | 'es-py' | 'es-sv' | 'es-us' | 'es-uy' | 'es-ve' | 'et' | 'et-ee' | 'eu' | 'eu-es' | 'ewo' | 'ewo-cm' | 'fa' | 'fa-af' | 'fa-ir' | 'ff' | 'ff-cm' | 'ff-gn' | 'ff-mr' | 'ff-sn' | 'fi' | 'fi-fi' | 'fil' | 'fil-ph' | 'fo' | 'fo-dk' | 'fo-fo' | 'fr' | 'fr-be' | 'fr-bf' | 'fr-bi' | 'fr-bj' | 'fr-bl' | 'fr-ca' | 'fr-cd' | 'fr-cf' | 'fr-cg' | 'fr-ch' | 'fr-ci' | 'fr-cm' | 'fr-dj' | 'fr-dz' | 'fr-fr' | 'fr-ga' | 'fr-gf' | 'fr-gn' | 'fr-gp' | 'fr-gq' | 'fr-ht' | 'fr-km' | 'fr-lu' | 'fr-ma' | 'fr-mc' | 'fr-mf' | 'fr-mg' | 'fr-ml' | 'fr-mq' | 'fr-mr' | 'fr-mu' | 'fr-nc' | 'fr-ne' | 'fr-pf' | 'fr-pm' | 'fr-re' | 'fr-rw' | 'fr-sc' | 'fr-sn' | 'fr-sy' | 'fr-td' | 'fr-tg' | 'fr-tn' | 'fr-vu' | 'fr-wf' | 'fr-yt' | 'fur' | 'fur-it' | 'fy' | 'fy-nl' | 'ga' | 'ga-ie' | 'gd' | 'gd-gb' | 'gl' | 'gl-es' | 'gsw' | 'gsw-ch' | 'gsw-fr' | 'gsw-li' | 'gu' | 'gu-in' | 'guz' | 'guz-ke' | 'gv' | 'gv-im' | 'ha' | 'ha-gh' | 'ha-ne' | 'ha-ng' | 'haw' | 'haw-us' | 'he' | 'hi' | 'hi-in' | 'hr' | 'hr-ba' | 'hr-hr' | 'hsb' | 'hsb-de' | 'hu' | 'hu-hu' | 'hy' | 'hy-am' | 'id' | 'ig' | 'ig-ng' | 'ii' | 'ii-cn' | 'id-id' | 'is' | 'is-is' | 'it' | 'it-ch' | 'it-it' | 'it-sm' | 'it-va' | 'he-il' | 'ja' | 'ja-jp' | 'jgo' | 'jgo-cm' | 'yi' | 'yi-001' | 'jmc' | 'jmc-tz' | 'ka' | 'ka-ge' | 'kab' | 'kab-dz' | 'kam' | 'kam-ke' | 'kde' | 'kde-tz' | 'kea' | 'kea-cv' | 'khq' | 'khq-ml' | 'ki' | 'ki-ke' | 'kk' | 'kk-kz' | 'kkj' | 'kkj-cm' | 'kl' | 'kl-gl' | 'kln' | 'kln-ke' | 'km' | 'km-kh' | 'kn' | 'kn-in' | 'ko' | 'ko-kp' | 'ko-kr' | 'kok' | 'kok-in' | 'ks' | 'ks-in' | 'ksb' | 'ksb-tz' | 'ksf' | 'ksf-cm' | 'ksh' | 'ksh-de' | 'kw' | 'kw-gb' | 'ky' | 'ky-kg' | 'lag' | 'lag-tz' | 'lb' | 'lb-lu' | 'lg' | 'lg-ug' | 'lkt' | 'lkt-us' | 'ln' | 'ln-ao' | 'ln-cd' | 'ln-cf' | 'ln-cg' | 'lo' | 'lo-la' | 'lrc' | 'lrc-iq' | 'lrc-ir' | 'lt' | 'lt-lt' | 'lu' | 'lu-cd' | 'luo' | 'luo-ke' | 'luy' | 'luy-ke' | 'lv' | 'lv-lv' | 'mas' | 'mas-ke' | 'mas-tz' | 'mer' | 'mer-ke' | 'mfe' | 'mfe-mu' | 'mg' | 'mg-mg' | 'mgh' | 'mgh-mz' | 'mgo' | 'mgo-cm' | 'mk' | 'mk-mk' | 'ml' | 'ml-in' | 'mn' | 'mn-mn' | 'mr' | 'mr-in' | 'ms' | 'ms-bn' | 'ms-my' | 'ms-sg' | 'mt' | 'mt-mt' | 'mua' | 'mua-cm' | 'my' | 'my-mm' | 'mzn' | 'mzn-ir' | 'naq' | 'naq-na' | 'nb' | 'nb-no' | 'nb-sj' | 'nd' | 'nd-zw' | 'nds' | 'nds-de' | 'nds-nl' | 'ne' | 'ne-in' | 'ne-np' | 'nl' | 'nl-aw' | 'nl-be' | 'nl-bq' | 'nl-cw' | 'nl-nl' | 'nl-sr' | 'nl-sx' | 'nmg' | 'nmg-cm' | 'nn' | 'nn-no' | 'nnh' | 'nnh-cm' | 'no' | 'no-no' | 'nus' | 'nus-ss' | 'nyn' | 'nyn-ug' | 'om' | 'om-et' | 'om-ke' | 'or' | 'or-in' | 'os' | 'os-ge' | 'os-ru' | 'pa' | 'pa-in' | 'pa-pk' | 'pl' | 'pl-pl' | 'prg' | 'prg-001' | 'ps' | 'ps-af' | 'pt' | 'pt-ao' | 'pt-br' | 'pt-ch' | 'pt-cv' | 'pt-gq' | 'pt-gw' | 'pt-lu' | 'pt-mo' | 'pt-mz' | 'pt-pt' | 'pt-st' | 'pt-tl' | 'qu' | 'qu-bo' | 'qu-ec' | 'qu-pe' | 'rm' | 'rm-ch' | 'rn' | 'rn-bi' | 'ro' | 'ro-md' | 'ro-ro' | 'rof' | 'rof-tz' | 'ru' | 'ru-by' | 'ru-kg' | 'ru-kz' | 'ru-md' | 'ru-ru' | 'ru-ua' | 'rw' | 'rw-rw' | 'rwk' | 'rwk-tz' | 'sa' | 'sah' | 'sah-ru' | 'saq' | 'saq-ke' | 'sbp' | 'sbp-tz' | 'sd' | 'sd-pk' | 'se' | 'se-fi' | 'se-no' | 'se-se' | 'seh' | 'seh-mz' | 'ses' | 'ses-ml' | 'sg' | 'sg-cf' | 'shi' | 'shi-ma' | 'si' | 'si-lk' | 'sk' | 'sk-sk' | 'sl' | 'sl-si' | 'smn' | 'smn-fi' | 'sn' | 'sn-zw' | 'so' | 'so-dj' | 'so-et' | 'so-ke' | 'so-so' | 'sq' | 'sq-al' | 'sq-mk' | 'sq-xk' | 'sr' | 'sr-ba' | 'sr-cs' | 'sr-me' | 'sr-rs' | 'sr-xk' | 'sv' | 'sv-ax' | 'sv-fi' | 'sv-se' | 'sw' | 'sw-cd' | 'sw-ke' | 'sw-tz' | 'sw-ug' | 'sy' | 'ta' | 'ta-in' | 'ta-lk' | 'ta-my' | 'ta-sg' | 'te' | 'te-in' | 'teo' | 'teo-ke' | 'teo-ug' | 'tg' | 'tg-tj' | 'th' | 'th-th' | 'ti' | 'ti-er' | 'ti-et' | 'tk' | 'tk-tm' | 'to' | 'to-to' | 'tr' | 'tr-cy' | 'tr-tr' | 'tt' | 'tt-ru' | 'twq' | 'twq-ne' | 'tzm' | 'tzm-ma' | 'ug' | 'ug-cn' | 'uk' | 'uk-ua' | 'ur' | 'ur-in' | 'ur-pk' | 'uz' | 'uz-af' | 'uz-uz' | 'vai' | 'vai-lr' | 'vi' | 'vi-vn' | 'vo' | 'vo-001' | 'vun' | 'vun-tz' | 'wae' | 'wae-ch' | 'wo' | 'wo-sn' | 'xog' | 'xog-ug' | 'yav' | 'yav-cm' | 'yo' | 'yo-bj' | 'yo-ng' | 'yue' | 'yue-cn' | 'yue-hk' | 'zgh' | 'zgh-ma' | 'zh' | 'zh-cn' | 'zh-hk' | 'zh-mo' | 'zh-sg' | 'zh-tw' | 'zh-hans' | 'zh-hant' | 'zu' | 'zu-za', matchPrefix ?  : boolean, autocomplete ?  : boolean, popularityBoost ?  : number, boostLimit ?  : number, minScore ?  : number, boostRecent ?  : string, tableId ?  : number, hubdbQuery ?  : string, domain ?  : Array < string > , type ?  : Array < 'LANDING_PAGE' | 'BLOG_POST' | 'SITE_PAGE' | 'KNOWLEDGE_ARTICLE' | 'LISTING_PAGE' > , pathPrefix ?  : Array < string > , property ?  : Array < string > , length ?  : 'SHORT' | 'LONG', groupId ?  : Array < number > , _options ?  : Configuration);
    }
    DefaultApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // verify required parameter 'contentId' is not null or undefined
        if (contentId === null || contentId === undefined) {
            throw new baseapi_1.RequiredError('Required parameter contentId was null or undefined when calling getById.');
        }
        // Path Params
        var localVarPath = '/cms/v3/site-search/indexed-data/{contentId}'
            .replace('{' + 'contentId' + '}', encodeURIComponent(String(contentId)));
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer_1.ObjectSerializer.serialize(type, "'LANDING_PAGE' | 'BLOG_POST' | 'SITE_PAGE' | 'KNOWLEDGE_ARTICLE' | 'LISTING_PAGE'", ""));
        }
        // Header Params
        // Form Params
        // Body Params
        var authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    };
    DefaultApiRequestFactory.prototype.Promise = function () {
        var _config = _options || this.configuration;
        // Path Params
        var localVarPath = '/cms/v3/site-search/search';
        // Make Request Context
        var requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer_1.ObjectSerializer.serialize(q, "string", ""));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "int32"));
        }
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer_1.ObjectSerializer.serialize(offset, "number", "int32"));
        }
        if (language !== undefined) {
            requestContext.setQueryParam("language", ObjectSerializer_1.ObjectSerializer.serialize(language, "'af' | 'af-na' | 'af-za' | 'agq' | 'agq-cm' | 'ak' | 'ak-gh' | 'am' | 'am-et' | 'ar' | 'ar-001' | 'ar-ae' | 'ar-bh' | 'ar-dj' | 'ar-dz' | 'ar-eg' | 'ar-eh' | 'ar-er' | 'ar-il' | 'ar-iq' | 'ar-jo' | 'ar-km' | 'ar-kw' | 'ar-lb' | 'ar-ly' | 'ar-ma' | 'ar-mr' | 'ar-om' | 'ar-ps' | 'ar-qa' | 'ar-sa' | 'ar-sd' | 'ar-so' | 'ar-ss' | 'ar-sy' | 'ar-td' | 'ar-tn' | 'ar-ye' | 'as' | 'as-in' | 'asa' | 'asa-tz' | 'ast' | 'ast-es' | 'az' | 'az-az' | 'bas' | 'bas-cm' | 'be' | 'be-by' | 'bem' | 'bem-zm' | 'bez' | 'bez-tz' | 'bg' | 'bg-bg' | 'bm' | 'bm-ml' | 'bn' | 'bn-bd' | 'bn-in' | 'bo' | 'bo-cn' | 'bo-in' | 'br' | 'br-fr' | 'brx' | 'brx-in' | 'bs' | 'bs-ba' | 'ca' | 'ca-ad' | 'ca-es' | 'ca-fr' | 'ca-it' | 'ccp' | 'ccp-bd' | 'ccp-in' | 'ce' | 'ce-ru' | 'cgg' | 'cgg-ug' | 'chr' | 'chr-us' | 'ckb' | 'ckb-iq' | 'ckb-ir' | 'cs' | 'cs-cz' | 'cu' | 'cu-ru' | 'cy' | 'cy-gb' | 'da' | 'da-dk' | 'da-gl' | 'dav' | 'dav-ke' | 'de' | 'de-at' | 'de-be' | 'de-ch' | 'de-de' | 'de-gr' | 'de-it' | 'de-li' | 'de-lu' | 'dje' | 'dje-ne' | 'dsb' | 'dsb-de' | 'dua' | 'dua-cm' | 'dyo' | 'dyo-sn' | 'dz' | 'dz-bt' | 'ebu' | 'ebu-ke' | 'ee' | 'ee-gh' | 'ee-tg' | 'el' | 'el-cy' | 'el-gr' | 'en' | 'en-001' | 'en-150' | 'en-ag' | 'en-ai' | 'en-as' | 'en-at' | 'en-au' | 'en-bb' | 'en-be' | 'en-bi' | 'en-bm' | 'en-bs' | 'en-bw' | 'en-bz' | 'en-ca' | 'en-cc' | 'en-ch' | 'en-ck' | 'en-cm' | 'en-cx' | 'en-cy' | 'en-de' | 'en-dg' | 'en-dk' | 'en-dm' | 'en-er' | 'en-fi' | 'en-fj' | 'en-fk' | 'en-fm' | 'en-gb' | 'en-gd' | 'en-gg' | 'en-gh' | 'en-gi' | 'en-gm' | 'en-gu' | 'en-gy' | 'en-hk' | 'en-ie' | 'en-il' | 'en-im' | 'en-in' | 'en-io' | 'en-je' | 'en-jm' | 'en-ke' | 'en-ki' | 'en-kn' | 'en-ky' | 'en-lc' | 'en-lr' | 'en-ls' | 'en-mg' | 'en-mh' | 'en-mo' | 'en-mp' | 'en-ms' | 'en-mt' | 'en-mu' | 'en-mw' | 'en-my' | 'en-na' | 'en-nf' | 'en-ng' | 'en-nl' | 'en-nr' | 'en-nu' | 'en-nz' | 'en-pg' | 'en-ph' | 'en-pk' | 'en-pn' | 'en-pr' | 'en-pw' | 'en-rw' | 'en-sb' | 'en-sc' | 'en-sd' | 'en-se' | 'en-sg' | 'en-sh' | 'en-si' | 'en-sl' | 'en-ss' | 'en-sx' | 'en-sz' | 'en-tc' | 'en-tk' | 'en-to' | 'en-tt' | 'en-tv' | 'en-tz' | 'en-ug' | 'en-um' | 'en-us' | 'en-vc' | 'en-vg' | 'en-vi' | 'en-vu' | 'en-ws' | 'en-za' | 'en-zm' | 'en-zw' | 'eo' | 'eo-001' | 'es' | 'es-419' | 'es-ar' | 'es-bo' | 'es-br' | 'es-bz' | 'es-cl' | 'es-co' | 'es-cr' | 'es-cu' | 'es-do' | 'es-ea' | 'es-ec' | 'es-es' | 'es-gq' | 'es-gt' | 'es-hn' | 'es-ic' | 'es-mx' | 'es-ni' | 'es-pa' | 'es-pe' | 'es-ph' | 'es-pr' | 'es-py' | 'es-sv' | 'es-us' | 'es-uy' | 'es-ve' | 'et' | 'et-ee' | 'eu' | 'eu-es' | 'ewo' | 'ewo-cm' | 'fa' | 'fa-af' | 'fa-ir' | 'ff' | 'ff-cm' | 'ff-gn' | 'ff-mr' | 'ff-sn' | 'fi' | 'fi-fi' | 'fil' | 'fil-ph' | 'fo' | 'fo-dk' | 'fo-fo' | 'fr' | 'fr-be' | 'fr-bf' | 'fr-bi' | 'fr-bj' | 'fr-bl' | 'fr-ca' | 'fr-cd' | 'fr-cf' | 'fr-cg' | 'fr-ch' | 'fr-ci' | 'fr-cm' | 'fr-dj' | 'fr-dz' | 'fr-fr' | 'fr-ga' | 'fr-gf' | 'fr-gn' | 'fr-gp' | 'fr-gq' | 'fr-ht' | 'fr-km' | 'fr-lu' | 'fr-ma' | 'fr-mc' | 'fr-mf' | 'fr-mg' | 'fr-ml' | 'fr-mq' | 'fr-mr' | 'fr-mu' | 'fr-nc' | 'fr-ne' | 'fr-pf' | 'fr-pm' | 'fr-re' | 'fr-rw' | 'fr-sc' | 'fr-sn' | 'fr-sy' | 'fr-td' | 'fr-tg' | 'fr-tn' | 'fr-vu' | 'fr-wf' | 'fr-yt' | 'fur' | 'fur-it' | 'fy' | 'fy-nl' | 'ga' | 'ga-ie' | 'gd' | 'gd-gb' | 'gl' | 'gl-es' | 'gsw' | 'gsw-ch' | 'gsw-fr' | 'gsw-li' | 'gu' | 'gu-in' | 'guz' | 'guz-ke' | 'gv' | 'gv-im' | 'ha' | 'ha-gh' | 'ha-ne' | 'ha-ng' | 'haw' | 'haw-us' | 'he' | 'hi' | 'hi-in' | 'hr' | 'hr-ba' | 'hr-hr' | 'hsb' | 'hsb-de' | 'hu' | 'hu-hu' | 'hy' | 'hy-am' | 'id' | 'ig' | 'ig-ng' | 'ii' | 'ii-cn' | 'id-id' | 'is' | 'is-is' | 'it' | 'it-ch' | 'it-it' | 'it-sm' | 'it-va' | 'he-il' | 'ja' | 'ja-jp' | 'jgo' | 'jgo-cm' | 'yi' | 'yi-001' | 'jmc' | 'jmc-tz' | 'ka' | 'ka-ge' | 'kab' | 'kab-dz' | 'kam' | 'kam-ke' | 'kde' | 'kde-tz' | 'kea' | 'kea-cv' | 'khq' | 'khq-ml' | 'ki' | 'ki-ke' | 'kk' | 'kk-kz' | 'kkj' | 'kkj-cm' | 'kl' | 'kl-gl' | 'kln' | 'kln-ke' | 'km' | 'km-kh' | 'kn' | 'kn-in' | 'ko' | 'ko-kp' | 'ko-kr' | 'kok' | 'kok-in' | 'ks' | 'ks-in' | 'ksb' | 'ksb-tz' | 'ksf' | 'ksf-cm' | 'ksh' | 'ksh-de' | 'kw' | 'kw-gb' | 'ky' | 'ky-kg' | 'lag' | 'lag-tz' | 'lb' | 'lb-lu' | 'lg' | 'lg-ug' | 'lkt' | 'lkt-us' | 'ln' | 'ln-ao' | 'ln-cd' | 'ln-cf' | 'ln-cg' | 'lo' | 'lo-la' | 'lrc' | 'lrc-iq' | 'lrc-ir' | 'lt' | 'lt-lt' | 'lu' | 'lu-cd' | 'luo' | 'luo-ke' | 'luy' | 'luy-ke' | 'lv' | 'lv-lv' | 'mas' | 'mas-ke' | 'mas-tz' | 'mer' | 'mer-ke' | 'mfe' | 'mfe-mu' | 'mg' | 'mg-mg' | 'mgh' | 'mgh-mz' | 'mgo' | 'mgo-cm' | 'mk' | 'mk-mk' | 'ml' | 'ml-in' | 'mn' | 'mn-mn' | 'mr' | 'mr-in' | 'ms' | 'ms-bn' | 'ms-my' | 'ms-sg' | 'mt' | 'mt-mt' | 'mua' | 'mua-cm' | 'my' | 'my-mm' | 'mzn' | 'mzn-ir' | 'naq' | 'naq-na' | 'nb' | 'nb-no' | 'nb-sj' | 'nd' | 'nd-zw' | 'nds' | 'nds-de' | 'nds-nl' | 'ne' | 'ne-in' | 'ne-np' | 'nl' | 'nl-aw' | 'nl-be' | 'nl-bq' | 'nl-cw' | 'nl-nl' | 'nl-sr' | 'nl-sx' | 'nmg' | 'nmg-cm' | 'nn' | 'nn-no' | 'nnh' | 'nnh-cm' | 'no' | 'no-no' | 'nus' | 'nus-ss' | 'nyn' | 'nyn-ug' | 'om' | 'om-et' | 'om-ke' | 'or' | 'or-in' | 'os' | 'os-ge' | 'os-ru' | 'pa' | 'pa-in' | 'pa-pk' | 'pl' | 'pl-pl' | 'prg' | 'prg-001' | 'ps' | 'ps-af' | 'pt' | 'pt-ao' | 'pt-br' | 'pt-ch' | 'pt-cv' | 'pt-gq' | 'pt-gw' | 'pt-lu' | 'pt-mo' | 'pt-mz' | 'pt-pt' | 'pt-st' | 'pt-tl' | 'qu' | 'qu-bo' | 'qu-ec' | 'qu-pe' | 'rm' | 'rm-ch' | 'rn' | 'rn-bi' | 'ro' | 'ro-md' | 'ro-ro' | 'rof' | 'rof-tz' | 'ru' | 'ru-by' | 'ru-kg' | 'ru-kz' | 'ru-md' | 'ru-ru' | 'ru-ua' | 'rw' | 'rw-rw' | 'rwk' | 'rwk-tz' | 'sa' | 'sah' | 'sah-ru' | 'saq' | 'saq-ke' | 'sbp' | 'sbp-tz' | 'sd' | 'sd-pk' | 'se' | 'se-fi' | 'se-no' | 'se-se' | 'seh' | 'seh-mz' | 'ses' | 'ses-ml' | 'sg' | 'sg-cf' | 'shi' | 'shi-ma' | 'si' | 'si-lk' | 'sk' | 'sk-sk' | 'sl' | 'sl-si' | 'smn' | 'smn-fi' | 'sn' | 'sn-zw' | 'so' | 'so-dj' | 'so-et' | 'so-ke' | 'so-so' | 'sq' | 'sq-al' | 'sq-mk' | 'sq-xk' | 'sr' | 'sr-ba' | 'sr-cs' | 'sr-me' | 'sr-rs' | 'sr-xk' | 'sv' | 'sv-ax' | 'sv-fi' | 'sv-se' | 'sw' | 'sw-cd' | 'sw-ke' | 'sw-tz' | 'sw-ug' | 'sy' | 'ta' | 'ta-in' | 'ta-lk' | 'ta-my' | 'ta-sg' | 'te' | 'te-in' | 'teo' | 'teo-ke' | 'teo-ug' | 'tg' | 'tg-tj' | 'th' | 'th-th' | 'ti' | 'ti-er' | 'ti-et' | 'tk' | 'tk-tm' | 'to' | 'to-to' | 'tr' | 'tr-cy' | 'tr-tr' | 'tt' | 'tt-ru' | 'twq' | 'twq-ne' | 'tzm' | 'tzm-ma' | 'ug' | 'ug-cn' | 'uk' | 'uk-ua' | 'ur' | 'ur-in' | 'ur-pk' | 'uz' | 'uz-af' | 'uz-uz' | 'vai' | 'vai-lr' | 'vi' | 'vi-vn' | 'vo' | 'vo-001' | 'vun' | 'vun-tz' | 'wae' | 'wae-ch' | 'wo' | 'wo-sn' | 'xog' | 'xog-ug' | 'yav' | 'yav-cm' | 'yo' | 'yo-bj' | 'yo-ng' | 'yue' | 'yue-cn' | 'yue-hk' | 'zgh' | 'zgh-ma' | 'zh' | 'zh-cn' | 'zh-hk' | 'zh-mo' | 'zh-sg' | 'zh-tw' | 'zh-hans' | 'zh-hant' | 'zu' | 'zu-za'", ""));
        }
        if (matchPrefix !== undefined) {
            requestContext.setQueryParam("matchPrefix", ObjectSerializer_1.ObjectSerializer.serialize(matchPrefix, "boolean", ""));
        }
        if (autocomplete !== undefined) {
            requestContext.setQueryParam("autocomplete", ObjectSerializer_1.ObjectSerializer.serialize(autocomplete, "boolean", ""));
        }
        if (popularityBoost !== undefined) {
            requestContext.setQueryParam("popularityBoost", ObjectSerializer_1.ObjectSerializer.serialize(popularityBoost, "number", ""));
        }
        if (boostLimit !== undefined) {
            requestContext.setQueryParam("boostLimit", ObjectSerializer_1.ObjectSerializer.serialize(boostLimit, "number", ""));
        }
        if (minScore !== undefined) {
            requestContext.setQueryParam("minScore", ObjectSerializer_1.ObjectSerializer.serialize(minScore, "number", ""));
        }
        if (boostRecent !== undefined) {
            requestContext.setQueryParam("boostRecent", ObjectSerializer_1.ObjectSerializer.serialize(boostRecent, "string", ""));
        }
        if (tableId !== undefined) {
            requestContext.setQueryParam("tableId", ObjectSerializer_1.ObjectSerializer.serialize(tableId, "number", "int64"));
        }
        if (hubdbQuery !== undefined) {
            requestContext.setQueryParam("hubdbQuery", ObjectSerializer_1.ObjectSerializer.serialize(hubdbQuery, "string", ""));
        }
        if (domain !== undefined) {
            requestContext.setQueryParam("domain", ObjectSerializer_1.ObjectSerializer.serialize(domain, "Array<string>", ""));
        }
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer_1.ObjectSerializer.serialize(type, "Array<'LANDING_PAGE' | 'BLOG_POST' | 'SITE_PAGE' | 'KNOWLEDGE_ARTICLE' | 'LISTING_PAGE'>", ""));
        }
        if (pathPrefix !== undefined) {
            requestContext.setQueryParam("pathPrefix", ObjectSerializer_1.ObjectSerializer.serialize(pathPrefix, "Array<string>", ""));
        }
        if (property !== undefined) {
            requestContext.setQueryParam("property", ObjectSerializer_1.ObjectSerializer.serialize(property, "Array<string>", ""));
        }
        if (length !== undefined) {
            requestContext.setQueryParam("length", ObjectSerializer_1.ObjectSerializer.serialize(length, "'SHORT' | 'LONG'", ""));
        }
        if (groupId !== undefined) {
            requestContext.setQueryParam("groupId", ObjectSerializer_1.ObjectSerializer.serialize(groupId, "Array<number>", "int64"));
        }
        // Header Params
        // Form Params
        // Body Params
        var authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"];
        if (authMethod) {
            await;
            authMethod.applySecurityAuthentication(requestContext);
        }
        return requestContext;
    };
    return DefaultApiRequestFactory;
})(baseapi_1.BaseAPIRequestFactory);
exports.DefaultApiRequestFactory = DefaultApiRequestFactory;
var DefaultApiResponseProcessor = (function () {
    function DefaultApiResponseProcessor() {
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to getById
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = getById(response, http_1.ResponseContext);
        /**
         * Unwraps the actual response sent by the server from the response context and deserializes the response content
         * to the expected objects
         *
         * @params response Response returned by the server for a request to search
         * @throws ApiException if the response code was not in [200, 299]
         */
        this.async = search(response, http_1.ResponseContext);
    }
    DefaultApiResponseProcessor.prototype.Promise = function () {
        var contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
            var body_1 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "IndexedData", ""), as = IndexedData_1.IndexedData;
            return body_1;
        }
        if (util_1.isCodeInRange("0", response.httpStatusCode)) {
            var body_2 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
            throw new exception_1.ApiException(0, body_2);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            var body_3 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "IndexedData", ""), as = IndexedData_1.IndexedData;
            return body_3;
        }
        var body = response.body || "";
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    };
    DefaultApiResponseProcessor.prototype.Promise = function () {
        var contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
            var body_4 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "PublicSearchResults", ""), as = PublicSearchResults_1.PublicSearchResults;
            return body_4;
        }
        if (util_1.isCodeInRange("0", response.httpStatusCode)) {
            var body_5 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "Error", ""), as = Error;
            throw new exception_1.ApiException(0, body_5);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            var body_6 = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await, response.body.text(), contentType), "PublicSearchResults", ""), as = PublicSearchResults_1.PublicSearchResults;
            return body_6;
        }
        var body = response.body || "";
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    };
    return DefaultApiResponseProcessor;
})();
exports.DefaultApiResponseProcessor = DefaultApiResponseProcessor;
