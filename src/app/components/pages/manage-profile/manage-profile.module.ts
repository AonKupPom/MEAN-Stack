import { ThaiDatePipe } from './../../../pipe/thai-date-pipe.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageProfileRoutingModule } from './manage-profile-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManageProfileComponent } from './manage-profile-component/manage-profile.component';


@NgModule({
  declarations: [
    ManageProfileComponent,
    ThaiDatePipe
  ],
  imports: [
    CommonModule,
    ManageProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class ManageProfileModule { }
