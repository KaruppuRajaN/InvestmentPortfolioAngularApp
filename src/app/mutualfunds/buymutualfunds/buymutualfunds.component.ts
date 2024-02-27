import { Component, EventEmitter, Output } from '@angular/core';
import { InvestmentappService } from '../../service/investmentapp.service';
import { MutualFunds } from '../../model/mutualfunds';
import {PurchasedMutualFunds} from '../../model/purchasedmutualfunds';

@Component({
  selector: 'app-buymutualfunds',
  templateUrl: './buymutualfunds.component.html',
  styleUrl: './buymutualfunds.component.css'
})
export class BuymutualfundsComponent {
  @Output() reloadDisplayPage=new EventEmitter<boolean>();
  capsCategory:string='';
  timestampvalue:string;
  pmfcount=0;
  buttonClick:boolean=false;
  actionDate:string='';
  riskCategory:string='';
  paymentAmount:number|null=null;
  mutualfunds:MutualFunds[][]=[];
  mutualStockValue:number[]=[];
  expectedReturnValue:number[]=[];
  count:number=0;
  pmfdata:MutualFunds[]=[];
  purchasedMF:PurchasedMutualFunds[]=[];
  constructor(private service:InvestmentappService){}

  ngOnInit():void{
  }
  getAllMutualFunds(capsCategory:string,riskCategory:string,paymentAmount:number){
    this.service.getAllMutualFunds({capsCategory,riskCategory,paymentAmount}).subscribe(
      (response)=>{
        this.count=0;
        this.expectedReturnValue=[];
        this.mutualStockValue=[];
        this.mutualfunds=response;
        
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
      },
      (error)=>{
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
    this.pmfdata.forEach(pm=>{
      this.purchasedMF[this.pmfcount]=new PurchasedMutualFunds();
      this.purchasedMF[this.pmfcount].userId=1; //Temporary
      this.purchasedMF[this.pmfcount].purchaseId=this.timestampvalue;
      this.purchasedMF[this.pmfcount].boughtAmount=pm.calculatedAnnualAmount;
      this.purchasedMF[this.pmfcount].boughtPercentage=pm.allocationPercentageFromMoney;
      this.purchasedMF[this.pmfcount].companyName=pm.companyName;
      this.purchasedMF[this.pmfcount].companySymbol=pm.companySymbol;
      this.purchasedMF[this.pmfcount].currentReturnAmount=pm.calculatedAnnualReturnAmount;
      this.pmfcount+=1;
      
    });
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
  }
  onPaymentChange(){
    console.log("Ji");
    if(this.paymentAmount<0){
      this.paymentAmount=null;
    }
  }

}
