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
import { ErrMsg } from './errMsg';
import { OrganizationRolePK } from './organizationRolePK';

export interface OrganizationRole { 
    readonly createdDate?: Date;
    readonly modifiedDate?: Date;
    readonly createdBy?: string;
    readonly modifiedBy?: string;
    readonly stat?: string;
    entityStat?: OrganizationRole.EntityStatEnum;
    readonly enabled?: boolean;
    readonly modelName?: string;
    readonly dataPermissionTokenId?: string;
    errMsgs?: Array<ErrMsg>;
    id?: OrganizationRolePK;
}
export namespace OrganizationRole {
    export type EntityStatEnum = 'Draft' | 'Submitted' | 'Failed' | 'Completed';
    export const EntityStatEnum = {
        Draft: 'Draft' as EntityStatEnum,
        Submitted: 'Submitted' as EntityStatEnum,
        Failed: 'Failed' as EntityStatEnum,
        Completed: 'Completed' as EntityStatEnum
    };
}