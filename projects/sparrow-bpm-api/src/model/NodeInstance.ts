/**
 * 节点实例
 */
export interface NodeInstance {
  id: string;
  name: string;
  type: string;
  enter: string; // DateTime
  exit?: string;
  definitionId: string;
  nodeId: string;
  slaDueDate?: string;
  retrigger?: boolean;
  errorMessage?: string;
}