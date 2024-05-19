import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomQueriesService } from '@sparrowmini/jbpm-api';
import json5 from 'json5';

@Component({
  selector: 'lib-query-execute',
  templateUrl: './query-execute.component.html',
  styleUrls: ['./query-execute.component.css']
})
export class QueryExecuteComponent implements OnInit {
  executionStr: any
  queryName: string
  result: any

  constructor(
    private customQueryService: CustomQueriesService,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    this.queryName = this.data['query-name']
  }

  ngOnInit(): void {
  }

  excuteQuery() {
    // console.log(json5.parse(this.executionStr))

    this.customQueryService.runQueryFiltered(this.queryName, 'RawList', undefined, undefined, undefined, JSON.stringify(json5.parse(this.executionStr)))
      .subscribe(res => {
        this.result = res
      })
  }
}
