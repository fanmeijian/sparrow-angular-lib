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
import { ErrMsg } from './errMsg';

export interface TopicComment { 
    readonly createdDate?: Date;
    readonly modifiedDate?: Date;
    readonly createdBy?: string;
    readonly modifiedBy?: string;
    readonly stat?: string;
    readonly entityStat?: TopicComment.EntityStatEnum;
    readonly enabled?: boolean;
    readonly modelName?: string;
    readonly dataPermissionTokenId?: string;
    readonly errMsgs?: Array<ErrMsg>;
    readonly id?: string;
    quoteCommentId?: Array<string>;
    comment?: string;
    topicId?: string;
}
export namespace TopicComment {
    export type EntityStatEnum = 'Draft' | 'Submitted' | 'Failed' | 'Completed';
    export const EntityStatEnum = {
        Draft: 'Draft' as EntityStatEnum,
        Submitted: 'Submitted' as EntityStatEnum,
        Failed: 'Failed' as EntityStatEnum,
        Completed: 'Completed' as EntityStatEnum
    };
}