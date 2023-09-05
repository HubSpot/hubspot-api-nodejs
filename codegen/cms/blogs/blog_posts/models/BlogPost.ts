/**
 * Blog Post endpoints
 * Use these endpoints for interacting with Blog Posts, Blog Authors, and Blog Tags
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ContentLanguageVariation } from '../models/ContentLanguageVariation';
import { LayoutSection } from '../models/LayoutSection';

/**
* Model definition for a Blog Post.
*/
export class BlogPost {
    /**
    * The unique ID of the Blog Post.
    */
    'id': string;
    /**
    * The path of the this blog post. This field is appended to the domain to construct the url of this post.
    */
    'slug': string;
    /**
    * The ID of the parent Blog this Blog Post is associated with.
    */
    'contentGroupId': string;
    /**
    * The GUID of the marketing campaign this Blog Post is a part of.
    */
    'campaign': string;
    /**
    * ID of the type of object this is. Should always .
    */
    'categoryId': number;
    /**
    * An ENUM descibing the current state of this Blog Post.
    */
    'state': string;
    /**
    * The internal name of the Blog Post.
    */
    'name': string;
    'mabExperimentId': string;
    /**
    * The name of the user that updated this Blog Post.
    */
    'authorName': string;
    'abTestId': string;
    /**
    * The ID of the user that created this Blog Post.
    */
    'createdById': string;
    /**
    * The ID of the user that updated this Blog Post.
    */
    'updatedById': string;
    /**
    * The domain this Blog Post will resolve to. If null, the Blog Post will default to the domain of the ParentBlog.
    */
    'domain': string;
    'abStatus': BlogPostAbStatusEnum;
    'folderId': string;
    /**
    * A data structure containing the data for all the modules inside the containers for this post. This will only be populated if the page has widget containers.
    */
    'widgetContainers': { [key: string]: any; };
    /**
    * A data structure containing the data for all the modules for this page.
    */
    'widgets': { [key: string]: any; };
    /**
    * The explicitly defined ISO 639 language code of the Blog Post. If null, the Blog Post will default to the language of the ParentBlog.
    */
    'language': BlogPostLanguageEnum;
    /**
    * ID of the primary blog post this object was translated from.
    */
    'translatedFromId': string;
    'translations': { [key: string]: ContentLanguageVariation; };
    /**
    * The ID of the HubDB table this Blog Post references, if applicable
    */
    'dynamicPageHubDbTableId': string;
    'dynamicPageDataSourceType': number;
    'dynamicPageDataSourceId': string;
    /**
    * The ID of the Blog Author associated with this Blog Post.
    */
    'blogAuthorId': string;
    /**
    * List of IDs for the tags associated with this Blog Post.
    */
    'tagIds': Array<number>;
    /**
    * The html title of this Blog Post.
    */
    'htmlTitle': string;
    /**
    * Boolean to determine whether or not to respect publicAccessRules.
    */
    'publicAccessRulesEnabled': boolean;
    /**
    * Rules for require member registration to access private content.
    */
    'publicAccessRules': Array<any>;
    /**
    * Boolean to determine if this post should use a featuredImage.
    */
    'useFeaturedImage': boolean;
    /**
    * The summary of the blog post that will appear on the main listing page.
    */
    'postSummary': string;
    /**
    * The HTML of the main post body.
    */
    'postBody': string;
    /**
    * The contents of the RSS summary for this Blog Post.
    */
    'rssSummary': string;
    /**
    * The contents of the RSS body for this Blog Post.
    */
    'rssBody': string;
    /**
    * Boolean to allow overriding the AMP settings for the blog.
    */
    'enableGoogleAmpOutputOverride': boolean;
    /**
    * Set this to true if you want to be published immediately when the schedule publish endpoint is called, and to ignore the publish_date setting.
    */
    'publishImmediately': boolean;
    /**
    * The timestamp (ISO8601 format) when this Blog Post was deleted.
    */
    'archivedAt': number;
    /**
    * Optional override to set the URL to be used in the rel=canonical link tag on the page.
    */
    'linkRelCanonicalUrl': string;
    /**
    * If True, the post will not show up in your dashboard, although the post could still be live.
    */
    'archivedInDashboard': boolean;
    'pageExpiryEnabled': boolean;
    'pageExpiryRedirectId': number;
    'pageExpiryRedirectUrl': string;
    'pageExpiryDate': number;
    /**
    * Boolean to determine whether or not the Primary CSS Files should be applied.
    */
    'includeDefaultCustomCss': boolean;
    /**
    * Boolean to determine whether or not the styles from the template should be applied.
    */
    'enableLayoutStylesheets': boolean;
    /**
    * Boolean to determine whether or not the styles from the template should be applied.
    */
    'enableDomainStylesheets': boolean;
    'layoutSections': { [key: string]: LayoutSection; };
    /**
    * Alt Text of the featuredImage.
    */
    'featuredImageAltText': string;
    /**
    * List of stylesheets to attach to this blog post. These stylesheets are attached to just this page. Order of precedence is bottom to top, just like in the HTML.
    */
    'attachedStylesheets': Array<{ [key: string]: any; }>;
    /**
    * A description that goes in <meta> tag on the page.
    */
    'metaDescription': string;
    /**
    * Custom HTML for embed codes, javascript, etc. that goes in the <head> tag of the page.
    */
    'headHtml': string;
    /**
    * Custom HTML for embed codes, javascript that should be placed before the </body> tag of the page.
    */
    'footerHtml': string;
    /**
    * The featuredImage of this Blog Post.
    */
    'featuredImage': string;
    'themeSettingsValues': { [key: string]: any; };
    /**
    * A generated field representing the URL of this blog post.
    */
    'url': string;
    /**
    * Set this to create a password protected page. Entering the password will be required to view the page.
    */
    'password': string;
    /**
    * A generated ENUM descibing the current state of this Blog Post. Should always match state.
    */
    'currentState': BlogPostCurrentStateEnum;
    'currentlyPublished': boolean;
    /**
    * An ENUM descibing the type of this object. Should always be BLOG_POST.
    */
    'contentTypeCategory': BlogPostContentTypeCategoryEnum;
    /**
    * The date (ISO8601 format) the blog post is to be published at.
    */
    'publishDate': Date;
    'created': Date;
    'updated': Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "slug",
            "baseName": "slug",
            "type": "string",
            "format": ""
        },
        {
            "name": "contentGroupId",
            "baseName": "contentGroupId",
            "type": "string",
            "format": ""
        },
        {
            "name": "campaign",
            "baseName": "campaign",
            "type": "string",
            "format": ""
        },
        {
            "name": "categoryId",
            "baseName": "categoryId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "mabExperimentId",
            "baseName": "mabExperimentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "authorName",
            "baseName": "authorName",
            "type": "string",
            "format": ""
        },
        {
            "name": "abTestId",
            "baseName": "abTestId",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdById",
            "baseName": "createdById",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedById",
            "baseName": "updatedById",
            "type": "string",
            "format": ""
        },
        {
            "name": "domain",
            "baseName": "domain",
            "type": "string",
            "format": ""
        },
        {
            "name": "abStatus",
            "baseName": "abStatus",
            "type": "BlogPostAbStatusEnum",
            "format": ""
        },
        {
            "name": "folderId",
            "baseName": "folderId",
            "type": "string",
            "format": ""
        },
        {
            "name": "widgetContainers",
            "baseName": "widgetContainers",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "widgets",
            "baseName": "widgets",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "BlogPostLanguageEnum",
            "format": ""
        },
        {
            "name": "translatedFromId",
            "baseName": "translatedFromId",
            "type": "string",
            "format": ""
        },
        {
            "name": "translations",
            "baseName": "translations",
            "type": "{ [key: string]: ContentLanguageVariation; }",
            "format": ""
        },
        {
            "name": "dynamicPageHubDbTableId",
            "baseName": "dynamicPageHubDbTableId",
            "type": "string",
            "format": ""
        },
        {
            "name": "dynamicPageDataSourceType",
            "baseName": "dynamicPageDataSourceType",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "dynamicPageDataSourceId",
            "baseName": "dynamicPageDataSourceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "blogAuthorId",
            "baseName": "blogAuthorId",
            "type": "string",
            "format": ""
        },
        {
            "name": "tagIds",
            "baseName": "tagIds",
            "type": "Array<number>",
            "format": "int64"
        },
        {
            "name": "htmlTitle",
            "baseName": "htmlTitle",
            "type": "string",
            "format": ""
        },
        {
            "name": "publicAccessRulesEnabled",
            "baseName": "publicAccessRulesEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "publicAccessRules",
            "baseName": "publicAccessRules",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "useFeaturedImage",
            "baseName": "useFeaturedImage",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "postSummary",
            "baseName": "postSummary",
            "type": "string",
            "format": ""
        },
        {
            "name": "postBody",
            "baseName": "postBody",
            "type": "string",
            "format": ""
        },
        {
            "name": "rssSummary",
            "baseName": "rssSummary",
            "type": "string",
            "format": ""
        },
        {
            "name": "rssBody",
            "baseName": "rssBody",
            "type": "string",
            "format": ""
        },
        {
            "name": "enableGoogleAmpOutputOverride",
            "baseName": "enableGoogleAmpOutputOverride",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "publishImmediately",
            "baseName": "publishImmediately",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "archivedAt",
            "baseName": "archivedAt",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "linkRelCanonicalUrl",
            "baseName": "linkRelCanonicalUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "archivedInDashboard",
            "baseName": "archivedInDashboard",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "pageExpiryEnabled",
            "baseName": "pageExpiryEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "pageExpiryRedirectId",
            "baseName": "pageExpiryRedirectId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "pageExpiryRedirectUrl",
            "baseName": "pageExpiryRedirectUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "pageExpiryDate",
            "baseName": "pageExpiryDate",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "includeDefaultCustomCss",
            "baseName": "includeDefaultCustomCss",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "enableLayoutStylesheets",
            "baseName": "enableLayoutStylesheets",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "enableDomainStylesheets",
            "baseName": "enableDomainStylesheets",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "layoutSections",
            "baseName": "layoutSections",
            "type": "{ [key: string]: LayoutSection; }",
            "format": ""
        },
        {
            "name": "featuredImageAltText",
            "baseName": "featuredImageAltText",
            "type": "string",
            "format": ""
        },
        {
            "name": "attachedStylesheets",
            "baseName": "attachedStylesheets",
            "type": "Array<{ [key: string]: any; }>",
            "format": ""
        },
        {
            "name": "metaDescription",
            "baseName": "metaDescription",
            "type": "string",
            "format": ""
        },
        {
            "name": "headHtml",
            "baseName": "headHtml",
            "type": "string",
            "format": ""
        },
        {
            "name": "footerHtml",
            "baseName": "footerHtml",
            "type": "string",
            "format": ""
        },
        {
            "name": "featuredImage",
            "baseName": "featuredImage",
            "type": "string",
            "format": ""
        },
        {
            "name": "themeSettingsValues",
            "baseName": "themeSettingsValues",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string",
            "format": ""
        },
        {
            "name": "currentState",
            "baseName": "currentState",
            "type": "BlogPostCurrentStateEnum",
            "format": ""
        },
        {
            "name": "currentlyPublished",
            "baseName": "currentlyPublished",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "contentTypeCategory",
            "baseName": "contentTypeCategory",
            "type": "BlogPostContentTypeCategoryEnum",
            "format": ""
        },
        {
            "name": "publishDate",
            "baseName": "publishDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updated",
            "baseName": "updated",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return BlogPost.attributeTypeMap;
    }

    public constructor() {
    }
}


