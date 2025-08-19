import { NgModule } from '@angular/core';
import { CommonApiComponent } from './common-api.component';
import { PgelPermissionDirective } from './directives/pgel-permission.directive';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CommonApiComponent,
    PgelPermissionDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonApiComponent,PgelPermissionDirective
  ]
})
export class CommonApiModule { }
