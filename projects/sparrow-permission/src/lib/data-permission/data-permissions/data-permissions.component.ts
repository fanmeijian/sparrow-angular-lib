import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatTableDataSource } from "@angular/material/table";
import { DataPermissionService } from "@sparrowmini/permission-api";

@Component({
  selector: "lib-data-permissions",
  templateUrl: "./data-permissions.component.html",
  styleUrls: ["./data-permissions.component.css"],
})
export class DataPermissionsComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  pageable = { pageIndex: 0, pageSize: 10, length: 0 };

  displayedColumns = ["seq", "name", "remark"];

  constructor(
    private dataPermissionService: DataPermissionService,
    private dialog: MatDialog,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.onPageChange(this.pageable);
  }

  onPageChange(event: any) {
    this.dataPermissionService
      .dataPermissions(event.page, event.size)
      .subscribe((res) => {
        this.pageable.length = res.totalElements!
        this.dataSource = new MatTableDataSource<any>(res.content);
      });
  }
}
