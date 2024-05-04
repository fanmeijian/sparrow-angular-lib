import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AuthorizationService } from './api/authorization.service';
import { BatchService } from './api/batch.service';
import { ConditionService } from './api/condition.service';
import { DecisionDefinitionService } from './api/decisionDefinition.service';
import { DecisionRequirementsDefinitionService } from './api/decisionRequirementsDefinition.service';
import { DeploymentService } from './api/deployment.service';
import { EngineService } from './api/engine.service';
import { EventSubscriptionService } from './api/eventSubscription.service';
import { ExecutionService } from './api/execution.service';
import { ExternalTaskService } from './api/externalTask.service';
import { FilterService } from './api/filter.service';
import { GroupService } from './api/group.service';
import { HistoricActivityInstanceService } from './api/historicActivityInstance.service';
import { HistoricBatchService } from './api/historicBatch.service';
import { HistoricDecisionDefinitionService } from './api/historicDecisionDefinition.service';
import { HistoricDecisionInstanceService } from './api/historicDecisionInstance.service';
import { HistoricDecisionRequirementsDefinitionService } from './api/historicDecisionRequirementsDefinition.service';
import { HistoricDetailService } from './api/historicDetail.service';
import { HistoricExternalTaskLogService } from './api/historicExternalTaskLog.service';
import { HistoricIdentityLinkLogService } from './api/historicIdentityLinkLog.service';
import { HistoricIncidentService } from './api/historicIncident.service';
import { HistoricJobLogService } from './api/historicJobLog.service';
import { HistoricProcessDefinitionService } from './api/historicProcessDefinition.service';
import { HistoricProcessInstanceService } from './api/historicProcessInstance.service';
import { HistoricTaskInstanceService } from './api/historicTaskInstance.service';
import { HistoricUserOperationLogService } from './api/historicUserOperationLog.service';
import { HistoricVariableInstanceService } from './api/historicVariableInstance.service';
import { HistoryCleanupService } from './api/historyCleanup.service';
import { IdentityService } from './api/identity.service';
import { IncidentService } from './api/incident.service';
import { JobService } from './api/job.service';
import { JobDefinitionService } from './api/jobDefinition.service';
import { MessageService } from './api/message.service';
import { MetricsService } from './api/metrics.service';
import { MigrationService } from './api/migration.service';
import { ModificationService } from './api/modification.service';
import { ProcessDefinitionService } from './api/processDefinition.service';
import { ProcessInstanceService } from './api/processInstance.service';
import { SchemaLogService } from './api/schemaLog.service';
import { SignalService } from './api/signal.service';
import { TaskService } from './api/task.service';
import { TaskAttachmentService } from './api/taskAttachment.service';
import { TaskCommentService } from './api/taskComment.service';
import { TaskIdentityLinkService } from './api/taskIdentityLink.service';
import { TaskLocalVariableService } from './api/taskLocalVariable.service';
import { TaskVariableService } from './api/taskVariable.service';
import { TelemetryService } from './api/telemetry.service';
import { TenantService } from './api/tenant.service';
import { UserService } from './api/user.service';
import { VariableInstanceService } from './api/variableInstance.service';
import { VersionService } from './api/version.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AuthorizationService,
    BatchService,
    ConditionService,
    DecisionDefinitionService,
    DecisionRequirementsDefinitionService,
    DeploymentService,
    EngineService,
    EventSubscriptionService,
    ExecutionService,
    ExternalTaskService,
    FilterService,
    GroupService,
    HistoricActivityInstanceService,
    HistoricBatchService,
    HistoricDecisionDefinitionService,
    HistoricDecisionInstanceService,
    HistoricDecisionRequirementsDefinitionService,
    HistoricDetailService,
    HistoricExternalTaskLogService,
    HistoricIdentityLinkLogService,
    HistoricIncidentService,
    HistoricJobLogService,
    HistoricProcessDefinitionService,
    HistoricProcessInstanceService,
    HistoricTaskInstanceService,
    HistoricUserOperationLogService,
    HistoricVariableInstanceService,
    HistoryCleanupService,
    IdentityService,
    IncidentService,
    JobService,
    JobDefinitionService,
    MessageService,
    MetricsService,
    MigrationService,
    ModificationService,
    ProcessDefinitionService,
    ProcessInstanceService,
    SchemaLogService,
    SignalService,
    TaskService,
    TaskAttachmentService,
    TaskCommentService,
    TaskIdentityLinkService,
    TaskLocalVariableService,
    TaskVariableService,
    TelemetryService,
    TenantService,
    UserService,
    VariableInstanceService,
    VersionService ]
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
