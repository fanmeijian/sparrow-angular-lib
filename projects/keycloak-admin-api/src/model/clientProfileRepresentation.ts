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
import { ClientPolicyExecutorRepresentation } from './clientPolicyExecutorRepresentation';

export interface ClientProfileRepresentation { 
    description?: string;
    executors?: Array<ClientPolicyExecutorRepresentation>;
    name?: string;
}