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
import { DictCatalog } from './dictCatalog';
import { PageableObject } from './pageableObject';
import { SortObject } from './sortObject';

export interface PageDictCatalog { 
    totalPages?: number;
    totalElements?: number;
    number?: number;
    sort?: SortObject;
    first?: boolean;
    last?: boolean;
    size?: number;
    content?: Array<DictCatalog>;
    numberOfElements?: number;
    pageable?: PageableObject;
    empty?: boolean;
}