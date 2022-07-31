import { ManageDomainComponent } from './manage-domain-component/manage-domain.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageDomainRoutingModule } from './manage-domain-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ManageDomainComponent
  ],
  imports: [
    CommonModule,
    ManageDomainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class ManageDomainModule { }
