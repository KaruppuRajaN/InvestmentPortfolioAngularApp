import { Component } from '@angular/core';
import { InvestmentappService } from '../service/investmentapp.service';
import { UserProfile } from '../model/UserProfile';
import { Router } from '@angular/router';
import { UserinfoComponent } from '../userinfo/userinfo.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user : UserProfile = new UserProfile();
  userInfo: UserinfoComponent = new UserinfoComponent();
  otpBox : boolean = false;
  
  constructor(private investmentappService:InvestmentappService, private router: Router){}

  loginWithCredentials(){
    this.investmentappService.investorLogin(this.user).subscribe(
      (response)=>{
        this.user = response;
        console.log("Login Successful!!!" + this.user.emailId);
        UserinfoComponent.setUser(this.user);
        this.router.navigate(['/myportfolio']);
      },
      (error)=>{
        console.error('Login Failed!!!');
      }
    )
  }

  forgotPassword() {
    this.investmentappService.forgotPassword(this.user).subscribe(
      (response)=>{
        this.user = response;
        console.log("Login Successful!!!" + this.user.emailId);
      },
      (error)=>{
        window.alert('OTP sent to your mail');
        this.otpBox=true;
        
      }
    )
  }

  changePass() {
    this.investmentappService.updatePassword(this.user).subscribe(
      (response)=>{
        this.user = response;
        console.log("New password changes Successful!!!" + this.user.emailId);
        this.otpBox=false;
      },
      (error)=>{
        console.log("New password changes Successful!!!" + this.user.emailId);
        this.otpBox=false;
        window.alert('password changes successfully');
        this.router.navigate(['/login-signup']);
      }
    )
  }
      

}
