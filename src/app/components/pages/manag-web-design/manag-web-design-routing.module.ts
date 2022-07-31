import { ManagWebDesignComponent } from './manage-web-design-component/manag-web-design.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ManagWebDesignComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagWebDesignRoutingModule { }
