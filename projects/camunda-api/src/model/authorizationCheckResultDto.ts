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

export interface AuthorizationCheckResultDto { 
    /**
     * Name of the permission which was checked.
     */
    permissionName?: string;
    /**
     * The name of the resource for which the permission check was performed.
     */
    resourceName?: string;
    /**
     * The id of the resource for which the permission check was performed.
     */
    resourceId?: string;
    /**
     * True / false for isAuthorized.
     */
    isAuthorized?: boolean;
}