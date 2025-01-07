
/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface TreeNode {
  id: string;
  name: string;
  code: string;
  disabled: boolean;
  hidden: boolean;
  children?: TreeNode[];
}


/** Flat node with expandable and level information */
interface FlatTreeNode {
  id: string;
  name: string;
  code: string;
  disabled: boolean;
  hidden: boolean;
  expandable: boolean;
  level: number;
}
