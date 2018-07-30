import { Component, OnInit} from "@angular/core";
import { IEmployeeList} from "./employeeList";

import { ActivatedRoute } from "@angular/router";
import { EmployeeListService } from "./employeeListService";

@Component({
    selector: 'employee-detail',
    template: `
    <h1>hey</h1>
    <!--table *ngFor = "let a of employee.code">
    <thead>Employee Details</thead>
    <tbody>
    <tr><td>a.code</td></tr>
    </tbody>
    </table-->`,
    providers: [EmployeeListService]

})
export class employeeDetailsComponent implements OnInit{
    employee:IEmployeeList;
    constructor(private _employeeservice: EmployeeListService, private _activatedroute: ActivatedRoute )
    {

    }
    ngOnInit(){
        let empCode: string = this._activatedroute.snapshot.params["code"]
        this._employeeservice.getEmployeeData(empCode).
        subscribe((empData)=> console.log(empData));
    }
}