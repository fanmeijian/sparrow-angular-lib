/**
 * 流程实例状态枚举
 */
export enum ProcessInstanceState {
  PENDING = "PENDING",
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
  ABORTED = "ABORTED",
  SUSPENDED = "SUSPENDED",
  ERROR = "ERROR",
}