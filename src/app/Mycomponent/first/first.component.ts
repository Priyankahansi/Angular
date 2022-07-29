import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Employee } from 'src/app/Employee';
import { FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { interval, range } from 'rxjs';
import { EmployeeService } from 'src/app/employee.service';
// import { Employee } from 'src/app/employee.model';
// import { Employee } from 'src/app/Employee';
// import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
 })
  export class FirstComponent implements OnInit {


    constructor(private router:Router,private service:EmployeeService,private route:ActivatedRoute) { 
    
    }

   employee=new Employee('','','',0,'',new Date,'');
   

   addEmployeeData(){
    console.log(this.employee);
    localStorage.setItem('employee',JSON.stringify(this.employee));
    this.service.insert(this.employee).subscribe(data=>{
      console.log(this.employee,"data is saved",)
      this.router.navigate(['dashboard'])

    })
   }
   
   getVal(value:String){
    this.employee.department=value;
   }


   submit(){
    
   }
   
   
   

   ngOnInit(): void {
    
 }  
 }
