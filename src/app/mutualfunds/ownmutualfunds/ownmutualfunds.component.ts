import { Component } from '@angular/core';
import { InvestmentappService } from '../../service/investmentapp.service';
import { PurchasedMutualFunds } from '../../model/purchasedmutualfunds';
import { UserProfile } from '../../model/UserProfile';
import { empty } from 'rxjs';
import { UserinfoComponent } from '../../userinfo/userinfo.component';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

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
  pageCurrentReturnValue:number[]=[];
  pageBoughtAmount:number[]=[];
  pageMutualFunds:PurchasedMutualFunds[][]=[];
  currentPage:number=1;
  count=0;
  walletBalance:number=0;
  constructor(private service:InvestmentappService,private router:Router){}

  ngOnInit():void{
    this.mutualfunds=[];
  this.userProfile=new UserProfile();

  this.service.investorLogin(UserinfoComponent.user).subscribe(
    (response: HttpResponse<any>)=>{
      UserinfoComponent.user = response as unknown as UserProfile; 
      this.walletBalance=UserinfoComponent.user.walletBalance;
      console.log(UserinfoComponent.user);
      
    },
    (error)=>{
      UserinfoComponent.user = error as unknown as UserProfile; 
      this.walletBalance=UserinfoComponent.user.walletBalance;
    }
  );

  this.walletBalance=UserinfoComponent.user.walletBalance;
  
  this.emptyResult=false;
  this.boughtAmount=[];
  this.currentReturn=[];
  this.pageBoughtAmount=[];
  
  this.pageCurrentReturnValue=[];
  this.pageMutualFunds=[];
  this.count=0;
  this.currentPage=1;

    this.userProfile.userId=UserinfoComponent.user.userId;
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
      this.pageMutualFunds=this.getRecordsPage();
    },
    (error)=>this.emptyResult=true);
    
  }
  withdrawMF(mutualFund:PurchasedMutualFunds[]){
    if(confirm("Please confirm to sell Mutual Fund Pack and get current returns!!!")==false)
    return;
    this.service.withdrawMutualFunds(mutualFund).subscribe(
      (response)=>{
        alert("Withdrawn is Pending!!!\nAmount will be credited in 1 day if Mutual fund withdrawn process Successfully");
        this.ngOnInit();
      },
      (error)=>{
        alert("Withdrawn is Pending!!!\nAmount will be credited in 1 day if Mutual fund withdrawn process Successfully");
        this.ngOnInit();
      }
    );
    this.service.investorLogin(UserinfoComponent.user).subscribe(
      (response: HttpResponse<any>)=>{
        UserinfoComponent.user = response as unknown as UserProfile; 
        this.walletBalance=UserinfoComponent.user.walletBalance;
        console.log(UserinfoComponent.user);
        
      },
      (error)=>{
        UserinfoComponent.user = error as unknown as UserProfile; 
        this.walletBalance=UserinfoComponent.user.walletBalance;
      }
    );
    this.router.navigate(['/mutualprocess']);

  }

  getRecordsPage():any[]{
    const startIndex = (this.currentPage-1)*5;
    this.pageCurrentReturnValue=this.currentReturn.slice(startIndex,startIndex+5);
    this.pageBoughtAmount=this.boughtAmount.slice(startIndex,startIndex+5);
    this.pageMutualFunds=this.mutualfunds.slice(startIndex,startIndex+5);
    return this.pageMutualFunds;
  }
  get totalPages():number{
    return Math.ceil(this.mutualfunds.length/5);
  }
}
