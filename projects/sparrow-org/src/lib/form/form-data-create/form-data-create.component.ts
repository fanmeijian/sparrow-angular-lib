import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormService } from '@sparrowmini/org-api';

@Component({
  selector: 'lib-form-data-create',
  templateUrl: './form-data-create.component.html',
  styleUrls: ['./form-data-create.component.css']
})
export class FormDataCreateComponent implements OnInit {
  form: any;
  formId: string='';

  formOptions = {
    // fileService: this.formioFileService,
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private formService: FormService,
    // private formioFileService: CosFileService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params:any)=>{
      if(params.id){
        this.formId = params.id
        this.formService.formData(this.formId).subscribe(res=>{
          this.form = JSON.parse(res.form?.form!)
        })
      }
      if(params.formId){
        this.formId = params.formId
        this.formService.dataForm(this.formId).subscribe(res=>{
          this.form=JSON.parse(res.form!)
        })
      }
    })
  }

  onSubmit(e: any){
    console.log(this.formId,e.data)
    this.formService.saveFormData(e.data,this.formId).subscribe(
      res=>{
        window.history.back()
      }
    )

  }

  @ViewChild('formIo') formIo!: ElementRef<any>
  submit(){
    // this.formIo.formioElement.nativeElement.submit()
    // this.formIo['formio'].submit()
    // console.log(this.formIo['formio'].submit())
    // console.log(this.formIo.formioElement.nativeElement)
    // this.formIo.formioElement.nativeElement.submit();
  }

}
