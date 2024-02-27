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
  

  constructor(private investmentappService:InvestmentappService, private router: Router){}

  loginWithCredentials(){
    this.investmentappService.investorLogin(this.user).subscribe(
      (response)=>{
        this.user = response;
        console.log("Login Successful!!!" + this.user.emailId);
        console.log({ state: { user : this.user } });
        this.router.navigate(['/home'], { state: { user : this.user } });
      },
      (error)=>{
        console.error('Login Failed!!!');
      }
    )
  }

}
