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
import { AngularMaterialModule } from "./angular-material.module";
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
    // EmployeeRouteComponent
  ],
  imports: [BrowserModule, RouterModule, AngularMaterialModule],
  exports: [SparrowOrgComponent, OrgApiModule],
})
export class SparrowOrgModule {}
