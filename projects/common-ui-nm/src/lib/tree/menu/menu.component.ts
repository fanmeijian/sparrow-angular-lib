import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { DynamicFlatNode, TREE_SERVICE, TreeDataSource, TreeService } from '../sortable-tree/dynamic-data-source';


@Component({
  selector: 'spr-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  @Input() multiple: boolean = true
  @Output() onTreeSelect: EventEmitter<DynamicFlatNode[]> = new EventEmitter<DynamicFlatNode[]>()

  dataSource!: TreeDataSource;
  selectedNode: any;

  constructor(
    @Inject(TREE_SERVICE) public treeService: TreeService
  ) { }
  ngOnInit(): void {
    this.dataSource = new TreeDataSource(this.treeControl, this.treeService);
    this.treeService.initialData().subscribe(res => {
      this.dataSource.data = res
    })
  }

  hasChild = (_: number, node: DynamicFlatNode) => node.expandable;


  treeControl = new FlatTreeControl<any>(
    (node) => node.level,
    (node) => node.expandable
  );

}
