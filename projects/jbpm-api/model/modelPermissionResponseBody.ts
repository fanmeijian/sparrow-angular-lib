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
import { ModelRule } from './modelRule';
import { SysroleModel } from './sysroleModel';
import { UserModel } from './userModel';

export interface ModelPermissionResponseBody { 
    sysroles?: Array<SysroleModel>;
    usernames?: Array<UserModel>;
    rules?: Array<ModelRule>;
}