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
import { CaseAdHocFragment } from './caseAdHocFragment';
import { CaseMilestoneDefinition } from './caseMilestoneDefinition';
import { CaseStageDefinition } from './caseStageDefinition';


export interface CaseDefinition { 
    name?: string;
    identifier?: string;
    version?: string;
    caseIdPrefix?: string;
    containerId?: string;
    adHocFragments?: Array<CaseAdHocFragment>;
    roles?: { [key: string]: number; };
    milestones?: Array<CaseMilestoneDefinition>;
    caseStages?: Array<CaseStageDefinition>;
}