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
import { AnyValue } from './anyValue';
import { VariableValueDto } from './variableValueDto';

export interface HistoricVariableInstanceDto { 
    /**
     * The id of the variable instance.
     */
    id?: string;
    /**
     * The name of the variable instance.
     */
    name?: string;
    /**
     * The key of the process definition the variable instance belongs to.
     */
    processDefinitionKey?: string;
    /**
     * The id of the process definition the variable instance belongs to.
     */
    processDefinitionId?: string;
    /**
     * The process instance id the variable instance belongs to.
     */
    processInstanceId?: string;
    /**
     * The execution id the variable instance belongs to.
     */
    executionId?: string;
    /**
     * The id of the activity instance in which the variable is valid.
     */
    activityInstanceId?: string;
    /**
     * The key of the case definition the variable instance belongs to.
     */
    caseDefinitionKey?: string;
    /**
     * The id of the case definition the variable instance belongs to.
     */
    caseDefinitionId?: string;
    /**
     * The case instance id the variable instance belongs to.
     */
    caseInstanceId?: string;
    /**
     * The case execution id the variable instance belongs to.
     */
    caseExecutionId?: string;
    /**
     * The id of the task the variable instance belongs to.
     */
    taskId?: string;
    /**
     * The id of the tenant that this variable instance belongs to.
     */
    tenantId?: string;
    /**
     * An error message in case a Java Serialized Object could not be de-serialized.
     */
    errorMessage?: string;
    /**
     * The current state of the variable. Can be 'CREATED' or 'DELETED'.
     */
    state?: string;
    /**
     * The time the variable was inserted. [Default format](https://docs.camunda.org/manual/7.19/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    createTime?: Date;
    /**
     * The time after which the variable should be removed by the History Cleanup job. [Default format](https://docs.camunda.org/manual/7.19/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    removalTime?: Date;
    /**
     * The process instance id of the root process instance that initiated the process containing this variable.
     */
    rootProcessInstanceId?: string;
    value?: AnyValue;
    /**
     * The value type of the variable.
     */
    type?: string;
    /**
     * A JSON object containing additional, value-type-dependent properties. For serialized variables of type Object, the following properties can be provided:  * `objectTypeName`: A string representation of the object's type name. * `serializationDataFormat`: The serialization format used to store the variable.  For serialized variables of type File, the following properties can be provided:  * `filename`: The name of the file. This is not the variable name but the name that will be used when downloading the file again. * `mimetype`: The MIME type of the file that is being uploaded. * `encoding`: The encoding of the file that is being uploaded.  The following property can be provided for all value types:  * `transient`: Indicates whether the variable should be transient or not. See [documentation](https://docs.camunda.org/manual/7.19/user-guide/process-engine/variables#transient-variables) for more informations. (Not applicable for `decision-definition`, ` /process-instance/variables-async`, and `/migration/executeAsync` endpoints)
     */
    valueInfo?: { [key: string]: any; };
}