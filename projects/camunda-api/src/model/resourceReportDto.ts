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
import { ProblemDto } from './problemDto';

export interface ResourceReportDto { 
    /**
     * A list of errors occurred during parsing.
     */
    errors?: Array<ProblemDto>;
    /**
     * A list of warnings occurred during parsing.
     */
    warnings?: Array<ProblemDto>;
}