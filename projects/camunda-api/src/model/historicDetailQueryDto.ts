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
import { HistoricDetailQueryDtoSorting } from './historicDetailQueryDtoSorting';

/**
 * A historic detail query which defines a group of historic details.
 */
export interface HistoricDetailQueryDto { 
    /**
     * Filter by process instance id.
     */
    processInstanceId?: string;
    /**
     * Only include historic details which belong to one of the passed  process instance ids.
     */
    processInstanceIdIn?: Array<string>;
    /**
     * Filter by execution id.
     */
    executionId?: string;
    /**
     * Filter by task id.
     */
    taskId?: string;
    /**
     * Filter by activity instance id.
     */
    activityInstanceId?: string;
    /**
     * Filter by case instance id.
     */
    caseInstanceId?: string;
    /**
     * Filter by case execution id.
     */
    caseExecutionId?: string;
    /**
     * Filter by variable instance id.
     */
    variableInstanceId?: string;
    /**
     * Only include historic details where the variable updates belong to one of the passed  list of variable types. A list of all supported variable types can be found [here](https://docs.camunda.org/manual/7.19/user-guide/process-engine/variables/#supported-variable-values). **Note:** All non-primitive variables are associated with the type `serializable`.
     */
    variableTypeIn?: Array<string>;
    /**
     * Filter by a  list of tenant ids.
     */
    tenantIdIn?: Array<string>;
    /**
     * Only include historic details that belong to no tenant. Value may only be `true`, as `false` is the default behavior.
     */
    withoutTenantId?: boolean;
    /**
     * Filter by a user operation id.
     */
    userOperationId?: string;
    /**
     * Only include `HistoricFormFields`. Value may only be `true`, as `false` is the default behavior.
     */
    formFields?: boolean;
    /**
     * Only include `HistoricVariableUpdates`. Value may only be `true`, as `false` is the default behavior.
     */
    variableUpdates?: boolean;
    /**
     * Excludes all task-related `HistoricDetails`, so only items which have no task id set will be selected. When this parameter is used together with `taskId`, this call is ignored and task details are not excluded. Value may only be `true`, as `false` is the default behavior.
     */
    excludeTaskDetails?: boolean;
    /**
     * Restrict to historic variable updates that contain only initial variable values. Value may only be `true`, as `false` is the default behavior.
     */
    initial?: boolean;
    /**
     * Restrict to historic details that occured before the given date (including the date). Default [format](https://docs.camunda.org/manual/7.19/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., 2013-01-23T14:42:45.000+0200.
     */
    occurredBefore?: Date;
    /**
     * Restrict to historic details that occured after the given date (including the date). Default [format](https://docs.camunda.org/manual/7.19/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., 2013-01-23T14:42:45.000+0200.
     */
    occurredAfter?: Date;
    /**
     * A JSON array of criteria to sort the result by. Each element of the array is                     a JSON object that specifies one ordering. The position in the array                     identifies the rank of an ordering, i.e., whether it is primary, secondary,                     etc. Does not have an effect for the `count` endpoint.
     */
    sorting?: Array<HistoricDetailQueryDtoSorting>;
}