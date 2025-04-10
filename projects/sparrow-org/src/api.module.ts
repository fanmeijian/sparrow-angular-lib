import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AuditlogService } from './api/auditlog.service';
import { CmsService } from './api/cms.service';
import { CommonTreeService } from './api/commonTree.service';
import { CosService } from './api/cos.service';
import { DataOrganizationService } from './api/dataOrganization.service';
import { DataPermissionService } from './api/dataPermission.service';
import { DatamodelService } from './api/datamodel.service';
import { DictService } from './api/dict.service';
import { EmployeeService } from './api/employee.service';
import { FileService } from './api/file.service';
import { FormService } from './api/form.service';
import { ForumService } from './api/forum.service';
import { GroupService } from './api/group.service';
import { JoblevelService } from './api/joblevel.service';
import { MenuService } from './api/menu.service';
import { OrganizationService } from './api/organization.service';
import { PageElementService } from './api/pageElement.service';
import { PemgroupService } from './api/pemgroup.service';
import { ReportService } from './api/report.service';
import { RestApiServiceService } from './api/restApiService.service';
import { RoleService } from './api/role.service';
import { RuleService } from './api/rule.service';
import { ScheduleService } from './api/schedule.service';
import { ScopeService } from './api/scope.service';
import { SolrSearchService } from './api/solrSearch.service';
import { SysconfigService } from './api/sysconfig.service';
import { SysroleService } from './api/sysrole.service';
import { UserService } from './api/user.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AuditlogService,
    CmsService,
    CommonTreeService,
    CosService,
    DataOrganizationService,
    DataPermissionService,
    DatamodelService,
    DictService,
    EmployeeService,
    FileService,
    FormService,
    ForumService,
    GroupService,
    JoblevelService,
    MenuService,
    OrganizationService,
    PageElementService,
    PemgroupService,
    ReportService,
    RestApiServiceService,
    RoleService,
    RuleService,
    ScheduleService,
    ScopeService,
    SolrSearchService,
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
