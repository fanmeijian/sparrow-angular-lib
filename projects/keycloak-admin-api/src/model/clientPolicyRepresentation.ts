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
import { ClientPolicyConditionRepresentation } from './clientPolicyConditionRepresentation';

export interface ClientPolicyRepresentation { 
    conditions?: Array<ClientPolicyConditionRepresentation>;
    description?: string;
    enabled?: boolean;
    name?: string;
    profiles?: Array<string>;
}