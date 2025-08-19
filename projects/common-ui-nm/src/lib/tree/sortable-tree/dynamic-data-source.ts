import { DataSource, CollectionViewer, SelectionChange } from "@angular/cdk/collections";
import { FlatTreeControl } from "@angular/cdk/tree";
import { InjectionToken } from "@angular/core";
import { Observable, BehaviorSubject, merge, map, of } from "rxjs";


export const TREE_SERVICE = new InjectionToken<TreeService>('treeService')

export interface TreeService {
  /**
   * { parentId: string, appId: string, sort: string[] }
   * @param params
   */
  getChildren(params: any): Observable<DynamicFlatNode[]>;
  initialData(): Observable<DynamicFlatNode[]>;
  move(nodeId: any, nextNodeId: any): Observable<void>;
}

export interface DynamicFlatNode {
  id: string,
  parentId: string,
  name?: string,
  code?: string,
  level: number,
  expandable: boolean,
  childCount: number,
  isLoading: boolean,
}

export interface DynamicTreeNode {
  id: string,
  me: any,
  name?: string,
  code?: string,
  level: number,
  expandable: boolean,
  childCount: number,
  isLoading: boolean,
  children: DynamicTreeNode[]
}



export class TreeDataSource implements DataSource<DynamicFlatNode> {


  dataChange = new BehaviorSubject<DynamicFlatNode[]>([]);
  /** 节点缓存：key 为父节点 item，value 为其展开后的子节点列表 */
  public nodeCache = new Map<any, DynamicFlatNode[]>();

  get data(): DynamicFlatNode[] {
    return this.dataChange.value;
  }
  set data(value: DynamicFlatNode[]) {
    this._treeControl.dataNodes = value;
    this.dataChange.next(value);
  }

  constructor(
    private _treeControl: FlatTreeControl<DynamicFlatNode>,
    // private _database: DynamicDatabase,
    private treeService: TreeService,
  ) { }

  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
    this._treeControl.expansionModel.changed.subscribe(change => {
      if (
        (change as SelectionChange<DynamicFlatNode>).added ||
        (change as SelectionChange<DynamicFlatNode>).removed
      ) {
        this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
      }
    });

    return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
  }

  disconnect(collectionViewer: CollectionViewer): void { }

  /** Handle expand/collapse behaviors */
  handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
    console.log(change)

    if (change.added) {
      change.added.forEach((node: any) => {
        if (node.sorting) {
          node.sorting = false
        } else {
          this.toggleNode(node, true)
        }

      });
    }
    if (change.removed) {
      change.removed
        .slice()
        .reverse()
        .forEach(node => this.toggleNode(node, false));
    }
  }

  /**
   * Toggle the node, remove from display list
   */
  toggleNode(node: DynamicFlatNode, expand: boolean) {
    const index = this.data.indexOf(node);
    if (expand) {
      console.log(this.nodeCache)
      let children: DynamicFlatNode[];
      node.isLoading = true;
      const childrenCache = this.getCache(node)
      const $childrenRequest = childrenCache ? of(childrenCache) : this.treeService.getChildren(node);
      $childrenRequest.subscribe((childrenNames: any) => {
        children = childrenNames
        if (!children || index < 0) return;
        children.forEach(f => f.level = node.level + 1)
        this.data.splice(index + 1, 0, ...children);
        this.dataChange.next(this.data);
        node.isLoading = false;
        this.nodeCache.set(node, children)
      })
    } else {
      // 记录要移除的子节点数量
      let count = 0;
      for (
        let i = index + 1;
        i < this.data.length && this.data[i].level > node.level;
        i++, count++
      ) { }
      this.data.splice(index + 1, count);
      this.dataChange.next(this.data);
    }

  }

  hasCache(node: any) {
    return Array.from(this.nodeCache.keys()).findIndex(f => f.id === node.id)
  }

  getCache(node: any) {
    const key = Array.from(this.nodeCache.keys()).find(f => f.id === node.id)
    return this.nodeCache.get(key)
  }
}
