import { ChangeDetectorRef, Injectable } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

// @Injectable({ providedIn: 'root' })
export class ChecklistSelectionService {
  constructor(
    private multiple: boolean
  ) {

  }

  selected = new SelectionModel<any>(this.multiple);
  isSelected(node: any): boolean {
    return this.selected.selected.findIndex(f=>f.id===node.id)>=0
  }

  toggleSelection(node: any, nodeCache: any) {
    if (this.multiple) {
      const descendants = this.getNodeCache(node, nodeCache)
      const isNowSelected = this.isSelected(node);
      console.log(descendants, isNowSelected, nodeCache)
      if (isNowSelected) {
        this.selected.deselect(node);
        descendants?.forEach((child: any) => this.selected.deselect(child));
      } else {
        this.selected.select(node);
        descendants?.forEach((child: any) => this.selected.select(child));
      }
    } else {
      this.clearCurrentState(this.selected.selected[0], nodeCache)
      this.selected.toggle(node)
    }

    this.updatePartialStatesUp(node, nodeCache);
  }

  //单选的时候，清理原已选节点的父的中间状态
  clearCurrentState(node: any, nodeCache: any) {
    if (!node) return
    let parent: any = Array.from(nodeCache.keys()).find((f: any) => f.id === node.parentId);
    if (!node.parentId) {
      parent = node
    } else {
      this.clearCurrentState(parent, nodeCache)
    }
    parent.indeterminate = false
  }

  updatePartialStatesUp(node: any, nodeCache: any) {

    let parent: any = Array.from(nodeCache.keys()).find((f: any) => f.id === node.parentId);
    if (!node.parentId) {
      parent = node
    } else {
      this.updatePartialStatesUp(parent, nodeCache)
    }

    const children = this.getNodeCache(parent, nodeCache) || [];
    const allSelected = children.every((child: any) => this.isSelected(child));
    const someSelected = children.some((child: any) => this.isSelected(child));

    if (allSelected) {
      if (node.parentId) {
        this.selected.select(parent);
      }

      parent.indeterminate = false
    } else if (someSelected) {
      console.log('2')
      this.selected.deselect(parent);
      parent.indeterminate = true
    } else {
      if (this.multiple) {
        this.selected.deselect(parent);
      }
      console.log('3')
      parent.indeterminate = false
    }
    console.log(this.selected.selected)
  }

  getNodeCache(node: any, nodeCache: Map<any, any>){
    const key = Array.from(nodeCache.keys()).find((f: any)=>f.id===node.id)
    return nodeCache.get(key)
  }

  clear() {
    this.selected.clear();
  }
}
