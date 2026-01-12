import { MilestoneStatus } from "./MilestoneStatus";

/**
 * 里程碑
 */
export interface Milestone {
  id: string;
  name: string;
  status: MilestoneStatus;
}