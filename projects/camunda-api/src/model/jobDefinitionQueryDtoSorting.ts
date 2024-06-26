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

export interface JobDefinitionQueryDtoSorting { 
    /**
     * Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
     */
    sortBy?: JobDefinitionQueryDtoSorting.SortByEnum;
    /**
     * Sort the results in a given order. Values may be `asc` for ascending order or `desc` for descending order. Must be used in conjunction with the sortBy parameter.
     */
    sortOrder?: JobDefinitionQueryDtoSorting.SortOrderEnum;
}
export namespace JobDefinitionQueryDtoSorting {
    export type SortByEnum = 'jobDefinitionId' | 'activityId' | 'processDefinitionId' | 'processDefinitionKey' | 'jobType' | 'jobConfiguration' | 'tenantId';
    export const SortByEnum = {
        JobDefinitionId: 'jobDefinitionId' as SortByEnum,
        ActivityId: 'activityId' as SortByEnum,
        ProcessDefinitionId: 'processDefinitionId' as SortByEnum,
        ProcessDefinitionKey: 'processDefinitionKey' as SortByEnum,
        JobType: 'jobType' as SortByEnum,
        JobConfiguration: 'jobConfiguration' as SortByEnum,
        TenantId: 'tenantId' as SortByEnum
    };
    export type SortOrderEnum = 'asc' | 'desc';
    export const SortOrderEnum = {
        Asc: 'asc' as SortOrderEnum,
        Desc: 'desc' as SortOrderEnum
    };
}