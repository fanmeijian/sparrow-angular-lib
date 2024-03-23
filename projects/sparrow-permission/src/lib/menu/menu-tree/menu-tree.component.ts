import { FlatTreeControl } from "@angular/cdk/tree";
import { Component, OnInit } from "@angular/core";
import {
  MatTreeFlattener,
  MatTreeFlatDataSource,
} from "@angular/material/tree";
import { MenuService } from "@sparrowmini/permission-api";

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: "lib-menu-tree",
  templateUrl: "./menu-tree.component.html",
  styleUrls: ["./menu-tree.component.css"],
})
export class MenuTreeComponent implements OnInit {

  selectedNode = ''

  private _transformer = (node: any, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.me.name,
      url: node.me.url,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<any>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private menuService: MenuService) {}
  ngOnInit(): void {
    this.menuService.myMenu().subscribe((res) => {
      this.dataSource.data = res.children!;
    });
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
