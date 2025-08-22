import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonApiComponent } from './common-api.component';
import { PgelPermissionDirective } from './directives/pgel-permission.directive';
import { CommonModule } from '@angular/common';
import { BASE_PATH } from './common-api.service';



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
