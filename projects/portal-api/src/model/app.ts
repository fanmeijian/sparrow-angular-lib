/**
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface App { 
    readonly modelName?: string;
    readonly createdDate?: Date;
    readonly modifiedDate?: Date;
    readonly createdBy?: string;
    readonly modifiedBy?: string;
    readonly dataPermissionTokenId?: string;
    readonly stat?: string;
    readonly enabled?: boolean;
    readonly id?: string;
    name?: string;
    code?: string;
    url?: string;
    logos?: Array<string>;
}