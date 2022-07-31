import { ManageServerComponent } from './manage-server-component/manage-server.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageServerRoutingModule } from './manage-server-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ManageServerComponent
  ],
  imports: [
    CommonModule,
    ManageServerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class ManageServerModule { }
