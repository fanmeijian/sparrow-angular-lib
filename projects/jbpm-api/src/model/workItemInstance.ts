/**
 * 
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface WorkItemInstance { 
    id?: number;
    name?: string;
    state?: number;
    parameters?: { [key: string]: any; };
    processInstanceId?: number;
    containerId?: string;
    nodeInstanceId?: number;
    nodeId?: number;
}
