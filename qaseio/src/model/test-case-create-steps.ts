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
 * @interface TestCaseCreateSteps
 */
export interface TestCaseCreateSteps {
    /**
     * 
     * @type {string}
     * @memberof TestCaseCreateSteps
     */
    'action'?: string;
    /**
     * 
     * @type {string}
     * @memberof TestCaseCreateSteps
     */
    'expected_result'?: string;
    /**
     * 
     * @type {string}
     * @memberof TestCaseCreateSteps
     */
    'data'?: string;
    /**
     * 
     * @type {number}
     * @memberof TestCaseCreateSteps
     */
    'position'?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof TestCaseCreateSteps
     */
    'attachments'?: Array<string>;
}

