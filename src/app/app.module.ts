import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './Common Material/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { AboutComponent } from './Pages/about/about.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import{ReactiveFormsModule} from '@angular/forms';
import { flightsearchComponent } from './Pages/flightsearch/flightsearch.component';
import {MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material/radio';
import { AddflightComponent } from './Pages/admin/addflight/addflight.component';
import {MatSelectModule} from '@angular/material/select';
import { ScheduleflightComponent } from './Pages/admin/scheduleflight/scheduleflight.component';
import { AdminsidebarComponent } from './Pages/admin/adminsidebar/adminsidebar.component';
import {MatListModule} from '@angular/material/list';
import { ViewscheduleflightComponent } from './Pages/admin/viewscheduleflight/viewscheduleflight.component';
import { ViewflightComponent } from './Pages/admin/viewflight/viewflight.component';
import { AllflightsComponent } from './Pages/admin/allflights/allflights.component';
import { AllscheduleflightsComponent } from './Pages/admin/allscheduleflights/allscheduleflights.component';
import { UpdateflightComponent } from './Pages/admin/updateflight/updateflight.component';
import { UpdatescheduleflightComponent } from './Pages/admin/updatescheduleflight/updatescheduleflight.component';
import { FindingComponent } from './Pages/finding/finding.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    AboutComponent,
    flightsearchComponent,
    AddflightComponent,
    ScheduleflightComponent,
    AdminsidebarComponent,
    ViewscheduleflightComponent,
    ViewflightComponent,
    AllflightsComponent,
    AllscheduleflightsComponent,
    UpdateflightComponent,
    UpdatescheduleflightComponent,
    FindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSelectModule,
    MatListModule
  ],
  providers: [
    {
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'warn' },}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
