import { Component } from '@angular/core';
import { UserProfile } from '../model/UserProfile';
import { InvestmentappService } from '../service/investmentapp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css'
})
export class LoginSignupComponent {

  isEmpty: boolean = true;

  constructor(private service:InvestmentappService, private router: Router){}

  isLogin:boolean = true;

  swapLogin(swap:number){
    if(swap===0){
      this.isLogin = true;
    }
    else{
      this.isLogin = false;
    }
  }
}
