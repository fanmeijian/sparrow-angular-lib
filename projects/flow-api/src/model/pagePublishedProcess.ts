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
 */
import { PageableObject } from './pageableObject';
import { PublishedProcess } from './publishedProcess';
import { SortObject } from './sortObject';

export interface PagePublishedProcess { 
    totalPages?: number;
    totalElements?: number;
    first?: boolean;
    last?: boolean;
    number?: number;
    sort?: SortObject;
    size?: number;
    content?: Array<PublishedProcess>;
    numberOfElements?: number;
    pageable?: PageableObject;
    empty?: boolean;
}