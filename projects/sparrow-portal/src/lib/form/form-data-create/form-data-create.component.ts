import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormService} from "@sparrowmini/form-api";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'lib-form-data-create',
  templateUrl: './form-data-create.component.html',
  styleUrls: ['./form-data-create.component.css']
})
export class FormDataCreateComponent implements OnInit {
  form: any;
  data: any = {};
  formId: string = '';
  dataId?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.dataId = params.id
        this.formService.formData(this.dataId!).subscribe((res) => {
          console.log(res);
          this.data = { data: JSON.parse(res.data!) };
        });
      }
      if (params.formId) {
        this.formId = params.formId;
        this.formService.dataForm(this.formId).subscribe((res) => {
          this.form = JSON.parse(res.form!);
        });
      }
    });
  }

  onSubmit(e: any) {
    // console.log(this.formId, e.data);
    if(this.dataId){
      this.formService.updateFormData(e.data,this.dataId).subscribe(()=>{
        window.history.back();
      })
    }else{
      this.formService.saveFormData(e.data, this.formId).subscribe((res) => {
        window.history.back();
      });
    }

  }

  @ViewChild('formIo') formIo!: ElementRef<any>;
}
