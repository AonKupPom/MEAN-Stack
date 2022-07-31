import { ServerServiceComponent } from './server-service-component/server-service.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerServiceRoutingModule } from './server-service-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ServerServiceComponent
  ],
  imports: [
    CommonModule,
    ServerServiceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class ServerServiceModule { }
