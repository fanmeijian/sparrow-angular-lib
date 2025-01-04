
/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
export interface TreeNode {
  name: string;
  id: string;
  code: string;
  children?: TreeNode[];
}


/** Flat node with expandable and level information */
export interface FlatNode {
  expandable: boolean;
  name: string;
  id: string;
  code: string;
  level: number;
}
