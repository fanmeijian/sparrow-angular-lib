import { NgModule } from "@angular/core";
import { SparrowOrgComponent } from "./sparrow-org.component";
import { OrgsComponent } from "./org/orgs/orgs.component";
import { ApiModule as OrgApiModule } from "@sparrowmini/org-api";
import { RolesComponent } from "./role/roles/roles.component";
import { LevelsComponent } from "./level/levels/levels.component";
import { OrggroupsComponent } from "./orggroup/orggroups/orggroups.component";
import { EmployeesComponent } from "./employee/employees/employees.component";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { OrgSelectionComponent } from "./org/org-selection/org-selection.component";
import { OrgCreateComponent } from "./org/org-create/org-create.component";
import { RoleCreateComponent } from "./role/role-create/role-create.component";
import { RoleSelectionComponent } from "./role/role-selection/role-selection.component";
import { LevelCreateComponent } from "./level/level-create/level-create.component";
import { OrggroupCreateComponent } from "./orggroup/orggroup-create/orggroup-create.component";
import { EmployeeCreateComponent } from "./employee/employee-create/employee-create.component";
import { EmployeeRoleAddComponent } from "./employee/employee-role-add/employee-role-add.component";
import { EmployeeLevelAddComponent } from "./employee/employee-level-add/employee-level-add.component";
import { LevelSelectionComponent } from "./level/level-selection/level-selection.component";
import { OrggroupMemberAddComponent } from "./orggroup/orggroup-member-add/orggroup-member-add.component";
import { EmployeeSelectionComponent } from "./employee/employee-selection/employee-selection.component";
import { EmployeeUserAddComponent } from './employee/employee-user-add/employee-user-add.component';
import { EmployeeRoleSelectComponent } from './employee/employee-role-select/employee-role-select.component';

import { MenuComponent } from './components/menu/menu.component';
import { MenuTreeComponent } from './menu/menu-tree/menu-tree.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MenuCreateComponent } from './menu/menu-create/menu-create.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MenuTreeSelectionComponent } from './menu/menu-tree-selection/menu-tree-selection.component';
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SysroleSelectionComponent } from './sysrole/sysrole-selection/sysrole-selection.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MenuPermissionComponent } from './menu/menu-permission/menu-permission.component';
import { SysrolesComponent } from './sysrole/sysroles/sysroles.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { SysroleCreateComponent } from './sysrole/sysrole-create/sysrole-create.component';
import { SysrolePermissionComponent } from './sysrole/sysrole-permission/sysrole-permission.component';
import { ScopesComponent } from './scope/scopes/scopes.component';
import { ScopeCreateComponent } from './scope/scope-create/scope-create.component';
import { ScopePermissionComponent } from './scope/scope-permission/scope-permission.component';
import { MatDividerModule } from '@angular/material/divider';
import { SprmodesComponent } from './sprmodel/sprmodes/sprmodes.component';
import { PemgroupsComponent } from './pemgroup/pemgroups/pemgroups.component';
import { PemgroupCreateComponent } from './pemgroup/pemgroup-create/pemgroup-create.component';
import { PemgroupMemberComponent } from './pemgroup/pemgroup-member/pemgroup-member.component';
import { SprmodelPermisssionComponent } from './sprmodel/sprmodel-permisssion/sprmodel-permisssion.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { AttributePermisssionComponent } from './sprmodel/attribute-permisssion/attribute-permisssion.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ModelPermissionRulesComponent } from './sprmodel/model-permission-rules/model-permission-rules.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DataPermissionsComponent } from './data-permission/data-permissions/data-permissions.component';
import { DataPermissionGrantComponent } from './data-permission/data-permission-grant/data-permission-grant.component';
import { SearchFilterComponent } from './common/search-filter/search-filter.component';
import { LoginLogComponent } from './log/login-log/login-log.component';
import { RequestLogComponent } from './log/request-log/request-log.component';
import { DeleteLogComponent } from './log/delete-log/delete-log.component';
import { EditLogComponent } from './log/edit-log/edit-log.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserSelectionComponent } from './user/user-selection/user-selection.component';
import { AngularMaterialModule } from "./angular-material.module";
import { EntityLogComponent } from './common/entity-log/entity-log.component';
import { BaseOpLogColumnComponent, baseOpLogColumns } from './common/base-op-log-column/base-op-log-column.component';
import { FilesComponent } from './file/files/files.component';
import { FileUploadComponent } from './file/file-upload/file-upload.component';
import { DataPermissionViewComponent } from './data-permission/data-permission-view/data-permission-view.component';
import { ModelPermissionViewComponent } from './sprmodel/model-permission-view/model-permission-view.component';
import { UserPasswordResetComponent } from './user/user-password-reset/user-password-reset.component';
import { PageElementsComponent } from './page-element/page-elements/page-elements.component';
import { PageElementCreateComponent } from './page-element/page-element-create/page-element-create.component';
import { PageElementPermissionComponent } from './page-element/page-element-permission/page-element-permission.component';
import { PgelPermissionDirective } from './directives/pgel-permission.directive';
import { DictsComponent } from './dict/dicts/dicts.component';
import { DictCatalogCreateComponent } from './dict/dict-catalog-create/dict-catalog-create.component';
import { DictCreateComponent } from './dict/dict-create/dict-create.component';
import { DictSelectionComponent } from './dict/dict-selection/dict-selection.component';
import { DictCatalogSelectionComponent } from './dict/dict-catalog-selection/dict-catalog-selection.component';
import { ReportTemplateCreateComponent } from './report/report-template-create/report-template-create.component';
import { ReportTemplatesComponent } from './report/report-templates/report-templates.component';
import { ViewReportComponent } from './report/view-report/view-report.component';
import { DataPermissionNewComponent } from './data-permission/data-permission-new/data-permission-new.component';
import { OrgRoutingModule } from "./org-routing.module";

