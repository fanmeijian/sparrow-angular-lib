/**
 * chnplc-service
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
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

import { DataPermissionBean } from '../model/dataPermissionBean';
import { ModelAttribute } from '../model/modelAttribute';
import { PageDataPermission } from '../model/pageDataPermission';
import { PageModel } from '../model/pageModel';
import { PageObject } from '../model/pageObject';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class DataPermissionService {

    protected basePath = 'http://localhost:8601/chnplc-service';
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
     * 数据权限详情
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public dataPermission(id: string, observe?: 'body', reportProgress?: boolean): Observable<DataPermissionBean>;
    public dataPermission(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataPermissionBean>>;
    public dataPermission(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataPermissionBean>>;
    public dataPermission(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling dataPermission.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
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

        return this.httpClient.request<DataPermissionBean>('get',`${this.basePath}/data-permissions/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 浏览数据权限
     * 
     * @param page Zero-based page index (0..N)
     * @param size The size of the page to be returned
     * @param sort Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public dataPermissions(page?: number, size?: number, sort?: Array<string>, observe?: 'body', reportProgress?: boolean): Observable<PageDataPermission>;
    public dataPermissions(page?: number, size?: number, sort?: Array<string>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageDataPermission>>;
    public dataPermissions(page?: number, size?: number, sort?: Array<string>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageDataPermission>>;
    public dataPermissions(page?: number, size?: number, sort?: Array<string>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




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

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
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

        return this.httpClient.request<PageDataPermission>('get',`${this.basePath}/data-permissions`,
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
     * 实体的数据列表
     * 
     * @param className 
     * @param page Zero-based page index (0..N)
     * @param size The size of the page to be returned
     * @param sort Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public entityDataList(className: string, page?: number, size?: number, sort?: Array<string>, observe?: 'body', reportProgress?: boolean): Observable<PageObject>;
    public entityDataList(className: string, page?: number, size?: number, sort?: Array<string>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageObject>>;
    public entityDataList(className: string, page?: number, size?: number, sort?: Array<string>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageObject>>;
    public entityDataList(className: string, page?: number, size?: number, sort?: Array<string>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (className === null || className === undefined) {
            throw new Error('Required parameter className was null or undefined when calling entityDataList.');
        }




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

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
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

        return this.httpClient.request<PageObject>('get',`${this.basePath}/data-permissions/${encodeURIComponent(String(className))}/list`,
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
     * 数据实体列表
     * 
     * @param page Zero-based page index (0..N)
     * @param size The size of the page to be returned
     * @param sort Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param id 
     * @param name 
     * @param remark 
     * @param modelAttributes 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public entityList(page?: number, size?: number, sort?: Array<string>, id?: string, name?: string, remark?: string, modelAttributes?: Array<ModelAttribute>, observe?: 'body', reportProgress?: boolean): Observable<PageModel>;
    public entityList(page?: number, size?: number, sort?: Array<string>, id?: string, name?: string, remark?: string, modelAttributes?: Array<ModelAttribute>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageModel>>;
    public entityList(page?: number, size?: number, sort?: Array<string>, id?: string, name?: string, remark?: string, modelAttributes?: Array<ModelAttribute>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageModel>>;
    public entityList(page?: number, size?: number, sort?: Array<string>, id?: string, name?: string, remark?: string, modelAttributes?: Array<ModelAttribute>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {








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
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('id', <any>id);
        }
        if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('name', <any>name);
        }
        if (remark !== undefined && remark !== null) {
            queryParameters = queryParameters.set('remark', <any>remark);
        }
        if (modelAttributes) {
            modelAttributes.forEach((element) => {
                queryParameters = queryParameters.append('modelAttributes', <any>element);
            })
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
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

        return this.httpClient.request<PageModel>('get',`${this.basePath}/data-permissions/entities`,
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
     * 新增数据权限
     * 
     * @param body 
     * @param modelId 
     * @param dataId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public newDataPermission(body: DataPermissionBean, modelId: string, dataId: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public newDataPermission(body: DataPermissionBean, modelId: string, dataId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public newDataPermission(body: DataPermissionBean, modelId: string, dataId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public newDataPermission(body: DataPermissionBean, modelId: string, dataId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling newDataPermission.');
        }

        if (modelId === null || modelId === undefined) {
            throw new Error('Required parameter modelId was null or undefined when calling newDataPermission.');
        }

        if (dataId === null || dataId === undefined) {
            throw new Error('Required parameter dataId was null or undefined when calling newDataPermission.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (modelId !== undefined && modelId !== null) {
            queryParameters = queryParameters.set('modelId', <any>modelId);
        }
        if (dataId !== undefined && dataId !== null) {
            queryParameters = queryParameters.set('dataId', <any>dataId);
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
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

        return this.httpClient.request<string>('post',`${this.basePath}/data-permissions`,
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
     * 移除数据权限
     * 
     * @param body 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public removeDataPermission(body: DataPermissionBean, id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public removeDataPermission(body: DataPermissionBean, id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public removeDataPermission(body: DataPermissionBean, id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public removeDataPermission(body: DataPermissionBean, id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling removeDataPermission.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling removeDataPermission.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
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

        return this.httpClient.request<any>('post',`${this.basePath}/data-permissions/${encodeURIComponent(String(id))}/remove`,
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
     * 更新数据权限
     * 
     * @param body 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateDataPermission(body: DataPermissionBean, id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateDataPermission(body: DataPermissionBean, id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateDataPermission(body: DataPermissionBean, id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateDataPermission(body: DataPermissionBean, id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateDataPermission.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateDataPermission.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
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

        return this.httpClient.request<any>('patch',`${this.basePath}/data-permissions/${encodeURIComponent(String(id))}`,
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
