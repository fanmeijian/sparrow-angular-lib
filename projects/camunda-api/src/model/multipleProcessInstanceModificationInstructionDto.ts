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

export interface MultipleProcessInstanceModificationInstructionDto { 
    /**
     * **Mandatory**. One of the following values: `cancel`, `startBeforeActivity`, `startAfterActivity`, `startTransition`.  * A cancel instruction requests cancellation of a single activity instance or all instances of one activity. * A startBeforeActivity instruction requests to enter a given activity. * A startAfterActivity instruction requests to execute the single outgoing sequence flow of a given activity. * A startTransition instruction requests to execute a specific sequence flow.
     */
    type: MultipleProcessInstanceModificationInstructionDto.TypeEnum;
    /**
     * Can be used with instructions of types `startTransition`. Specifies the sequence flow to start.
     */
    activityId?: string;
    /**
     * Can be used with instructions of types `startTransition`. Specifies the sequence flow to start.
     */
    transitionId?: string;
    /**
     * Can be used with instructions of type cancel. Prevents the deletion of new created activity instances.
     */
    cancelCurrentActiveActivityInstances?: boolean;
}
export namespace MultipleProcessInstanceModificationInstructionDto {
    export type TypeEnum = 'cancel' | 'startBeforeActivity' | 'startAfterActivity' | 'startTransition';
    export const TypeEnum = {
        Cancel: 'cancel' as TypeEnum,
        StartBeforeActivity: 'startBeforeActivity' as TypeEnum,
        StartAfterActivity: 'startAfterActivity' as TypeEnum,
        StartTransition: 'startTransition' as TypeEnum
    };
}