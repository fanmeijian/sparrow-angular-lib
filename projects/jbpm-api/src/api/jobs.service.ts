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

import { RequestInfoInstance } from '../model/requestInfoInstance';
import { RequestInfoInstanceList } from '../model/requestInfoInstanceList';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class JobsService {

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
     * Deletes a specified job.
     *
     * @param jobId identifier of the asynchronous job to be canceled
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public cancelRequest(jobId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public cancelRequest(jobId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public cancelRequest(jobId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public cancelRequest(jobId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (jobId === null || jobId === undefined) {
            throw new Error('Required parameter jobId was null or undefined when calling cancelRequest.');
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

        return this.httpClient.delete<any>(`${this.basePath}/server/jobs/${encodeURIComponent(String(jobId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns information about a specified job.
     *
     * @param jobId identifier of the asynchronous job to be retrieved
     * @param withErrors optional flag that indicats if errors should be loaded as well
     * @param withData optional flag that indicats if input/output data should be loaded as well
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRequestById(jobId: number, withErrors?: boolean, withData?: boolean, observe?: 'body', reportProgress?: boolean): Observable<RequestInfoInstance>;
    public getRequestById(jobId: number, withErrors?: boolean, withData?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RequestInfoInstance>>;
    public getRequestById(jobId: number, withErrors?: boolean, withData?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RequestInfoInstance>>;
    public getRequestById(jobId: number, withErrors?: boolean, withData?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (jobId === null || jobId === undefined) {
            throw new Error('Required parameter jobId was null or undefined when calling getRequestById.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (withErrors !== undefined && withErrors !== null) {
            queryParameters = queryParameters.set('withErrors', <any>withErrors);
        }
        if (withData !== undefined && withData !== null) {
            queryParameters = queryParameters.set('withData', <any>withData);
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

        return this.httpClient.get<RequestInfoInstance>(`${this.basePath}/server/jobs/${encodeURIComponent(String(jobId))}`,
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
     * Returns information about a job with a specified business key.
     *
     * @param key identifier of the business key that asynchornous jobs should be found for
     * @param status optional job status (QUEUED, DONE, CANCELLED, ERROR, RETRYING, RUNNING)
     * @param page optional pagination - at which page to start, defaults to 0 (meaning first)
     * @param pageSize optional pagination - size of the result, defaults to 10
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRequestsByBusinessKey(key: string, status?: Array<'QUEUED' | 'DONE' | 'CANCELLED' | 'ERROR' | 'RETRYING' | 'RUNNING'>, page?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<RequestInfoInstanceList>;
    public getRequestsByBusinessKey(key: string, status?: Array<'QUEUED' | 'DONE' | 'CANCELLED' | 'ERROR' | 'RETRYING' | 'RUNNING'>, page?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RequestInfoInstanceList>>;
    public getRequestsByBusinessKey(key: string, status?: Array<'QUEUED' | 'DONE' | 'CANCELLED' | 'ERROR' | 'RETRYING' | 'RUNNING'>, page?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RequestInfoInstanceList>>;
    public getRequestsByBusinessKey(key: string, status?: Array<'QUEUED' | 'DONE' | 'CANCELLED' | 'ERROR' | 'RETRYING' | 'RUNNING'>, page?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (key === null || key === undefined) {
            throw new Error('Required parameter key was null or undefined when calling getRequestsByBusinessKey.');
        }




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (status) {
            status.forEach((element) => {
                queryParameters = queryParameters.append('status', <any>element);
            })
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

        return this.httpClient.get<RequestInfoInstanceList>(`${this.basePath}/server/jobs/keys/${encodeURIComponent(String(key))}`,
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
     * Returns jobs configured to run job commands, such as a job type org.jbpm.executor.commands.LogCleanupCommand.
     *
     * @param cmd name of the command that asynchornous jobs should be found for
     * @param status optional job status (QUEUED, DONE, CANCELLED, ERROR, RETRYING, RUNNING)
     * @param page optional pagination - at which page to start, defaults to 0 (meaning first)
     * @param pageSize optional pagination - size of the result, defaults to 10
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRequestsByCommand(cmd: string, status?: Array<'QUEUED' | 'DONE' | 'CANCELLED' | 'ERROR' | 'RETRYING' | 'RUNNING'>, page?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<RequestInfoInstanceList>;
    public getRequestsByCommand(cmd: string, status?: Array<'QUEUED' | 'DONE' | 'CANCELLED' | 'ERROR' | 'RETRYING' | 'RUNNING'>, page?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RequestInfoInstanceList>>;
    public getRequestsByCommand(cmd: string, status?: Array<'QUEUED' | 'DONE' | 'CANCELLED' | 'ERROR' | 'RETRYING' | 'RUNNING'>, page?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RequestInfoInstanceList>>;
    public getRequestsByCommand(cmd: string, status?: Array<'QUEUED' | 'DONE' | 'CANCELLED' | 'ERROR' | 'RETRYING' | 'RUNNING'>, page?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (cmd === null || cmd === undefined) {
            throw new Error('Required parameter cmd was null or undefined when calling getRequestsByCommand.');
        }




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (status) {
            status.forEach((element) => {
                queryParameters = queryParameters.append('status', <any>element);
            })
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

        return this.httpClient.get<RequestInfoInstanceList>(`${this.basePath}/server/jobs/commands/${encodeURIComponent(String(cmd))}`,
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
     * Returns jobs for specified KIE container.
     *
     * @param containerId identifier of the container that asynchornous jobs should be found for
     * @param status optional job status (QUEUED, DONE, CANCELLED, ERROR, RETRYING, RUNNING)
     * @param page optional pagination - at which page to start, defaults to 0 (meaning first)
     * @param pageSize optional pagination - size of the result, defaults to 10
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRequestsByContainer(containerId: string, status?: Array<'QUEUED' | 'DONE' | 'CANCELLED' | 'ERROR' | 'RETRYING' | 'RUNNING'>, page?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<RequestInfoInstanceList>;
    public getRequestsByContainer(containerId: string, status?: Array<'QUEUED' | 'DONE' | 'CANCELLED' | 'ERROR' | 'RETRYING' | 'RUNNING'>, page?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RequestInfoInstanceList>>;
    public getRequestsByContainer(containerId: string, status?: Array<'QUEUED' | 'DONE' | 'CANCELLED' | 'ERROR' | 'RETRYING' | 'RUNNING'>, page?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RequestInfoInstanceList>>;
    public getRequestsByContainer(containerId: string, status?: Array<'QUEUED' | 'DONE' | 'CANCELLED' | 'ERROR' | 'RETRYING' | 'RUNNING'>, page?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (containerId === null || containerId === undefined) {
            throw new Error('Required parameter containerId was null or undefined when calling getRequestsByContainer.');
        }




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (status) {
            status.forEach((element) => {
                queryParameters = queryParameters.append('status', <any>element);
            })
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

        return this.httpClient.get<RequestInfoInstanceList>(`${this.basePath}/server/jobs/containers/${encodeURIComponent(String(containerId))}`,
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
     * Returns jobs for specified process instance.
     *
     * @param processInstanceId identifier of the process instance that asynchornous jobs should be found for
     * @param status optional job status (QUEUED, DONE, CANCELLED, ERROR, RETRYING, RUNNING)
     * @param page optional pagination - at which page to start, defaults to 0 (meaning first)
     * @param pageSize optional pagination - size of the result, defaults to 10
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRequestsByProcessInstance(processInstanceId: number, status?: Array<'QUEUED' | 'DONE' | 'CANCELLED' | 'ERROR' | 'RETRYING' | 'RUNNING'>, page?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<RequestInfoInstanceList>;
    public getRequestsByProcessInstance(processInstanceId: number, status?: Array<'QUEUED' | 'DONE' | 'CANCELLED' | 'ERROR' | 'RETRYING' | 'RUNNING'>, page?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RequestInfoInstanceList>>;
    public getRequestsByProcessInstance(processInstanceId: number, status?: Array<'QUEUED' | 'DONE' | 'CANCELLED' | 'ERROR' | 'RETRYING' | 'RUNNING'>, page?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RequestInfoInstanceList>>;
    public getRequestsByProcessInstance(processInstanceId: number, status?: Array<'QUEUED' | 'DONE' | 'CANCELLED' | 'ERROR' | 'RETRYING' | 'RUNNING'>, page?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (processInstanceId === null || processInstanceId === undefined) {
            throw new Error('Required parameter processInstanceId was null or undefined when calling getRequestsByProcessInstance.');
        }




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (status) {
            status.forEach((element) => {
                queryParameters = queryParameters.append('status', <any>element);
            })
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

        return this.httpClient.get<RequestInfoInstanceList>(`${this.basePath}/server/jobs/processes/instances/${encodeURIComponent(String(processInstanceId))}`,
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
     * Retrieves asynchronous jobs filtered by status
     *
     * @param status optional job status (QUEUED, DONE, CANCELLED, ERROR, RETRYING, RUNNING)
     * @param page optional pagination - at which page to start, defaults to 0 (meaning first)
     * @param pageSize optional pagination - size of the result, defaults to 10
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRequestsByStatus(status: Array<'QUEUED' | 'DONE' | 'CANCELLED' | 'ERROR' | 'RETRYING' | 'RUNNING'>, page?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<RequestInfoInstanceList>;
    public getRequestsByStatus(status: Array<'QUEUED' | 'DONE' | 'CANCELLED' | 'ERROR' | 'RETRYING' | 'RUNNING'>, page?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RequestInfoInstanceList>>;
    public getRequestsByStatus(status: Array<'QUEUED' | 'DONE' | 'CANCELLED' | 'ERROR' | 'RETRYING' | 'RUNNING'>, page?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RequestInfoInstanceList>>;
    public getRequestsByStatus(status: Array<'QUEUED' | 'DONE' | 'CANCELLED' | 'ERROR' | 'RETRYING' | 'RUNNING'>, page?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling getRequestsByStatus.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (status) {
            status.forEach((element) => {
                queryParameters = queryParameters.append('status', <any>element);
            })
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

        return this.httpClient.get<RequestInfoInstanceList>(`${this.basePath}/server/jobs`,
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
     * Re-queues a specified job.
     *
     * @param jobId identifier of the asynchronous job to be requeued
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public requeueRequest(jobId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public requeueRequest(jobId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public requeueRequest(jobId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public requeueRequest(jobId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (jobId === null || jobId === undefined) {
            throw new Error('Required parameter jobId was null or undefined when calling requeueRequest.');
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

        return this.httpClient.put<any>(`${this.basePath}/server/jobs/${encodeURIComponent(String(jobId))}`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Schedules a job and returns the ID for the new job.
     *
     * @param body asynchronous job definition represented as JobRequestInstance
     * @param containerId optional container id that the job should be associated with
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public scheduleRequest(body: string, containerId?: string, observe?: 'body', reportProgress?: boolean): Observable<number>;
    public scheduleRequest(body: string, containerId?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
    public scheduleRequest(body: string, containerId?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
    public scheduleRequest(body: string, containerId?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling scheduleRequest.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (containerId !== undefined && containerId !== null) {
            queryParameters = queryParameters.set('containerId', <any>containerId);
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

        return this.httpClient.post<number>(`${this.basePath}/server/jobs`,
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
     * Updates parameters for job commands, if used.
     *
     * @param jobId identifier of the asynchronous job to be updated
     * @param body data to be updated on the asynchronous job represented as Map
     * @param containerId optional container id that the job should be associated with
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateRequestData(jobId: number, body: string, containerId?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateRequestData(jobId: number, body: string, containerId?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateRequestData(jobId: number, body: string, containerId?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateRequestData(jobId: number, body: string, containerId?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (jobId === null || jobId === undefined) {
            throw new Error('Required parameter jobId was null or undefined when calling updateRequestData.');
        }

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateRequestData.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (containerId !== undefined && containerId !== null) {
            queryParameters = queryParameters.set('containerId', <any>containerId);
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

        return this.httpClient.post<any>(`${this.basePath}/server/jobs/${encodeURIComponent(String(jobId))}/data`,
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
