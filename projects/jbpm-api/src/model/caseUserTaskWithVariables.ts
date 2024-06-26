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


export interface CaseUserTaskWithVariables { 
    id?: number;
    name?: string;
    description?: string;
    actualOwner?: string;
    correlationKey?: string;
    potentialOwners?: Array<string>;
    caseDefinitionId?: string;
    processInstanceId?: number;
    caseId?: string;
    inputVariables?: { [key: string]: any; };
    processVariables?: { [key: string]: any; };
    caseVariables?: { [key: string]: any; };
    status?: string;
}
