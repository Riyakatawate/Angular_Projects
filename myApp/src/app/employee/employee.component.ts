import { Component, OnInit } from "@angular/core";
import { IEmployeeList } from './employeeList';
import { EmployeeListService } from './employeeListService'
//import { EmployeeTitlePipe } from './employeeTitle'
//import { searchEmployeePipe} from './searchEmployee'
//import { CommonModule } from '@angular/common';


@Component({
    selector: 'my-employee',
    template: `
    <employee-count [all] ='getTotalEmployeesCount()'
                    [male] = 'getTotalMaleEmployeesCount()'
                    [female] = 'getTotalFemaleEmployeesCount()'
                    (countRadioButtonSelectionChanged) = "onEmployeeCountRadioButtonChanged($event)">
    </employee-count>
    <br/><br/>

    
    <table>
    <thead>
     <th>Code</th>
     <th>Name</th>
     <th>Gender</th>
     <th>Annual Salary</th>
    </thead>
    <ng-container *ngFor = 'let employee of employees ;'>
        <tr *ngIf = "selectedEmployeeCountRadioButton =='All' || selectedEmployeeCountRadioButton == employee.gender"> 
           <td><a [routerLink]="['/employees',employee.code]">{{employee.code }}</a></td>
            <td>{{employee.name | empTitle:employee.gender}}</td>
            <td>{{employee.gender }}</td>
            <td>{{employee.annualsalary | currency: 'INR'}}</td>
            <td>{{employee.dob}}</td>
        </tr>
    </ng-container>
    </table>
    <!--button (click)='getEmployees();' value='Refresh Employee'>Refresh Employee</button-->`,
    providers: [EmployeeListService]
})
export class EmployeeComponent implements OnInit{
    
    employees:IEmployeeList[];
    selectedEmployeeCountRadioButton : string = "All";

    constructor(private _employeelistservice: EmployeeListService){
       
    }

    ngOnInit(){
         this._employeelistservice.getEmployeeList()
         .subscribe((employeeData)=>this.employees = employeeData);
    }

    // getEmployees():void{
    //     this.employees=[
    //         { code:'501', name:'Riya', gender:'Female', annualsalary:31, dob:'16/05/1990'},
    //         { code:'502', name:'Swapnali', gender:'Female', annualsalary:31, dob:'20/04/1989'},
    //         { code:'503', name:'Monika', gender:'Female', annualsalary:31, dob:'20/05/1990'},
    //         { code:'504', name:'Dipti', gender:'Female', annualsalary:31, dob:'20/12/1982'},
    //         { code:'505', name:'Mangal', gender:'Female', annualsalary:31, dob:'06/05/1960'}, 
    //         { code:'508', name:'Dipti', gender:'Female', annualsalary:31, dob:'20/12/1982'},
    //         { code:'509', name:'Mangal', gender:'Female', annualsalary:31, dob:'06/05/1960'}
    //     ]
    // } 
    trackByEmpCode(index: number, employees:any): string{
         return employees.code;
    }

    onEmployeeCountRadioButtonChanged(selectedRadioButtonValue : string) : void{
        this.selectedEmployeeCountRadioButton=selectedRadioButtonValue;
    }
    getTotalEmployeesCount() : number{
        return this.employees.length;
    }
    getTotalMaleEmployeesCount() : number{
        return this.employees.filter(e=> e.gender=="Male").length;
    }
    getTotalFemaleEmployeesCount() : number{
        return this.employees.filter(e=> e.gender=="Female").length;
    }
}