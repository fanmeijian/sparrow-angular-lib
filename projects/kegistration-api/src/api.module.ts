import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AuditlogService } from './api/auditlog.service';
import { CompetitionService } from './api/competition.service';
import { CrewSubstitutionService } from './api/crewSubstitution.service';
import { DamageReportService } from './api/damageReport.service';
import { DataOrganizationService } from './api/dataOrganization.service';
import { DataPermissionService } from './api/dataPermission.service';
import { DatamodelService } from './api/datamodel.service';
import { DictService } from './api/dict.service';
import { EmployeeService } from './api/employee.service';
import { EquipmentSubstitutionService } from './api/equipmentSubstitution.service';
import { FileService } from './api/file.service';
import { GroupService } from './api/group.service';
import { HearingRequestService } from './api/hearingRequest.service';
import { JoblevelService } from './api/joblevel.service';
import { KegistrationService } from './api/kegistration.service';
import { MemberService } from './api/member.service';
import { MenuService } from './api/menu.service';
import { ObjectStorageService } from './api/objectStorage.service';
import { OrganizationService } from './api/organization.service';
import { PemgroupService } from './api/pemgroup.service';
import { PenaltyService } from './api/penalty.service';
import { QuestionService } from './api/question.service';
import { RestApiServiceService } from './api/restApiService.service';
import { RetirementReportService } from './api/retirementReport.service';
import { RoleService } from './api/role.service';
import { RuleService } from './api/rule.service';
import { ScopeService } from './api/scope.service';
import { ScoringInquiryService } from './api/scoringInquiry.service';
import { SysconfigService } from './api/sysconfig.service';
import { SysroleService } from './api/sysrole.service';
import { UserService } from './api/user.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AuditlogService,
    CompetitionService,
    CrewSubstitutionService,
    DamageReportService,
    DataOrganizationService,
    DataPermissionService,
    DatamodelService,
    DictService,
    EmployeeService,
    EquipmentSubstitutionService,
    FileService,
    GroupService,
    HearingRequestService,
    JoblevelService,
    KegistrationService,
    MemberService,
    MenuService,
    ObjectStorageService,
    OrganizationService,
    PemgroupService,
    PenaltyService,
    QuestionService,
    RestApiServiceService,
    RetirementReportService,
    RoleService,
    RuleService,
    ScopeService,
    ScoringInquiryService,
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
