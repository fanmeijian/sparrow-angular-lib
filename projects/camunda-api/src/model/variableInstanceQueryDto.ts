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
import { VariableInstanceQueryDtoSorting } from './variableInstanceQueryDtoSorting';
import { VariableQueryParameterDto } from './variableQueryParameterDto';

/**
 * A variable instance query which defines a list of variable instances
 */
export interface VariableInstanceQueryDto { 
    /**
     * Filter by variable instance name.
     */
    variableName?: string;
    /**
     * Filter by the variable instance name. The parameter can include the wildcard `%` to express like-strategy such as: starts with (`%`name), ends with (name`%`) or contains (`%`name`%`).
     */
    variableNameLike?: string;
    /**
     * Only include variable instances which belong to one of the passed  process instance ids.
     */
    processInstanceIdIn?: Array<string>;
    /**
     * Only include variable instances which belong to one of the passed  execution ids.
     */
    executionIdIn?: Array<string>;
    /**
     * Only include variable instances which belong to one of the passed  case instance ids.
     */
    caseInstanceIdIn?: Array<string>;
    /**
     * Only include variable instances which belong to one of the passed  case execution ids.
     */
    caseExecutionIdIn?: Array<string>;
    /**
     * Only include variable instances which belong to one of the passed  task ids.
     */
    taskIdIn?: Array<string>;
    /**
     * Only include variable instances which belong to one of the passed  batch ids.
     */
    batchIdIn?: Array<string>;
    /**
     * Only include variable instances which belong to one of the passed  activity instance ids.
     */
    activityInstanceIdIn?: Array<string>;
    /**
     * Only include variable instances which belong to one of the passed  tenant ids.
     */
    tenantIdIn?: Array<string>;
    /**
     * An array to only include variable instances that have the certain values. The array consists of objects with the three properties `name`, `operator` and `value`. `name (String)` is the variable name, `operator (String)` is the comparison operator to be used and `value` the variable value. `value` may be `String`, `Number` or `Boolean`.  Valid operator values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`
     */
    variableValues?: Array<VariableQueryParameterDto>;
    /**
     * Match all variable names provided in `variableValues` case-insensitively. If set to `true` **variableName** and **variablename** are treated as equal.
     */
    variableNamesIgnoreCase?: boolean;
    /**
     * Match all variable values provided in `variableValues` case-insensitively. If set to `true` **variableValue** and **variablevalue** are treated as equal.
     */
    variableValuesIgnoreCase?: boolean;
    /**
     * Only include variable instances which belong to one of passed scope ids.
     */
    variableScopeIdIn?: Array<string>;
    /**
     * An array of criteria to sort the result by. Each element of the array is an object that specifies one ordering.                       The position in the array identifies the rank of an ordering, i.e., whether it is primary, secondary, etc.                       Sorting has no effect for `count` endpoints
     */
    sorting?: Array<VariableInstanceQueryDtoSorting>;
}