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


import { TestCase } from './test-case';

/**
 * 
 * @export
 * @interface TestCaseListResponseAllOfResult
 */
export interface TestCaseListResponseAllOfResult {
    /**
     * 
     * @type {number}
     * @memberof TestCaseListResponseAllOfResult
     */
    'total'?: number;
    /**
     * 
     * @type {number}
     * @memberof TestCaseListResponseAllOfResult
     */
    'filtered'?: number;
    /**
     * 
     * @type {number}
     * @memberof TestCaseListResponseAllOfResult
     */
    'count'?: number;
    /**
     * 
     * @type {Array<TestCase>}
     * @memberof TestCaseListResponseAllOfResult
     */
    'entities'?: Array<TestCase>;
}

