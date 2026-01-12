import { NodeMetadata } from "./NodeMetadata";

/**
 * 节点定义
 */
export interface Node {
  id: string;
  metadata: NodeMetadata;
  name: string;
  type: string;
  uniqueId: string;
}