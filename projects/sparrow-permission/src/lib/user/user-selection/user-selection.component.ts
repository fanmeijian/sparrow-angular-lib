import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SysroleService, UserService } from '@sparrowmini/org-api';

@Component({
  selector: 'lib-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css']
})
export class UserSelectionComponent implements OnInit {
  @Input() public selected!: any[];
  @Input() public multiple: boolean = false;
  @Output() private onSelected = new EventEmitter<string>();
  @Output() private onRemoved = new EventEmitter<string>();

  sysroles: any[] = [];
  // selectedSysroles: any[] = []
  pageable = { pageIndex: 0, pageSize: 10, length: 0,sort: ['createdDate,desc'] };

  @ViewChild("fruitInput") fruitInput!: ElementRef<HTMLInputElement>;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  filters: any[] = []

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.users([],0, 100000).subscribe((res) => {
      this.sysroles = res.content!;
    });
  }

  remove(fruit: any): void {
    const index = this.selected.indexOf(fruit);

    if (index >= 0) {
      this.selected.splice(index, 1);
    }
  }

  select(seletedItem: any) {
    if (!this.multiple) {
      this.selected = [];
    }

    if (this.selected.indexOf(seletedItem) === -1) {
      this.selected.push(seletedItem);
      this.onSelected.emit(seletedItem.id);
    }
  }
  onPageChange(event: any) {
    console.log(event);
    this.dataSource = new MatTableDataSource<any>();
    this.pageable.pageIndex = event.pageIndex;
    this.pageable.pageSize = event.pageSize;
    this.userService
      .users(this.filters, this.pageable.pageIndex, this.pageable.pageSize)
      .subscribe((res) => {
        this.dataSource = new MatTableDataSource<any>(res.content);
        this.pageable.length = res.totalElements!
      });
  }
}
