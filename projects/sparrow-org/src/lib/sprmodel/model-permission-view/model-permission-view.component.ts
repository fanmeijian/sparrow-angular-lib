import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  DatamodelService,
  ModelPermissionResponseBody,
  ModelRule,
  SysroleModel,
  UserModel,
} from '@sparrowmini/org-api';

@Component({
  selector: 'lib-model-permission-view',
  templateUrl: './model-permission-view.component.html',
  styleUrls: ['./model-permission-view.component.css'],
})
export class ModelPermissionViewComponent implements OnInit {
  @Input() public modelId!: string;
  @Input() public attributeId?: string;

  @ViewChild('permissionDialog') permissionTemplate!: TemplateRef<any>;
  permission?: ModelPermissionResponseBody;
  constructor(
    private modelService: DatamodelService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    if (this.attributeId) {
      this.modelService.attrPermissions(this.modelId, this.attributeId).subscribe((res) => {
        this.permission = res;
      });
    } else {
      this.modelService.modelPermissions(this.modelId).subscribe((res) => {
        this.permission = res;
      });
    }

  }

  view() {
    this.dialog.open(this.permissionTemplate);
  }
  removeUser(user: UserModel) {
    this.modelService.removeModelPermissions({
      usernames: [{
        username: user.id.username,
        permission: user.id.permission,
        permissionType: user.id.permissionType
      }]
    }, user.id.modelId).subscribe((res) => {
      this.ngOnInit()
    })
  }
  remove(a: SysroleModel) {
    this.modelService.removeModelPermissions({
      sysroles: [{
        sysroleId: a.id.sysroleId,
        permission: a.id.permission,
        permissionType: a.id.permissionType
      }]
    }, a.id.modelId).subscribe((res) => {
      this.ngOnInit()
    })
  }

  removeRule(a: ModelRule) {
    this.modelService.removeModelPermissions({
      rules: [{
        ruleId: a.id.ruleId,
        permission: a.id.permission,
        permissionType: a.id.permissionType
      }]
    }, a.id.modelId).subscribe((res) => {
      this.ngOnInit()
    })
  }
}