// import { EmployeeRouteComponent } from './employee/employee-route/employee-route.component';

@NgModule({
  declarations: [
    SparrowOrgComponent,
    OrgsComponent,
    RolesComponent,
    LevelsComponent,
    OrggroupsComponent,
    EmployeesComponent,
    OrgSelectionComponent,
    OrgCreateComponent,
    RoleCreateComponent,
    RoleSelectionComponent,
    LevelCreateComponent,
    OrggroupCreateComponent,
    EmployeeCreateComponent,
    EmployeeRoleAddComponent,
    EmployeeLevelAddComponent,
    LevelSelectionComponent,
    OrggroupMemberAddComponent,
    EmployeeSelectionComponent,
    EmployeeUserAddComponent,
    EmployeeRoleSelectComponent,
    MenuComponent,
    MenuTreeComponent,
    MenuCreateComponent,
    MenuTreeSelectionComponent,
    SysroleSelectionComponent,
    MenuPermissionComponent,
    SysrolesComponent,
    SysroleCreateComponent,
    SysrolePermissionComponent,
    ScopesComponent,
    ScopeCreateComponent,
    ScopePermissionComponent,
    SprmodesComponent,
    PemgroupsComponent,
    PemgroupCreateComponent,
    PemgroupMemberComponent,
    SprmodelPermisssionComponent,
    AttributePermisssionComponent,
    ModelPermissionRulesComponent,
    DataPermissionsComponent,
    DataPermissionGrantComponent,
    SearchFilterComponent,
    LoginLogComponent,
    RequestLogComponent,
    DeleteLogComponent,
    EditLogComponent,
    UserListComponent,
    UserCreateComponent,
    UserSelectionComponent,
    EntityLogComponent,
    BaseOpLogColumnComponent,
    FilesComponent,
    FileUploadComponent,
    DataPermissionViewComponent,
    ModelPermissionViewComponent,
    UserPasswordResetComponent,
    PageElementsComponent,
    PageElementCreateComponent,
    PageElementPermissionComponent,
    PgelPermissionDirective,
    DictsComponent,
    DictCatalogCreateComponent,
    DictCreateComponent,
    DictSelectionComponent,
    DictCatalogSelectionComponent,
    ReportTemplateCreateComponent,
    ReportTemplatesComponent,
    ViewReportComponent,
    DataPermissionNewComponent,
  ],
  imports: [BrowserModule, RouterModule, AngularMaterialModule, OrgApiModule, OrgRoutingModule],
  exports: [SparrowOrgComponent, OrgApiModule, EmployeeRoleSelectComponent,
    MenuComponent,
    MenuTreeComponent,
    SysrolesComponent,
    RequestLogComponent,
    BaseOpLogColumnComponent,
    EntityLogComponent,
    SearchFilterComponent,
    UserSelectionComponent,
    SysroleSelectionComponent,
    DictSelectionComponent,],
})
export class SparrowOrgModule { }
