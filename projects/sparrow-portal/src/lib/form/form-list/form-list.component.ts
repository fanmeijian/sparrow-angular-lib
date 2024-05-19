import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormService} from "@sparrowmini/form-api";
import {Table} from "primeng/table";

@Component({
  selector: 'lib-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {
  customers1: any[] = [];

  statuses: any[] = [];

  isExpanded: boolean = false;

  loading: boolean = true;

  pageable = { pageIndex: 0, pageSize: 10, length: 0 };

  @ViewChild('filter') filter!: ElementRef;

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.pageChange({ first: 0, rows: this.pageable.pageSize });
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }
  pageChange(event: { first: number; rows: number }) {
    this.pageable.pageSize = event.rows;
    this.pageable.pageIndex =
      event.first === 0 ? 0 : Math.floor(event.first / event.rows);
    this.formService
      .dataForms(this.pageable.pageIndex, this.pageable.pageSize)
      .subscribe((res) => {
        this.customers1 = res.content!;
        this.loading = false;
        this.pageable.length=res.totalElements!
      });
  }
}
