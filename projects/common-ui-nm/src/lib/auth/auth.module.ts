import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatMenuModule } from '@angular/material/menu';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { SysroleSelectionComponent } from './sysrole-selection/sysrole-selection.component';
import { PermissionSelectionComponent } from './permission-selection/permission-selection.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDialogModule } from "@angular/material/dialog";
import { MatPaginatorModule } from "@angular/material/paginator";

@NgModule({
  declarations: [
    UserSelectionComponent,
    SysroleSelectionComponent,
    PermissionSelectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCheckboxModule,
    MatTreeModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    DragDropModule,
    MatMenuModule,
    MatTableModule,
    MatExpansionModule,
    MatTabsModule,
    MatDialogModule,
    MatPaginatorModule
],
  exports: [UserSelectionComponent, SysroleSelectionComponent, PermissionSelectionComponent]
})
export class AuthModule { }
