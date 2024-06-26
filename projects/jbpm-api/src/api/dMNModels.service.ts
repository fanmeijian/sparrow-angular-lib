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



import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { Observable } from 'rxjs';


@Injectable()
export class DMNModelsService {

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
     * Evaluates decisions for given input
     * Please reference the documentation for usage of the KIE Server REST API for DMN (doc ref: \&quot;Executing a DMN service using the KIE Server REST API\&quot; section in the Getting started with decision services).
     * @param containerId Container id to be used to evaluate decisions on
     * @param body DMN context to be used while evaluation decisions as DMNContextKS type
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public evaluateDecisions(containerId: string, body: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public evaluateDecisions(containerId: string, body: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public evaluateDecisions(containerId: string, body: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public evaluateDecisions(containerId: string, body: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (containerId === null || containerId === undefined) {
            throw new Error('Required parameter containerId was null or undefined when calling evaluateDecisions.');
        }

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling evaluateDecisions.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<string>(`${this.basePath}/server/containers/${encodeURIComponent(String(containerId))}/dmn`,
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
     * Model-specific DMN evaluation
     * This is a techincal endpoint not directly documented here; this endpoint instead is documented in another Swagger/OAS definitions. Please reference container-specific generated Swagger/OAS definitions, as described in the documentation (doc ref: \&quot;REST endpoints for specific DMN models\&quot;, req refs: BAPL-1787, DROOLS-6047).
     * @param containerId Container id to be used to evaluate decisions on
     * @param modelId Reference container-specific Swagger/OAS definitions
     * @param body Reference container-specific Swagger/OAS definitions
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public evaluateModel(containerId: string, modelId: string, body: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public evaluateModel(containerId: string, modelId: string, body: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public evaluateModel(containerId: string, modelId: string, body: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public evaluateModel(containerId: string, modelId: string, body: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (containerId === null || containerId === undefined) {
            throw new Error('Required parameter containerId was null or undefined when calling evaluateModel.');
        }

        if (modelId === null || modelId === undefined) {
            throw new Error('Required parameter modelId was null or undefined when calling evaluateModel.');
        }

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling evaluateModel.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/server/containers/${encodeURIComponent(String(containerId))}/dmn/models/${encodeURIComponent(String(modelId))}`,
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
     * Model-specific DMN evaluation
     * This is a techincal endpoint not directly documented here; this endpoint instead is documented in another Swagger/OAS definitions. Please reference container-specific generated Swagger/OAS definitions, as described in the documentation (doc ref: \&quot;REST endpoints for specific DMN models\&quot;, req refs: BAPL-1787, DROOLS-6047).
     * @param containerId Container id to be used to evaluate decisions on
     * @param modelId Reference container-specific Swagger/OAS definitions
     * @param body Reference container-specific Swagger/OAS definitions
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public evaluateModelAsDmnResult(containerId: string, modelId: string, body: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public evaluateModelAsDmnResult(containerId: string, modelId: string, body: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public evaluateModelAsDmnResult(containerId: string, modelId: string, body: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public evaluateModelAsDmnResult(containerId: string, modelId: string, body: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (containerId === null || containerId === undefined) {
            throw new Error('Required parameter containerId was null or undefined when calling evaluateModelAsDmnResult.');
        }

        if (modelId === null || modelId === undefined) {
            throw new Error('Required parameter modelId was null or undefined when calling evaluateModelAsDmnResult.');
        }

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling evaluateModelAsDmnResult.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/server/containers/${encodeURIComponent(String(containerId))}/dmn/models/${encodeURIComponent(String(modelId))}/dmnresult`,
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
     * Model-specific DMN evaluation
     * This is a techincal endpoint not directly documented here; this endpoint instead is documented in another Swagger/OAS definitions. Please reference container-specific generated Swagger/OAS definitions, as described in the documentation (doc ref: \&quot;REST endpoints for specific DMN models\&quot;, req refs: BAPL-1787, DROOLS-6047).
     * @param containerId Container id to be used to evaluate decisions on
     * @param modelId Reference container-specific Swagger/OAS definitions
     * @param decisionServiceId Reference container-specific Swagger/OAS definitions
     * @param body Reference container-specific Swagger/OAS definitions
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public evaluateModelDS(containerId: string, modelId: string, decisionServiceId: string, body: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public evaluateModelDS(containerId: string, modelId: string, decisionServiceId: string, body: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public evaluateModelDS(containerId: string, modelId: string, decisionServiceId: string, body: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public evaluateModelDS(containerId: string, modelId: string, decisionServiceId: string, body: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (containerId === null || containerId === undefined) {
            throw new Error('Required parameter containerId was null or undefined when calling evaluateModelDS.');
        }

        if (modelId === null || modelId === undefined) {
            throw new Error('Required parameter modelId was null or undefined when calling evaluateModelDS.');
        }

        if (decisionServiceId === null || decisionServiceId === undefined) {
            throw new Error('Required parameter decisionServiceId was null or undefined when calling evaluateModelDS.');
        }

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling evaluateModelDS.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/server/containers/${encodeURIComponent(String(containerId))}/dmn/models/${encodeURIComponent(String(modelId))}/${encodeURIComponent(String(decisionServiceId))}`,
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
     * Model-specific DMN evaluation
     * This is a techincal endpoint not directly documented here; this endpoint instead is documented in another Swagger/OAS definitions. Please reference container-specific generated Swagger/OAS definitions, as described in the documentation (doc ref: \&quot;REST endpoints for specific DMN models\&quot;, req refs: BAPL-1787, DROOLS-6047).
     * @param containerId Container id to be used to evaluate decisions on
     * @param modelId Reference container-specific Swagger/OAS definitions
     * @param decisionServiceId Reference container-specific Swagger/OAS definitions
     * @param body Reference container-specific Swagger/OAS definitions
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public evaluateModelDSAsDmnResult(containerId: string, modelId: string, decisionServiceId: string, body: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public evaluateModelDSAsDmnResult(containerId: string, modelId: string, decisionServiceId: string, body: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public evaluateModelDSAsDmnResult(containerId: string, modelId: string, decisionServiceId: string, body: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public evaluateModelDSAsDmnResult(containerId: string, modelId: string, decisionServiceId: string, body: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (containerId === null || containerId === undefined) {
            throw new Error('Required parameter containerId was null or undefined when calling evaluateModelDSAsDmnResult.');
        }

        if (modelId === null || modelId === undefined) {
            throw new Error('Required parameter modelId was null or undefined when calling evaluateModelDSAsDmnResult.');
        }

        if (decisionServiceId === null || decisionServiceId === undefined) {
            throw new Error('Required parameter decisionServiceId was null or undefined when calling evaluateModelDSAsDmnResult.');
        }

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling evaluateModelDSAsDmnResult.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/server/containers/${encodeURIComponent(String(containerId))}/dmn/models/${encodeURIComponent(String(modelId))}/${encodeURIComponent(String(decisionServiceId))}/dmnresult`,
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
     * Model-specific definitions
     * This is a techincal endpoint not directly documented here; this endpoint instead is documented in another Swagger/OAS definitions. Please reference container-specific generated Swagger/OAS definitions, as described in the documentation (doc ref: \&quot;REST endpoints for specific DMN models\&quot;, req refs: BAPL-1787, DROOLS-6047).
     * @param containerId Container id to retrieve the Model-specific definitions
     * @param modelId Reference container-specific Swagger/OAS definitions
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getModel(containerId: string, modelId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getModel(containerId: string, modelId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getModel(containerId: string, modelId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getModel(containerId: string, modelId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (containerId === null || containerId === undefined) {
            throw new Error('Required parameter containerId was null or undefined when calling getModel.');
        }

        if (modelId === null || modelId === undefined) {
            throw new Error('Required parameter modelId was null or undefined when calling getModel.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/server/containers/${encodeURIComponent(String(containerId))}/dmn/models/${encodeURIComponent(String(modelId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves DMN model for given container
     * Please reference the documentation for usage of the KIE Server REST API for DMN (doc ref: \&quot;Executing a DMN service using the KIE Server REST API\&quot; section in the Getting started with decision services).
     * @param containerId Container id that models should be loaded from
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getModels(containerId: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public getModels(containerId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public getModels(containerId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public getModels(containerId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (containerId === null || containerId === undefined) {
            throw new Error('Required parameter containerId was null or undefined when calling getModels.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<string>(`${this.basePath}/server/containers/${encodeURIComponent(String(containerId))}/dmn`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Model-specific definitions
     * Retrieves the Model-specific Swagger/OAS definitions, for the given Container id. Please reference container-specific generated Swagger/OAS definitions, as described in the documentation (doc ref: \&quot;REST endpoints for specific DMN models\&quot;, req refs: BAPL-1787, DROOLS-6047).
     * @param containerId Container id to retrieve the Model-specific definitions
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getOAS(containerId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getOAS(containerId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getOAS(containerId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getOAS(containerId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (containerId === null || containerId === undefined) {
            throw new Error('Required parameter containerId was null or undefined when calling getOAS.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/yaml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/server/containers/${encodeURIComponent(String(containerId))}/dmn/openapi`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Model-specific definitions
     * Retrieves the Model-specific Swagger/OAS definitions, for the given Container id. Please reference container-specific generated Swagger/OAS definitions, as described in the documentation (doc ref: \&quot;REST endpoints for specific DMN models\&quot;, req refs: BAPL-1787, DROOLS-6047).
     * @param containerId Container id to retrieve the Model-specific definitions
     * @param type
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getOASType(containerId: string, type: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getOASType(containerId: string, type: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getOASType(containerId: string, type: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getOASType(containerId: string, type: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (containerId === null || containerId === undefined) {
            throw new Error('Required parameter containerId was null or undefined when calling getOASType.');
        }

        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling getOASType.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/yaml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/server/containers/${encodeURIComponent(String(containerId))}/dmn/openapi.${encodeURIComponent(String(type))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
