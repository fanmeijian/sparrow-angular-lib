/**
 * car-boss-service
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { SprJobDetail } from './sprJobDetail';
import { SprTrigger } from './sprTrigger';

export interface SprSchedule { 
    readonly createdDate?: Date;
    readonly modifiedDate?: Date;
    readonly createdBy?: string;
    readonly modifiedBy?: string;
    readonly id?: string;
    jobDetailId?: string;
    jobDetail?: SprJobDetail;
    triggerId?: string;
    trigger?: SprTrigger;
    startTime?: Date;
    endTime?: Date;
    jobData?: { [key: string]: any; };
}