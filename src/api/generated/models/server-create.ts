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


import { EnvironmentLinkServer } from './environment-link-server';
import { ServerBlueprint } from './server-blueprint';
import { ServerProvisionSettings } from './server-provision-settings';

/**
 * 
 * @export
 * @interface ServerCreate
 */
export interface ServerCreate {
    /**
     * The hostname to be set on Linux servers. Accepts numbers (0-9), dash (-) and lower case non accented characters
     * @type {string}
     * @memberof ServerCreate
     */
    hostname: string;
    /**
     * Public ipv4 address for server access
     * @type {string}
     * @memberof ServerCreate
     */
    ip_address: string;
    /**
     * The network port to which the SSH daemon is listening to SSH connections on the server
     * @type {number}
     * @memberof ServerCreate
     */
    ssh_port: number;
    /**
     * 
     * @type {ServerBlueprint}
     * @memberof ServerCreate
     */
    blueprint: ServerBlueprint;
    /**
     * 
     * @type {Array<EnvironmentLinkServer>}
     * @memberof ServerCreate
     */
    environments?: Array<EnvironmentLinkServer>;
    /**
     * 
     * @type {ServerProvisionSettings}
     * @memberof ServerCreate
     */
    provision_settings: ServerProvisionSettings;
}

