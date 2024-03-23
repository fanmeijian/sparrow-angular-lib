import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { JoblevelService, RoleService } from "@sparrowmini/org-api";
import { switchMap } from "rxjs";
import { OrgCreateComponent } from "../../org/org-create/org-create.component";
import { truncateSync } from "fs";

@Component({
  selector: "lib-level-create",
  templateUrl: "./level-create.component.html",
  styleUrls: ["./level-create.component.css"],
})
export class LevelCreateComponent implements OnInit {
  parentId: any[] = [];
  submit() {
    // console.log(this.formGroup.value)
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) {
      if (this.parentId.findIndex((f) => f.id === "root") >= 0) {
        this.formGroup.patchValue({ isRoot: true });
      }
      if (this.formGroup.value.id) {
        this.levelService
          .updateLevel(this.formGroup.value, this.formGroup.value.id)
          .pipe(
            switchMap((m) =>
              this.levelService.addLevelParentOrg(
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
        this.levelService
          .newLevel(this.formGroup.value)
          .pipe(
            switchMap((m) =>
              this.levelService.addLevelParentOrg(
                this.parentId.map((a) => a.id),
                m.id!
              )
            )
          )
          .subscribe(() => {
            this.dialogRef.close(true);
            this.snack.open("保存成功！", "关闭");
          });
      }
    }
  }
  formGroup: FormGroup = this.formBuilder.group({
    name: [null, Validators.required],
    code: [null, Validators.required],
    isRoot: [false],
    id: [null],
  });

  constructor(
    private formBuilder: FormBuilder,
    private levelService: JoblevelService,
    private dialogRef: MatDialogRef<OrgCreateComponent>,
    private snack: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.formGroup.patchValue(this.data);
      this.parentId.push(...this.data.organizations);
    }
  }

  onSelected($event: any) {
    // console.log($event);
    // this.formGroup.patchValue({ parentId: $event });
  }
}
