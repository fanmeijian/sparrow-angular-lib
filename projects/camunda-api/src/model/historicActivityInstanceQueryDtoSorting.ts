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

export interface HistoricActivityInstanceQueryDtoSorting { 
    /**
     * Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
     */
    sortBy?: HistoricActivityInstanceQueryDtoSorting.SortByEnum;
    /**
     * Sort the results in a given order. Values may be `asc` for ascending order or `desc` for descending order. Must be used in conjunction with the sortBy parameter.
     */
    sortOrder?: HistoricActivityInstanceQueryDtoSorting.SortOrderEnum;
}
export namespace HistoricActivityInstanceQueryDtoSorting {
    export type SortByEnum = 'activityInstanceId' | 'instanceId' | 'executionId' | 'activityId' | 'activityName' | 'activityType' | 'startTime' | 'endTime' | 'duration' | 'definitionId' | 'occurrence' | 'tenantId';
    export const SortByEnum = {
        ActivityInstanceId: 'activityInstanceId' as SortByEnum,
        InstanceId: 'instanceId' as SortByEnum,
        ExecutionId: 'executionId' as SortByEnum,
        ActivityId: 'activityId' as SortByEnum,
        ActivityName: 'activityName' as SortByEnum,
        ActivityType: 'activityType' as SortByEnum,
        StartTime: 'startTime' as SortByEnum,
        EndTime: 'endTime' as SortByEnum,
        Duration: 'duration' as SortByEnum,
        DefinitionId: 'definitionId' as SortByEnum,
        Occurrence: 'occurrence' as SortByEnum,
        TenantId: 'tenantId' as SortByEnum
    };
    export type SortOrderEnum = 'asc' | 'desc';
    export const SortOrderEnum = {
        Asc: 'asc' as SortOrderEnum,
        Desc: 'desc' as SortOrderEnum
    };
}