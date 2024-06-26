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
import { AbstractSetRemovalTimeDto } from './abstractSetRemovalTimeDto';
import { HistoricProcessInstanceQueryDto } from './historicProcessInstanceQueryDto';

export interface SetRemovalTimeToHistoricProcessInstancesDto { 
    /**
     * The id of the process instance.
     */
    historicProcessInstanceIds?: Array<string>;
    historicProcessInstanceQuery?: HistoricProcessInstanceQueryDto;
    /**
     * Sets the removal time to all historic process instances in the hierarchy. Value may only be `true`, as `false` is the default behavior.
     */
    hierarchical?: boolean;
    /**
     * The date for which the instances shall be removed. Value may not be `null`.  **Note:** Cannot be set in conjunction with `clearedRemovalTime` or `calculatedRemovalTime`.
     */
    absoluteRemovalTime?: Date;
    /**
     * Sets the removal time to `null`. Value may only be `true`, as `false` is the default behavior.  **Note:** Cannot be set in conjunction with `absoluteRemovalTime` or `calculatedRemovalTime`.
     */
    clearedRemovalTime?: boolean;
    /**
     * The removal time is calculated based on the engine's configuration settings. Value may only be `true`, as `false` is the default behavior.  **Note:** Cannot be set in conjunction with `absoluteRemovalTime` or `clearedRemovalTime`.
     */
    calculatedRemovalTime?: boolean;
}