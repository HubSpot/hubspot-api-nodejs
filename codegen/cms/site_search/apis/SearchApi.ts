// TODO: better import syntax?
import {BaseAPIRequestFactory} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { PublicSearchResults } from '../models/PublicSearchResults';

/**
 * no description
 */
export class SearchApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns any website content matching the given search criteria for a given HubSpot account. Searches can be filtered by content type, domain, or URL path. Includes options for weighing results by recency and popularity, along with language support.
     * Search your site
     * @param analytics 
     * @param autocomplete 
     * @param boostLimit 
     * @param boostRecent 
     * @param domain 
     * @param groupId 
     * @param hubdbQuery 
     * @param language 
     * @param length 
     * @param limit The maximum number of results to display per page.
     * @param matchPrefix 
     * @param offset 
     * @param pathPrefix 
     * @param popularityBoost 
     * @param property 
     * @param q 
     * @param tableId 
     * @param type 
     * @param types 
     */
    public async cmsSiteSearchV3Search(analytics?: boolean, autocomplete?: boolean, boostLimit?: number, boostRecent?: string, domain?: Array<string>, groupId?: Array<number>, hubdbQuery?: string, language?: 'aa' | 'ab' | 'ae' | 'af' | 'af-na' | 'af-za' | 'agq' | 'agq-cm' | 'ak' | 'ak-gh' | 'am' | 'am-et' | 'an' | 'ann' | 'ann-ng' | 'ar' | 'ar-001' | 'ar-ae' | 'ar-bh' | 'ar-dj' | 'ar-dz' | 'ar-eg' | 'ar-eh' | 'ar-er' | 'ar-il' | 'ar-iq' | 'ar-jo' | 'ar-km' | 'ar-kw' | 'ar-lb' | 'ar-ly' | 'ar-ma' | 'ar-mr' | 'ar-om' | 'ar-ps' | 'ar-qa' | 'ar-sa' | 'ar-sd' | 'ar-so' | 'ar-ss' | 'ar-sy' | 'ar-td' | 'ar-tn' | 'ar-ye' | 'as' | 'as-in' | 'asa' | 'asa-tz' | 'ast' | 'ast-es' | 'av' | 'ay' | 'az' | 'az-az' | 'ba' | 'bal' | 'bal-pk' | 'bas' | 'bas-cm' | 'be' | 'be-by' | 'bem' | 'bem-zm' | 'bez' | 'bez-tz' | 'bg' | 'bg-bg' | 'bgc' | 'bgc-in' | 'bho' | 'bho-in' | 'bi' | 'blo' | 'blo-bj' | 'bm' | 'bm-ml' | 'bn' | 'bn-bd' | 'bn-in' | 'bo' | 'bo-cn' | 'bo-in' | 'br' | 'br-fr' | 'brx' | 'brx-in' | 'bs' | 'bs-ba' | 'ca' | 'ca-ad' | 'ca-es' | 'ca-fr' | 'ca-it' | 'ccp' | 'ccp-bd' | 'ccp-in' | 'ce' | 'ce-ru' | 'ceb' | 'ceb-ph' | 'cgg' | 'cgg-ug' | 'ch' | 'chr' | 'chr-us' | 'ckb' | 'ckb-iq' | 'ckb-ir' | 'co' | 'cr' | 'cs' | 'cs-cz' | 'csw' | 'csw-ca' | 'cu' | 'cu-ru' | 'cv' | 'cv-ru' | 'cy' | 'cy-gb' | 'da' | 'da-dk' | 'da-gl' | 'dav' | 'dav-ke' | 'de' | 'de-at' | 'de-be' | 'de-ch' | 'de-de' | 'de-gr' | 'de-it' | 'de-li' | 'de-lu' | 'dje' | 'dje-ne' | 'doi' | 'doi-in' | 'dsb' | 'dsb-de' | 'dua' | 'dua-cm' | 'dv' | 'dyo' | 'dyo-sn' | 'dz' | 'dz-bt' | 'ebu' | 'ebu-ke' | 'ee' | 'ee-gh' | 'ee-tg' | 'el' | 'el-cy' | 'el-gr' | 'en' | 'en-001' | 'en-150' | 'en-ae' | 'en-ag' | 'en-ai' | 'en-as' | 'en-at' | 'en-au' | 'en-bb' | 'en-be' | 'en-bi' | 'en-bm' | 'en-bs' | 'en-bw' | 'en-bz' | 'en-ca' | 'en-cc' | 'en-ch' | 'en-ck' | 'en-cm' | 'en-cn' | 'en-cx' | 'en-cy' | 'en-cz' | 'en-de' | 'en-dg' | 'en-dk' | 'en-dm' | 'en-ee' | 'en-eg' | 'en-er' | 'en-es' | 'en-fi' | 'en-fj' | 'en-fk' | 'en-fm' | 'en-fr' | 'en-gb' | 'en-gd' | 'en-gg' | 'en-gh' | 'en-gi' | 'en-gm' | 'en-gs' | 'en-gu' | 'en-gy' | 'en-hk' | 'en-hu' | 'en-id' | 'en-ie' | 'en-il' | 'en-im' | 'en-in' | 'en-io' | 'en-it' | 'en-je' | 'en-jm' | 'en-ke' | 'en-ki' | 'en-kn' | 'en-ky' | 'en-lc' | 'en-lr' | 'en-ls' | 'en-lu' | 'en-mg' | 'en-mh' | 'en-mo' | 'en-mp' | 'en-ms' | 'en-mt' | 'en-mu' | 'en-mv' | 'en-mw' | 'en-mx' | 'en-my' | 'en-na' | 'en-nf' | 'en-ng' | 'en-nl' | 'en-no' | 'en-nr' | 'en-nu' | 'en-nz' | 'en-pg' | 'en-ph' | 'en-pk' | 'en-pl' | 'en-pn' | 'en-pr' | 'en-pt' | 'en-pw' | 'en-ro' | 'en-rw' | 'en-sb' | 'en-sc' | 'en-sd' | 'en-se' | 'en-sg' | 'en-sh' | 'en-si' | 'en-sk' | 'en-sl' | 'en-ss' | 'en-sx' | 'en-sz' | 'en-tc' | 'en-th' | 'en-tk' | 'en-tn' | 'en-to' | 'en-tt' | 'en-tv' | 'en-tz' | 'en-ug' | 'en-um' | 'en-us' | 'en-vc' | 'en-vg' | 'en-vi' | 'en-vn' | 'en-vu' | 'en-ws' | 'en-za' | 'en-zm' | 'en-zw' | 'eo' | 'eo-001' | 'es' | 'es-419' | 'es-ar' | 'es-bo' | 'es-br' | 'es-bz' | 'es-cl' | 'es-co' | 'es-cr' | 'es-cu' | 'es-do' | 'es-ea' | 'es-ec' | 'es-es' | 'es-gq' | 'es-gt' | 'es-hn' | 'es-ic' | 'es-mx' | 'es-ni' | 'es-pa' | 'es-pe' | 'es-ph' | 'es-pr' | 'es-py' | 'es-sv' | 'es-us' | 'es-uy' | 'es-ve' | 'et' | 'et-ee' | 'eu' | 'eu-es' | 'ewo' | 'ewo-cm' | 'fa' | 'fa-af' | 'fa-ir' | 'ff' | 'ff-bf' | 'ff-cm' | 'ff-gh' | 'ff-gm' | 'ff-gn' | 'ff-gw' | 'ff-lr' | 'ff-mr' | 'ff-ne' | 'ff-ng' | 'ff-sl' | 'ff-sn' | 'fi' | 'fi-fi' | 'fil' | 'fil-ph' | 'fj' | 'fo' | 'fo-dk' | 'fo-fo' | 'fr' | 'fr-be' | 'fr-bf' | 'fr-bi' | 'fr-bj' | 'fr-bl' | 'fr-ca' | 'fr-cd' | 'fr-cf' | 'fr-cg' | 'fr-ch' | 'fr-ci' | 'fr-cm' | 'fr-dj' | 'fr-dz' | 'fr-fr' | 'fr-ga' | 'fr-gf' | 'fr-gn' | 'fr-gp' | 'fr-gq' | 'fr-ht' | 'fr-km' | 'fr-lu' | 'fr-ma' | 'fr-mc' | 'fr-mf' | 'fr-mg' | 'fr-ml' | 'fr-mq' | 'fr-mr' | 'fr-mu' | 'fr-nc' | 'fr-ne' | 'fr-pf' | 'fr-pm' | 'fr-re' | 'fr-rw' | 'fr-sc' | 'fr-sn' | 'fr-sy' | 'fr-td' | 'fr-tg' | 'fr-tn' | 'fr-vu' | 'fr-wf' | 'fr-yt' | 'frr' | 'frr-de' | 'fur' | 'fur-it' | 'fy' | 'fy-nl' | 'ga' | 'ga-gb' | 'ga-ie' | 'gaa' | 'gaa-gh' | 'gd' | 'gd-gb' | 'gl' | 'gl-es' | 'gn' | 'gsw' | 'gsw-ch' | 'gsw-fr' | 'gsw-li' | 'gu' | 'gu-in' | 'guz' | 'guz-ke' | 'gv' | 'gv-im' | 'ha' | 'ha-gh' | 'ha-ne' | 'ha-ng' | 'haw' | 'haw-us' | 'he' | 'he-il' | 'hi' | 'hi-in' | 'hmn' | 'ho' | 'hr' | 'hr-ba' | 'hr-hr' | 'hsb' | 'hsb-de' | 'ht' | 'ht-ht' | 'hu' | 'hu-hu' | 'hy' | 'hy-am' | 'hz' | 'ia' | 'ia-001' | 'id' | 'id-id' | 'ie' | 'ie-ee' | 'ig' | 'ig-ng' | 'ii' | 'ii-cn' | 'ik' | 'io' | 'is' | 'is-is' | 'it' | 'it-ch' | 'it-it' | 'it-sm' | 'it-va' | 'iu' | 'ja' | 'ja-jp' | 'jgo' | 'jgo-cm' | 'jmc' | 'jmc-tz' | 'jv' | 'jv-id' | 'ka' | 'ka-ge' | 'kab' | 'kab-dz' | 'kam' | 'kam-ke' | 'kar' | 'kde' | 'kde-tz' | 'kea' | 'kea-cv' | 'kg' | 'kgp' | 'kgp-br' | 'kh' | 'khq' | 'khq-ml' | 'ki' | 'ki-ke' | 'kj' | 'kk' | 'kk-kz' | 'kkj' | 'kkj-cm' | 'kl' | 'kl-gl' | 'kln' | 'kln-ke' | 'km' | 'km-kh' | 'kn' | 'kn-in' | 'ko' | 'ko-cn' | 'ko-kp' | 'ko-kr' | 'kok' | 'kok-in' | 'kr' | 'ks' | 'ks-in' | 'ksb' | 'ksb-tz' | 'ksf' | 'ksf-cm' | 'ksh' | 'ksh-de' | 'ku' | 'ku-tr' | 'kv' | 'kw' | 'kw-gb' | 'kxv' | 'kxv-in' | 'ky' | 'ky-kg' | 'la' | 'lag' | 'lag-tz' | 'lb' | 'lb-lu' | 'lg' | 'lg-ug' | 'li' | 'lij' | 'lij-it' | 'lkt' | 'lkt-us' | 'lmo' | 'lmo-it' | 'ln' | 'ln-ao' | 'ln-cd' | 'ln-cf' | 'ln-cg' | 'lo' | 'lo-la' | 'lrc' | 'lrc-iq' | 'lrc-ir' | 'lt' | 'lt-lt' | 'lu' | 'lu-cd' | 'luo' | 'luo-ke' | 'luy' | 'luy-ke' | 'lv' | 'lv-lv' | 'mai' | 'mai-in' | 'mas' | 'mas-ke' | 'mas-tz' | 'mdf' | 'mdf-ru' | 'mer' | 'mer-ke' | 'mfe' | 'mfe-mu' | 'mg' | 'mg-mg' | 'mgh' | 'mgh-mz' | 'mgo' | 'mgo-cm' | 'mh' | 'mi' | 'mi-nz' | 'mk' | 'mk-mk' | 'ml' | 'ml-in' | 'mn' | 'mn-mn' | 'mni' | 'mni-in' | 'mr' | 'mr-in' | 'ms' | 'ms-bn' | 'ms-id' | 'ms-my' | 'ms-sg' | 'mt' | 'mt-mt' | 'mua' | 'mua-cm' | 'my' | 'my-mm' | 'mzn' | 'mzn-ir' | 'na' | 'naq' | 'naq-na' | 'nb' | 'nb-no' | 'nb-sj' | 'nd' | 'nd-zw' | 'nds' | 'nds-de' | 'nds-nl' | 'ne' | 'ne-in' | 'ne-np' | 'ng' | 'nl' | 'nl-aw' | 'nl-be' | 'nl-bq' | 'nl-ch' | 'nl-cw' | 'nl-lu' | 'nl-nl' | 'nl-sr' | 'nl-sx' | 'nmg' | 'nmg-cm' | 'nn' | 'nn-no' | 'nnh' | 'nnh-cm' | 'no' | 'no-no' | 'nqo' | 'nqo-gn' | 'nr' | 'nso' | 'nso-za' | 'nus' | 'nus-ss' | 'nv' | 'ny' | 'nyn' | 'nyn-ug' | 'oc' | 'oc-es' | 'oc-fr' | 'oj' | 'om' | 'om-et' | 'om-ke' | 'or' | 'or-in' | 'os' | 'os-ge' | 'os-ru' | 'pa' | 'pa-in' | 'pa-pk' | 'pcm' | 'pcm-ng' | 'pi' | 'pis' | 'pis-sb' | 'pl' | 'pl-pl' | 'prg' | 'prg-001' | 'ps' | 'ps-af' | 'ps-pk' | 'pt' | 'pt-ao' | 'pt-br' | 'pt-ch' | 'pt-cv' | 'pt-gq' | 'pt-gw' | 'pt-lu' | 'pt-mo' | 'pt-mz' | 'pt-pt' | 'pt-st' | 'pt-tl' | 'qu' | 'qu-bo' | 'qu-ec' | 'qu-pe' | 'raj' | 'raj-in' | 'rm' | 'rm-ch' | 'rn' | 'rn-bi' | 'ro' | 'ro-md' | 'ro-ro' | 'rof' | 'rof-tz' | 'ru' | 'ru-by' | 'ru-kg' | 'ru-kz' | 'ru-md' | 'ru-ru' | 'ru-ua' | 'rw' | 'rw-rw' | 'rwk' | 'rwk-tz' | 'sa' | 'sa-in' | 'sah' | 'sah-ru' | 'saq' | 'saq-ke' | 'sat' | 'sat-in' | 'sbp' | 'sbp-tz' | 'sc' | 'sc-it' | 'sd' | 'sd-in' | 'sd-pk' | 'se' | 'se-fi' | 'se-no' | 'se-se' | 'seh' | 'seh-mz' | 'ses' | 'ses-ml' | 'sg' | 'sg-cf' | 'shi' | 'shi-ma' | 'si' | 'si-lk' | 'sk' | 'sk-sk' | 'sl' | 'sl-si' | 'sm' | 'smn' | 'smn-fi' | 'sms' | 'sms-fi' | 'sn' | 'sn-zw' | 'so' | 'so-dj' | 'so-et' | 'so-ke' | 'so-so' | 'sq' | 'sq-al' | 'sq-mk' | 'sq-xk' | 'sr' | 'sr-ba' | 'sr-cs' | 'sr-me' | 'sr-rs' | 'sr-xk' | 'ss' | 'st' | 'st-ls' | 'st-za' | 'su' | 'su-id' | 'sv' | 'sv-ax' | 'sv-fi' | 'sv-se' | 'sw' | 'sw-cd' | 'sw-ke' | 'sw-tz' | 'sw-ug' | 'sy' | 'syr' | 'syr-iq' | 'syr-sy' | 'szl' | 'szl-pl' | 'ta' | 'ta-in' | 'ta-lk' | 'ta-my' | 'ta-sg' | 'te' | 'te-in' | 'teo' | 'teo-ke' | 'teo-ug' | 'tg' | 'tg-tj' | 'th' | 'th-th' | 'ti' | 'ti-er' | 'ti-et' | 'tk' | 'tk-tm' | 'tl' | 'tn' | 'tn-bw' | 'tn-za' | 'to' | 'to-to' | 'tok' | 'tok-001' | 'tr' | 'tr-cy' | 'tr-tr' | 'ts' | 'tt' | 'tt-ru' | 'tw' | 'twq' | 'twq-ne' | 'ty' | 'tzm' | 'tzm-ma' | 'ug' | 'ug-cn' | 'uk' | 'uk-ua' | 'ur' | 'ur-in' | 'ur-pk' | 'uz' | 'uz-af' | 'uz-uz' | 'vai' | 'vai-lr' | 've' | 'vec' | 'vec-it' | 'vi' | 'vi-vn' | 'vmw' | 'vmw-mz' | 'vo' | 'vo-001' | 'vun' | 'vun-tz' | 'wa' | 'wae' | 'wae-ch' | 'wo' | 'wo-sn' | 'xh' | 'xh-za' | 'xnr' | 'xnr-in' | 'xog' | 'xog-ug' | 'yav' | 'yav-cm' | 'yi' | 'yi-001' | 'yi-ua' | 'yo' | 'yo-bj' | 'yo-ng' | 'yrl' | 'yrl-br' | 'yrl-co' | 'yrl-ve' | 'yue' | 'yue-cn' | 'yue-hk' | 'yue-mo' | 'za' | 'za-cn' | 'zgh' | 'zgh-ma' | 'zh' | 'zh-cn' | 'zh-hans' | 'zh-hant' | 'zh-hk' | 'zh-mo' | 'zh-my' | 'zh-sg' | 'zh-tw' | 'zu' | 'zu-za', length?: 'LONG' | 'SHORT', limit?: number, matchPrefix?: boolean, offset?: number, pathPrefix?: Array<string>, popularityBoost?: number, property?: Array<string>, q?: string, tableId?: number, type?: Array<string>, types?: Array<'LANDING_PAGE' | 'BLOG_POST' | 'SITE_PAGE' | 'KNOWLEDGE_ARTICLE' | 'LISTING_PAGE' | 'STRUCTURED_CONTENT'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




















        // Path Params
        const localVarPath = '/cms/site-search/v3/search';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (analytics !== undefined) {
            requestContext.setQueryParam("analytics", ObjectSerializer.serialize(analytics, "boolean", ""));
        }

        // Query Params
        if (autocomplete !== undefined) {
            requestContext.setQueryParam("autocomplete", ObjectSerializer.serialize(autocomplete, "boolean", ""));
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
        if (domain !== undefined) {
            const serializedParams = ObjectSerializer.serialize(domain, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("domain", serializedParam);
            }
        }

        // Query Params
        if (groupId !== undefined) {
            const serializedParams = ObjectSerializer.serialize(groupId, "Array<number>", "int64");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("groupId", serializedParam);
            }
        }

        // Query Params
        if (hubdbQuery !== undefined) {
            requestContext.setQueryParam("hubdbQuery", ObjectSerializer.serialize(hubdbQuery, "string", ""));
        }

        // Query Params
        if (language !== undefined) {
            requestContext.setQueryParam("language", ObjectSerializer.serialize(language, "'aa' | 'ab' | 'ae' | 'af' | 'af-na' | 'af-za' | 'agq' | 'agq-cm' | 'ak' | 'ak-gh' | 'am' | 'am-et' | 'an' | 'ann' | 'ann-ng' | 'ar' | 'ar-001' | 'ar-ae' | 'ar-bh' | 'ar-dj' | 'ar-dz' | 'ar-eg' | 'ar-eh' | 'ar-er' | 'ar-il' | 'ar-iq' | 'ar-jo' | 'ar-km' | 'ar-kw' | 'ar-lb' | 'ar-ly' | 'ar-ma' | 'ar-mr' | 'ar-om' | 'ar-ps' | 'ar-qa' | 'ar-sa' | 'ar-sd' | 'ar-so' | 'ar-ss' | 'ar-sy' | 'ar-td' | 'ar-tn' | 'ar-ye' | 'as' | 'as-in' | 'asa' | 'asa-tz' | 'ast' | 'ast-es' | 'av' | 'ay' | 'az' | 'az-az' | 'ba' | 'bal' | 'bal-pk' | 'bas' | 'bas-cm' | 'be' | 'be-by' | 'bem' | 'bem-zm' | 'bez' | 'bez-tz' | 'bg' | 'bg-bg' | 'bgc' | 'bgc-in' | 'bho' | 'bho-in' | 'bi' | 'blo' | 'blo-bj' | 'bm' | 'bm-ml' | 'bn' | 'bn-bd' | 'bn-in' | 'bo' | 'bo-cn' | 'bo-in' | 'br' | 'br-fr' | 'brx' | 'brx-in' | 'bs' | 'bs-ba' | 'ca' | 'ca-ad' | 'ca-es' | 'ca-fr' | 'ca-it' | 'ccp' | 'ccp-bd' | 'ccp-in' | 'ce' | 'ce-ru' | 'ceb' | 'ceb-ph' | 'cgg' | 'cgg-ug' | 'ch' | 'chr' | 'chr-us' | 'ckb' | 'ckb-iq' | 'ckb-ir' | 'co' | 'cr' | 'cs' | 'cs-cz' | 'csw' | 'csw-ca' | 'cu' | 'cu-ru' | 'cv' | 'cv-ru' | 'cy' | 'cy-gb' | 'da' | 'da-dk' | 'da-gl' | 'dav' | 'dav-ke' | 'de' | 'de-at' | 'de-be' | 'de-ch' | 'de-de' | 'de-gr' | 'de-it' | 'de-li' | 'de-lu' | 'dje' | 'dje-ne' | 'doi' | 'doi-in' | 'dsb' | 'dsb-de' | 'dua' | 'dua-cm' | 'dv' | 'dyo' | 'dyo-sn' | 'dz' | 'dz-bt' | 'ebu' | 'ebu-ke' | 'ee' | 'ee-gh' | 'ee-tg' | 'el' | 'el-cy' | 'el-gr' | 'en' | 'en-001' | 'en-150' | 'en-ae' | 'en-ag' | 'en-ai' | 'en-as' | 'en-at' | 'en-au' | 'en-bb' | 'en-be' | 'en-bi' | 'en-bm' | 'en-bs' | 'en-bw' | 'en-bz' | 'en-ca' | 'en-cc' | 'en-ch' | 'en-ck' | 'en-cm' | 'en-cn' | 'en-cx' | 'en-cy' | 'en-cz' | 'en-de' | 'en-dg' | 'en-dk' | 'en-dm' | 'en-ee' | 'en-eg' | 'en-er' | 'en-es' | 'en-fi' | 'en-fj' | 'en-fk' | 'en-fm' | 'en-fr' | 'en-gb' | 'en-gd' | 'en-gg' | 'en-gh' | 'en-gi' | 'en-gm' | 'en-gs' | 'en-gu' | 'en-gy' | 'en-hk' | 'en-hu' | 'en-id' | 'en-ie' | 'en-il' | 'en-im' | 'en-in' | 'en-io' | 'en-it' | 'en-je' | 'en-jm' | 'en-ke' | 'en-ki' | 'en-kn' | 'en-ky' | 'en-lc' | 'en-lr' | 'en-ls' | 'en-lu' | 'en-mg' | 'en-mh' | 'en-mo' | 'en-mp' | 'en-ms' | 'en-mt' | 'en-mu' | 'en-mv' | 'en-mw' | 'en-mx' | 'en-my' | 'en-na' | 'en-nf' | 'en-ng' | 'en-nl' | 'en-no' | 'en-nr' | 'en-nu' | 'en-nz' | 'en-pg' | 'en-ph' | 'en-pk' | 'en-pl' | 'en-pn' | 'en-pr' | 'en-pt' | 'en-pw' | 'en-ro' | 'en-rw' | 'en-sb' | 'en-sc' | 'en-sd' | 'en-se' | 'en-sg' | 'en-sh' | 'en-si' | 'en-sk' | 'en-sl' | 'en-ss' | 'en-sx' | 'en-sz' | 'en-tc' | 'en-th' | 'en-tk' | 'en-tn' | 'en-to' | 'en-tt' | 'en-tv' | 'en-tz' | 'en-ug' | 'en-um' | 'en-us' | 'en-vc' | 'en-vg' | 'en-vi' | 'en-vn' | 'en-vu' | 'en-ws' | 'en-za' | 'en-zm' | 'en-zw' | 'eo' | 'eo-001' | 'es' | 'es-419' | 'es-ar' | 'es-bo' | 'es-br' | 'es-bz' | 'es-cl' | 'es-co' | 'es-cr' | 'es-cu' | 'es-do' | 'es-ea' | 'es-ec' | 'es-es' | 'es-gq' | 'es-gt' | 'es-hn' | 'es-ic' | 'es-mx' | 'es-ni' | 'es-pa' | 'es-pe' | 'es-ph' | 'es-pr' | 'es-py' | 'es-sv' | 'es-us' | 'es-uy' | 'es-ve' | 'et' | 'et-ee' | 'eu' | 'eu-es' | 'ewo' | 'ewo-cm' | 'fa' | 'fa-af' | 'fa-ir' | 'ff' | 'ff-bf' | 'ff-cm' | 'ff-gh' | 'ff-gm' | 'ff-gn' | 'ff-gw' | 'ff-lr' | 'ff-mr' | 'ff-ne' | 'ff-ng' | 'ff-sl' | 'ff-sn' | 'fi' | 'fi-fi' | 'fil' | 'fil-ph' | 'fj' | 'fo' | 'fo-dk' | 'fo-fo' | 'fr' | 'fr-be' | 'fr-bf' | 'fr-bi' | 'fr-bj' | 'fr-bl' | 'fr-ca' | 'fr-cd' | 'fr-cf' | 'fr-cg' | 'fr-ch' | 'fr-ci' | 'fr-cm' | 'fr-dj' | 'fr-dz' | 'fr-fr' | 'fr-ga' | 'fr-gf' | 'fr-gn' | 'fr-gp' | 'fr-gq' | 'fr-ht' | 'fr-km' | 'fr-lu' | 'fr-ma' | 'fr-mc' | 'fr-mf' | 'fr-mg' | 'fr-ml' | 'fr-mq' | 'fr-mr' | 'fr-mu' | 'fr-nc' | 'fr-ne' | 'fr-pf' | 'fr-pm' | 'fr-re' | 'fr-rw' | 'fr-sc' | 'fr-sn' | 'fr-sy' | 'fr-td' | 'fr-tg' | 'fr-tn' | 'fr-vu' | 'fr-wf' | 'fr-yt' | 'frr' | 'frr-de' | 'fur' | 'fur-it' | 'fy' | 'fy-nl' | 'ga' | 'ga-gb' | 'ga-ie' | 'gaa' | 'gaa-gh' | 'gd' | 'gd-gb' | 'gl' | 'gl-es' | 'gn' | 'gsw' | 'gsw-ch' | 'gsw-fr' | 'gsw-li' | 'gu' | 'gu-in' | 'guz' | 'guz-ke' | 'gv' | 'gv-im' | 'ha' | 'ha-gh' | 'ha-ne' | 'ha-ng' | 'haw' | 'haw-us' | 'he' | 'he-il' | 'hi' | 'hi-in' | 'hmn' | 'ho' | 'hr' | 'hr-ba' | 'hr-hr' | 'hsb' | 'hsb-de' | 'ht' | 'ht-ht' | 'hu' | 'hu-hu' | 'hy' | 'hy-am' | 'hz' | 'ia' | 'ia-001' | 'id' | 'id-id' | 'ie' | 'ie-ee' | 'ig' | 'ig-ng' | 'ii' | 'ii-cn' | 'ik' | 'io' | 'is' | 'is-is' | 'it' | 'it-ch' | 'it-it' | 'it-sm' | 'it-va' | 'iu' | 'ja' | 'ja-jp' | 'jgo' | 'jgo-cm' | 'jmc' | 'jmc-tz' | 'jv' | 'jv-id' | 'ka' | 'ka-ge' | 'kab' | 'kab-dz' | 'kam' | 'kam-ke' | 'kar' | 'kde' | 'kde-tz' | 'kea' | 'kea-cv' | 'kg' | 'kgp' | 'kgp-br' | 'kh' | 'khq' | 'khq-ml' | 'ki' | 'ki-ke' | 'kj' | 'kk' | 'kk-kz' | 'kkj' | 'kkj-cm' | 'kl' | 'kl-gl' | 'kln' | 'kln-ke' | 'km' | 'km-kh' | 'kn' | 'kn-in' | 'ko' | 'ko-cn' | 'ko-kp' | 'ko-kr' | 'kok' | 'kok-in' | 'kr' | 'ks' | 'ks-in' | 'ksb' | 'ksb-tz' | 'ksf' | 'ksf-cm' | 'ksh' | 'ksh-de' | 'ku' | 'ku-tr' | 'kv' | 'kw' | 'kw-gb' | 'kxv' | 'kxv-in' | 'ky' | 'ky-kg' | 'la' | 'lag' | 'lag-tz' | 'lb' | 'lb-lu' | 'lg' | 'lg-ug' | 'li' | 'lij' | 'lij-it' | 'lkt' | 'lkt-us' | 'lmo' | 'lmo-it' | 'ln' | 'ln-ao' | 'ln-cd' | 'ln-cf' | 'ln-cg' | 'lo' | 'lo-la' | 'lrc' | 'lrc-iq' | 'lrc-ir' | 'lt' | 'lt-lt' | 'lu' | 'lu-cd' | 'luo' | 'luo-ke' | 'luy' | 'luy-ke' | 'lv' | 'lv-lv' | 'mai' | 'mai-in' | 'mas' | 'mas-ke' | 'mas-tz' | 'mdf' | 'mdf-ru' | 'mer' | 'mer-ke' | 'mfe' | 'mfe-mu' | 'mg' | 'mg-mg' | 'mgh' | 'mgh-mz' | 'mgo' | 'mgo-cm' | 'mh' | 'mi' | 'mi-nz' | 'mk' | 'mk-mk' | 'ml' | 'ml-in' | 'mn' | 'mn-mn' | 'mni' | 'mni-in' | 'mr' | 'mr-in' | 'ms' | 'ms-bn' | 'ms-id' | 'ms-my' | 'ms-sg' | 'mt' | 'mt-mt' | 'mua' | 'mua-cm' | 'my' | 'my-mm' | 'mzn' | 'mzn-ir' | 'na' | 'naq' | 'naq-na' | 'nb' | 'nb-no' | 'nb-sj' | 'nd' | 'nd-zw' | 'nds' | 'nds-de' | 'nds-nl' | 'ne' | 'ne-in' | 'ne-np' | 'ng' | 'nl' | 'nl-aw' | 'nl-be' | 'nl-bq' | 'nl-ch' | 'nl-cw' | 'nl-lu' | 'nl-nl' | 'nl-sr' | 'nl-sx' | 'nmg' | 'nmg-cm' | 'nn' | 'nn-no' | 'nnh' | 'nnh-cm' | 'no' | 'no-no' | 'nqo' | 'nqo-gn' | 'nr' | 'nso' | 'nso-za' | 'nus' | 'nus-ss' | 'nv' | 'ny' | 'nyn' | 'nyn-ug' | 'oc' | 'oc-es' | 'oc-fr' | 'oj' | 'om' | 'om-et' | 'om-ke' | 'or' | 'or-in' | 'os' | 'os-ge' | 'os-ru' | 'pa' | 'pa-in' | 'pa-pk' | 'pcm' | 'pcm-ng' | 'pi' | 'pis' | 'pis-sb' | 'pl' | 'pl-pl' | 'prg' | 'prg-001' | 'ps' | 'ps-af' | 'ps-pk' | 'pt' | 'pt-ao' | 'pt-br' | 'pt-ch' | 'pt-cv' | 'pt-gq' | 'pt-gw' | 'pt-lu' | 'pt-mo' | 'pt-mz' | 'pt-pt' | 'pt-st' | 'pt-tl' | 'qu' | 'qu-bo' | 'qu-ec' | 'qu-pe' | 'raj' | 'raj-in' | 'rm' | 'rm-ch' | 'rn' | 'rn-bi' | 'ro' | 'ro-md' | 'ro-ro' | 'rof' | 'rof-tz' | 'ru' | 'ru-by' | 'ru-kg' | 'ru-kz' | 'ru-md' | 'ru-ru' | 'ru-ua' | 'rw' | 'rw-rw' | 'rwk' | 'rwk-tz' | 'sa' | 'sa-in' | 'sah' | 'sah-ru' | 'saq' | 'saq-ke' | 'sat' | 'sat-in' | 'sbp' | 'sbp-tz' | 'sc' | 'sc-it' | 'sd' | 'sd-in' | 'sd-pk' | 'se' | 'se-fi' | 'se-no' | 'se-se' | 'seh' | 'seh-mz' | 'ses' | 'ses-ml' | 'sg' | 'sg-cf' | 'shi' | 'shi-ma' | 'si' | 'si-lk' | 'sk' | 'sk-sk' | 'sl' | 'sl-si' | 'sm' | 'smn' | 'smn-fi' | 'sms' | 'sms-fi' | 'sn' | 'sn-zw' | 'so' | 'so-dj' | 'so-et' | 'so-ke' | 'so-so' | 'sq' | 'sq-al' | 'sq-mk' | 'sq-xk' | 'sr' | 'sr-ba' | 'sr-cs' | 'sr-me' | 'sr-rs' | 'sr-xk' | 'ss' | 'st' | 'st-ls' | 'st-za' | 'su' | 'su-id' | 'sv' | 'sv-ax' | 'sv-fi' | 'sv-se' | 'sw' | 'sw-cd' | 'sw-ke' | 'sw-tz' | 'sw-ug' | 'sy' | 'syr' | 'syr-iq' | 'syr-sy' | 'szl' | 'szl-pl' | 'ta' | 'ta-in' | 'ta-lk' | 'ta-my' | 'ta-sg' | 'te' | 'te-in' | 'teo' | 'teo-ke' | 'teo-ug' | 'tg' | 'tg-tj' | 'th' | 'th-th' | 'ti' | 'ti-er' | 'ti-et' | 'tk' | 'tk-tm' | 'tl' | 'tn' | 'tn-bw' | 'tn-za' | 'to' | 'to-to' | 'tok' | 'tok-001' | 'tr' | 'tr-cy' | 'tr-tr' | 'ts' | 'tt' | 'tt-ru' | 'tw' | 'twq' | 'twq-ne' | 'ty' | 'tzm' | 'tzm-ma' | 'ug' | 'ug-cn' | 'uk' | 'uk-ua' | 'ur' | 'ur-in' | 'ur-pk' | 'uz' | 'uz-af' | 'uz-uz' | 'vai' | 'vai-lr' | 've' | 'vec' | 'vec-it' | 'vi' | 'vi-vn' | 'vmw' | 'vmw-mz' | 'vo' | 'vo-001' | 'vun' | 'vun-tz' | 'wa' | 'wae' | 'wae-ch' | 'wo' | 'wo-sn' | 'xh' | 'xh-za' | 'xnr' | 'xnr-in' | 'xog' | 'xog-ug' | 'yav' | 'yav-cm' | 'yi' | 'yi-001' | 'yi-ua' | 'yo' | 'yo-bj' | 'yo-ng' | 'yrl' | 'yrl-br' | 'yrl-co' | 'yrl-ve' | 'yue' | 'yue-cn' | 'yue-hk' | 'yue-mo' | 'za' | 'za-cn' | 'zgh' | 'zgh-ma' | 'zh' | 'zh-cn' | 'zh-hans' | 'zh-hant' | 'zh-hk' | 'zh-mo' | 'zh-my' | 'zh-sg' | 'zh-tw' | 'zu' | 'zu-za'", ""));
        }

        // Query Params
        if (length !== undefined) {
            requestContext.setQueryParam("length", ObjectSerializer.serialize(length, "'LONG' | 'SHORT'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Query Params
        if (matchPrefix !== undefined) {
            requestContext.setQueryParam("matchPrefix", ObjectSerializer.serialize(matchPrefix, "boolean", ""));
        }

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", "int32"));
        }

        // Query Params
        if (pathPrefix !== undefined) {
            const serializedParams = ObjectSerializer.serialize(pathPrefix, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("pathPrefix", serializedParam);
            }
        }

        // Query Params
        if (popularityBoost !== undefined) {
            requestContext.setQueryParam("popularityBoost", ObjectSerializer.serialize(popularityBoost, "number", ""));
        }

        // Query Params
        if (property !== undefined) {
            const serializedParams = ObjectSerializer.serialize(property, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("property", serializedParam);
            }
        }

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }

        // Query Params
        if (tableId !== undefined) {
            requestContext.setQueryParam("tableId", ObjectSerializer.serialize(tableId, "number", "int64"));
        }

        // Query Params
        if (type !== undefined) {
            const serializedParams = ObjectSerializer.serialize(type, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("type", serializedParam);
            }
        }

        // Query Params
        if (types !== undefined) {
            const serializedParams = ObjectSerializer.serialize(types, "Array<'LANDING_PAGE' | 'BLOG_POST' | 'SITE_PAGE' | 'KNOWLEDGE_ARTICLE' | 'LISTING_PAGE' | 'STRUCTURED_CONTENT'>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("types", serializedParam);
            }
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class SearchApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cmsSiteSearchV3Search
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cmsSiteSearchV3SearchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PublicSearchResults >> {
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
