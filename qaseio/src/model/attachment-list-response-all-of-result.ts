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


import { AttachmentGet } from './attachment-get';

/**
 * 
 * @export
 * @interface AttachmentListResponseAllOfResult
 */
export interface AttachmentListResponseAllOfResult {
    /**
     * 
     * @type {number}
     * @memberof AttachmentListResponseAllOfResult
     */
    'total'?: number;
    /**
     * 
     * @type {number}
     * @memberof AttachmentListResponseAllOfResult
     */
    'filtered'?: number;
    /**
     * 
     * @type {number}
     * @memberof AttachmentListResponseAllOfResult
     */
    'count'?: number;
    /**
     * 
     * @type {Array<AttachmentGet>}
     * @memberof AttachmentListResponseAllOfResult
     */
    'entities'?: Array<AttachmentGet>;
}

