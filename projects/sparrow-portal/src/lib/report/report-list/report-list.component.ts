import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ReportService, SparrowJpaFilter} from "@sparrowmini/report-api";
import {Table} from "primeng/table";

@Component({
  selector: 'lib-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {
  customers1: any[] = [];

  statuses: any[] = [];

  isExpanded: boolean = false;

  loading: boolean = true;

  pageable = { pageIndex: 0, pageSize: 10, length: 0 };

  @ViewChild('filter') filter!: ElementRef;

  constructor(private reportService: ReportService) {}

  filters: SparrowJpaFilter[] = [];
  ngOnInit(): void {
    this.reportService
      .reportTemplates(
        this.filters,
        this.pageable.pageIndex,
        this.pageable.pageSize
      )
      .subscribe((res) => {
        this.customers1 = res.content!;
        this.pageable.length = res.totalElements!;
        this.loading = false
      });
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }
}
