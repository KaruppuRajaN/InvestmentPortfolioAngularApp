import { Component } from '@angular/core';
import { InvestmentappService } from '../service/investmentapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
  styleUrl: './login.component.css'
})
export class LoginComponent {
  

  title = 'InvestmentPortfolioAngularApp';
  constructor(private investmentappService:InvestmentappService){}

  loginWithCredentials(username:string,password:string){
    console.log("bye");
    this.investmentappService.investorLogin({username,password}).subscribe(
      (response)=>{
        console.log("Login Successful!!!")
      },
      (error)=>{
        console.error('Login Failed!!!');
      }
    )
  }

}
