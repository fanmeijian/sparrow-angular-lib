/**
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
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

import { PageObject } from '../model/pageObject';
import { PageSparrowFile } from '../model/pageSparrowFile';
import { SparrowFile } from '../model/sparrowFile';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class FileService {

    protected basePath = 'http://localhost:8080';
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
     * 增加授权
     * 
     * @param body 
     * @param type 
     * @param sparrowFileId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addFilePermissions(body: Array<any>, type: string, sparrowFileId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public addFilePermissions(body: Array<any>, type: string, sparrowFileId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public addFilePermissions(body: Array<any>, type: string, sparrowFileId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public addFilePermissions(body: Array<any>, type: string, sparrowFileId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addFilePermissions.');
        }

        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling addFilePermissions.');
        }

        if (sparrowFileId === null || sparrowFileId === undefined) {
            throw new Error('Required parameter sparrowFileId was null or undefined when calling addFilePermissions.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (type !== undefined && type !== null) {
            queryParameters = queryParameters.set('type', <any>type);
        }

        let headers = this.defaultHeaders;

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

        return this.httpClient.request<any>('post',`${this.basePath}/files/${encodeURIComponent(String(sparrowFileId))}/permissions`,
            {
                body: body,
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 删除文件
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteFiles(body: Array<string>, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteFiles(body: Array<string>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteFiles(body: Array<string>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteFiles(body: Array<string>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling deleteFiles.');
        }

        let headers = this.defaultHeaders;

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

        return this.httpClient.request<any>('post',`${this.basePath}/files/delete`,
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
     * 文件详情
     * 
     * @param sparrowFileId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public file(sparrowFileId: string, observe?: 'body', reportProgress?: boolean): Observable<SparrowFile>;
    public file(sparrowFileId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SparrowFile>>;
    public file(sparrowFileId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SparrowFile>>;
    public file(sparrowFileId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (sparrowFileId === null || sparrowFileId === undefined) {
            throw new Error('Required parameter sparrowFileId was null or undefined when calling file.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<SparrowFile>('get',`${this.basePath}/files/${encodeURIComponent(String(sparrowFileId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 可访问权限列表
     * 
     * @param sparrowFileId 
     * @param type 
     * @param page Zero-based page index (0..N)
     * @param size The size of the page to be returned
     * @param sort Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public filePermissions(sparrowFileId: string, type: string, page?: number, size?: number, sort?: Array<string>, observe?: 'body', reportProgress?: boolean): Observable<PageObject>;
    public filePermissions(sparrowFileId: string, type: string, page?: number, size?: number, sort?: Array<string>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageObject>>;
    public filePermissions(sparrowFileId: string, type: string, page?: number, size?: number, sort?: Array<string>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageObject>>;
    public filePermissions(sparrowFileId: string, type: string, page?: number, size?: number, sort?: Array<string>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (sparrowFileId === null || sparrowFileId === undefined) {
            throw new Error('Required parameter sparrowFileId was null or undefined when calling filePermissions.');
        }

        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling filePermissions.');
        }




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (type !== undefined && type !== null) {
            queryParameters = queryParameters.set('type', <any>type);
        }
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
        }
        if (sort) {
            sort.forEach((element) => {
                queryParameters = queryParameters.append('sort', <any>element);
            })
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<PageObject>('get',`${this.basePath}/files/${encodeURIComponent(String(sparrowFileId))}/permissions`,
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
     * 浏览文件
     * 
     * @param page Zero-based page index (0..N)
     * @param size The size of the page to be returned
     * @param sort Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param scope 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public files(page?: number, size?: number, sort?: Array<string>, scope?: SparrowFile, observe?: 'body', reportProgress?: boolean): Observable<PageSparrowFile>;
    public files(page?: number, size?: number, sort?: Array<string>, scope?: SparrowFile, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageSparrowFile>>;
    public files(page?: number, size?: number, sort?: Array<string>, scope?: SparrowFile, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageSparrowFile>>;
    public files(page?: number, size?: number, sort?: Array<string>, scope?: SparrowFile, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
        }
        if (sort) {
            sort.forEach((element) => {
                queryParameters = queryParameters.append('sort', <any>element);
            })
        }
        if (scope !== undefined && scope !== null) {
            queryParameters = queryParameters.set('scope', <any>scope);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<PageSparrowFile>('get',`${this.basePath}/files`,
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
     * 新增文件
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public newFile(body: SparrowFile, observe?: 'body', reportProgress?: boolean): Observable<SparrowFile>;
    public newFile(body: SparrowFile, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SparrowFile>>;
    public newFile(body: SparrowFile, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SparrowFile>>;
    public newFile(body: SparrowFile, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling newFile.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
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

        return this.httpClient.request<SparrowFile>('post',`${this.basePath}/files`,
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
     * 浏览预置功能
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public preserveFile(observe?: 'body', reportProgress?: boolean): Observable<Array<string>>;
    public preserveFile(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<string>>>;
    public preserveFile(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<string>>>;
    public preserveFile(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<string>>('get',`${this.basePath}/files/preserve`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 移除授权
     * 
     * @param body 
     * @param type 
     * @param sparrowFileId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public removeFilePermissions(body: Array<any>, type: string, sparrowFileId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public removeFilePermissions(body: Array<any>, type: string, sparrowFileId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public removeFilePermissions(body: Array<any>, type: string, sparrowFileId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public removeFilePermissions(body: Array<any>, type: string, sparrowFileId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling removeFilePermissions.');
        }

        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling removeFilePermissions.');
        }

        if (sparrowFileId === null || sparrowFileId === undefined) {
            throw new Error('Required parameter sparrowFileId was null or undefined when calling removeFilePermissions.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (type !== undefined && type !== null) {
            queryParameters = queryParameters.set('type', <any>type);
        }

        let headers = this.defaultHeaders;

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

        return this.httpClient.request<any>('post',`${this.basePath}/files/${encodeURIComponent(String(sparrowFileId))}/permissions/remove`,
            {
                body: body,
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 更新文件
     * 
     * @param body 
     * @param sparrowFileId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateFile(body: SparrowFile, sparrowFileId: string, observe?: 'body', reportProgress?: boolean): Observable<SparrowFile>;
    public updateFile(body: SparrowFile, sparrowFileId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SparrowFile>>;
    public updateFile(body: SparrowFile, sparrowFileId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SparrowFile>>;
    public updateFile(body: SparrowFile, sparrowFileId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateFile.');
        }

        if (sparrowFileId === null || sparrowFileId === undefined) {
            throw new Error('Required parameter sparrowFileId was null or undefined when calling updateFile.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
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

        return this.httpClient.request<SparrowFile>('patch',`${this.basePath}/files/${encodeURIComponent(String(sparrowFileId))}`,
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