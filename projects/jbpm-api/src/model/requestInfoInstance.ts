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
import { ErrorInfoInstanceList } from './errorInfoInstanceList';


export interface RequestInfoInstance { 
    id?: number;
    status?: string;
    businessKey?: string;
    message?: string;
    retries?: number;
    executions?: number;
    commandName?: string;
    scheduledDate?: Date;
    data?: { [key: string]: any; };
    responseData?: { [key: string]: any; };
    errors?: ErrorInfoInstanceList;
    containerId?: string;
}
