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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { HashResponse } from '../model';
// @ts-ignore
import { Response } from '../model';
// @ts-ignore
import { ResultCreate } from '../model';
// @ts-ignore
import { ResultCreateBulk } from '../model';
// @ts-ignore
import { ResultListResponse } from '../model';
// @ts-ignore
import { ResultResponse } from '../model';
// @ts-ignore
import { ResultUpdate } from '../model';
/**
 * ResultsApi - axios parameter creator
 * @export
 */
export const ResultsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This method allows to create test run result by Run Id. 
         * @summary Create test run result.
         * @param {string} code Code of project, where to search entities.
         * @param {string | number} idOrHash Id or Hash.
         * @param {ResultCreate} resultCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createResult: async (code: string, idOrHash: string | number, resultCreate: ResultCreate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('createResult', 'code', code)
            // verify required parameter 'idOrHash' is not null or undefined
            assertParamExists('createResult', 'idOrHash', idOrHash)
            // verify required parameter 'resultCreate' is not null or undefined
            assertParamExists('createResult', 'resultCreate', resultCreate)
            const localVarPath = `/result/{code}/{id_or_hash}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)))
                .replace(`{${"id_or_hash"}}`, encodeURIComponent(String(idOrHash)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(resultCreate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method allows to create a lot of test run result at once. 
         * @summary Bulk create test run result.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {ResultCreateBulk} resultCreateBulk 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createResultBulk: async (code: string, id: number, resultCreateBulk: ResultCreateBulk, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('createResultBulk', 'code', code)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('createResultBulk', 'id', id)
            // verify required parameter 'resultCreateBulk' is not null or undefined
            assertParamExists('createResultBulk', 'resultCreateBulk', resultCreateBulk)
            const localVarPath = `/result/{code}/{id}/bulk`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(resultCreateBulk, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method allows to delete test run result. 
         * @summary Delete test run result.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {string} hash Hash.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteResult: async (code: string, id: number, hash: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('deleteResult', 'code', code)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteResult', 'id', id)
            // verify required parameter 'hash' is not null or undefined
            assertParamExists('deleteResult', 'hash', hash)
            const localVarPath = `/result/{code}/{id}/{hash}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)))
                .replace(`{${"hash"}}`, encodeURIComponent(String(hash)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method allows to retrieve a specific test run result by Hash. 
         * @summary Get test run result by code.
         * @param {string} code Code of project, where to search entities.
         * @param {string | number} idOrHash Id or Hash.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getResult: async (code: string, idOrHash: string | number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('getResult', 'code', code)
            // verify required parameter 'idOrHash' is not null or undefined
            assertParamExists('getResult', 'idOrHash', idOrHash)
            const localVarPath = `/result/{code}/{id_or_hash}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)))
                .replace(`{${"id_or_hash"}}`, encodeURIComponent(String(idOrHash)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method allows to retrieve all test run results stored in selected project. 
         * @summary Get all test run results.
         * @param {string} code Code of project, where to search entities.
         * @param {object} [filters] 
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getResults: async (code: string, filters?: object, limit?: number, offset?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('getResults', 'code', code)
            const localVarPath = `/result/{code}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)

            if (filters !== undefined) {
                localVarQueryParameter['filters'] = filters;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method allows to update test run result. 
         * @summary Update test run result.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {string} hash Hash.
         * @param {ResultUpdate} resultUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateResult: async (code: string, id: number, hash: string, resultUpdate: ResultUpdate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('updateResult', 'code', code)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateResult', 'id', id)
            // verify required parameter 'hash' is not null or undefined
            assertParamExists('updateResult', 'hash', hash)
            // verify required parameter 'resultUpdate' is not null or undefined
            assertParamExists('updateResult', 'resultUpdate', resultUpdate)
            const localVarPath = `/result/{code}/{id}/{hash}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)))
                .replace(`{${"hash"}}`, encodeURIComponent(String(hash)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(resultUpdate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ResultsApi - functional programming interface
 * @export
 */
export const ResultsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ResultsApiAxiosParamCreator(configuration)
    return {
        /**
         * This method allows to create test run result by Run Id. 
         * @summary Create test run result.
         * @param {string} code Code of project, where to search entities.
         * @param {string | number} idOrHash Id or Hash.
         * @param {ResultCreate} resultCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createResult(code: string, idOrHash: string | number, resultCreate: ResultCreate, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response & object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createResult(code, idOrHash, resultCreate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method allows to create a lot of test run result at once. 
         * @summary Bulk create test run result.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {ResultCreateBulk} resultCreateBulk 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createResultBulk(code: string, id: number, resultCreateBulk: ResultCreateBulk, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createResultBulk(code, id, resultCreateBulk, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method allows to delete test run result. 
         * @summary Delete test run result.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {string} hash Hash.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteResult(code: string, id: number, hash: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HashResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteResult(code, id, hash, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method allows to retrieve a specific test run result by Hash. 
         * @summary Get test run result by code.
         * @param {string} code Code of project, where to search entities.
         * @param {string | number} idOrHash Id or Hash.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getResult(code: string, idOrHash: string | number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getResult(code, idOrHash, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method allows to retrieve all test run results stored in selected project. 
         * @summary Get all test run results.
         * @param {string} code Code of project, where to search entities.
         * @param {object} [filters] 
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getResults(code: string, filters?: object, limit?: number, offset?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResultListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getResults(code, filters, limit, offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method allows to update test run result. 
         * @summary Update test run result.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {string} hash Hash.
         * @param {ResultUpdate} resultUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateResult(code: string, id: number, hash: string, resultUpdate: ResultUpdate, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HashResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateResult(code, id, hash, resultUpdate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ResultsApi - factory interface
 * @export
 */
export const ResultsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ResultsApiFp(configuration)
    return {
        /**
         * This method allows to create test run result by Run Id. 
         * @summary Create test run result.
         * @param {string} code Code of project, where to search entities.
         * @param {string | number} idOrHash Id or Hash.
         * @param {ResultCreate} resultCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createResult(code: string, idOrHash: string | number, resultCreate: ResultCreate, options?: any): AxiosPromise<Response & object> {
            return localVarFp.createResult(code, idOrHash, resultCreate, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows to create a lot of test run result at once. 
         * @summary Bulk create test run result.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {ResultCreateBulk} resultCreateBulk 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createResultBulk(code: string, id: number, resultCreateBulk: ResultCreateBulk, options?: any): AxiosPromise<Response> {
            return localVarFp.createResultBulk(code, id, resultCreateBulk, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows to delete test run result. 
         * @summary Delete test run result.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {string} hash Hash.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteResult(code: string, id: number, hash: string, options?: any): AxiosPromise<HashResponse> {
            return localVarFp.deleteResult(code, id, hash, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows to retrieve a specific test run result by Hash. 
         * @summary Get test run result by code.
         * @param {string} code Code of project, where to search entities.
         * @param {string | number} idOrHash Id or Hash.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getResult(code: string, idOrHash: string | number, options?: any): AxiosPromise<ResultResponse> {
            return localVarFp.getResult(code, idOrHash, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows to retrieve all test run results stored in selected project. 
         * @summary Get all test run results.
         * @param {string} code Code of project, where to search entities.
         * @param {object} [filters] 
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getResults(code: string, filters?: object, limit?: number, offset?: number, options?: any): AxiosPromise<ResultListResponse> {
            return localVarFp.getResults(code, filters, limit, offset, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows to update test run result. 
         * @summary Update test run result.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {string} hash Hash.
         * @param {ResultUpdate} resultUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateResult(code: string, id: number, hash: string, resultUpdate: ResultUpdate, options?: any): AxiosPromise<HashResponse> {
            return localVarFp.updateResult(code, id, hash, resultUpdate, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ResultsApi - object-oriented interface
 * @export
 * @class ResultsApi
 * @extends {BaseAPI}
 */
export class ResultsApi extends BaseAPI {
    /**
     * This method allows to create test run result by Run Id. 
     * @summary Create test run result.
     * @param {string} code Code of project, where to search entities.
     * @param {string | number} idOrHash Id or Hash.
     * @param {ResultCreate} resultCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ResultsApi
     */
    public createResult(code: string, idOrHash: string | number, resultCreate: ResultCreate, options?: AxiosRequestConfig) {
        return ResultsApiFp(this.configuration).createResult(code, idOrHash, resultCreate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows to create a lot of test run result at once. 
     * @summary Bulk create test run result.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {ResultCreateBulk} resultCreateBulk 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ResultsApi
     */
    public createResultBulk(code: string, id: number, resultCreateBulk: ResultCreateBulk, options?: AxiosRequestConfig) {
        return ResultsApiFp(this.configuration).createResultBulk(code, id, resultCreateBulk, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows to delete test run result. 
     * @summary Delete test run result.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {string} hash Hash.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ResultsApi
     */
    public deleteResult(code: string, id: number, hash: string, options?: AxiosRequestConfig) {
        return ResultsApiFp(this.configuration).deleteResult(code, id, hash, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows to retrieve a specific test run result by Hash. 
     * @summary Get test run result by code.
     * @param {string} code Code of project, where to search entities.
     * @param {string | number} idOrHash Id or Hash.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ResultsApi
     */
    public getResult(code: string, idOrHash: string | number, options?: AxiosRequestConfig) {
        return ResultsApiFp(this.configuration).getResult(code, idOrHash, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows to retrieve all test run results stored in selected project. 
     * @summary Get all test run results.
     * @param {string} code Code of project, where to search entities.
     * @param {object} [filters] 
     * @param {number} [limit] A number of entities in result set.
     * @param {number} [offset] How many entities should be skipped.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ResultsApi
     */
    public getResults(code: string, filters?: object, limit?: number, offset?: number, options?: AxiosRequestConfig) {
        return ResultsApiFp(this.configuration).getResults(code, filters, limit, offset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows to update test run result. 
     * @summary Update test run result.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {string} hash Hash.
     * @param {ResultUpdate} resultUpdate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ResultsApi
     */
    public updateResult(code: string, id: number, hash: string, resultUpdate: ResultUpdate, options?: AxiosRequestConfig) {
        return ResultsApiFp(this.configuration).updateResult(code, id, hash, resultUpdate, options).then((request) => request(this.axios, this.basePath));
    }
}
