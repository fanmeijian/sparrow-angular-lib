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
import { AccessTokenAccess } from './accessTokenAccess';
import { AccessTokenAuthorization } from './accessTokenAuthorization';
import { AccessTokenCertConf } from './accessTokenCertConf';
import { AddressClaimSet } from './addressClaimSet';

export interface AccessToken { 
    acr?: string;
    address?: AddressClaimSet;
    allowedOrigins?: Array<string>;
    atHash?: string;
    authTime?: number;
    authorization?: AccessTokenAuthorization;
    azp?: string;
    birthdate?: string;
    cHash?: string;
    category?: AccessToken.CategoryEnum;
    claimsLocales?: string;
    cnf?: AccessTokenCertConf;
    email?: string;
    emailVerified?: boolean;
    exp?: number;
    familyName?: string;
    gender?: string;
    givenName?: string;
    iat?: number;
    iss?: string;
    jti?: string;
    locale?: string;
    middleName?: string;
    name?: string;
    nbf?: number;
    nickname?: string;
    nonce?: string;
    otherClaims?: { [key: string]: any; };
    phoneNumber?: string;
    phoneNumberVerified?: boolean;
    picture?: string;
    preferredUsername?: string;
    profile?: string;
    realmAccess?: AccessTokenAccess;
    sHash?: string;
    scope?: string;
    sessionState?: string;
    sid?: string;
    sub?: string;
    trustedCerts?: Array<string>;
    typ?: string;
    updatedAt?: number;
    website?: string;
    zoneinfo?: string;
}
export namespace AccessToken {
    export type CategoryEnum = 'INTERNAL' | 'ACCESS' | 'ID' | 'ADMIN' | 'USERINFO' | 'LOGOUT' | 'AUTHORIZATION_RESPONSE';
    export const CategoryEnum = {
        INTERNAL: 'INTERNAL' as CategoryEnum,
        ACCESS: 'ACCESS' as CategoryEnum,
        ID: 'ID' as CategoryEnum,
        ADMIN: 'ADMIN' as CategoryEnum,
        USERINFO: 'USERINFO' as CategoryEnum,
        LOGOUT: 'LOGOUT' as CategoryEnum,
        AUTHORIZATIONRESPONSE: 'AUTHORIZATION_RESPONSE' as CategoryEnum
    };
}