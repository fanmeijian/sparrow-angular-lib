/**
 * car-boss-service
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { PageableObject } from './pageableObject';
import { Rule } from './rule';
import { SortObject } from './sortObject';

export interface PageRule { 
    totalPages?: number;
    totalElements?: number;
    sort?: SortObject;
    number?: number;
    size?: number;
    content?: Array<Rule>;
    first?: boolean;
    last?: boolean;
    numberOfElements?: number;
    pageable?: PageableObject;
    empty?: boolean;
}