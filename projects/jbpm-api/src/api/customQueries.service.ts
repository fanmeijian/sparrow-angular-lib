/**
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable } from 'rxjs';

import { QueryDefinition } from '../model/queryDefinition';
import { QueryDefinitionList } from '../model/queryDefinitionList';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CustomQueriesService {

    protected basePath = 'https://localhost/bpm/rest';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Registers a custom query definition.
     *
     * @param queryName identifier of the query definition to be registered
     * @param body query definition represented as QueryDefinition
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createQueryDefinition(queryName: string, body: string, observe?: 'body', reportProgress?: boolean): Observable<QueryDefinition>;
    public createQueryDefinition(queryName: string, body: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<QueryDefinition>>;
    public createQueryDefinition(queryName: string, body: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<QueryDefinition>>;
    public createQueryDefinition(queryName: string, body: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (queryName === null || queryName === undefined) {
            throw new Error('Required parameter queryName was null or undefined when calling createQueryDefinition.');
        }

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createQueryDefinition.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<QueryDefinition>(`${this.basePath}/server/queries/definitions/${encodeURIComponent(String(queryName))}`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes a specified custom query.
     *
     * @param queryName identifier of the query definition to be deleted
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public dropQueryDefinition(queryName: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public dropQueryDefinition(queryName: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public dropQueryDefinition(queryName: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public dropQueryDefinition(queryName: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (queryName === null || queryName === undefined) {
            throw new Error('Required parameter queryName was null or undefined when calling dropQueryDefinition.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/server/queries/definitions/${encodeURIComponent(String(queryName))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns all custom query definitions.
     *
     * @param page optional pagination - at which page to start, defaults to 0 (meaning first)
     * @param pageSize optional pagination - size of the result, defaults to 10
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getQueries(page?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<QueryDefinitionList>;
    public getQueries(page?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<QueryDefinitionList>>;
    public getQueries(page?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<QueryDefinitionList>>;
    public getQueries(page?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('pageSize', <any>pageSize);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<QueryDefinitionList>(`${this.basePath}/server/queries/definitions`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns information about a specified custom query.
     *
     * @param queryName identifier of the query definition to be retrieved
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getQuery(queryName: string, observe?: 'body', reportProgress?: boolean): Observable<QueryDefinition>;
    public getQuery(queryName: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<QueryDefinition>>;
    public getQuery(queryName: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<QueryDefinition>>;
    public getQuery(queryName: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (queryName === null || queryName === undefined) {
            throw new Error('Required parameter queryName was null or undefined when calling getQuery.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<QueryDefinition>(`${this.basePath}/server/queries/definitions/${encodeURIComponent(String(queryName))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Replaces existing custom query definition or registers it as new if the query does not already exist.
     *
     * @param queryName identifier of the query definition to be replaced
     * @param body query definition represented as QueryDefinition
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public replaceQueryDefinition(queryName: string, body: string, observe?: 'body', reportProgress?: boolean): Observable<QueryDefinition>;
    public replaceQueryDefinition(queryName: string, body: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<QueryDefinition>>;
    public replaceQueryDefinition(queryName: string, body: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<QueryDefinition>>;
    public replaceQueryDefinition(queryName: string, body: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (queryName === null || queryName === undefined) {
            throw new Error('Required parameter queryName was null or undefined when calling replaceQueryDefinition.');
        }

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling replaceQueryDefinition.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<QueryDefinition>(`${this.basePath}/server/queries/definitions/${encodeURIComponent(String(queryName))}`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns the results of a specified custom query.
     *
     * @param queryName identifier of the query definition to be used for query
     * @param mapper identifier of the query mapper to be used when transforming results
     * @param orderBy optional sort order
     * @param page optional pagination - at which page to start, defaults to 0 (meaning first)
     * @param pageSize optional pagination - size of the result, defaults to 10
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public runQuery(queryName: string, mapper: string, orderBy?: string, page?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<Array<any>>;
    public runQuery(queryName: string, mapper: string, orderBy?: string, page?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<any>>>;
    public runQuery(queryName: string, mapper: string, orderBy?: string, page?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<any>>>;
    public runQuery(queryName: string, mapper: string, orderBy?: string, page?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (queryName === null || queryName === undefined) {
            throw new Error('Required parameter queryName was null or undefined when calling runQuery.');
        }

        if (mapper === null || mapper === undefined) {
            throw new Error('Required parameter mapper was null or undefined when calling runQuery.');
        }




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (mapper !== undefined && mapper !== null) {
            queryParameters = queryParameters.set('mapper', <any>mapper);
        }
        if (orderBy !== undefined && orderBy !== null) {
            queryParameters = queryParameters.set('orderBy', <any>orderBy);
        }
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('pageSize', <any>pageSize);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<any>>(`${this.basePath}/server/queries/definitions/${encodeURIComponent(String(queryName))}/data`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns the results of a specified custom query and filters the results based on a provided builder or filter request body.
     *
     * @param queryName identifier of the query definition to be used for query
     * @param mapper identifier of the query mapper to be used when transforming results
     * @param builder optional identifier of the query builder to be used for query conditions
     * @param page optional pagination - at which page to start, defaults to 0 (meaning first)
     * @param pageSize optional pagination - size of the result, defaults to 10
     * @param body optional query filter specification represented as QueryFilterSpec
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public runQueryFiltered(queryName: string, mapper: string, builder?: string, page?: number, pageSize?: number, body?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public runQueryFiltered(queryName: string, mapper: string, builder?: string, page?: number, pageSize?: number, body?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public runQueryFiltered(queryName: string, mapper: string, builder?: string, page?: number, pageSize?: number, body?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public runQueryFiltered(queryName: string, mapper: string, builder?: string, page?: number, pageSize?: number, body?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (queryName === null || queryName === undefined) {
            throw new Error('Required parameter queryName was null or undefined when calling runQueryFiltered.');
        }

        if (mapper === null || mapper === undefined) {
            throw new Error('Required parameter mapper was null or undefined when calling runQueryFiltered.');
        }





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (mapper !== undefined && mapper !== null) {
            queryParameters = queryParameters.set('mapper', <any>mapper);
        }
        if (builder !== undefined && builder !== null) {
            queryParameters = queryParameters.set('builder', <any>builder);
        }
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('pageSize', <any>pageSize);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/server/queries/definitions/${encodeURIComponent(String(queryName))}/filtered-data`,
            body,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns the results of a specified custom query on a specified KIE container and filters the results based on a provided builder or filter request body.
     *
     * @param containerId container id to filter queries
     * @param queryName identifier of the query definition to be used for query
     * @param mapper identifier of the query mapper to be used when transforming results
     * @param builder optional identifier of the query builder to be used for query conditions
     * @param page optional pagination - at which page to start, defaults to 0 (meaning first)
     * @param pageSize optional pagination - size of the result, defaults to 10
     * @param body optional query filter specification represented as QueryFilterSpec
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public runQueryFilteredByDeploymentId(containerId: string, queryName: string, mapper: string, builder?: string, page?: number, pageSize?: number, body?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public runQueryFilteredByDeploymentId(containerId: string, queryName: string, mapper: string, builder?: string, page?: number, pageSize?: number, body?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public runQueryFilteredByDeploymentId(containerId: string, queryName: string, mapper: string, builder?: string, page?: number, pageSize?: number, body?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public runQueryFilteredByDeploymentId(containerId: string, queryName: string, mapper: string, builder?: string, page?: number, pageSize?: number, body?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (containerId === null || containerId === undefined) {
            throw new Error('Required parameter containerId was null or undefined when calling runQueryFilteredByDeploymentId.');
        }

        if (queryName === null || queryName === undefined) {
            throw new Error('Required parameter queryName was null or undefined when calling runQueryFilteredByDeploymentId.');
        }

        if (mapper === null || mapper === undefined) {
            throw new Error('Required parameter mapper was null or undefined when calling runQueryFilteredByDeploymentId.');
        }





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (mapper !== undefined && mapper !== null) {
            queryParameters = queryParameters.set('mapper', <any>mapper);
        }
        if (builder !== undefined && builder !== null) {
            queryParameters = queryParameters.set('builder', <any>builder);
        }
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('pageSize', <any>pageSize);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/server/queries/definitions/containers/${encodeURIComponent(String(containerId))}/query/${encodeURIComponent(String(queryName))}/filtered-data`,
            body,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}