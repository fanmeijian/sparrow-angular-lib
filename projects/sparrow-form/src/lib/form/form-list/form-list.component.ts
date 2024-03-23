import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { FormsService } from "@sparrowmini/form-api";

@Component({
  selector: "lib-form-list",
  templateUrl: "./form-list.component.html",
  styleUrls: ["./form-list.component.css"],
})
export class FormListComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  pageable = { page: 0, size: 10 };

  displayedColumns = ["id", "name", "code", "actions"];

  constructor(private formService: FormsService) {}

  ngOnInit(): void {
    this.formService
      .dataForms(this.pageable.page, this.pageable.size)
      .subscribe((res) => {
        this.dataSource = new MatTableDataSource<any>(res.content);
      });
  }
}
