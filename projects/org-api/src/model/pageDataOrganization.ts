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
import { DataOrganization } from './dataOrganization';
import { PageableObject } from './pageableObject';
import { SortObject } from './sortObject';

export interface PageDataOrganization { 
    totalPages?: number;
    totalElements?: number;
    number?: number;
    first?: boolean;
    last?: boolean;
    sort?: SortObject;
    size?: number;
    content?: Array<DataOrganization>;
    pageable?: PageableObject;
    numberOfElements?: number;
    empty?: boolean;
}