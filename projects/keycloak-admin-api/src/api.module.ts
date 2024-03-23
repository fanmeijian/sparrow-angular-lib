import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AdminService } from './api/admin.service';
import { AttackDetectionService } from './api/attackDetection.service';
import { AuthenticationManagementService } from './api/authenticationManagement.service';
import { ClientAttributeCertificateService } from './api/clientAttributeCertificate.service';
import { ClientInitialAccessService } from './api/clientInitialAccess.service';
import { ClientRegistrationPolicyService } from './api/clientRegistrationPolicy.service';
import { ClientRoleMappingsService } from './api/clientRoleMappings.service';
import { ClientScopesService } from './api/clientScopes.service';
import { ClientsService } from './api/clients.service';
import { ComponentService } from './api/component.service';
import { GroupsService } from './api/groups.service';
import { IdentityProvidersService } from './api/identityProviders.service';
import { KeyService } from './api/key.service';
import { ProtocolMappersService } from './api/protocolMappers.service';
import { RealmsAdminService } from './api/realmsAdmin.service';
import { RoleMapperService } from './api/roleMapper.service';
import { RolesService } from './api/roles.service';
import { RolesByIDService } from './api/rolesByID.service';
import { RootService } from './api/root.service';
import { ScopeMappingsService } from './api/scopeMappings.service';
import { UsersService } from './api/users.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AdminService,
    AttackDetectionService,
    AuthenticationManagementService,
    ClientAttributeCertificateService,
    ClientInitialAccessService,
    ClientRegistrationPolicyService,
    ClientRoleMappingsService,
    ClientScopesService,
    ClientsService,
    ComponentService,
    GroupsService,
    IdentityProvidersService,
    KeyService,
    ProtocolMappersService,
    RealmsAdminService,
    RoleMapperService,
    RolesService,
    RolesByIDService,
    RootService,
    ScopeMappingsService,
    UsersService ]
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
