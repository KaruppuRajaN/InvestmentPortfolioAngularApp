import { Component } from '@angular/core';
import { InvestmentappService } from '../../service/investmentapp.service';
import { UserinfoComponent } from '../../userinfo/userinfo.component';
import { HttpResponse } from '@angular/common/http';
import { UserProfile } from '../../model/UserProfile';

@Component({
  selector: 'app-mutualprocess',
  templateUrl: './mutualprocess.component.html',
  styleUrl: './mutualprocess.component.css'
})
export class MutualprocessComponent {
  constructor(private service:InvestmentappService){

  }
  ngOnInit(){
    this.service.investorDetails(UserinfoComponent.user).subscribe(
      (response: HttpResponse<any>)=>{
        UserinfoComponent.user = response as unknown as UserProfile; 
        console.log(UserinfoComponent.user);
        
      },
      (error)=>{
        UserinfoComponent.user = error as unknown as UserProfile;
      }
    );
  }

}
