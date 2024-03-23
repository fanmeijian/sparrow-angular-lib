export * from './app.service';
import { AppService } from './app.service';
export * from './workspace.service';
import { WorkspaceService } from './workspace.service';
export const APIS = [AppService, WorkspaceService];
