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

export interface MultiFormDeploymentDto { 
    /**
     * The tenant id for the deployment to be created.
     */
    tenantId?: string;
    /**
     * The source for the deployment to be created.
     */
    deploymentSource?: string;
    /**
     * A flag indicating whether the process engine should perform duplicate checking on a per-resource basis. If set to true, only those resources that have actually changed are deployed. Checks are made against resources included previous deployments of the same name and only against the latest versions of those resources. If set to true, the option enable-duplicate-filtering is overridden and set to true.
     */
    deployChangedOnly?: boolean;
    /**
     * A flag indicating whether the process engine should perform duplicate checking for the deployment or not. This allows you to check if a deployment with the same name and the same resouces already exists and if true, not create a new deployment but instead return the existing deployment. The default value is false.
     */
    enableDuplicateFiltering?: boolean;
    /**
     * The name for the deployment to be created.
     */
    deploymentName?: string;
    /**
     * Sets the date on which the process definitions contained in this deployment will be activated. This means that all process definitions will be deployed as usual, but they will be suspended from the start until the given activation date. By [default](https://docs.camunda.org/manual/7.19/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     */
    deploymentActivationTime?: Date;
    /**
     * The binary data to create the deployment resource. It is possible to have more than one form part with different form part names for the binary data to create a deployment.
     */
    data?: Blob;
}