import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employee } from "../interfaces/employee";

@Injectable({
  providedIn: "root"
})
export class EmployeesService {
  constructor(private httpClient: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>("http://localhost:3000/employees");
  }
}
