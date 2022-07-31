import { WebsiteDesignComponent } from './website-design-component/website-design.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteDesignRoutingModule } from './website-design-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    WebsiteDesignComponent
  ],
  imports: [
    CommonModule,
    WebsiteDesignRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class WebsiteDesignModule { }
