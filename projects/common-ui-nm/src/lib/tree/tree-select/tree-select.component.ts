import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { DictService } from '@sparrowmini/common-api';
import { map, tap } from 'rxjs';

export interface FlatNode {
  label: string,
  name: string,
  level: number,
  value: string,
  childCount: number,
}

export interface TreeNode extends FlatNode {
  children: TreeNode[]
}

@Component({
  selector: 'spr-tree-select',
  templateUrl: './tree-select.component.html',
  styleUrls: ['./tree-select.component.css']
})
export class TreeSelectComponent implements OnInit {
  private _transformer = (node: TreeNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.label,
      code: node.value,
      level: level,
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

  hasChild = (_: number, node: any) => node.expandable;

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(
    private dictService: DictService,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: { tree: TreeNode[], selected: string[] }
  ) { }

  ngOnInit(): void {
    this.dicts = this.data.tree;
    this.filterdDicts = this.dicts
    this.selectedDicts_.select(...this.data.selected)
  }

  selectedDicts_: SelectionModel<any> = new SelectionModel<any>(true, []);
  filterStr: any;
  filterdDicts: any[] = []
  dicts: any[] = [];

  onSearch($event: any) {
    if (this.filterStr) {
      this.filterdDicts = this.dicts.filter(f => f.name.toLowerCase().includes(this.filterStr.toLowerCase()))
    } else {
      this.filterdDicts = this.dicts
    }

  }

  remove(arg0: any) {
    this.selectedDicts_.deselect(arg0);
  }
  select(_t16: any) {
    const found = this.selectedDicts_.selected.find(s => s.code == _t16.code)
    if (found) {
      this.selectedDicts_.deselect(found)
    } else {
      this.selectedDicts_.select(_t16);
    }

  }



  clickable: any;
  expansionModel = new SelectionModel<string>(true);
  selectedNode: any;
  onNodeClick_(node: any) {
    const found = this.selectedDicts_.selected.find(s => s.code == node.code)
    if (found) {
      this.selectedDicts_.deselect(found)
    } else {
      this.selectedDicts_.select(node);
    }

  }

}
