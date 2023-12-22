import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrl: './student-login.component.css'
})
export class StudentLoginComponent {

  email: string= '';
  password: string= '';
  student!:Student;
  changetype:boolean = true;
  constructor(private router: Router, private httpClient: HttpClient, private facultyService:StudentService) 
  {}
  viewpassword() {
    this.changetype = !this.changetype;
  }
  
  Studentlogin() {
    console.log(this.email);
    console.log(this.password);
    let credentials = {
      email:this.email,
      password:this.password
    };

    this.httpClient.post("http://localhost:8080/api/student/login", credentials).subscribe
    ((resultData:any)=>{
      console.log(resultData);
      if(resultData.message=="Email not exist")
      {
        alert("Email Not Exist");
      }
      else if(resultData.message=="Login Successfully")
      {
        alert("Login successful");
        this.router.navigate(['/studentportal']);
      }
      else{
        alert("Password Not Match");
      }
    });
  } 

}
