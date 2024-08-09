import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Model } from '@sparrowmini/org-api';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DataPermissionGrantComponent } from '../data-permission-grant/data-permission-grant.component';

@Component({
  selector: 'lib-data-permission-new',
  templateUrl: './data-permission-new.component.html',
  styleUrls: ['./data-permission-new.component.css'],
})
export class DataPermissionNewComponent implements OnInit {
  models: Model[] = [];
  dataSource = new MatTableDataSource<any>();
  pageable = { pageIndex: 0, pageSize: 10, length: 0 };

  displayedColumns = ['seq','name','actions'];

  constructor(
    private http: HttpClient,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8300/toupiao-service/data-permissions/entities').subscribe((res:any)=>{
      this.models=res.content
    })
  }

  selectionChange(e){
    console.log(e)
    let id = e.value.id
    this.http.get('http://localhost:8300/toupiao-service/data-permissions/'+id+'/list').subscribe((res:any)=>{
      console.log(res)
      this.dataSource = new MatTableDataSource(res.content)
      this.pageable.length = res.totalElements
    })
  }
  onPageChange(e){

  }

  grantPermission(element){
    this.dialog.open(DataPermissionGrantComponent, {data: element})
  }
}
