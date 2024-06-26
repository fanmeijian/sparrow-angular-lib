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

import { Observable }                                        from 'rxjs';


import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ProcessImagesService {

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
     * Returns an SVG image file of a specified process definition diagram.
     *
     * @param containerId container id that process definition belongs to
     * @param processId identifier of the process definition that image should be loaded for
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProcessImage(containerId: string, processId: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public getProcessImage(containerId: string, processId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public getProcessImage(containerId: string, processId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public getProcessImage(containerId: string, processId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (containerId === null || containerId === undefined) {
            throw new Error('Required parameter containerId was null or undefined when calling getProcessImage.');
        }

        if (processId === null || processId === undefined) {
            throw new Error('Required parameter processId was null or undefined when calling getProcessImage.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/svg+xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<string>(`${this.basePath}/server/containers/${encodeURIComponent(String(containerId))}/images/processes/${encodeURIComponent(String(processId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns an annotated SVG image file of a specified process instance diagram.
     *
     * @param containerId container id that process instance belongs to
     * @param processInstanceId identifier of the process instance that image should be loaded for
     * @param svgCompletedColor svg completed node color
     * @param svgCompletedBorderColor svg completed node border color
     * @param svgActiveBorderColor svg active node border color
     * @param svgInstanceBadgesShow show or hidden instance badges
     * @param svgActiveAsyncBorderColor svg active async node border color
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProcessInstanceImage(containerId: string, processInstanceId: number, svgCompletedColor?: string, svgCompletedBorderColor?: string, svgActiveBorderColor?: string, svgInstanceBadgesShow?: boolean, svgActiveAsyncBorderColor?: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public getProcessInstanceImage(containerId: string, processInstanceId: number, svgCompletedColor?: string, svgCompletedBorderColor?: string, svgActiveBorderColor?: string, svgInstanceBadgesShow?: boolean, svgActiveAsyncBorderColor?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public getProcessInstanceImage(containerId: string, processInstanceId: number, svgCompletedColor?: string, svgCompletedBorderColor?: string, svgActiveBorderColor?: string, svgInstanceBadgesShow?: boolean, svgActiveAsyncBorderColor?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public getProcessInstanceImage(containerId: string, processInstanceId: number, svgCompletedColor?: string, svgCompletedBorderColor?: string, svgActiveBorderColor?: string, svgInstanceBadgesShow?: boolean, svgActiveAsyncBorderColor?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (containerId === null || containerId === undefined) {
            throw new Error('Required parameter containerId was null or undefined when calling getProcessInstanceImage.');
        }

        if (processInstanceId === null || processInstanceId === undefined) {
            throw new Error('Required parameter processInstanceId was null or undefined when calling getProcessInstanceImage.');
        }






        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (svgCompletedColor !== undefined && svgCompletedColor !== null) {
            queryParameters = queryParameters.set('svgCompletedColor', <any>svgCompletedColor);
        }
        if (svgCompletedBorderColor !== undefined && svgCompletedBorderColor !== null) {
            queryParameters = queryParameters.set('svgCompletedBorderColor', <any>svgCompletedBorderColor);
        }
        if (svgActiveBorderColor !== undefined && svgActiveBorderColor !== null) {
            queryParameters = queryParameters.set('svgActiveBorderColor', <any>svgActiveBorderColor);
        }
        if (svgInstanceBadgesShow !== undefined && svgInstanceBadgesShow !== null) {
            queryParameters = queryParameters.set('svgInstanceBadgesShow', <any>svgInstanceBadgesShow);
        }
        if (svgActiveAsyncBorderColor !== undefined && svgActiveAsyncBorderColor !== null) {
            queryParameters = queryParameters.set('svgActiveAsyncBorderColor', <any>svgActiveAsyncBorderColor);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/svg+xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<string>(`${this.basePath}/server/containers/${encodeURIComponent(String(containerId))}/images/processes/instances/${encodeURIComponent(String(processInstanceId))}`,
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
