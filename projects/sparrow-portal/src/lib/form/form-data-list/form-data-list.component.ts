import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormService} from "@sparrowmini/form-api";
import {ActivatedRoute} from "@angular/router";
import {Table} from "primeng/table";

@Component({
  selector: 'lib-form-data-list',
  templateUrl: './form-data-list.component.html',
  styleUrls: ['./form-data-list.component.css']
})
export class FormDataListComponent implements OnInit {
  customers1: any[] = [];

  statuses: any[] = [];

  isExpanded: boolean = false;

  loading: boolean = true;

  pageable = { pageIndex: 0, pageSize: 5, length: 0 };
  formId = '';
  form: any = {};

  @ViewChild('filter') filter!: ElementRef;

  constructor(
    private formService: FormService,
    private route: ActivatedRoute
  ) {}

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

  getColumnLabel(column: string) {
    // console.log(this.form.form)
    let component: any[] = this.form.form.components.filter(
      (f: any) => f.key === column
    );
    if (component) {
      return component[0].label;
    } else {
      return column;
    }
  }

  editItem(item: any) {}

  deleteItem(item: any) {
    this.formService.deleteFormData([item.id]).subscribe(() => {
      this.ngOnInit();
    });
  }

  pageChange(event: { first: number; rows: number }) {
    console.log(event)
    this.pageable.pageSize = event.rows;
    this.pageable.pageIndex =
      event.first === 0 ? 0 : Math.floor(event.first / event.rows);

    this.route.queryParams.subscribe((params: any) => {
      if (params.formId) {
        this.formId = params.formId;
        this.formService.dataForm(this.formId).subscribe((form) => {
          this.form = form;
          this.form.form = JSON.parse(form.form!);

          this.formService
            .formDatas(
              params.formId,
              this.pageable.pageIndex,
              this.pageable.pageSize
            )
            .subscribe((res) => {
              this.customers1 = res.content?.map((m) =>
                Object.assign(m, { data: JSON.parse(m.data!), form: form.form })
              )!;
              this.pageable.length = res.totalElements!;
              this.loading = false;
            });
        });
      } else {
        this.formService
          .allFormDatas(this.pageable.pageIndex, this.pageable.pageSize)
          .subscribe((res) => {
            this.customers1 = res.content!;
            this.pageable.length = res.totalElements!;
            this.loading = false;
          });
      }
    });
  }
}
