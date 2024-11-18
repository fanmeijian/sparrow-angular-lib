import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AuditlogService } from './api/auditlog.service';
import { CommentService } from './api/comment.service';
import { CosService } from './api/cos.service';
import { DataOrganizationService } from './api/dataOrganization.service';
import { DataPermissionService } from './api/dataPermission.service';
import { DatamodelService } from './api/datamodel.service';
import { DictService } from './api/dict.service';
import { EmployeeService } from './api/employee.service';
import { FeedbackService } from './api/feedback.service';
import { FileService } from './api/file.service';
import { FormService } from './api/form.service';
import { GroupService } from './api/group.service';
import { JoblevelService } from './api/joblevel.service';
import { MenuService } from './api/menu.service';
import { NoticeService } from './api/notice.service';
import { OrganizationService } from './api/organization.service';
import { PageElementService } from './api/pageElement.service';
import { PemgroupService } from './api/pemgroup.service';
import { ReportService } from './api/report.service';
import { RestApiServiceService } from './api/restApiService.service';
import { RoleService } from './api/role.service';
import { RuleService } from './api/rule.service';
import { ScheduleService } from './api/schedule.service';
import { ScopeService } from './api/scope.service';
import { SysconfigService } from './api/sysconfig.service';
import { SysroleService } from './api/sysrole.service';
import { UserService } from './api/user.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AuditlogService,
    CommentService,
    CosService,
    DataOrganizationService,
    DataPermissionService,
    DatamodelService,
    DictService,
    EmployeeService,
    FeedbackService,
    FileService,
    FormService,
    GroupService,
    JoblevelService,
    MenuService,
    NoticeService,
    OrganizationService,
    PageElementService,
    PemgroupService,
    ReportService,
    RestApiServiceService,
    RoleService,
    RuleService,
    ScheduleService,
    ScopeService,
    SysconfigService,
    SysroleService,
    UserService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
