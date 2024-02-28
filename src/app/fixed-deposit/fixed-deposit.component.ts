import { Component ,OnInit} from '@angular/core';
import { FixedDeposit } from '../model/FixedDeposit';
import { InvestmentappService } from '../service/investmentapp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fixed-deposit',
  templateUrl: './fixed-deposit.component.html',
  styleUrls: ['./fixed-deposit.component.css']
})
export class FixedDepositCalculatorComponent implements OnInit {
  
  currentDate: string | undefined;

  fixDep:FixedDeposit = new FixedDeposit(); 
 
  constructor(private service:InvestmentappService, private router: Router) {
    this.currentDate = new Date().toISOString().substr(0, 10);
  }

   // This function is called when the date input value changes
   onDateChange(event: any) {
    this.fixDep.fdCreationDate = new Date(event.target.value);
  }

  ngOnInit() {}

  calculate() {
    // Calculate maturity amount
    this.fixDep.maturityAmount = this.fixDep.depositAmount * Math.pow((1 + (this.fixDep.interestRate / 100)), this.fixDep.tenureYears);

    // Calculate interest payout frequency
    let interestPayoutFactor = 1;
    if (this.fixDep.interestPayout === 'Monthly') {
      interestPayoutFactor = 12;
    } else if (this.fixDep.interestPayout === 'Quarterly') {
      interestPayoutFactor = 4;
    } else if (this.fixDep.interestPayout === 'Half-Yearly') {
      interestPayoutFactor = 2;
    } // Annually has a factor of 1, so no need to change it

    // Calculate total interest
    this.fixDep.totalInterest = this.fixDep.maturityAmount - this.fixDep.depositAmount;

    // Calculate monthly interest
    this.fixDep.monthlyInterest = this.fixDep.totalInterest / (this.fixDep.tenureYears * interestPayoutFactor);

    // Calculate FD maturity date
    this.fixDep.fdMaturityDate = new Date(this.fixDep.fdCreationDate);
    this.fixDep.fdMaturityDate.setFullYear(this.fixDep.fdMaturityDate.getFullYear() + this.fixDep.tenureYears);
  }

  saveProduct(fixDep:FixedDeposit):any{
    this.service.saveFixDep(fixDep).subscribe(
      (response) => { 
        if(response){
          window.alert("FD succesfully submitted");
          this.router.navigate(['/home']);
        }
       }
    );
  }

  submitFD() {
    this.saveProduct(this.fixDep);
  }


}
