/**
 * chnplc-service
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { DataPermission } from './dataPermission';
import { ErrMessage } from './errMessage';
import { ScopeCatalog } from './scopeCatalog';

export interface Scope { 
    readonly createdDate?: Date;
    readonly modifiedDate?: Date;
    readonly createdBy?: string;
    readonly modifiedBy?: string;
    readonly stat?: string;
    readonly entityStat?: Scope.EntityStatEnum;
    readonly enabled?: boolean;
    readonly hidden?: boolean;
    readonly modelName?: string;
    readonly dataPermissionTokenId?: string;
    readonly errMessages?: Array<ErrMessage>;
    dataPermissionId?: string;
    dataPermission?: DataPermission;
    readerEnabled?: boolean;
    authorEnabled?: boolean;
    readonly id?: string;
    name?: string;
    code?: string;
    type?: ScopeCatalog;
    typeId?: string;
    permissionTokenId?: string;
}
export namespace Scope {
    export type EntityStatEnum = 'Draft' | 'Submitted' | 'Failed' | 'Completed' | 'Cancelled';
    export const EntityStatEnum = {
        Draft: 'Draft' as EntityStatEnum,
        Submitted: 'Submitted' as EntityStatEnum,
        Failed: 'Failed' as EntityStatEnum,
        Completed: 'Completed' as EntityStatEnum,
        Cancelled: 'Cancelled' as EntityStatEnum
    };
}