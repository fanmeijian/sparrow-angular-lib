import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { TreeNode, FlatTreeNode, TreeService } from './dynamic-tree-constant';
import { DynamicDataSource, DynamicFlatNode } from './dynamic-tree-datasource';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic-tree-view',
  templateUrl: './dynamic-tree-view.component.html',
  styleUrls: ['./dynamic-tree-view.component.css']
})
export class DynamicTreeViewComponent implements OnInit {


  @Input() treeService!: TreeService;
  @Input() parentId: string = ''
  @Input() link?: string;
  @Output() onNodeClick: EventEmitter<TreeNode> = new EventEmitter();

  pageable: Map<string, any> = new Map()

  ngOnInit(): void {

  }
  dataSource!: DynamicDataSource;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
  ) {
    this.dataSource = new DynamicDataSource(this.treeControl, this.treeService);

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.treeService.getChildren(this.parentId)
      .subscribe((res: any) => {
        this.pageable.set(this.parentId, res.pageable)
        let nestedNodes: any = res.content.map((value: any, index: number) => Object.assign(value, { index: index, parentId: this.parentId }))
        this.dataSource.data = nestedNodes
      })

  }

  private _transformer = (node: TreeNode, level: number) => {
    return {
      expandable: node.childCount > 0,
      name: node.name,
      id: node.id,
      childCount: node.childCount,
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
  hasChild = (_: number, node: FlatTreeNode) => node.expandable;
}
