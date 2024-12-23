/**
 * payment-service
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Feedback } from './feedback';
import { PageableObject } from './pageableObject';
import { SortObject } from './sortObject';

export interface PageFeedback { 
    totalPages?: number;
    totalElements?: number;
    sort?: SortObject;
    first?: boolean;
    last?: boolean;
    number?: number;
    size?: number;
    content?: Array<Feedback>;
    pageable?: PageableObject;
    numberOfElements?: number;
    empty?: boolean;
}