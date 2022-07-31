import { ManagWebDesignComponent } from './manage-web-design-component/manag-web-design.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagWebDesignRoutingModule } from './manag-web-design-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ManagWebDesignComponent
  ],
  imports: [
    CommonModule,
    ManagWebDesignRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class ManagWebDesignModule { }
