import { CopmuterComponent } from './computer-component/copmuter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CopmuterRoutingModule } from './copmuter-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    CopmuterComponent
  ],
  imports: [
    CommonModule,
    CopmuterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class CopmuterModule { }
