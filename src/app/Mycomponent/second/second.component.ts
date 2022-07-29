import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})

export class SecondComponent implements OnInit {


  constructor(private service:EmployeeService,private router:Router) { }

  employees:any;

 

 
   ngOnInit(): void {
    this.service.getEmployee().subscribe((data:any)=>{
      console.log(data);
      this.employees=data.data;
      console.log(this.employees.data);
    })
  }

  AddUser(){
    this.router.navigate(['form']);
  }

  deleteEmployee(id:any){
    this.service.removeEmployee(id).subscribe(data=>{
      console.log(data);
      this.ngOnInit();
    })
      }
  }
