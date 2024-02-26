import { Component } from '@angular/core';
import { SovereignGoldBonds } from '../model/SovereignGoldBonds';

@Component({
  selector: 'app-sovereign-gold-bond',
  templateUrl: './sovereign-gold-bond.component.html',
  styleUrl: './sovereign-gold-bond.component.css'
})
export class SovereignGoldBondComponent {


  sgb: SovereignGoldBonds = new SovereignGoldBonds(); 


calculate() {
  this.sgb.facevalue =  (this.sgb.iamount/this.sgb.gprice);
  this.sgb.maturityValue = (this.sgb.facevalue *this.sgb.gprice)*Math.pow((1+this.sgb.interestRate/100),this.sgb.n);
    
    
}
    
}
