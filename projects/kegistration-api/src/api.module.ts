import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { CompetitionService } from './api/competition.service';
import { DictService } from './api/dict.service';
import { KegistrationService } from './api/kegistration.service';
import { MemberService } from './api/member.service';
import { ObjectStorageService } from './api/objectStorage.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    CompetitionService,
    DictService,
    KegistrationService,
    MemberService,
    ObjectStorageService ]
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