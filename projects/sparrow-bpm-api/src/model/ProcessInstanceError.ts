/**
 * 流程实例错误信息
 */
export interface ProcessInstanceError {
  nodeDefinitionId: string;
  nodeInstanceId?: string;
  message?: string;
}