import { Component } from '@angular/core';
import { InvestmentappService } from '../service/investmentapp.service';
import { UserProfile } from '../model/UserProfile';
import { Router } from '@angular/router';
import { UserinfoComponent } from '../userinfo/userinfo.component';
import { HttpResponse } from '@angular/common/http';

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
      (response: HttpResponse<any>)=>{
        console.log(response);
        this.user = response as unknown as UserProfile; 
        console.log("Login Successful!!!" + this.user.emailId);
        window.alert("Login Successful!!!");
        UserinfoComponent.setUser(this.user);
        this.router.navigate(['/myportfolio']);
        
      },
      (error)=>{
        window.alert(error.error.msg);
      }
    )
  }

  forgotPassword() {
    this.investmentappService.forgotPassword(this.user).subscribe(
      (response: HttpResponse<any>)=>{
        console.log(response);
        window.alert("Password sent to your email");
        this.otpBox=true;
        
      },
      (error)=>{
        console.log(error);
        
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
