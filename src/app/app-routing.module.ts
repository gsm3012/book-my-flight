import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { flightsearchComponent } from './Pages/flightsearch/flightsearch.component';
import { AddflightComponent } from './Pages/admin/addflight/addflight.component';
import { ScheduleflightComponent } from './Pages/admin/scheduleflight/scheduleflight.component';
import { ViewscheduleflightComponent } from './Pages/admin/viewscheduleflight/viewscheduleflight.component';
import { ViewflightComponent } from './Pages/admin/viewflight/viewflight.component';
import { AllflightsComponent } from './Pages/admin/allflights/allflights.component';
import { AllscheduleflightsComponent } from './Pages/admin/allscheduleflights/allscheduleflights.component';
import { UpdateflightComponent } from './Pages/admin/updateflight/updateflight.component';
import { UpdatescheduleflightComponent } from './Pages/admin/updatescheduleflight/updatescheduleflight.component';
import { FindingComponent } from './Pages/finding/finding.component';

const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  
  {path: 'about', component:AboutComponent  , pathMatch: 'full'},

  {path:'registration', component:RegisterComponent, pathMatch:'full'},

  {path:'login', component:LoginComponent, pathMatch:'full'},

  {path:'public/flight/search', component:flightsearchComponent, pathMatch:'full'},

  {path:'admin/airline/flight/add', component:AddflightComponent, pathMatch:'full'},

  {path:'admin/airline/flight/schedule', component:ScheduleflightComponent, pathMatch:'full'},

  {path:'admin/airline/flight/view', component:ViewflightComponent, pathMatch:'full'},

  {path:'admin/airline/flight/schedule/view', component:ViewscheduleflightComponent, pathMatch:'full'},

  {path:'admin/airline/flight/viewall', component:AllflightsComponent, pathMatch:'full'},

  {path:'admin/airline/flight/schedule/viewall', component:AllscheduleflightsComponent, pathMatch:'full'},

  {path:'admin/airline/flight/update/:flightNumber', component:UpdateflightComponent, pathMatch:'full'},

  {path:'admin/airline/flight/schedule/update/:flightScheduleId', component:UpdatescheduleflightComponent, pathMatch:'full'},

  {path:'public/find', component:FindingComponent, pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
