import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatNode, TreeNode } from '../../model/TreeConstant';

@Component({
  selector: 'lib-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit, OnChanges {
  remove(_t5: FlatNode) {
    throw new Error('Method not implemented.');
  }

  @Input() checklistSelection!: SelectionModel<FlatNode>;
  @Input() checkedIds?: string[];
  @Input() disabled?: boolean;
  @Input() parentSelectable: boolean = false;

  /** A selected parent node to be inserted */
  selectedParent: FlatNode | null = null;

  /** The new item's name */
  newItemName = '';


  dataSource: MatTreeFlatDataSource<TreeNode, FlatNode>;


  constructor() {
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    this.dataSource.data = JSON.parse(localStorage.getItem("article-catalog")!);

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.checkedIds) {
      this.checkedIds.forEach(id => {
        const node = this.treeControl.dataNodes.find(m => m.id === id)
        this.checklistSelection.select(node)
      })
    }
  }
  ngOnInit(): void {

  }

  private _transformer = (node: TreeNode, level: number) => {
    return {
      expandable: node.children!.length > 0,
      name: node.name,
      id: node.id,
      childCount: node.children!.length,
      level: level,
      index: node.index,
      parentId: node.parentId
    };
  };

  treeControl = new FlatTreeControl<any>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );
  hasChild = (_: number, node: FlatNode) => node.expandable;
  getLevel = (node: FlatNode) => node.level;

  /** Whether all the descendants of the node are selected. */
  descendantsAllSelected(node: FlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      descendants.every(child => {
        return this.checklistSelection.isSelected(child);
      });
    return descAllSelected;
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: FlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: FlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);

    // Force update for the parent
    descendants.forEach(child => this.checklistSelection.isSelected(child));
    this.checkAllParentsSelection(node);
  }

  /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
  todoLeafItemSelectionToggle(node: FlatNode): void {
    this.checklistSelection.toggle(node);
    this.checkAllParentsSelection(node);
  }

  /* Checks all the parents when a leaf node is selected/unselected */
  checkAllParentsSelection(node: FlatNode): void {
    let parent: FlatNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }

  /** Check root node checked state and change it accordingly */
  checkRootNodeSelection(node: FlatNode): void {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      descendants.every(child => {
        return this.checklistSelection.isSelected(child);
      });
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }

  /* Get the parent node of a node */
  getParentNode(node: FlatNode): FlatNode | null {
    const currentLevel = this.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }


}
