import { Component } from '@angular/core';
import { GoldInvestment } from '../model/GoldInvestment';
import { InvestmentappService } from '../service/investmentapp.service';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrl: './gold.component.css'
})
export class GoldComponent {
  gold: GoldInvestment = new GoldInvestment();

  constructor(private service:InvestmentappService, private router: Router) {}
 
  calculate() {
    // Calculate maturity amount
    
    console.log(this.gold.principle);
    this.gold.monthlyrate = this.gold.interest/12/100;
		this.gold.months = this.gold.years*12;
    this.gold.amount = this.gold.principle*(Math.pow(1+this.gold.monthlyrate, this.gold.months)-1)/(this.gold.monthlyrate)*(1+this.gold.monthlyrate);

    this.gold.profit = this.gold.amount- (this.gold.principle*12*this.gold.years);
    this.gold.goldpurchased=(this.gold.amount -this.gold.profit)/this.gold.todaygoldrate;
    console.log(this.gold);
}
saveGold(gold:GoldInvestment):any{
  this.service.saveGoldInv(gold).subscribe(
    (response) => { 
      if(response){
        window.alert("Gold Details succesfully submitted");
        this.router.navigate(['/home']);
      }
     }
  );
}

SaveGold() {
  this.saveGold(this.gold);
}
}
