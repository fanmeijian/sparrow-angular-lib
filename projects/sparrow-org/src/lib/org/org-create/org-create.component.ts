import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { OrganizationService } from "@sparrowmini/org-api";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "lib-org-create",
  templateUrl: "./org-create.component.html",
  styleUrls: ["./org-create.component.css"],
})
export class OrgCreateComponent implements OnInit {
  parentId: any[] = [];
  submit() {
    // console.log(this.formGroup.value)
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) {
      if (this.parentId.findIndex((f) => f.id === "root") >= 0) {
        this.formGroup.patchValue({ isRoot: true });
      }
      if (this.formGroup.value.id) {
        this.menuService
          .updateOrg(this.formGroup.value, this.formGroup.value.id)
          .pipe(
            switchMap((m) =>
              this.menuService.addOrgParent(
                this.parentId.map((a) => a.id),
                m.id!
              )
            )
          )
          .subscribe(() => {
            this.dialogRef.close();
            this.snack.open("保存成功！", "关闭");
          });
      } else {
        this.menuService
          .newOrg(this.formGroup.value)
          .pipe(
            switchMap((m) =>
              this.menuService.addOrgParent(
                this.parentId.map((a) => a.id),
                m.id!
              )
            )
          )
          .subscribe(() => {
            this.dialogRef.close();
            this.snack.open("保存成功！", "关闭");
          });
      }
    }
  }
  formGroup: FormGroup = this.formBuilder.group({
    name: [null, Validators.required],
    code: [null, Validators.required],
    type: [null, Validators.required],
    isRoot: [false],
    id: [null],
  });

  constructor(
    private formBuilder: FormBuilder,
    private menuService: OrganizationService,
    private dialogRef: MatDialogRef<OrgCreateComponent>,
    private snack: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.data) {
      console.log(this.data);
      this.formGroup.patchValue(this.data.me);
      this.parentId.push(...this.data.parents);
    }
  }

  onSelected($event: any) {
    // console.log($event);
    // this.formGroup.patchValue({ parentId: $event });
  }
}
