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

import { Group } from '../model/group';
import { PageGroup } from '../model/pageGroup';
import { PageObject } from '../model/pageObject';
import { PageOrganizationGroup } from '../model/pageOrganizationGroup';
import { SparrowTreeGroupString } from '../model/sparrowTreeGroupString';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class GroupService {

    protected basePath = 'http://localhost:8280/fanchuan-service';
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
     * 添加组成员
     * 
     * @param body 
     * @param type 
     * @param groupId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addGroupMember(body: Array<any>, type: string, groupId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public addGroupMember(body: Array<any>, type: string, groupId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public addGroupMember(body: Array<any>, type: string, groupId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public addGroupMember(body: Array<any>, type: string, groupId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addGroupMember.');
        }

        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling addGroupMember.');
        }

        if (groupId === null || groupId === undefined) {
            throw new Error('Required parameter groupId was null or undefined when calling addGroupMember.');
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

        return this.httpClient.request<any>('post',`${this.basePath}/groups/${encodeURIComponent(String(groupId))}/members`,
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
     * 设置所属组织
     * 
     * @param body 
     * @param groupId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addGroupParentOrg(body: Array<string>, groupId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public addGroupParentOrg(body: Array<string>, groupId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public addGroupParentOrg(body: Array<string>, groupId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public addGroupParentOrg(body: Array<string>, groupId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addGroupParentOrg.');
        }

        if (groupId === null || groupId === undefined) {
            throw new Error('Required parameter groupId was null or undefined when calling addGroupParentOrg.');
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

        return this.httpClient.request<any>('post',`${this.basePath}/groups/${encodeURIComponent(String(groupId))}/parentOrganizations`,
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
     * 删除群组
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteOrgGroup(body: Array<string>, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteOrgGroup(body: Array<string>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteOrgGroup(body: Array<string>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteOrgGroup(body: Array<string>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling deleteOrgGroup.');
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

        return this.httpClient.request<any>('put',`${this.basePath}/groups/delete`,
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
     * 获取所属组织
     * 
     * @param groupId 
     * @param page Zero-based page index (0..N)
     * @param size The size of the page to be returned
     * @param sort Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public groupParentOrgs(groupId: string, page?: number, size?: number, sort?: Array<string>, observe?: 'body', reportProgress?: boolean): Observable<PageOrganizationGroup>;
    public groupParentOrgs(groupId: string, page?: number, size?: number, sort?: Array<string>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageOrganizationGroup>>;
    public groupParentOrgs(groupId: string, page?: number, size?: number, sort?: Array<string>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageOrganizationGroup>>;
    public groupParentOrgs(groupId: string, page?: number, size?: number, sort?: Array<string>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (groupId === null || groupId === undefined) {
            throw new Error('Required parameter groupId was null or undefined when calling groupParentOrgs.');
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

        return this.httpClient.request<PageOrganizationGroup>('get',`${this.basePath}/groups/${encodeURIComponent(String(groupId))}/parentOrganizations`,
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
     * 新增群组
     * 
     * @param body 
     * @param parentOrg 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public newOrgGroup(body: Group, parentOrg: Array<string>, observe?: 'body', reportProgress?: boolean): Observable<Group>;
    public newOrgGroup(body: Group, parentOrg: Array<string>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Group>>;
    public newOrgGroup(body: Group, parentOrg: Array<string>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Group>>;
    public newOrgGroup(body: Group, parentOrg: Array<string>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling newOrgGroup.');
        }

        if (parentOrg === null || parentOrg === undefined) {
            throw new Error('Required parameter parentOrg was null or undefined when calling newOrgGroup.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (parentOrg) {
            parentOrg.forEach((element) => {
                queryParameters = queryParameters.append('parentOrg', <any>element);
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<Group>('post',`${this.basePath}/groups`,
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
     * 群组详情
     * 
     * @param groupId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public orgGroup(groupId: string, observe?: 'body', reportProgress?: boolean): Observable<Group>;
    public orgGroup(groupId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Group>>;
    public orgGroup(groupId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Group>>;
    public orgGroup(groupId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (groupId === null || groupId === undefined) {
            throw new Error('Required parameter groupId was null or undefined when calling orgGroup.');
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

        return this.httpClient.request<Group>('get',`${this.basePath}/groups/${encodeURIComponent(String(groupId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 组成员列表
     * 
     * @param groupId 
     * @param type 
     * @param page Zero-based page index (0..N)
     * @param size The size of the page to be returned
     * @param sort Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public orgGroupMembers(groupId: string, type: string, page?: number, size?: number, sort?: Array<string>, observe?: 'body', reportProgress?: boolean): Observable<PageObject>;
    public orgGroupMembers(groupId: string, type: string, page?: number, size?: number, sort?: Array<string>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageObject>>;
    public orgGroupMembers(groupId: string, type: string, page?: number, size?: number, sort?: Array<string>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageObject>>;
    public orgGroupMembers(groupId: string, type: string, page?: number, size?: number, sort?: Array<string>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (groupId === null || groupId === undefined) {
            throw new Error('Required parameter groupId was null or undefined when calling orgGroupMembers.');
        }

        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling orgGroupMembers.');
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

        return this.httpClient.request<PageObject>('get',`${this.basePath}/groups/${encodeURIComponent(String(groupId))}/members`,
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
     * 群组树
     * 
     * @param parentId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public orgGroupTree(parentId: string, observe?: 'body', reportProgress?: boolean): Observable<SparrowTreeGroupString>;
    public orgGroupTree(parentId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SparrowTreeGroupString>>;
    public orgGroupTree(parentId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SparrowTreeGroupString>>;
    public orgGroupTree(parentId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (parentId === null || parentId === undefined) {
            throw new Error('Required parameter parentId was null or undefined when calling orgGroupTree.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (parentId !== undefined && parentId !== null) {
            queryParameters = queryParameters.set('parentId', <any>parentId);
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

        return this.httpClient.request<SparrowTreeGroupString>('get',`${this.basePath}/groups/tree`,
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
     * 群组列表
     * 
     * @param page Zero-based page index (0..N)
     * @param size The size of the page to be returned
     * @param sort Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param name 
     * @param code 
     * @param createdDate 
     * @param createdBy 
     * @param modifiedDate 
     * @param modifitedBy 
     * @param status 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public orgGroups(page?: number, size?: number, sort?: Array<string>, name?: string, code?: string, createdDate?: Date, createdBy?: string, modifiedDate?: Date, modifitedBy?: string, status?: string, observe?: 'body', reportProgress?: boolean): Observable<PageGroup>;
    public orgGroups(page?: number, size?: number, sort?: Array<string>, name?: string, code?: string, createdDate?: Date, createdBy?: string, modifiedDate?: Date, modifitedBy?: string, status?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageGroup>>;
    public orgGroups(page?: number, size?: number, sort?: Array<string>, name?: string, code?: string, createdDate?: Date, createdBy?: string, modifiedDate?: Date, modifitedBy?: string, status?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageGroup>>;
    public orgGroups(page?: number, size?: number, sort?: Array<string>, name?: string, code?: string, createdDate?: Date, createdBy?: string, modifiedDate?: Date, modifitedBy?: string, status?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {











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
        if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('name', <any>name);
        }
        if (code !== undefined && code !== null) {
            queryParameters = queryParameters.set('code', <any>code);
        }
        if (createdDate !== undefined && createdDate !== null) {
            queryParameters = queryParameters.set('createdDate', <any>createdDate.toISOString());
        }
        if (createdBy !== undefined && createdBy !== null) {
            queryParameters = queryParameters.set('createdBy', <any>createdBy);
        }
        if (modifiedDate !== undefined && modifiedDate !== null) {
            queryParameters = queryParameters.set('modifiedDate', <any>modifiedDate.toISOString());
        }
        if (modifitedBy !== undefined && modifitedBy !== null) {
            queryParameters = queryParameters.set('modifitedBy', <any>modifitedBy);
        }
        if (status !== undefined && status !== null) {
            queryParameters = queryParameters.set('status', <any>status);
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

        return this.httpClient.request<PageGroup>('get',`${this.basePath}/groups`,
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
     * 移除组成员
     * 
     * @param body 
     * @param type 
     * @param groupId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public removeGroupMember(body: Array<any>, type: string, groupId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public removeGroupMember(body: Array<any>, type: string, groupId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public removeGroupMember(body: Array<any>, type: string, groupId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public removeGroupMember(body: Array<any>, type: string, groupId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling removeGroupMember.');
        }

        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling removeGroupMember.');
        }

        if (groupId === null || groupId === undefined) {
            throw new Error('Required parameter groupId was null or undefined when calling removeGroupMember.');
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

        return this.httpClient.request<any>('put',`${this.basePath}/groups/${encodeURIComponent(String(groupId))}/members/delete`,
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
     * 移除所属组织
     * 
     * @param body 
     * @param groupId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public removeGroupParentOrg(body: Array<string>, groupId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public removeGroupParentOrg(body: Array<string>, groupId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public removeGroupParentOrg(body: Array<string>, groupId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public removeGroupParentOrg(body: Array<string>, groupId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling removeGroupParentOrg.');
        }

        if (groupId === null || groupId === undefined) {
            throw new Error('Required parameter groupId was null or undefined when calling removeGroupParentOrg.');
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

        return this.httpClient.request<any>('put',`${this.basePath}/groups/${encodeURIComponent(String(groupId))}/parentOrganizations/delete`,
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
     * 更新群组
     * 
     * @param body 
     * @param groupId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateOrgGroup(body: Group, groupId: string, observe?: 'body', reportProgress?: boolean): Observable<Group>;
    public updateOrgGroup(body: Group, groupId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Group>>;
    public updateOrgGroup(body: Group, groupId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Group>>;
    public updateOrgGroup(body: Group, groupId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateOrgGroup.');
        }

        if (groupId === null || groupId === undefined) {
            throw new Error('Required parameter groupId was null or undefined when calling updateOrgGroup.');
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

        return this.httpClient.request<Group>('patch',`${this.basePath}/groups/${encodeURIComponent(String(groupId))}`,
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