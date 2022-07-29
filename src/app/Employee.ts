import { NotExpr } from "@angular/compiler";

 export class Employee{
  employeeName:String;
  department:String;
  gender:String;
  salary:number;
  note:String;
  date:Date;
  profilePic:String;


    constructor(employeeName:String,department:String,
        gender:String,salary:number,note:String,date:Date,profilePic:String){
    this.employeeName=employeeName;
    this.department=department;
    this.gender=gender;
    this.salary=salary;
    this.note=note;
    this.date=date;
    this.profilePic=profilePic;
}

}