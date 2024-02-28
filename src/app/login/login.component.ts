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
        this.user = response as unknown as UserProfile; 
        window.alert("Login Successful!!!");
        UserinfoComponent.setUser(this.user);
        this.router.navigate(['/myportfolio']);
        
      },
      (error)=>{
        window.alert("error.error.body");
      }
    )
  }

  forgotPassword() {
    this.investmentappService.forgotPassword(this.user).subscribe(
      (response: HttpResponse<any>)=>{
        window.alert(response.body);
        this.otpBox=true;
      },
      (error)=>{
        window.alert(error.error.body);
      }
    )
  }

  changePass() {
    this.investmentappService.updatePassword(this.user).subscribe(
      (response: HttpResponse<any>)=>{
        window.alert(response.body);
          this.otpBox=false;
      },
      (error)=>{
        window.alert(error.error.body);
      }
    )
  }
      

}
