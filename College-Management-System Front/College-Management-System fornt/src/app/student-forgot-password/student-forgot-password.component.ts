import { Component } from '@angular/core';

@Component({
  selector: 'app-student-forgot-password',
  templateUrl: './student-forgot-password.component.html',
  styleUrl: './student-forgot-password.component.css'
})
export class StudentForgotPasswordComponent {
  onSubmit(){
    alert("Please Check Your Email for Reset")
  }
}
