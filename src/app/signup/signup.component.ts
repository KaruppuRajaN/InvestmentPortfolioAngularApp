import { Component } from '@angular/core';
import { InvestmentappService } from '../service/investmentapp.service';
import { UserProfile } from '../model/UserProfile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
 
  userSignUp : UserProfile = new UserProfile();

  constructor(private investmentappService:InvestmentappService, private router: Router){}

  SignUpNow():any {
    this.investmentappService.investorSignUp(this.userSignUp).subscribe(
      (response)=>{
        window.alert('account created');
        console.log(response);
        this.router.navigate(['/login-signup']);
      },
      (error)=>{
        window.alert('account created');
        this.router.navigate(['/home']);
      }
    )
  }


}
