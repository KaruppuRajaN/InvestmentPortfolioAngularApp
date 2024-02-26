import { Component } from '@angular/core';
import { InvestmentappService } from '../../service/investmentapp.service';
import { PurchasedMutualFunds } from '../../model/purchasedmutualfunds';
import { UserProfile } from '../../model/UserProfile';
import { empty } from 'rxjs';

@Component({
  selector: 'app-ownmutualfunds',
  templateUrl: './ownmutualfunds.component.html',
  styleUrl: './ownmutualfunds.component.css'
})
export class OwnmutualfundsComponent {

  mutualfunds:PurchasedMutualFunds[][]=[];
  userProfile:UserProfile=new UserProfile();
  
  emptyResult:boolean=false;
  boughtAmount:number[]=[];
  currentReturn:number[]=[];
  count=0;
  constructor(private service:InvestmentappService){}

  ngOnInit():void{
    this.userProfile.userId=1;
    this.service.getAllOwnMutualFunds(this.userProfile).subscribe((response)=>
    {
      this.mutualfunds=response;
      if(this.mutualfunds.length==1 &&this.mutualfunds[0].length==0){
          this.emptyResult=true;
      }else{
          this.count=0;
          this.mutualfunds.forEach(mf=>{
            this.boughtAmount[this.count]=0;
            this.currentReturn[this.count]=0;
            mf.forEach(tempMF=>{
              this.boughtAmount[this.count]+=tempMF.boughtAmount;
              this.currentReturn[this.count]+=tempMF.currentReturnAmount;
              console.log(this.currentReturn);
            })
            this.count+=1;
          })
      }
    },
    (error)=>this.emptyResult=true);
    
  }
  withdrawMF(mutualFund:PurchasedMutualFunds[]){
    if(confirm("Please confirm to sell Mutual Fund Pack and get current returns!!!")==false)
    return;
    this.service.withdrawMutualFunds(mutualFund).subscribe(
      (response)=>{
        alert("Withdrawn is Pending!!!\nAmount will be credited in 1 day if Mutual fund withdrawn process Successfully");

      },
      (error)=>{
        alert("Withdrawn is Pending!!!\nAmount will be credited in 1 day if Mutual fund withdrawn process Successfully");
      }
    );
  }

}
