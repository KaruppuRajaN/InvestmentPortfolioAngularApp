import { Component } from '@angular/core';
import { InvestmentappService } from '../service/investmentapp.service';
import { UserProfile } from '../model/UserProfile';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { LoginSignupComponent } from '../login-signup/login-signup.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
 password1:string;
  userSignUp : UserProfile = new UserProfile();

  constructor(private investmentappService:InvestmentappService, private router: Router){}

  SignUpNow():any {
    //this.userSignUp.walletBalance=3000;

    if(this.userSignUp.password.length<8){
      alert("Password length should be greater than 8!!!")
      return;
    }
    if(this.userSignUp.password!=this.password1){
      alert("Password is not match!!!");
      return;
    }
    if(this.userSignUp.mobileNumber){

    }
    this.userSignUp.password = btoa(this.userSignUp.password); 
    this.investmentappService.investorSignUp(this.userSignUp).subscribe(
      (response: HttpResponse<any>)=>{
        window.alert(response.body);
        LoginSignupComponent.isLogin = true;
        this.router.navigate(['/login-signup']);
      },
      (error)=>{
        window.alert(error.error.body)
      }
    )
  }


}
