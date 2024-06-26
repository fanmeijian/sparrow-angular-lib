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
import { ProcessInstanceModificationInstructionDto } from './processInstanceModificationInstructionDto';
import { VariableValueDto } from './variableValueDto';

export interface StartProcessInstanceDto { 
    /**
     * The business key of the process instance.
     */
    businessKey?: string;
    variables?: { [key: string]: VariableValueDto; };
    /**
     * The case instance id the process instance is to be initialized with.
     */
    caseInstanceId?: string;
    /**
     * **Optional**. A JSON array of instructions that specify which activities to start the process instance at. If this property is omitted, the process instance starts at its default blank start event.
     */
    startInstructions?: Array<ProcessInstanceModificationInstructionDto>;
    /**
     * Skip execution listener invocation for activities that are started or ended as part of this request. **Note**: This option is currently only respected when start instructions are submitted via the `startInstructions` property.
     */
    skipCustomListeners?: boolean;
    /**
     * Skip execution of [input/output variable mappings](https://docs.camunda.org/manual/7.19/user-guide/process-engine/variables/#input-output-variable-mapping) for activities that are started or ended as part of this request. **Note**: This option is currently only respected when start instructions are submitted via the `startInstructions` property.
     */
    skipIoMappings?: boolean;
    /**
     * Indicates if the variables, which was used by the process instance during execution, should be returned. Default value: `false`
     */
    withVariablesInReturn?: boolean;
}