/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { LanguageRuntimeFrameworkDefaults } from './language-runtime-framework-defaults';

/**
 * 
 * @export
 * @interface LanguageRuntimeFramework
 */
export interface LanguageRuntimeFramework {
    /**
     * The internal name/code of the language runtime
     * @type {string}
     * @memberof LanguageRuntimeFramework
     */
    name: string;
    /**
     * The formatted name to be displayed in user interfaces
     * @type {string}
     * @memberof LanguageRuntimeFramework
     */
    name_human_readable: string;
    /**
     * 
     * @type {LanguageRuntimeFrameworkDefaults}
     * @memberof LanguageRuntimeFramework
     */
    defaults: LanguageRuntimeFrameworkDefaults;
}

