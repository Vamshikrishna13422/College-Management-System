import { Component, OnInit } from '@angular/core';
import { Faculty } from '../faculty';
import { Router } from '@angular/router';
import { FacultyService } from '../faculty.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-faculty-login',
  templateUrl: './faculty-login.component.html',
  styleUrl: './faculty-login.component.css'
})
export class FacultyLoginComponent {
  email: string= '';
  password: string= '';
  faculty!:Faculty;
  changetype:boolean = true;
  constructor(private router: Router, private httpClient: HttpClient, private facultyService:FacultyService) 
  {}
  viewpassword() {
    this.changetype = !this.changetype;
  }
  facualtylogin() {
    console.log(this.email);
    console.log(this.password);
    let credentials = {
      email:this.email,
      password:this.password
    };

    this.httpClient.post("http://localhost:8080/api/faculty/login", credentials).subscribe
    ((resultData:any)=>{
      console.log(resultData);
      if(resultData.message=="Email not exist")
      {
        alert("Email Not Exist");
      }
      else if(resultData.message=="Login Successfully")
      {
        alert("Login successful");
        this.router.navigate(['/facultyportal']);
      }
      else{
        alert("Password Not Match");
      }
    });
  } 
}