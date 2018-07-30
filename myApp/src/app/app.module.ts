import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router'
import { HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { EmployeeComponent} from './employee/employee.component';
import { employeeCountComponent } from './employee/empoyeeCount.component';
import { homeComponent } from './home/home.component';
import { pageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { employeeDetailsComponent } from './employee/employeeDetails.component';
import { EmployeeTitlePipe } from './employee/employeeTitle';
//import { searchEmployeePipe } from './employee/searchEmployee';




const appRoutes : Routes = [
  {path: 'home', component: homeComponent},
  {path: 'employees', component: EmployeeComponent},
  {path: 'employees/:code', component: employeeDetailsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}, //user navigate to base url
  {path: '**', component: pageNotFoundComponent} // that does not exist at all
];

@NgModule({
  declarations: [
    AppComponent, EmployeeComponent, employeeCountComponent, homeComponent, 
    pageNotFoundComponent,employeeDetailsComponent, EmployeeTitlePipe
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes),HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
