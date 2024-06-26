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

import { CertificateRepresentation } from '../model/certificateRepresentation';
import { KeyStoreConfig } from '../model/keyStoreConfig';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ClientAttributeCertificateService {

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
     * Get a keystore file for the client, containing private key and public certificate
     * 
     * @param body Keystore configuration as JSON
     * @param realm realm name (not id!)
     * @param id id of client (not client-id)
     * @param attr 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public realmClientsIdCertificatesAttrDownloadPost(body: KeyStoreConfig, realm: string, id: string, attr: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public realmClientsIdCertificatesAttrDownloadPost(body: KeyStoreConfig, realm: string, id: string, attr: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public realmClientsIdCertificatesAttrDownloadPost(body: KeyStoreConfig, realm: string, id: string, attr: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public realmClientsIdCertificatesAttrDownloadPost(body: KeyStoreConfig, realm: string, id: string, attr: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling realmClientsIdCertificatesAttrDownloadPost.');
        }

        if (realm === null || realm === undefined) {
            throw new Error('Required parameter realm was null or undefined when calling realmClientsIdCertificatesAttrDownloadPost.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling realmClientsIdCertificatesAttrDownloadPost.');
        }

        if (attr === null || attr === undefined) {
            throw new Error('Required parameter attr was null or undefined when calling realmClientsIdCertificatesAttrDownloadPost.');
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
            'application/octet-stream'
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

        return this.httpClient.request<string>('post',`${this.basePath}/${encodeURIComponent(String(realm))}/clients/${encodeURIComponent(String(id))}/certificates/${encodeURIComponent(String(attr))}/download`,
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
     * Generate a new keypair and certificate, and get the private key file   Generates a keypair and certificate and serves the private key in a specified keystore format.
     * 
     * @param body Keystore configuration as JSON
     * @param realm realm name (not id!)
     * @param id id of client (not client-id)
     * @param attr 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public realmClientsIdCertificatesAttrGenerateAndDownloadPost(body: KeyStoreConfig, realm: string, id: string, attr: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public realmClientsIdCertificatesAttrGenerateAndDownloadPost(body: KeyStoreConfig, realm: string, id: string, attr: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public realmClientsIdCertificatesAttrGenerateAndDownloadPost(body: KeyStoreConfig, realm: string, id: string, attr: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public realmClientsIdCertificatesAttrGenerateAndDownloadPost(body: KeyStoreConfig, realm: string, id: string, attr: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling realmClientsIdCertificatesAttrGenerateAndDownloadPost.');
        }

        if (realm === null || realm === undefined) {
            throw new Error('Required parameter realm was null or undefined when calling realmClientsIdCertificatesAttrGenerateAndDownloadPost.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling realmClientsIdCertificatesAttrGenerateAndDownloadPost.');
        }

        if (attr === null || attr === undefined) {
            throw new Error('Required parameter attr was null or undefined when calling realmClientsIdCertificatesAttrGenerateAndDownloadPost.');
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
            'application/octet-stream'
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

        return this.httpClient.request<string>('post',`${this.basePath}/${encodeURIComponent(String(realm))}/clients/${encodeURIComponent(String(id))}/certificates/${encodeURIComponent(String(attr))}/generate-and-download`,
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
     * Generate a new certificate with new key pair
     * 
     * @param realm realm name (not id!)
     * @param id id of client (not client-id)
     * @param attr 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public realmClientsIdCertificatesAttrGeneratePost(realm: string, id: string, attr: string, observe?: 'body', reportProgress?: boolean): Observable<CertificateRepresentation>;
    public realmClientsIdCertificatesAttrGeneratePost(realm: string, id: string, attr: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CertificateRepresentation>>;
    public realmClientsIdCertificatesAttrGeneratePost(realm: string, id: string, attr: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CertificateRepresentation>>;
    public realmClientsIdCertificatesAttrGeneratePost(realm: string, id: string, attr: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (realm === null || realm === undefined) {
            throw new Error('Required parameter realm was null or undefined when calling realmClientsIdCertificatesAttrGeneratePost.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling realmClientsIdCertificatesAttrGeneratePost.');
        }

        if (attr === null || attr === undefined) {
            throw new Error('Required parameter attr was null or undefined when calling realmClientsIdCertificatesAttrGeneratePost.');
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

        return this.httpClient.request<CertificateRepresentation>('post',`${this.basePath}/${encodeURIComponent(String(realm))}/clients/${encodeURIComponent(String(id))}/certificates/${encodeURIComponent(String(attr))}/generate`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get key info
     * 
     * @param realm realm name (not id!)
     * @param id id of client (not client-id)
     * @param attr 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public realmClientsIdCertificatesAttrGet(realm: string, id: string, attr: string, observe?: 'body', reportProgress?: boolean): Observable<CertificateRepresentation>;
    public realmClientsIdCertificatesAttrGet(realm: string, id: string, attr: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CertificateRepresentation>>;
    public realmClientsIdCertificatesAttrGet(realm: string, id: string, attr: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CertificateRepresentation>>;
    public realmClientsIdCertificatesAttrGet(realm: string, id: string, attr: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (realm === null || realm === undefined) {
            throw new Error('Required parameter realm was null or undefined when calling realmClientsIdCertificatesAttrGet.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling realmClientsIdCertificatesAttrGet.');
        }

        if (attr === null || attr === undefined) {
            throw new Error('Required parameter attr was null or undefined when calling realmClientsIdCertificatesAttrGet.');
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

        return this.httpClient.request<CertificateRepresentation>('get',`${this.basePath}/${encodeURIComponent(String(realm))}/clients/${encodeURIComponent(String(id))}/certificates/${encodeURIComponent(String(attr))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Upload only certificate, not private key
     * 
     * @param realm realm name (not id!)
     * @param id id of client (not client-id)
     * @param attr 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public realmClientsIdCertificatesAttrUploadCertificatePost(realm: string, id: string, attr: string, observe?: 'body', reportProgress?: boolean): Observable<CertificateRepresentation>;
    public realmClientsIdCertificatesAttrUploadCertificatePost(realm: string, id: string, attr: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CertificateRepresentation>>;
    public realmClientsIdCertificatesAttrUploadCertificatePost(realm: string, id: string, attr: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CertificateRepresentation>>;
    public realmClientsIdCertificatesAttrUploadCertificatePost(realm: string, id: string, attr: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (realm === null || realm === undefined) {
            throw new Error('Required parameter realm was null or undefined when calling realmClientsIdCertificatesAttrUploadCertificatePost.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling realmClientsIdCertificatesAttrUploadCertificatePost.');
        }

        if (attr === null || attr === undefined) {
            throw new Error('Required parameter attr was null or undefined when calling realmClientsIdCertificatesAttrUploadCertificatePost.');
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

        return this.httpClient.request<CertificateRepresentation>('post',`${this.basePath}/${encodeURIComponent(String(realm))}/clients/${encodeURIComponent(String(id))}/certificates/${encodeURIComponent(String(attr))}/upload-certificate`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Upload certificate and eventually private key
     * 
     * @param realm realm name (not id!)
     * @param id id of client (not client-id)
     * @param attr 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public realmClientsIdCertificatesAttrUploadPost(realm: string, id: string, attr: string, observe?: 'body', reportProgress?: boolean): Observable<CertificateRepresentation>;
    public realmClientsIdCertificatesAttrUploadPost(realm: string, id: string, attr: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CertificateRepresentation>>;
    public realmClientsIdCertificatesAttrUploadPost(realm: string, id: string, attr: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CertificateRepresentation>>;
    public realmClientsIdCertificatesAttrUploadPost(realm: string, id: string, attr: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (realm === null || realm === undefined) {
            throw new Error('Required parameter realm was null or undefined when calling realmClientsIdCertificatesAttrUploadPost.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling realmClientsIdCertificatesAttrUploadPost.');
        }

        if (attr === null || attr === undefined) {
            throw new Error('Required parameter attr was null or undefined when calling realmClientsIdCertificatesAttrUploadPost.');
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

        return this.httpClient.request<CertificateRepresentation>('post',`${this.basePath}/${encodeURIComponent(String(realm))}/clients/${encodeURIComponent(String(id))}/certificates/${encodeURIComponent(String(attr))}/upload`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
