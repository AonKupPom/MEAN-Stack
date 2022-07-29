import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { FullLayoutComponent } from './components/full-layout/full-layout.component';
import { LoginComponent } from './components/login/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
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
import { ThaiDatePipe } from './pipe/thai-date-pipe.service';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    FullLayoutComponent,
    ProgrammingListComponent,
    CopmuterComponent,
    WelcomeComponent,
    CloudComponent,
    DomainComponent,
    WebsiteDesignComponent,
    ServerServiceComponent,
    AboutUsComponent,
    ContactUsComponent,
    ManageUserComponent,
    ManageProfileComponent,
    ThaiDatePipe,
    ManageDomainComponent,
    ManageServerComponent,
    ManageCloudComponent,
    ManagWebDesignComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
