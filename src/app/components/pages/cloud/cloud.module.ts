import { CloudComponent } from './cloud-component/cloud.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloudRoutingModule } from './cloud-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    CloudComponent
  ],
  imports: [
    CommonModule,
    CloudRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class CloudModule { }
