import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomQueriesService } from '@sparrowmini/jbpm-api';
import json5 from 'json5';

@Component({
  selector: 'lib-query-create',
  templateUrl: './query-create.component.html',
  styleUrls: ['./query-create.component.css']
})
export class QueryCreateComponent implements OnInit {

  formGroup: FormGroup = this.fb.group({
    name: [null],
    code: [null,],
    query: [null],
    template: []
  })

  constructor(
    private customQueryService: CustomQueriesService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formGroup.value)
    this.customQueryService.createQueryDefinition(this.formGroup.value.code, JSON.stringify(json5.parse(this.formGroup.value.query)))
      .subscribe(() => {

      })
  }

}
