import { Component } from '@angular/core';

@Component({
  selector: 'app-facualty-forgot-password',
  templateUrl: './facualty-forgot-password.component.html',
  styleUrl: './facualty-forgot-password.component.css'
})
export class FacualtyForgotPasswordComponent {
  onSubmit(){
    alert("Please Check Your Email for Reset")
  }
}
