import { Component, OnInit } from '@angular/core';
import { FloatLabelType } from '@angular/material/form-field';
import { FloatingRateBonds } from '../model/FloatingRateBonds';

@Component({
  selector: 'app-floating-rate-bond',
  templateUrl: './floating-rate-bond.component.html',
  styleUrl: './floating-rate-bond.component.css'
})
export class FloatingRateBondComponent implements OnInit{
  frb: FloatingRateBonds = new FloatingRateBonds(); 
  time : number ;
  n : number ;
  constructor(){
    this.time = 0.5;
    this.n = 7;
  }

  ngOnInit(): void {
    
  }
  calculate(){
    this.frb.interestOne = (this.frb.principal*Math.pow(1+(this.frb.initialRate+this.frb.spread)/this.frb.n,this.frb.n*this.frb.time));
    this.frb.finalReturns = (this.frb.interestOne*Math.pow(1+(this.frb.finalRate+this.frb.spread)/this.frb.n,this.frb.n*this.frb.time));
    this.frb.interestAmount = (this.frb.finalReturns)- (this.frb.principal);
  }




}
