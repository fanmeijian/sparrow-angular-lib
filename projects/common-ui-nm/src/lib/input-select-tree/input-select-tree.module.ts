import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { EntityListComponent } from './entity-list.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonPipeModule } from '@sparrowmini/common';
import { DialogModule } from '../dialog/dialog.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [EntityListComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    CommonPipeModule,
    DialogModule,
    MatCheckboxModule
  ],
  exports: [EntityListComponent]
})
export class EntiyListModule { }
