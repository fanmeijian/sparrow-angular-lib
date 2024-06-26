/**
 * Camunda Platform REST API
 * OpenApi Spec for Camunda Platform REST API.
 *
 * OpenAPI spec version: 7.19.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface GroupQueryDtoSorting { 
    /**
     * Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
     */
    sortBy?: GroupQueryDtoSorting.SortByEnum;
    /**
     * Sort the results in a given order. Values may be `asc` for ascending order or `desc` for descending order. Must be used in conjunction with the sortBy parameter.
     */
    sortOrder?: GroupQueryDtoSorting.SortOrderEnum;
}
export namespace GroupQueryDtoSorting {
    export type SortByEnum = 'id' | 'name' | 'type';
    export const SortByEnum = {
        Id: 'id' as SortByEnum,
        Name: 'name' as SortByEnum,
        Type: 'type' as SortByEnum
    };
    export type SortOrderEnum = 'asc' | 'desc';
    export const SortOrderEnum = {
        Asc: 'asc' as SortOrderEnum,
        Desc: 'desc' as SortOrderEnum
    };
}