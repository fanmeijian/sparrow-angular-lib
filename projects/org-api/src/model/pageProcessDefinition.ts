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
import { ProcessDefinition } from './processDefinition';
import { SortObject } from './sortObject';

export interface PageProcessDefinition { 
    totalPages?: number;
    totalElements?: number;
    sort?: SortObject;
    number?: number;
    first?: boolean;
    last?: boolean;
    size?: number;
    content?: Array<ProcessDefinition>;
    pageable?: PageableObject;
    numberOfElements?: number;
    empty?: boolean;
}