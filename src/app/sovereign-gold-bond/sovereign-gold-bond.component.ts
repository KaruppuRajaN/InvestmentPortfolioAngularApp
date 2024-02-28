import { Component, OnInit } from '@angular/core';
import { SovereignGoldBonds } from '../model/SovereignGoldBonds';
import { InvestmentappService } from '../service/investmentapp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sovereign-gold-bond',
  templateUrl: './sovereign-gold-bond.component.html',
  styleUrl: './sovereign-gold-bond.component.css'
})
export class SovereignGoldBondComponent implements OnInit{
 

  sgb: SovereignGoldBonds = new SovereignGoldBonds(); 
  n : number;
  interestRate : number;
  gprice : number;
  constructor(private service: InvestmentappService, private router: Router){
    this.sgb.n=5;
    this.sgb.interestRate = 2.5;
  }

  
ngOnInit(){
  this.service.getGoldPrice().subscribe(
    (response) => { 
        console.log(response);
        this.sgb.gprice = response.price_gram_24k;
     }
  );
}

calculate() {
  
  this.sgb.facevalue = (this.sgb.iamount/this.sgb.gprice);
  if(this.sgb.facevalue < 4000){
  this.sgb.maturityValue = (this.sgb.facevalue *this.sgb.gprice)*Math.pow((1+this.sgb.interestRate/100),this.sgb.n);
  this.sgb.totalInterest = (this.sgb.maturityValue)- (this.sgb.iamount);
  }
  else {
    alert(" Please note that our investment limit for gold sovereign bonds is a maximum of 4kg. You may consider investing a lesser amount or exploring alternative investment options.");
  }
}

  saveProduct(sgb:SovereignGoldBonds): any {
    this.service.saveSgb(this.sgb).subscribe(
      (response) => { 
        if(response){
          window.alert("Sovereign bonds succesfully submitted");
          this.router.navigate(['/myportfolio']);
        }
       }
    );
  }

 
  submitSGB() {
    window.alert("Confirm Submission" + this.sgb.sgbHolder.walletBalance + " " + this.sgb.iamount);
    if(this.sgb.sgbHolder.walletBalance<=this.sgb.iamount){
      window.alert("Please add money to your wallet to invest this Sovereign Gold Bonds");
    }else{
      this.saveProduct(this.sgb);
    }
    
  }

    
}
    

