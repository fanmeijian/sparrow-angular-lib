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
import { Attachment } from './attachment';
import { Comment } from './comment';
import { User } from './user';

export interface TaskData { 
    processId?: string;
    expirationTime?: Date;
    createdBy?: User;
    taskInputVariables?: { [key: string]: any; };
    taskOutputVariables?: { [key: string]: any; };
    previousStatus?: TaskData.PreviousStatusEnum;
    actualOwner?: User;
    createdOn?: Date;
    activationTime?: Date;
    workItemId?: number;
    processSessionId?: number;
    documentType?: string;
    documentContentId?: number;
    outputContentId?: number;
    faultName?: string;
    faultType?: string;
    faultContentId?: number;
    attachments?: Array<Attachment>;
    status?: TaskData.StatusEnum;
    skipable?: boolean;
    outputType?: string;
    deploymentId?: string;
    comments?: Array<Comment>;
    processInstanceId?: number;
    parentId?: number;
}
export namespace TaskData {
    export type PreviousStatusEnum = 'Created' | 'Ready' | 'Reserved' | 'InProgress' | 'Suspended' | 'Completed' | 'Failed' | 'Error' | 'Exited' | 'Obsolete';
    export const PreviousStatusEnum = {
        Created: 'Created' as PreviousStatusEnum,
        Ready: 'Ready' as PreviousStatusEnum,
        Reserved: 'Reserved' as PreviousStatusEnum,
        InProgress: 'InProgress' as PreviousStatusEnum,
        Suspended: 'Suspended' as PreviousStatusEnum,
        Completed: 'Completed' as PreviousStatusEnum,
        Failed: 'Failed' as PreviousStatusEnum,
        Error: 'Error' as PreviousStatusEnum,
        Exited: 'Exited' as PreviousStatusEnum,
        Obsolete: 'Obsolete' as PreviousStatusEnum
    };
    export type StatusEnum = 'Created' | 'Ready' | 'Reserved' | 'InProgress' | 'Suspended' | 'Completed' | 'Failed' | 'Error' | 'Exited' | 'Obsolete';
    export const StatusEnum = {
        Created: 'Created' as StatusEnum,
        Ready: 'Ready' as StatusEnum,
        Reserved: 'Reserved' as StatusEnum,
        InProgress: 'InProgress' as StatusEnum,
        Suspended: 'Suspended' as StatusEnum,
        Completed: 'Completed' as StatusEnum,
        Failed: 'Failed' as StatusEnum,
        Error: 'Error' as StatusEnum,
        Exited: 'Exited' as StatusEnum,
        Obsolete: 'Obsolete' as StatusEnum
    };
}