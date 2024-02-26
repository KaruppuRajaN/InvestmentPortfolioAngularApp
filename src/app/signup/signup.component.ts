import { Component } from '@angular/core';
import { InvestmentappService } from '../service/investmentapp.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  title = 'InvestmentPortfolioAngularApp';
  constructor(private investmentappService:InvestmentappService){}

  loginWithCredentials(username:string,password:string){
    console.log("bye");
    this.investmentappService.investorLogin({username,password}).subscribe(
      (response)=>{
        console.log("SignUp Successful!!!")
      },
      (error)=>{
        console.error('SignUp Failed!!!');
      }
    )
  }

}
