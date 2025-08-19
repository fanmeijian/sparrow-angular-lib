import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { SortableTreeComponent } from './sortable-tree/sortable-tree.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MenuComponent } from './menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    SortableTreeComponent,
    MenuComponent,
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
  ],
  exports: [SortableTreeComponent, MenuComponent]
})
export class SprTreeModule { }
