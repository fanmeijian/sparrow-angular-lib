/**
 * Camunda Platform REST API
 * OpenApi Spec for Camunda Platform REST API.
 *
 * OpenAPI spec version: 7.19.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { UserCredentialsDto } from './userCredentialsDto';
import { UserProfileDto } from './userProfileDto';

export interface UserDto { 
    profile?: UserProfileDto;
    credentials?: UserCredentialsDto;
}