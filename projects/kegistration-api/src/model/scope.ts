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
import { DataPermission } from './dataPermission';
import { ErrMsg } from './errMsg';
import { ScopeCatalog } from './scopeCatalog';

export interface Scope { 
    readonly createdDate?: Date;
    readonly modifiedDate?: Date;
    readonly createdBy?: string;
    readonly modifiedBy?: string;
    readonly bstat?: string;
    stat?: Scope.StatEnum;
    readonly enabled?: boolean;
    readonly modelName?: string;
    readonly dataPermissionTokenId?: string;
    errMsgs?: Array<ErrMsg>;
    dataPermissionId?: string;
    dataPermission?: DataPermission;
    readonly id?: string;
    name?: string;
    code?: string;
    type?: ScopeCatalog;
    typeId?: string;
    permissionTokenId?: string;
}
export namespace Scope {
    export type StatEnum = 'Draft' | 'Submitted' | 'Failed' | 'Completed';
    export const StatEnum = {
        Draft: 'Draft' as StatEnum,
        Submitted: 'Submitted' as StatEnum,
        Failed: 'Failed' as StatEnum,
        Completed: 'Completed' as StatEnum
    };
}