import { Component } from '@angular/core';
import { GoldInvestment } from '../model/GoldInvestment';

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrl: './gold.component.css'
})
export class GoldComponent {
  gold: GoldInvestment = new GoldInvestment();

  constructor() {}
 
  calculate() {
    // Calculate maturity amount
    
    console.log(this.gold.principle);
    this.gold.monthlyrate = this.gold.interest/12/100;
		this.gold.months = this.gold.years*12;
    this.gold.amount = this.gold.principle*(Math.pow(1+this.gold.monthlyrate, this.gold.months)-1)/(this.gold.monthlyrate)*(1+this.gold.monthlyrate);

    this.gold.profit = this.gold.amount- (this.gold.principle*12*this.gold.years);
    this.gold.goldpurchased=(this.gold.amount -this.gold.profit)/6000;
    console.log(this.gold);
}
}
