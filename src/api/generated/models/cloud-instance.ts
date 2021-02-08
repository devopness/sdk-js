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



/**
 * 
 * @export
 * @interface CloudInstance
 */
export interface CloudInstance {
    /**
     * The name of the cloud instance
     * @type {string}
     * @memberof CloudInstance
     */
    name: string;
    /**
     * The type of the cloud instance
     * @type {string}
     * @memberof CloudInstance
     */
    type: string;
    /**
     * The family to which the instance belongs
     * @type {string}
     * @memberof CloudInstance
     */
    family: string;
    /**
     * The default disk size (in GB) used to instance
     * @type {number}
     * @memberof CloudInstance
     */
    default_disk_size: number;
    /**
     * The price per hour of the instance
     * @type {string}
     * @memberof CloudInstance
     */
    price_hourly: string;
    /**
     * The price per month of the instance
     * @type {string}
     * @memberof CloudInstance
     */
    price_monthly: string;
    /**
     * The currency of the prices
     * @type {string}
     * @memberof CloudInstance
     */
    price_currency: string;
    /**
     * The number of virtual CPU of the instance
     * @type {string}
     * @memberof CloudInstance
     */
    vcpus: string;
    /**
     * The RAM memory size (in MB) of the instance
     * @type {string}
     * @memberof CloudInstance
     */
    memory: string;
}
