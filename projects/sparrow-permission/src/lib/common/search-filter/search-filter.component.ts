import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';

export interface SparrowJpaFilter {
  filterTreeBean?: FilterTreeBean;
  children?: SparrowJpaFilter[];
}

export interface FilterTreeBean {
  type?: string;
  name?: string;
  op?: string;
  value?: any;
}

@Component({
  selector: 'lib-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css'],
})
export class SearchFilterComponent implements OnInit {
  @Input() filters: SparrowJpaFilter[] = [];
  @Input() fields?: any[] = [];

  propertyNames = [
    {
      name: '创建日期',
      value: 'createdDate',
    },
    {
      name: '创建人',
      value: 'createdBy',
    },
    {
      name: '代码',
      value: 'code',
    },
  ]
  operators = [
    {
      name: '等于',
      value: '=',
    },
    {
      name: '大于等于',
      value: '>=',
    },
  ];

  filterBean: FilterTreeBean = {
    type: '',
    name: '',
    op: '',
    value: undefined,
  };

  dataChange = new BehaviorSubject<SparrowJpaFilter[]>([]);

  constructor() {
    // this.dataSource.data = [];
    this.dataSource = new MatTreeNestedDataSource<SparrowJpaFilter>();
    this.dataChange.subscribe((data) => {
      console.log(data);
      this.dataSource.data = null;
      this.dataSource.data = data;
    });
  }

  ngOnInit(): void {}

  treeControl = new NestedTreeControl<SparrowJpaFilter>(
    (node) => node.children
  );
  dataSource: any;

  hasChild = (_: number, node: SparrowJpaFilter) =>
    !!node.children && node.children.length > 0;

  addFilter(node: any) {
    if (node) {
      node.children?.push({
        filterTreeBean: Object.assign({}, this.filterBean),
        children: [],
      });
    } else {
      this.filters.push({
        filterTreeBean: Object.assign({}, this.filterBean),
        children: [],
      });
    }

    this.filterBean = {};
    this.dataChange.next(this.filters);
  }
}
