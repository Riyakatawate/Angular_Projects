import { Injectable } from "@angular/core";
import { IEmployeeList } from './employeeList';
import { Http , Response} from "@angular/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
//import { filter } from 'rxjs/operators';

@Injectable()
export class EmployeeListService{
    _serviceurl: string = "assets/employee.json";
    constructor(private _http: Http){
    }
    getEmployeeList(): Observable<IEmployeeList[]>{
        return this._http.get("assets/employee.json")
        .pipe(map((response: Response)=><IEmployeeList[]>response.json().employeeList));
    }
    getEmployeeData(empCode: string): Observable<IEmployeeList>{
        console.log(empCode);
        return this._http.get("assets/employee.json")
        .pipe(
            map((response: Response)=>(<IEmployeeList>response.json().employeeList)
    ));
    }
   
}