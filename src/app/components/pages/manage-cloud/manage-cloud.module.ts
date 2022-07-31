import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageCloudRoutingModule } from './manage-cloud-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManageCloudComponent } from './manage-cloud-component/manage-cloud.component';


@NgModule({
  declarations: [
    ManageCloudComponent
  ],
  imports: [
    CommonModule,
    ManageCloudRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class ManageCloudModule { }
