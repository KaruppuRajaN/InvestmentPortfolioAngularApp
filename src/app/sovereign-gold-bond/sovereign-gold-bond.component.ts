import { Component, OnInit } from '@angular/core';
import { SovereignGoldBonds } from '../model/SovereignGoldBonds';
import { InvestmentappService } from '../service/investmentapp.service';

@Component({
  selector: 'app-sovereign-gold-bond',
  templateUrl: './sovereign-gold-bond.component.html',
  styleUrl: './sovereign-gold-bond.component.css'
})
export class SovereignGoldBondComponent implements OnInit{
 

  sgb: SovereignGoldBonds = new SovereignGoldBonds(); 
  n : number;
  interestRate : number;
  constructor(service:InvestmentappService){
    this.n=5;
    this.interestRate = 2.5;
  }

  
ngOnInit(){
    
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
    
}
