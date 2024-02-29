import { Component, OnInit } from '@angular/core';
import { FloatLabelType } from '@angular/material/form-field';
import { FloatingRateBonds } from '../model/FloatingRateBonds';
import { InvestmentappService } from '../service/investmentapp.service';
import { subscribe } from 'diagnostics_channel';
import { UserProfile } from '../model/UserProfile';
import { Router, RouterConfigOptions } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-floating-rate-bond',
  templateUrl: './floating-rate-bond.component.html',
  styleUrl: './floating-rate-bond.component.css'
})
export class FloatingRateBondComponent implements OnInit{
  frb: FloatingRateBonds = new FloatingRateBonds(); 
  initialRate : number ;
  finalRate :  number ;
  spread : number ;
  time: number ;
  n: number ;
  
  constructor(private service:InvestmentappService, private router : Router){ 
    this.frb.time = 0.5;
    this.frb.n = 7;
    /*this.frb.initialRate = 6.8;
    this.frb.finalRate = 7.7;
    this.frb.spread =3.5;*/
  }

  ngOnInit(){
    this.frb.frbHolder = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.frb.frbHolder);
       this.service.getValues().subscribe(
        (response) => { 
            console.log(response);
            this.frb = response;
            this.frb.time = 0.5;
            this.frb.n = 7;
            this.frb.frbHolder = JSON.parse(localStorage.getItem('currentUser'));
         }
      );

  } 
    

  calculate(){
    this.frb.interestOne = (this.frb.principal*Math.pow(1+(this.frb.initialRate+this.frb.spread)/this.frb.n,this.frb.n*this.frb.time));
    this.frb.finalReturns = (this.frb.interestOne*Math.pow(1+(this.frb.finalRate+this.frb.spread)/this.frb.n,this.frb.n*this.frb.time));
    this.frb.interestAmount = (this.frb.finalReturns)- (this.frb.principal);
  }

  saveProduct(frb:FloatingRateBonds):any{
    this.service.saveFrb(frb).subscribe(
      (response) => { 
        if(response){
          window.alert("Floating Rate bonds succesfully submitted");
          this.router.navigate(['/myportfolio']);
        }
       }
    );
  }



  submitFRB() {
    window.alert("Confirm Submission" + this.frb.frbHolder.walletBalance + " " + this.frb.principal);
    if(this.frb.frbHolder.walletBalance<=this.frb.principal){
      window.alert("Please add money to your wallet to invest this Floating Rate Bonds");
    }else{
      this.saveProduct(this.frb);
    }
    
  }

}


  




