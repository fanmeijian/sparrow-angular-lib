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

export interface HistoricTaskInstanceReportResultDto { 
    /**
     * The name of the task. It is only available when the `groupBy` parameter is set to `taskName`. Else the value is `null`.  **Note:** This property is only set for a historic task report object. In these cases, the value of the `reportType` query parameter is `count`.
     */
    taskName?: string;
    /**
     * The number of tasks which have the given definition.  **Note:** This property is only set for a historic task report object. In these cases, the value of the `reportType` query parameter is `count`.
     */
    count?: number;
    /**
     * The key of the process definition.  **Note:** This property is only set for a historic task report object. In these cases, the value of the `reportType` query parameter is `count`.
     */
    processDefinitionKey?: string;
    /**
     * The id of the process definition.  **Note:** This property is only set for a historic task report object. In these cases, the value of the `reportType` query parameter is `count`.
     */
    processDefinitionId?: string;
    /**
     * The name of the process definition.  **Note:** This property is only set for a historic task report object. In these cases, the value of the `reportType` query parameter is `count`.
     */
    processDefinitionName?: string;
    /**
     * Specifies a span of time within a year. **Note:** The period must be interpreted in conjunction with the returned `periodUnit`.  **Note:** This property is only set for a duration report object. In these cases, the value of the `reportType` query parameter is `duration`.
     */
    period?: number;
    /**
     * The unit of the given period. Possible values are `MONTH` and `QUARTER`.  **Note:** This property is only set for a duration report object. In these cases, the value of the `reportType` query parameter is `duration`.
     */
    periodUnit?: HistoricTaskInstanceReportResultDto.PeriodUnitEnum;
    /**
     * The smallest duration in milliseconds of all completed process instances which were started in the given period.  **Note:** This property is only set for a duration report object. In these cases, the value of the `reportType` query parameter is `duration`.
     */
    minimum?: number;
    /**
     * The greatest duration in milliseconds of all completed process instances which were started in the given period.  **Note:** This property is only set for a duration report object. In these cases, the value of the `reportType` query parameter is `duration`.
     */
    maximum?: number;
    /**
     * The average duration in milliseconds of all completed process instances which were started in the given period.  **Note:** This property is only set for a duration report object. In these cases, the value of the `reportType` query parameter is `duration`.
     */
    average?: number;
}
export namespace HistoricTaskInstanceReportResultDto {
    export type PeriodUnitEnum = 'MONTH' | 'QUARTER';
    export const PeriodUnitEnum = {
        MONTH: 'MONTH' as PeriodUnitEnum,
        QUARTER: 'QUARTER' as PeriodUnitEnum
    };
}