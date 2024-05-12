import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from '@sparrowmini/form-api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Prism from 'prismjs';
import { FormioRefreshValue } from '@formio/angular';

@Component({
  selector: 'lib-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css'],
})
export class FormCreateComponent implements OnInit {
  window = window;

  save() {
    this.formGroup.patchValue({ form: JSON.stringify(this.formJson) });
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) {
      if (this.formGroup.value.id) {
        this.formService
          .updateDataForm(this.formGroup.value, this.formGroup.value.id)
          .subscribe(() => window.history.back());
      } else {
        this.formService
          .createDataForm(this.formGroup.value)
          .subscribe((res) => {
            window.history.back();
          });
      }
    }
  }
  formJson: any;
  formGroup: FormGroup = this.formBuilder.group({
    name: [null, Validators.required],
    code: [null, Validators.required],
    id: [null],
    form: [{ components: [] }, Validators.required],
  });

  @ViewChild('json', { static: true }) jsonElement?: ElementRef;
  @ViewChild('code', { static: true }) codeElement?: ElementRef;
  public form: Object = { components: [] };
  public refreshForm: EventEmitter<FormioRefreshValue> = new EventEmitter();

  constructor(
    private formService: FormService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.form = { components: [] };
    this.formJson = { components: [] };
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.formService.dataForm(params.id).subscribe((res) => {
          this.formGroup.patchValue(res);
          console.log(res, this.formGroup.value);
          this.form = JSON.parse(res.form!);
          this.formJson = this.form;
        });
      }
    });
  }

  onChange(event: any) {
    this.formJson = event.form;

    this.refreshForm.emit({
      property: 'form',
      value: event.form,
    });
  }

  ngAfterViewInit() {
    Prism.highlightAll();
  }

  @ViewChild('soruceCode') soruceCodeTemplate!: TemplateRef<any>;
  viewSource() {
    console.log(this.form);
    this.dialog.open(this.soruceCodeTemplate, { width: '80%', height: '80%' });
  }

  @ViewChild('preview') previewTemplate!: TemplateRef<any>;
  preview1() {
    this.dialog.open(this.previewTemplate, { width: '80%', height: '80%' });
  }
}
