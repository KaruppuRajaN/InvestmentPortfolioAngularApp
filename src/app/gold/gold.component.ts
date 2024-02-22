import { Component } from '@angular/core';

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrl: './gold.component.css'
})
export class GoldComponent {
  gid: number=0;
  principle: number = 0;
  interest: number = 0;
  years: number = 0;
  profit: number=0;
  goldpurchased: number=0;
  monthlyrate: number=0;
  amount: number=0;
  months: number=0;

  constructor() {}
 
  calculate() {
    // Calculate maturity amount
    this.monthlyrate = this.interest/12/100;
		this.months = this.years*12;
    this.amount = this.principle*(Math.pow(1+this.monthlyrate, this.months)-1)/(this.monthlyrate)*(1+this.monthlyrate);
    this.profit = this.amount- (this.principle*12*this.years);
}
}
