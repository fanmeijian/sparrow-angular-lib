import { Milestone } from "./Milestone";
import { NodeInstance } from "./NodeInstance";
import { ProcessDefinition } from "./ProcessDefinition";
import { ProcessInstanceError } from "./ProcessInstanceError";
import { ProcessInstanceState } from "./ProcessInstanceState";

/**
 * 流程实例 (核心接口)
 */
export interface ProcessInstance {
  id: string;
  processId: string;
  version?: string;
  processName?: string;
  parentProcessInstanceId?: string;
  rootProcessInstanceId?: string;
  rootProcessId?: string;
  roles?: string[];
  state?: ProcessInstanceState;
  endpoint: string;
  serviceUrl?: string;
  nodes?: NodeInstance[];
  milestones?: Milestone[];
  variables?: any; // 对应 JSON
  start?: string;
  end?: string;
  parentProcessInstance?: ProcessInstance; // 递归引用
  childProcessInstances?: ProcessInstance[]; // 递归引用
  error?: ProcessInstanceError;
  addons?: string[];
  lastUpdate: string;
  businessKey?: string;
  nodeDefinitions?: Node[];
  diagram?: string;
  source?: string;
  definition?: ProcessDefinition;
  identity?: string;
  createdBy?: string;
  updatedBy?: string;
  executionSummary?: (string | null)[];
  slaDueDate?: string;
}