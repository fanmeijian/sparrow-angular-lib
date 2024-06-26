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
import { AtomLink } from './atomLink';
import { LinkableDto } from './linkableDto';

export interface DeploymentDto { 
    /**
     * The id of the deployment.
     */
    id?: string;
    /**
     * The tenant id of the deployment.
     */
    tenantId?: string;
    /**
     * The time when the deployment was created.
     */
    deploymentTime?: Date;
    /**
     * The source of the deployment.
     */
    source?: string;
    /**
     * The name of the deployment.
     */
    name?: string;
    /**
     * The links associated to this resource, with `method`, `href` and `rel`.
     */
    links?: Array<AtomLink>;
}