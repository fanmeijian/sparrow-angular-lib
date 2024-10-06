import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormService } from "@sparrowmini/org-api";

@Component({
  selector: "lib-form-data-view",
  templateUrl: "./form-data-view.component.html",
  styleUrls: ["./form-data-view.component.css"],
})
export class FormDataViewComponent implements OnInit {
  form: any;
  formData: any;
  formName: string = "";
  formOptions = {
    // fileService: this.formioFileService,
  }

  constructor(
    private formService: FormService,
    private activatedRoute: ActivatedRoute,
    // private formioFileService: CosFileService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.formService.formData(params.id).subscribe((res) => {
          this.form = JSON.parse(res.form?.form!);
          this.formData = { data: JSON.parse(res.data!) };
          this.formName = res.form?.name!;
        });
      }
    });
  }
}
