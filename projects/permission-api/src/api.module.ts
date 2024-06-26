import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AuditlogService } from './api/auditlog.service';
import { DataPermissionService } from './api/dataPermission.service';
import { DatamodelService } from './api/datamodel.service';
import { FileService } from './api/file.service';
import { MenuService } from './api/menu.service';
import { PemgroupService } from './api/pemgroup.service';
import { RuleService } from './api/rule.service';
import { ScopeService } from './api/scope.service';
import { SysroleService } from './api/sysrole.service';
import { UserService } from './api/user.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AuditlogService,
    DataPermissionService,
    DatamodelService,
    FileService,
    MenuService,
    PemgroupService,
    RuleService,
    ScopeService,
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
