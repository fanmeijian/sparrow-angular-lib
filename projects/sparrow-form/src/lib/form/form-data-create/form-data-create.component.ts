import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsService } from "@sparrowmini/form-api";

@Component({
  selector: 'lib-form-data-create',
  templateUrl: './form-data-create.component.html',
  styleUrls: ['./form-data-create.component.css']
})
export class FormDataCreateComponent implements OnInit {
  form: any;
  formId: string='';

  constructor(
    private activatedRoute: ActivatedRoute,
    private formService: FormsService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params:any)=>{
      if(params.id){
        this.formId = params.id
        this.formService.formData(this.formId).subscribe(res=>{
          this.form = JSON.parse(res.form?.form!)
        })
      }
    })
  }

  onSubmit(e: any){
    console.log(e.data)
    this.formService.saveFormData(this.formId,e.data).subscribe(

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
