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

export interface HistoricExternalTaskLogDto { 
    /**
     * The id of the log entry.
     */
    id?: string;
    /**
     * The id of the external task.
     */
    externalTaskId?: string;
    /**
     * The time when the log entry has been written.
     */
    timestamp?: Date;
    /**
     * The topic name of the associated external task.
     */
    topicName?: string;
    /**
     * The id of the worker that posessed the most recent lock.
     */
    workerId?: string;
    /**
     * The number of retries the associated external task has left.
     */
    retries?: number;
    /**
     * The execution priority the external task had when the log entry was created.
     */
    priority?: number;
    /**
     * The message of the error that occurred by executing the associated external task.
     */
    errorMessage?: string;
    /**
     * The id of the activity on which the associated external task was created.
     */
    activityId?: string;
    /**
     * The id of the activity instance on which the associated external task was created.
     */
    activityInstanceId?: string;
    /**
     * The execution id on which the associated external task was created.
     */
    executionId?: string;
    /**
     * The id of the process instance on which the associated external task was created.
     */
    processInstanceId?: string;
    /**
     * The id of the process definition which the associated external task belongs to.
     */
    processDefinitionId?: string;
    /**
     * The key of the process definition which the associated external task belongs to.
     */
    processDefinitionKey?: string;
    /**
     * The id of the tenant that this historic external task log entry belongs to.
     */
    tenantId?: string;
    /**
     * A flag indicating whether this log represents the creation of the associated external task.
     */
    creationLog?: boolean;
    /**
     * A flag indicating whether this log represents the failed execution of the associated external task.
     */
    failureLog?: boolean;
    /**
     * A flag indicating whether this log represents the successful execution of the associated external task.
     */
    successLog?: boolean;
    /**
     * A flag indicating whether this log represents the deletion of the associated external task.
     */
    deletionLog?: boolean;
    /**
     * The time after which this log should be removed by the History Cleanup job. Default format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.  For further information, please see the [documentation](https://docs.camunda.org/manual/7.19/reference/rest/overview/date-format/)
     */
    removalTime?: Date;
    /**
     * The process instance id of the root process instance that initiated the process containing this log.
     */
    rootProcessInstanceId?: string;
}