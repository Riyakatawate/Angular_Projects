import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
                <h1>{{pageHeader}}</h1>
                <ul>
                  <li><a routerLink="home">Home</a></li>
                  <li><a routerLink="employees">EmployeesTable</a></li>

                </ul>
                <router-outlet></router-outlet>
            </div>`
            ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageHeader:string = 'Dashboard';
}
