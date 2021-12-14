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


import { Defect } from './defect';

/**
 * 
 * @export
 * @interface DefectListResponseAllOfResult
 */
export interface DefectListResponseAllOfResult {
    /**
     * 
     * @type {number}
     * @memberof DefectListResponseAllOfResult
     */
    'total'?: number;
    /**
     * 
     * @type {number}
     * @memberof DefectListResponseAllOfResult
     */
    'filtered'?: number;
    /**
     * 
     * @type {number}
     * @memberof DefectListResponseAllOfResult
     */
    'count'?: number;
    /**
     * 
     * @type {Array<Defect>}
     * @memberof DefectListResponseAllOfResult
     */
    'entities'?: Array<Defect>;
}

