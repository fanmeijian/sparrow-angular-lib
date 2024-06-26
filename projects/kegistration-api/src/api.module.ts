import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AlbumService } from './api/album.service';
import { ClubService } from './api/club.service';
import { CompetitionService } from './api/competition.service';
import { CrewSubstitutionService } from './api/crewSubstitution.service';
import { DamageReportService } from './api/damageReport.service';
import { DictService } from './api/dict.service';
import { EquipmentSubstitutionService } from './api/equipmentSubstitution.service';
import { FocusService } from './api/focus.service';
import { HearingRequestService } from './api/hearingRequest.service';
import { KegistrationService } from './api/kegistration.service';
import { MemberService } from './api/member.service';
import { PenaltyService } from './api/penalty.service';
import { QuestionService } from './api/question.service';
import { RetirementReportService } from './api/retirementReport.service';
import { ScoringInquiryService } from './api/scoringInquiry.service';
import { ThumbupService } from './api/thumbup.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AlbumService,
    ClubService,
    CompetitionService,
    CrewSubstitutionService,
    DamageReportService,
    DictService,
    EquipmentSubstitutionService,
    FocusService,
    HearingRequestService,
    KegistrationService,
    MemberService,
    PenaltyService,
    QuestionService,
    RetirementReportService,
    ScoringInquiryService,
    ThumbupService ]
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
