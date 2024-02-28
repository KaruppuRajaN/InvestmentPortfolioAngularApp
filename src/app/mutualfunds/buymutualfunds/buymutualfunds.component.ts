import { Component, EventEmitter, Output } from '@angular/core';
import { InvestmentappService } from '../../service/investmentapp.service';
import { MutualFunds } from '../../model/mutualfunds';
import {PurchasedMutualFunds} from '../../model/purchasedmutualfunds';
import { UserinfoComponent } from '../../userinfo/userinfo.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpResponse } from '@angular/common/http';
import { UserProfile } from '../../model/UserProfile';
import { DisplayoptionsComponent } from '../displayoptions/displayoptions.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buymutualfunds',
  templateUrl: './buymutualfunds.component.html',
  styleUrl: './buymutualfunds.component.css'
})
export class BuymutualfundsComponent {
  @Output() reloadDisplayPage=new EventEmitter<boolean>();
  capsCategory:string='';
  timestampvalue:string;
  walletBalance:number;
  pmfcount=0;
  buttonClick:boolean=false;
  actionDate:string='';
  riskCategory:string='';
  paymentAmount:number|null=null;
  mutualfunds:MutualFunds[][]=[];
  mutualStockValue:number[]=[];
  expectedReturnValue:number[]=[];


  currentPage:number=1;
  pageMutualFunds:MutualFunds[][]=[];
  pageMutualStockValue:number[]=[];
  pageExpectedReturnValue:number[]=[];


  count:number=0;
  pmfdata:MutualFunds[]=[];
  purchasedMF:PurchasedMutualFunds[]=[];
  constructor(private service:InvestmentappService,private _snackBar: MatSnackBar,private router: Router){}

  ngOnInit():void{
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
  }
  getAllMutualFunds(capsCategory:string,riskCategory:string,paymentAmount:number){
    this.service.getAllMutualFunds({capsCategory,riskCategory,paymentAmount}).subscribe(
      (response)=>{
        this.count=0;
        this.expectedReturnValue=[];
        this.mutualStockValue=[];
        this.mutualfunds=response;
        this.pageMutualFunds=[];
        this.currentPage=1;
        this.pageMutualStockValue=[];
        this.pageExpectedReturnValue=[];
        
        this.mutualfunds.forEach(mf=>{
          mf.forEach(mutualF=>{
            if(mutualF.lastActionDate!=undefined)
                this.actionDate=mutualF.lastActionDate;
            if(isNaN(this.mutualStockValue[this.count]))
                this.mutualStockValue[this.count]=0;
          if(isNaN(this.expectedReturnValue[this.count]))
            this.expectedReturnValue[this.count]=0;
            if(mutualF.calculatedAnnualAmount!=undefined)
              this.mutualStockValue[this.count]+=mutualF.calculatedAnnualAmount;
            if(mutualF.calculatedAnnualReturnAmount!=undefined)
              this.expectedReturnValue[this.count]+=mutualF.calculatedAnnualReturnAmount;
          });
          this.count+=1;
        });
        if(this.mutualfunds[0]===undefined){
          this.count=0;
          this.buttonClick=true;
        }
        
        this.currentPage=1;
        this.pageMutualFunds=this.getRecordsPage();
      },
      (error)=>{
          this.count=0;
      });
  }
  onSubmit(){
    console.log(this.paymentAmount);
    if(this.capsCategory==''||this.capsCategory==undefined){
      this.mutualfunds=[];
      this.expectedReturnValue=[];
        this.mutualStockValue=[];
        this.count=0;
    this.buttonClick=true;
      return;
    }
   if(this.paymentAmount<= 0 || this.paymentAmount==null||this.paymentAmount==undefined){
    this.expectedReturnValue=[];
        this.mutualStockValue=[];
        this.mutualfunds=[];
        this.count=0;
    this.buttonClick=true;
    return;
   }
  
    this.getAllMutualFunds(this.capsCategory,this.riskCategory,this.paymentAmount);
  }
  changeOptions(id:number){
    if(id==2){
      if(this.capsCategory=='Large')
        this.riskCategory='Low';
      else if(this.capsCategory=='Mid')
        this.riskCategory='Medium';
      else if(this.capsCategory=='Small')
        this.riskCategory='High';
    }
    if(id==1){
      if(this.riskCategory=='High')
        this.capsCategory='Small';
      else if(this.riskCategory=='Medium')
        this.capsCategory='Mid';
      else if(this.riskCategory=='Low')
        this.capsCategory='Large';
    }
  }

  purchaseMF(mf:MutualFunds[]){
    if(confirm("Please confirm to buy our Mutual Fund Pack!!!")==false)
    return;
    this.pmfdata=mf;
    this.pmfcount=0;
    
    this.timestampvalue=new Date(Date.now()).toString();
    let overallBoughtAmount=0;
    this.pmfdata.forEach(pm=>{
      this.purchasedMF[this.pmfcount]=new PurchasedMutualFunds();
      this.purchasedMF[this.pmfcount].userId=UserinfoComponent.user.userId; //Temporary
      this.purchasedMF[this.pmfcount].purchaseId=this.timestampvalue;
      this.purchasedMF[this.pmfcount].boughtAmount=pm.calculatedAnnualAmount;
      overallBoughtAmount+=pm.calculatedAnnualAmount;
      this.purchasedMF[this.pmfcount].boughtPercentage=pm.allocationPercentageFromMoney;
      this.purchasedMF[this.pmfcount].companyName=pm.companyName;
      this.purchasedMF[this.pmfcount].companySymbol=pm.companySymbol;
      this.purchasedMF[this.pmfcount].currentReturnAmount=pm.calculatedAnnualReturnAmount;
      this.pmfcount+=1;
      
    });
    if(this.walletBalance<overallBoughtAmount){
      this._snackBar.open("Wallet Balance is not enough!! Kindly add Wallet Amount!!", "OK");
      return;
    }
    this.service.purchaseMutualFunds(this.purchasedMF).subscribe(
      (response)=>{
        
        alert("Purchasing is Processing... Kindly Check in your Bucket List!!!" );
        this.reloadDisplayPage.emit(true);
      },
      (error)=>{
        alert("Purchasing is Processing... Kindly Check in your Bucket List!!!" );
        this.reloadDisplayPage.emit(true);
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
  onPaymentChange(){
    if(this.paymentAmount<0){
      this.paymentAmount=null;
    }
  }

  get totalPages():number{
    return Math.ceil(this.mutualfunds.length/5);
  }
  getRecordsPage():any[]{
    const startIndex = (this.currentPage-1)*5;
    this.pageExpectedReturnValue=this.expectedReturnValue.slice(startIndex,startIndex+5);
    this.pageMutualStockValue=this.mutualStockValue.slice(startIndex,startIndex+5);
    this.pageMutualFunds=this.mutualfunds.slice(startIndex,startIndex+5);
    return this.pageMutualFunds;
  }

}
