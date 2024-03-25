import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { FormsService } from "@sparrowmini/form-api";

@Component({
  selector: "lib-form-data-list",
  templateUrl: "./form-data-list.component.html",
  styleUrls: ["./form-data-list.component.css"],
})
export class FormDataListComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  pageable = { page: 0, size: 10 };
  formId: string = "";

  displayedColumns = ["id", "name", "code", "actions"];

  constructor(private formService: FormsService) {}

  ngOnInit(): void {
    this.formService
      .allFormDatas(this.pageable.page, this.pageable.size)
      .subscribe((res) => {
        this.dataSource = new MatTableDataSource<any>(res.content);
      });
  }
}
