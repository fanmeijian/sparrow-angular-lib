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
import { VariableValueDto } from './variableValueDto';

export interface StartProcessInstanceFormDto { 
    variables?: { [key: string]: VariableValueDto; };
    /**
     * The business key the process instance is to be initialized with. The business key uniquely identifies the process instance in the context of the given process definition.
     */
    businessKey?: string;
}