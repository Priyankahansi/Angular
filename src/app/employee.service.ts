import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

 @Injectable({
  providedIn: 'root'
 })
 export class EmployeeService {

  constructor(private http:HttpClient) { }

 insert(employee:any){
  return this.http.post("http://localhost:8080/AddEmployee",employee,{responseType:"test" as "json"});
 }
 getEmployee(){
  return this.http.get("http://localhost:8080/getEmployees");
 }
 removeEmployee(id:number){
   return this.http.delete("http://localhost:8080/delete/"+id);
 }
 }
