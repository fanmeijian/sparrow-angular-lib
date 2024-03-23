import { Component, OnInit } from '@angular/core';
// import { MatTableDataSource } from '@angular/material/table';
// import { FlowService } from '../../../services/flow.service';

@Component({
  selector: 'lib-process-instances',
  templateUrl: './process-instances.component.html',
  styleUrls: ['./process-instances.component.css']
})
export class ProcessInstancesComponent implements OnInit {

  // datasource: MatTableDataSource<any> = new MatTableDataSource<any>()
  displayedColumns: string[] = []
  constructor(
    // public flowService: FlowService
  ) { }

  ngOnInit(): void {
  }

}
