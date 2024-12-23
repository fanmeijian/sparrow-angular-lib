import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatTreeFlattener,
  MatTreeFlatDataSource,
} from '@angular/material/tree';
import { DictService, OrganizationService } from '@sparrowmini/org-api';
import { BehaviorSubject, switchMap, zip, of } from 'rxjs';
import { DictCatalogCreateComponent } from '../dict-catalog-create/dict-catalog-create.component';
import { DictCatalog } from '@sparrowmini/org-api/model/dictCatalog';
import {
  DynamicDataSource,
  DynamicDatabase,
  DynamicFlatNode,
} from './dict-tree-datasource';
import { DictCreateComponent } from '../dict-create/dict-create.component';

@Component({
  selector: 'lib-dicts',
  templateUrl: './dicts.component.html',
  styleUrls: ['./dicts.component.css','../../org.css'],
})
export class DictsComponent implements OnInit {
  selectedMenu: any;
  catalogs?: DictCatalog[];
  constructor(
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private dictService: DictService,
    database: DynamicDatabase
  ) {
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(
      this.getLevel,
      this.isExpandable
    );
    this.dataSource = new DynamicDataSource(this.treeControl, database);

    database.initialData().subscribe(res=>{
      // console.log(res)
      this.dataSource.data=res
    });
  }
  ngOnInit(): void {
    this.dictService.catalogs().subscribe((res) => {
      this.catalogs = res.content;
    });
  }

  newCatalog() {
    this.dialog.open(DictCatalogCreateComponent, { width: '80%' });
  }

  newDict() {
    this.dialog.open(DictCreateComponent, { width: '80%' });
  }

  edit(selectedMenu:any){

  }
  deleteMenu(selectedMenu:any){

  }

  // tree config
  treeControl!: FlatTreeControl<DynamicFlatNode>;

  dataSource!: DynamicDataSource;

  getLevel = (node: DynamicFlatNode) => node.level;

  isExpandable = (node: DynamicFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;
}
