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


import { Action } from './action';
import { ActionStatus } from './action-status';
import { NetworkRuleProtocol } from './network-rule-protocol';
import { NetworkRuleType } from './network-rule-type';
import { User } from './user';

/**
 * 
 * @export
 * @interface NetworkRule
 */
export interface NetworkRule {
    /**
     * The unique id of the given record
     * @type {number}
     * @memberof NetworkRule
     */
    id: number;
    /**
     * The rule\'s name/description/reminder
     * @type {string}
     * @memberof NetworkRule
     */
    name: string;
    /**
     * 
     * @type {NetworkRuleType}
     * @memberof NetworkRule
     */
    type: NetworkRuleType;
    /**
     * 
     * @type {NetworkRuleProtocol}
     * @memberof NetworkRule
     */
    protocol: NetworkRuleProtocol;
    /**
     * Starting range of the public ipv4 or ipv6 addresses that can access this rule
     * @type {string}
     * @memberof NetworkRule
     */
    ip_address_from?: string;
    /**
     * Ending range of the public ipv4 or ipv6 addresses that can access this rule
     * @type {string}
     * @memberof NetworkRule
     */
    ip_address_to?: string;
    /**
     * Starting range of network ports to be considered by this rule
     * @type {number}
     * @memberof NetworkRule
     */
    port_from: number;
    /**
     * Ending range of network ports to be considered by this rule
     * @type {number}
     * @memberof NetworkRule
     */
    port_to: number;
    /**
     * 
     * @type {ActionStatus}
     * @memberof NetworkRule
     */
    status?: ActionStatus;
    /**
     * The list of related actions
     * @type {Array<Action>}
     * @memberof NetworkRule
     */
    actions?: Array<Action>;
    /**
     * 
     * @type {User}
     * @memberof NetworkRule
     */
    created_by_user?: User;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof NetworkRule
     */
    created_at?: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof NetworkRule
     */
    updated_at?: string;
}

