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
import { AnyValue } from './anyValue';

export interface ConditionQueryParameterDto { 
    /**
     * Comparison operator to be used. `notLike` is not supported by all endpoints.
     */
    operator?: ConditionQueryParameterDto.OperatorEnum;
    value?: AnyValue;
}
export namespace ConditionQueryParameterDto {
    export type OperatorEnum = 'eq' | 'neq' | 'gt' | 'gteq' | 'lt' | 'lteq' | 'like' | 'notLike';
    export const OperatorEnum = {
        Eq: 'eq' as OperatorEnum,
        Neq: 'neq' as OperatorEnum,
        Gt: 'gt' as OperatorEnum,
        Gteq: 'gteq' as OperatorEnum,
        Lt: 'lt' as OperatorEnum,
        Lteq: 'lteq' as OperatorEnum,
        Like: 'like' as OperatorEnum,
        NotLike: 'notLike' as OperatorEnum
    };
}