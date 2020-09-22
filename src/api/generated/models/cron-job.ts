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
import { CronJobPattern } from './cron-job-pattern';
import { User } from './user';

/**
 * 
 * @export
 * @interface CronJob
 */
export interface CronJob {
    /**
     * The Id of the given cron job
     * @type {number}
     * @memberof CronJob
     */
    id: number;
    /**
     * The name of the cron job
     * @type {string}
     * @memberof CronJob
     */
    name: string;
    /**
     * The command line to be executed when running the cron job
     * @type {string}
     * @memberof CronJob
     */
    command: string;
    /**
     * A cron expression consisting of Minute, Hour, Day of Month, Month and Day of Week subexpressions
     * @type {string}
     * @memberof CronJob
     */
    pattern: string;
    /**
     * 
     * @type {CronJobPattern}
     * @memberof CronJob
     */
    pattern_human_readable?: CronJobPattern;
    /**
     * The name of the Unix user on behalf of which the cron job will be executed
     * @type {string}
     * @memberof CronJob
     */
    run_as_user: string;
    /**
     * Indicates if the cron job was auto_generated by `devopness` itself
     * @type {boolean}
     * @memberof CronJob
     */
    auto_generated?: boolean;
    /**
     * 
     * @type {ActionStatus}
     * @memberof CronJob
     */
    status?: ActionStatus;
    /**
     * The list of related actions
     * @type {Array<Action>}
     * @memberof CronJob
     */
    actions?: Array<Action>;
    /**
     * 
     * @type {User}
     * @memberof CronJob
     */
    created_by_user?: User;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof CronJob
     */
    created_at?: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof CronJob
     */
    updated_at?: string;
}

