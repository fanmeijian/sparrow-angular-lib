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
import { EmployeeOrganizationRolePK } from './employeeOrganizationRolePK';
import { ErrMsg } from './errMsg';

export interface EmployeeOrganizationRole { 
    readonly createdDate?: Date;
    readonly modifiedDate?: Date;
    readonly createdBy?: string;
    readonly modifiedBy?: string;
    stat?: string;
    readonly enabled?: boolean;
    readonly modelName?: string;
    readonly dataPermissionTokenId?: string;
    errMsgs?: Array<ErrMsg>;
    id?: EmployeeOrganizationRolePK;
}