import { SelectionModel } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../auth.service';
import { PageEvent } from '@angular/material/paginator';
import { Pageable, PAGE_DEFAULT } from '@sparrowmini/common-api';

@Component({
  selector: 'spr-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css']
})
export class UserSelectionComponent implements OnInit {
  pageable: Pageable = { ...PAGE_DEFAULT };
  onPage($event: PageEvent) {
    this.pageable.page = $event.pageIndex
    this.pageable.size = $event.pageSize
    this.authService.users(this.pageable).subscribe(res => {
      this.dataSource = new MatTableDataSource(res.content)
      this.pageable.totalElements = res.totalElements
    })
  }
  onToggle(element: any) {
    this.selected?.toggle(element)
    this.onSelect.next(this.selected?.selected)
  }


  @Input() multiple: boolean = false
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

  confirm() {
    console.log(this.selected?.selected);
    // this.dialogRef.close(this.selected.selected)

  }

  selected?: SelectionModel<any>;

  displayedColumns: any;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  constructor(
    private authService: AuthService,
  ) {

    this.displayedColumns = ['#', 'username', 'friendlyName']
  }

  ngOnInit(): void {
    this.selected = new SelectionModel<any>(this.multiple);
    const className = 'cn.sparrowmini.permission.app.App'
    this.onPage({
      pageIndex: 0,
      pageSize: this.pageable.size,
      length: 0
    })
  }

}
