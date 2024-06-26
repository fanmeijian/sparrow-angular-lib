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
import { HistoricProcessInstanceQueryDto } from './historicProcessInstanceQueryDto';
import { RestartProcessInstanceModificationInstructionDto } from './restartProcessInstanceModificationInstructionDto';

export interface RestartProcessInstanceDto { 
    /**
     * A list of process instance ids to restart.
     */
    processInstanceIds?: Array<string>;
    historicProcessInstanceQuery?: HistoricProcessInstanceQueryDto;
    /**
     * Skip execution listener invocation for activities that are started as part of this request.
     */
    skipCustomListeners?: boolean;
    /**
     * Skip execution of [input/output variable mappings](https://docs.camunda.org/manual/7.19/user-guide/process-engine/variables/#input-output-variable-mapping) for activities that are started as part of this request.
     */
    skipIoMappings?: boolean;
    /**
     * Set the initial set of variables during restart. By default, the last set of variables is used.
     */
    initialVariables?: boolean;
    /**
     * Do not take over the business key of the historic process instance.
     */
    withoutBusinessKey?: boolean;
    /**
     * **Optional**. A JSON array of instructions that specify which activities to start the process instance at. If this property is omitted, the process instance starts at its default blank start event.
     */
    instructions?: Array<RestartProcessInstanceModificationInstructionDto>;
}