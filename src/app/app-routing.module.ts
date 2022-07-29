import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './components/full-layout/full-layout.component';
import { LoginComponent } from './components/login/login/login.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { BookListComponent } from './components/pages/book-list/book-list.component';
import { CloudComponent } from './components/pages/cloud/cloud.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { CopmuterComponent } from './components/pages/copmuter/copmuter.component';
import { DomainComponent } from './components/pages/domain/domain.component';
import { ManagWebDesignComponent } from './components/pages/manag-web-design/manag-web-design.component';
import { ManageCloudComponent } from './components/pages/manage-cloud/manage-cloud.component';
import { ManageDomainComponent } from './components/pages/manage-domain/manage-domain.component';
import { ManageProfileComponent } from './components/pages/manage-profile/manage-profile.component';
import { ManageServerComponent } from './components/pages/manage-server/manage-server.component';
import { ManageUserComponent } from './components/pages/manage-user/manage-user.component';
import { ProgrammingListComponent } from './components/pages/programming-list/programming-list.component';
import { ServerServiceComponent } from './components/pages/server-service/server-service.component';
import { WebsiteDesignComponent } from './components/pages/website-design/website-design.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: FullLayoutComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'welcome' },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'cloud-service', component: CloudComponent },
      { path: 'domain-service', component: DomainComponent },
      { path: 'website-design-service', component: WebsiteDesignComponent },
      { path: 'server-service', component: ServerServiceComponent },
      { path: 'manage-profile', component: ManageProfileComponent },
      { path: 'book-list', component: BookListComponent, canActivate: [AuthGuardLogin], data: { role: 'admin' } },
      { path: 'computer-list', component: CopmuterComponent, canActivate: [AuthGuardLogin], data: { role: 'admin' } },
      { path: 'programming-list', component: ProgrammingListComponent, canActivate: [AuthGuardLogin], data: { role: 'admin' } },
      { path: 'manage-user', component: ManageUserComponent, canActivate: [AuthGuardLogin], data: { role: 'admin' } },
      { path: 'manage-domain', component: ManageDomainComponent, canActivate: [AuthGuardLogin], data: { role: 'admin' } },
      { path: 'manage-server-service', component: ManageServerComponent, canActivate: [AuthGuardLogin], data: { role: 'admin' } },
      { path: 'manage-cloud', component: ManageCloudComponent, canActivate: [AuthGuardLogin], data: { role: 'admin' } },
      { path: 'manage-web-design', component: ManagWebDesignComponent, canActivate: [AuthGuardLogin], data: { role: 'admin' } }
    ]
  },
  { path: '**', redirectTo: '/welcome' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService, AuthGuardLogin]
})
export class AppRoutingModule { }
