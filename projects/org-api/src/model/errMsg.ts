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

export interface ErrMsg { 
    field?: string;
    type?: ErrMsg.TypeEnum;
    msg?: string;
}
export namespace ErrMsg {
    export type TypeEnum = 'DENY' | 'ALLOW';
    export const TypeEnum = {
        DENY: 'DENY' as TypeEnum,
        ALLOW: 'ALLOW' as TypeEnum
    };
}