export type BlogPostAbStatusEnum = "master" | "variant" | "loser_variant" | "mab_master" | "mab_variant" | "automated_master" | "automated_variant" | "automated_loser_variant" ;
export type BlogPostLanguageEnum = "af" | "af-na" | "af-za" | "agq" | "agq-cm" | "ak" | "ak-gh" | "am" | "am-et" | "ar" | "ar-001" | "ar-ae" | "ar-bh" | "ar-dj" | "ar-dz" | "ar-eg" | "ar-eh" | "ar-er" | "ar-il" | "ar-iq" | "ar-jo" | "ar-km" | "ar-kw" | "ar-lb" | "ar-ly" | "ar-ma" | "ar-mr" | "ar-om" | "ar-ps" | "ar-qa" | "ar-sa" | "ar-sd" | "ar-so" | "ar-ss" | "ar-sy" | "ar-td" | "ar-tn" | "ar-ye" | "as" | "as-in" | "asa" | "asa-tz" | "ast" | "ast-es" | "az" | "az-az" | "bas" | "bas-cm" | "be" | "be-by" | "bem" | "bem-zm" | "bez" | "bez-tz" | "bg" | "bg-bg" | "bm" | "bm-ml" | "bn" | "bn-bd" | "bn-in" | "bo" | "bo-cn" | "bo-in" | "br" | "br-fr" | "brx" | "brx-in" | "bs" | "bs-ba" | "ca" | "ca-ad" | "ca-es" | "ca-fr" | "ca-it" | "ccp" | "ccp-bd" | "ccp-in" | "ce" | "ce-ru" | "ceb" | "ceb-ph" | "cgg" | "cgg-ug" | "chr" | "chr-us" | "ckb" | "ckb-iq" | "ckb-ir" | "cs" | "cs-cz" | "cu" | "cu-ru" | "cy" | "cy-gb" | "da" | "da-dk" | "da-gl" | "dav" | "dav-ke" | "de" | "de-at" | "de-be" | "de-ch" | "de-de" | "de-gr" | "de-it" | "de-li" | "de-lu" | "dje" | "dje-ne" | "doi" | "doi-in" | "dsb" | "dsb-de" | "dua" | "dua-cm" | "dyo" | "dyo-sn" | "dz" | "dz-bt" | "ebu" | "ebu-ke" | "ee" | "ee-gh" | "ee-tg" | "el" | "el-cy" | "el-gr" | "en" | "en-001" | "en-150" | "en-ae" | "en-ag" | "en-ai" | "en-as" | "en-at" | "en-au" | "en-bb" | "en-be" | "en-bi" | "en-bm" | "en-bs" | "en-bw" | "en-bz" | "en-ca" | "en-cc" | "en-ch" | "en-ck" | "en-cm" | "en-cn" | "en-cx" | "en-cy" | "en-de" | "en-dg" | "en-dk" | "en-dm" | "en-er" | "en-fi" | "en-fj" | "en-fk" | "en-fm" | "en-gb" | "en-gd" | "en-gg" | "en-gh" | "en-gi" | "en-gm" | "en-gu" | "en-gy" | "en-hk" | "en-ie" | "en-il" | "en-im" | "en-in" | "en-io" | "en-je" | "en-jm" | "en-ke" | "en-ki" | "en-kn" | "en-ky" | "en-lc" | "en-lr" | "en-ls" | "en-lu" | "en-mg" | "en-mh" | "en-mo" | "en-mp" | "en-ms" | "en-mt" | "en-mu" | "en-mw" | "en-mx" | "en-my" | "en-na" | "en-nf" | "en-ng" | "en-nl" | "en-nr" | "en-nu" | "en-nz" | "en-pg" | "en-ph" | "en-pk" | "en-pn" | "en-pr" | "en-pw" | "en-rw" | "en-sb" | "en-sc" | "en-sd" | "en-se" | "en-sg" | "en-sh" | "en-si" | "en-sl" | "en-ss" | "en-sx" | "en-sz" | "en-tc" | "en-tk" | "en-to" | "en-tt" | "en-tv" | "en-tz" | "en-ug" | "en-um" | "en-us" | "en-vc" | "en-vg" | "en-vi" | "en-vu" | "en-ws" | "en-za" | "en-zm" | "en-zw" | "eo" | "eo-001" | "es" | "es-419" | "es-ar" | "es-bo" | "es-br" | "es-bz" | "es-cl" | "es-co" | "es-cr" | "es-cu" | "es-do" | "es-ea" | "es-ec" | "es-es" | "es-gq" | "es-gt" | "es-hn" | "es-ic" | "es-mx" | "es-ni" | "es-pa" | "es-pe" | "es-ph" | "es-pr" | "es-py" | "es-sv" | "es-us" | "es-uy" | "es-ve" | "et" | "et-ee" | "eu" | "eu-es" | "ewo" | "ewo-cm" | "fa" | "fa-af" | "fa-ir" | "ff" | "ff-bf" | "ff-cm" | "ff-gh" | "ff-gm" | "ff-gn" | "ff-gw" | "ff-lr" | "ff-mr" | "ff-ne" | "ff-ng" | "ff-sl" | "ff-sn" | "fi" | "fi-fi" | "fil" | "fil-ph" | "fo" | "fo-dk" | "fo-fo" | "fr" | "fr-be" | "fr-bf" | "fr-bi" | "fr-bj" | "fr-bl" | "fr-ca" | "fr-cd" | "fr-cf" | "fr-cg" | "fr-ch" | "fr-ci" | "fr-cm" | "fr-dj" | "fr-dz" | "fr-fr" | "fr-ga" | "fr-gf" | "fr-gn" | "fr-gp" | "fr-gq" | "fr-ht" | "fr-km" | "fr-lu" | "fr-ma" | "fr-mc" | "fr-mf" | "fr-mg" | "fr-ml" | "fr-mq" | "fr-mr" | "fr-mu" | "fr-nc" | "fr-ne" | "fr-pf" | "fr-pm" | "fr-re" | "fr-rw" | "fr-sc" | "fr-sn" | "fr-sy" | "fr-td" | "fr-tg" | "fr-tn" | "fr-vu" | "fr-wf" | "fr-yt" | "fur" | "fur-it" | "fy" | "fy-nl" | "ga" | "ga-gb" | "ga-ie" | "gd" | "gd-gb" | "gl" | "gl-es" | "gsw" | "gsw-ch" | "gsw-fr" | "gsw-li" | "gu" | "gu-in" | "guz" | "guz-ke" | "gv" | "gv-im" | "ha" | "ha-gh" | "ha-ne" | "ha-ng" | "haw" | "haw-us" | "he" | "hi" | "hi-in" | "hr" | "hr-ba" | "hr-hr" | "hsb" | "hsb-de" | "hu" | "hu-hu" | "hy" | "hy-am" | "ia" | "ia-001" | "id" | "ig" | "ig-ng" | "ii" | "ii-cn" | "id-id" | "is" | "is-is" | "it" | "it-ch" | "it-it" | "it-sm" | "it-va" | "he-il" | "ja" | "ja-jp" | "jgo" | "jgo-cm" | "yi" | "yi-001" | "jmc" | "jmc-tz" | "jv" | "jv-id" | "ka" | "ka-ge" | "kab" | "kab-dz" | "kam" | "kam-ke" | "kde" | "kde-tz" | "kea" | "kea-cv" | "khq" | "khq-ml" | "ki" | "ki-ke" | "kk" | "kk-kz" | "kkj" | "kkj-cm" | "kl" | "kl-gl" | "kln" | "kln-ke" | "km" | "km-kh" | "kn" | "kn-in" | "ko" | "ko-kp" | "ko-kr" | "kok" | "kok-in" | "ks" | "ks-in" | "ksb" | "ksb-tz" | "ksf" | "ksf-cm" | "ksh" | "ksh-de" | "kw" | "kw-gb" | "ku" | "ku-tr" | "ky" | "ky-kg" | "lag" | "lag-tz" | "lb" | "lb-lu" | "lg" | "lg-ug" | "lkt" | "lkt-us" | "ln" | "ln-ao" | "ln-cd" | "ln-cf" | "ln-cg" | "lo" | "lo-la" | "lrc" | "lrc-iq" | "lrc-ir" | "lt" | "lt-lt" | "lu" | "lu-cd" | "luo" | "luo-ke" | "luy" | "luy-ke" | "lv" | "lv-lv" | "mai" | "mai-in" | "mas" | "mas-ke" | "mas-tz" | "mer" | "mer-ke" | "mfe" | "mfe-mu" | "mg" | "mg-mg" | "mgh" | "mgh-mz" | "mgo" | "mgo-cm" | "mi" | "mi-nz" | "mk" | "mk-mk" | "ml" | "ml-in" | "mn" | "mn-mn" | "mni" | "mni-in" | "mr" | "mr-in" | "ms" | "ms-bn" | "ms-id" | "ms-my" | "ms-sg" | "mt" | "mt-mt" | "mua" | "mua-cm" | "my" | "my-mm" | "mzn" | "mzn-ir" | "naq" | "naq-na" | "nb" | "nb-no" | "nb-sj" | "nd" | "nd-zw" | "nds" | "nds-de" | "nds-nl" | "ne" | "ne-in" | "ne-np" | "nl" | "nl-aw" | "nl-be" | "nl-ch" | "nl-bq" | "nl-cw" | "nl-lu" | "nl-nl" | "nl-sr" | "nl-sx" | "nmg" | "nmg-cm" | "nn" | "nn-no" | "nnh" | "nnh-cm" | "no" | "no-no" | "nus" | "nus-ss" | "nyn" | "nyn-ug" | "om" | "om-et" | "om-ke" | "or" | "or-in" | "os" | "os-ge" | "os-ru" | "pa" | "pa-in" | "pa-pk" | "pcm" | "pcm-ng" | "pl" | "pl-pl" | "prg" | "prg-001" | "ps" | "ps-af" | "ps-pk" | "pt" | "pt-ao" | "pt-br" | "pt-ch" | "pt-cv" | "pt-gq" | "pt-gw" | "pt-lu" | "pt-mo" | "pt-mz" | "pt-pt" | "pt-st" | "pt-tl" | "qu" | "qu-bo" | "qu-ec" | "qu-pe" | "rm" | "rm-ch" | "rn" | "rn-bi" | "ro" | "ro-md" | "ro-ro" | "rof" | "rof-tz" | "ru" | "ru-by" | "ru-kg" | "ru-kz" | "ru-md" | "ru-ru" | "ru-ua" | "rw" | "rw-rw" | "rwk" | "rwk-tz" | "sa" | "sa-in" | "sah" | "sah-ru" | "saq" | "saq-ke" | "sat" | "sat-in" | "sbp" | "sbp-tz" | "sd" | "sd-in" | "sd-pk" | "se" | "se-fi" | "se-no" | "se-se" | "seh" | "seh-mz" | "ses" | "ses-ml" | "sg" | "sg-cf" | "shi" | "shi-ma" | "si" | "si-lk" | "sk" | "sk-sk" | "sl" | "sl-si" | "smn" | "smn-fi" | "sn" | "sn-zw" | "so" | "so-dj" | "so-et" | "so-ke" | "so-so" | "sq" | "sq-al" | "sq-mk" | "sq-xk" | "sr" | "sr-ba" | "sr-cs" | "sr-me" | "sr-rs" | "sr-xk" | "su" | "su-id" | "sv" | "sv-ax" | "sv-fi" | "sv-se" | "sw" | "sw-cd" | "sw-ke" | "sw-tz" | "sw-ug" | "sy" | "ta" | "ta-in" | "ta-lk" | "ta-my" | "ta-sg" | "te" | "te-in" | "teo" | "teo-ke" | "teo-ug" | "tg" | "tg-tj" | "th" | "th-th" | "ti" | "ti-er" | "ti-et" | "tk" | "tk-tm" | "tl" | "to" | "to-to" | "tr" | "tr-cy" | "tr-tr" | "tt" | "tt-ru" | "twq" | "twq-ne" | "tzm" | "tzm-ma" | "ug" | "ug-cn" | "uk" | "uk-ua" | "ur" | "ur-in" | "ur-pk" | "uz" | "uz-af" | "uz-uz" | "vai" | "vai-lr" | "vi" | "vi-vn" | "vo" | "vo-001" | "vun" | "vun-tz" | "wae" | "wae-ch" | "wo" | "wo-sn" | "xh" | "xh-za" | "xog" | "xog-ug" | "yav" | "yav-cm" | "yo" | "yo-bj" | "yo-ng" | "yue" | "yue-cn" | "yue-hk" | "zgh" | "zgh-ma" | "zh" | "zh-cn" | "zh-hk" | "zh-mo" | "zh-sg" | "zh-tw" | "zh-hans" | "zh-hant" | "zu" | "zu-za" ;
export type BlogPostCurrentStateEnum = "AUTOMATED" | "AUTOMATED_DRAFT" | "AUTOMATED_SENDING" | "AUTOMATED_FOR_FORM" | "AUTOMATED_FOR_FORM_BUFFER" | "AUTOMATED_FOR_FORM_DRAFT" | "AUTOMATED_FOR_FORM_LEGACY" | "BLOG_EMAIL_DRAFT" | "BLOG_EMAIL_PUBLISHED" | "DRAFT" | "DRAFT_AB" | "DRAFT_AB_VARIANT" | "ERROR" | "LOSER_AB_VARIANT" | "PAGE_STUB" | "PRE_PROCESSING" | "PROCESSING" | "PUBLISHED" | "PUBLISHED_AB" | "PUBLISHED_AB_VARIANT" | "PUBLISHED_OR_SCHEDULED" | "RSS_TO_EMAIL_DRAFT" | "RSS_TO_EMAIL_PUBLISHED" | "SCHEDULED" | "SCHEDULED_AB" | "SCHEDULED_OR_PUBLISHED" | "AUTOMATED_AB" | "AUTOMATED_AB_VARIANT" | "AUTOMATED_DRAFT_AB" | "AUTOMATED_DRAFT_ABVARIANT" | "AUTOMATED_LOSER_ABVARIANT" ;
export type BlogPostContentTypeCategoryEnum = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" ;

