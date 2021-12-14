/* tslint:disable */
/* eslint-disable */
/**
 * Qase.io API
 * Qase API Specification.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@qase.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface Filters4
 */
export interface Filters4 {
    /**
     * A single test run result status. Possible values: in_progress, passed, failed, blocked, skipped, invalid. 
     * @type {string}
     * @memberof Filters4
     */
    'status'?: string;
    /**
     * A list of run IDs separated by comma.
     * @type {string}
     * @memberof Filters4
     */
    'run'?: string;
    /**
     * A list of case IDs separated by comma.
     * @type {string}
     * @memberof Filters4
     */
    'case_id'?: string;
    /**
     * A list of member IDs separated by comma.
     * @type {string}
     * @memberof Filters4
     */
    'member'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Filters4
     */
    'api'?: boolean;
    /**
     * Will return all results created after provided datetime. Allowed format: `Y-m-d H:i:s`. 
     * @type {string}
     * @memberof Filters4
     */
    'from_end_time'?: string;
    /**
     * Will return all results created before provided datetime. Allowed format: `Y-m-d H:i:s`. 
     * @type {string}
     * @memberof Filters4
     */
    'to_end_time'?: string;
}

