/**
 * Keycloak Admin REST API
 * This is a REST API reference for the Keycloak Admin REST API.
 *
 * OpenAPI spec version: 1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { ClientScopeRepresentation } from '../model/clientScopeRepresentation';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ClientScopesService {

    protected basePath = '/';
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
     * Get client scopes belonging to the realm   Returns a list of client scopes belonging to the realm
     * 
     * @param realm realm name (not id!)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public realmClientScopesGet(realm: string, observe?: 'body', reportProgress?: boolean): Observable<Array<{ [key: string]: any; }>>;
    public realmClientScopesGet(realm: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<{ [key: string]: any; }>>>;
    public realmClientScopesGet(realm: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<{ [key: string]: any; }>>>;
    public realmClientScopesGet(realm: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (realm === null || realm === undefined) {
            throw new Error('Required parameter realm was null or undefined when calling realmClientScopesGet.');
        }

        let headers = this.defaultHeaders;

        // authentication (access_token) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
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
        ];

        return this.httpClient.request<Array<{ [key: string]: any; }>>('get',`${this.basePath}/${encodeURIComponent(String(realm))}/client-scopes`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete the client scope
     * 
     * @param realm realm name (not id!)
     * @param id id of client scope (not name)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public realmClientScopesIdDelete(realm: string, id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public realmClientScopesIdDelete(realm: string, id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public realmClientScopesIdDelete(realm: string, id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public realmClientScopesIdDelete(realm: string, id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (realm === null || realm === undefined) {
            throw new Error('Required parameter realm was null or undefined when calling realmClientScopesIdDelete.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling realmClientScopesIdDelete.');
        }

        let headers = this.defaultHeaders;

        // authentication (access_token) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('delete',`${this.basePath}/${encodeURIComponent(String(realm))}/client-scopes/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get representation of the client scope
     * 
     * @param realm realm name (not id!)
     * @param id id of client scope (not name)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public realmClientScopesIdGet(realm: string, id: string, observe?: 'body', reportProgress?: boolean): Observable<ClientScopeRepresentation>;
    public realmClientScopesIdGet(realm: string, id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ClientScopeRepresentation>>;
    public realmClientScopesIdGet(realm: string, id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ClientScopeRepresentation>>;
    public realmClientScopesIdGet(realm: string, id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (realm === null || realm === undefined) {
            throw new Error('Required parameter realm was null or undefined when calling realmClientScopesIdGet.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling realmClientScopesIdGet.');
        }

        let headers = this.defaultHeaders;

        // authentication (access_token) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
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
        ];

        return this.httpClient.request<ClientScopeRepresentation>('get',`${this.basePath}/${encodeURIComponent(String(realm))}/client-scopes/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update the client scope
     * 
     * @param body 
     * @param realm realm name (not id!)
     * @param id id of client scope (not name)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public realmClientScopesIdPut(body: ClientScopeRepresentation, realm: string, id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public realmClientScopesIdPut(body: ClientScopeRepresentation, realm: string, id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public realmClientScopesIdPut(body: ClientScopeRepresentation, realm: string, id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public realmClientScopesIdPut(body: ClientScopeRepresentation, realm: string, id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling realmClientScopesIdPut.');
        }

        if (realm === null || realm === undefined) {
            throw new Error('Required parameter realm was null or undefined when calling realmClientScopesIdPut.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling realmClientScopesIdPut.');
        }

        let headers = this.defaultHeaders;

        // authentication (access_token) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
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

        return this.httpClient.request<any>('put',`${this.basePath}/${encodeURIComponent(String(realm))}/client-scopes/${encodeURIComponent(String(id))}`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Create a new client scope   Client Scope’s name must be unique!
     * 
     * @param body 
     * @param realm realm name (not id!)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public realmClientScopesPost(body: ClientScopeRepresentation, realm: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public realmClientScopesPost(body: ClientScopeRepresentation, realm: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public realmClientScopesPost(body: ClientScopeRepresentation, realm: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public realmClientScopesPost(body: ClientScopeRepresentation, realm: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling realmClientScopesPost.');
        }

        if (realm === null || realm === undefined) {
            throw new Error('Required parameter realm was null or undefined when calling realmClientScopesPost.');
        }

        let headers = this.defaultHeaders;

        // authentication (access_token) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
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

        return this.httpClient.request<any>('post',`${this.basePath}/${encodeURIComponent(String(realm))}/client-scopes`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}