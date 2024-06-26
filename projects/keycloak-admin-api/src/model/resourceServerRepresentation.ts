/**
 * Keycloak Admin REST API
 * This is a REST API reference for the Keycloak Admin REST API.
 *
 * OpenAPI spec version: 1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { PolicyRepresentation } from './policyRepresentation';
import { ResourceRepresentation } from './resourceRepresentation';
import { ScopeRepresentation } from './scopeRepresentation';

export interface ResourceServerRepresentation { 
    allowRemoteResourceManagement?: boolean;
    clientId?: string;
    decisionStrategy?: ResourceServerRepresentation.DecisionStrategyEnum;
    id?: string;
    name?: string;
    policies?: Array<PolicyRepresentation>;
    policyEnforcementMode?: ResourceServerRepresentation.PolicyEnforcementModeEnum;
    resources?: Array<ResourceRepresentation>;
    scopes?: Array<ScopeRepresentation>;
}
export namespace ResourceServerRepresentation {
    export type DecisionStrategyEnum = 'AFFIRMATIVE' | 'UNANIMOUS' | 'CONSENSUS';
    export const DecisionStrategyEnum = {
        AFFIRMATIVE: 'AFFIRMATIVE' as DecisionStrategyEnum,
        UNANIMOUS: 'UNANIMOUS' as DecisionStrategyEnum,
        CONSENSUS: 'CONSENSUS' as DecisionStrategyEnum
    };
    export type PolicyEnforcementModeEnum = 'ENFORCING' | 'PERMISSIVE' | 'DISABLED';
    export const PolicyEnforcementModeEnum = {
        ENFORCING: 'ENFORCING' as PolicyEnforcementModeEnum,
        PERMISSIVE: 'PERMISSIVE' as PolicyEnforcementModeEnum,
        DISABLED: 'DISABLED' as PolicyEnforcementModeEnum
    };
}