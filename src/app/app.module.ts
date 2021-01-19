import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TwoWayDatabindingComponent } from './two-way-databinding/two-way-databinding.component';
import { FormsModule } from '@angular/forms';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CompanyComponent } from './about/company/company.component';
import { CareersComponent } from './about/careers/careers.component';
import { ContactComponent } from './about/contact/contact.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TwoWayDatabindingComponent,
    StructuralDirectivesComponent,
    HeaderComponent,
    LoginComponent,
    AboutComponent,
    FooterComponent,
    PageNotFoundComponent,
    CompanyComponent,
    CareersComponent,
    ContactComponent,
    BikesComponent,
    BikeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      {
        path: 'about',
        component: AboutComponent,
        children: [
          {
            path: 'company', component: CompanyComponent
          },
          {
            path: 'contact', component: ContactComponent
          },
          {
            path: 'career', component: CareersComponent
          }]
      },
      {
        path: 'bikes', component: BikesComponent
      },
      { path: 'students', component: StructuralDirectivesComponent },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
