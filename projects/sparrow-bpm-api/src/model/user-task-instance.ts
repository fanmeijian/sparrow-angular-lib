import { Attachment } from "./attachment";
import { Comment } from "./comment";

export interface UserTaskInstance {
  id: string;
  description?: string; // 对应可为空字段
  name?: string;
  priority?: string;
  processInstanceId: string;
  processId?: string;
  rootProcessInstanceId?: string;
  rootProcessId?: string;
  state?: string;
  actualOwner?: string;
  adminGroups?: string[];
  adminUsers?: string[];
  completed?: string; // 或使用 Date
  started?: string;   // 或使用 Date
  excludedUsers?: string[];
  potentialGroups?: string[];
  potentialUsers?: string[];
  inputs?: string;
  outputs?: string;
  referenceName?: string;
  lastUpdate: Date; // 对应非空字段
  endpoint?: string;
  comments?: Comment[];
  attachments?: Attachment[];
  externalReferenceId?: string;
  slaDueDate?: Date; // 或使用 Date
}