import { Component } from '@angular/core';
import { InvestmentappService } from '../service/investmentapp.service';
import { UserProfile } from '../model/UserProfile';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { LoginSignupComponent } from '../login-signup/login-signup.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
 
  userSignUp : UserProfile = new UserProfile();

  constructor(private investmentappService:InvestmentappService, private router: Router){}

  SignUpNow():any {
    this.userSignUp.walletBalance=3000;

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
