import { Injectable } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import {
  CollectionViewer,
  SelectionChange,
  DataSource,
} from "@angular/cdk/collections";
import { FlatTreeControl } from "@angular/cdk/tree";
import { BehaviorSubject, combineLatest, merge, Observable, zip } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { OrganizationService, RoleService } from "@sparrowmini/org-api";
import { OrgDynamicDatabase } from "../../../model/org-database";
import { DynamicFlatNode } from "../../../model/dynamic-flat-node";
import { DynamicDataSource } from "../../../model/dynamic-datasource";
import { RoleCreateComponent } from "../role-create/role-create.component";
import { MatDialog } from "@angular/material/dialog";
import { RoleDynamicDatabase } from "../../../model/role-database";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "lib-roles",
  templateUrl: "./roles.component.html",
  styleUrls: ["./roles.component.css"],
})
export class RolesComponent implements OnInit {
  selectedItem: any;
  onItemClick(item: any) {
    if (item.type === "ROLE") {
      this.roleService
        .roleParentOrgs(item.id)
        .pipe(
          switchMap((m) =>
            zip(...m.map((s) => this.orgService.org(s.id?.organizationId!)))
          )
        )
        .subscribe((res) => {
          this.selectedItem = Object.assign({}, item, { organizations: res });
        });
    }
  }

  constructor(
    private database: RoleDynamicDatabase,
    private dialog: MatDialog,
    private roleService: RoleService,
    private orgService: OrganizationService,
    private snack: MatSnackBar
  ) {
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(
      this.getLevel,
      this.isExpandable
    );
    this.dataSource = new DynamicDataSource(this.treeControl, database);

    database.initialData().subscribe((res) => {
      this.dataSource.data = res;
    });
  }

  treeControl: FlatTreeControl<DynamicFlatNode>;

  dataSource: DynamicDataSource;

  getLevel = (node: DynamicFlatNode) => node.level;

  isExpandable = (node: DynamicFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;

  ngOnInit(): void {}

  new() {
    this.dialog
      .open(RoleCreateComponent, { width: "90%" })
      .afterClosed()
      .subscribe(() => {
        this.database.initialData().subscribe((res) => {
          this.dataSource.data = res;
        });
      });
  }

  delete(selectedItem: any) {
    this.roleService.deleteRole([selectedItem.id]).subscribe(() => {
      this.snack.open("操作成功！", "关闭");
      this.database.initialData().subscribe((res) => {
        this.dataSource.data = res;
      });
    });
  }

  edit(menu: any) {
    this.dialog
      .open(RoleCreateComponent, { width: "90%", data: menu })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.database.initialData().subscribe((res) => {
            this.dataSource.data = res;
          });
        }
      });
  }
}
