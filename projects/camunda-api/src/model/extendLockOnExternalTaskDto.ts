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
import { HandleExternalTaskDto } from './handleExternalTaskDto';

export interface ExtendLockOnExternalTaskDto { 
    /**
     * An amount of time (in milliseconds). This is the new lock duration starting from the current moment.
     */
    newDuration?: number;
    /**
     * **Mandatory.** The ID of the worker who is performing the operation on the external task. If the task is already locked, must match the id of the worker who has most recently locked the task.
     */
    workerId?: string;
}