/**
 * 流程定义
 */
export interface ProcessDefinition {
  id: string;
  name?: string;
  version?: string;
  nodes?: Node[];
  source?: string;
  addons?: string[];
  roles?: string[];
  type?: string;
  endpoint?: string;
  serviceUrl?: string;
  description?: string;
  annotations?: string[];
  metadata?: any; // 对应 JSON
}