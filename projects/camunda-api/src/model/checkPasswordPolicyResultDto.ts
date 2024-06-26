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
import { PasswordPolicyDto } from './passwordPolicyDto';
import { PasswordPolicyRuleDto } from './passwordPolicyRuleDto';

export interface CheckPasswordPolicyResultDto { 
    /**
     * `true` if the password is compliant with the policy, otherwise `false`.
     */
    valid?: boolean;
    /**
     * An array of password policy rules. Each element of the array is representing one rule of the policy.
     */
    rules?: Array<PasswordPolicyRuleDto>;
}