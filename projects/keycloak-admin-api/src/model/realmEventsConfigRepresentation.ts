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

export interface RealmEventsConfigRepresentation { 
    adminEventsDetailsEnabled?: boolean;
    adminEventsEnabled?: boolean;
    enabledEventTypes?: Array<string>;
    eventsEnabled?: boolean;
    eventsExpiration?: number;
    eventsListeners?: Array<string>;
}