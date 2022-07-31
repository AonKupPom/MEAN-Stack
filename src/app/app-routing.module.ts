import { FullLayoutComponent } from './components/full-layout/full-layout-component/full-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(x => x.LoginModule) },
  {
    path: '', component: FullLayoutComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'welcome' },
      { path: 'welcome', loadChildren: () => import('./components/pages/welcome/welcome.module').then(x => x.WelcomeModule)},
      { path: 'about-us', loadChildren: () => import('./components/pages/about-us/about-us.module').then(x => x.AboutUsModule) },
      { path: 'contact-us', loadChildren: () => import('./components/pages/contact-us/contact-us.module').then(x => x.ContactUsModule) },
      { path: 'cloud-service', loadChildren: () => import('./components/pages/cloud/cloud.module').then(x => x.CloudModule) },
      { path: 'domain-service', loadChildren: () => import('./components/pages/domain/domain.module').then(x => x.DomainModule) },
      { path: 'website-design-service', loadChildren: () => import('./components/pages/website-design/website-design.module').then(x => x.WebsiteDesignModule) },
      { path: 'server-service', loadChildren: () => import('./components/pages/server-service/server-service.module').then(x => x.ServerServiceModule)},
      { path: 'manage-profile', loadChildren: () => import('./components/pages/manage-profile/manage-profile.module').then(x => x.ManageProfileModule) },
      { path: 'computer-list', loadChildren: () => import('./components/pages/copmuter/copmuter.module').then(x => x.CopmuterModule), canActivate: [AuthGuardLogin], data: { role: 'admin' } },
      { path: 'manage-user', loadChildren: () => import('./components/pages/manage-user/manage-user.module').then(x => x.ManageUserModule), canActivate: [AuthGuardLogin], data: { role: 'admin' } },
      { path: 'manage-domain', loadChildren: () => import('./components/pages/manage-domain/manage-domain.module').then(x => x.ManageDomainModule), canActivate: [AuthGuardLogin], data: { role: 'admin' } },
      { path: 'manage-server-service', loadChildren: () => import('./components/pages/manage-server/manage-server.module').then(x => x.ManageServerModule), canActivate: [AuthGuardLogin], data: { role: 'admin' } },
      { path: 'manage-cloud', loadChildren: () => import('./components/pages/manage-cloud/manage-cloud.module').then(x => x.ManageCloudModule), canActivate: [AuthGuardLogin], data: { role: 'admin' } },
      { path: 'manage-web-design', loadChildren: () => import('./components/pages/manag-web-design/manag-web-design.module').then(x => x.ManagWebDesignModule), canActivate: [AuthGuardLogin], data: { role: 'admin' } }
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
