import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { FlowService } from '@sparrowmini/flow-api';
import { ProcessQueriesService } from '@sparrowmini/jbpm-api';
import { tap, map, switchMap, zip } from 'rxjs';
import { ViewProcessImageComponent } from '../view-process-image/view-process-image.component';

@Component({
  selector: 'lib-process-published',
  templateUrl: './process-published.component.html',
  styleUrls: ['./process-published.component.css']
})
export class ProcessPublishedComponent implements OnInit {
  users: any[] = [];
  dataSource = new MatTableDataSource<any>();
  pageable = {
    pageIndex: 0,
    pageSize: 10,
    length: 0,
    sort: ['createdDate,desc'],
  };

  displayedColumns = ['seq', 'name', 'code', 'actions'];

  constructor(
    private sysroleService: FlowService,
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private http: HttpClient,
    private processQueriesService: ProcessQueriesService,
  ) {}

  filters: any[] = [];
  ngOnInit(): void {
    this.onPageChange(this.pageable);
  }

  applyFilter() {
    this.onPageChange({ pageIndex: 0, pageSize: this.pageable.pageSize });
  }

  onPageChange(event: any) {
    // console.log(event);
    this.dataSource = new MatTableDataSource<any>();
    this.pageable.pageIndex = event.pageIndex;
    this.pageable.pageSize = event.pageSize;
    this.sysroleService
      .processes(this.pageable.pageIndex, this.pageable.pageSize)
      .subscribe((res) => {
        this.dataSource = new MatTableDataSource<any>(res.content);
        this.pageable.length = res.totalElements!
      });
  }

  viewImage(process: any) {
    this.dialog.open(ViewProcessImageComponent, {
      data: {'container-id':process.deploymentId, 'process-id': process.processId},
      width: '90%',
    });
  }
}
