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
    this.fixDep.StartDate = new Date(event.target.value);
  }

  ngOnInit() {
     // Retrieving user object from local storage
     this.fixDep.fdHolder = JSON.parse(localStorage.getItem('currentUser'));
  }

  calculate() {
    // Calculate maturity amount
    this.fixDep.maturityAmount = this.fixDep.depositAmount * Math.pow((1 + (this.fixDep.rate / 100)), this.fixDep.tenureYears);

    // Calculate interest payout frequency
    let interestPayoutFactor = 1;
    if (this.fixDep.interestPayoutType === 'Monthly') {
      interestPayoutFactor = 12;
    } else if (this.fixDep.interestPayoutType === 'Quarterly') {
      interestPayoutFactor = 4;
    } else if (this.fixDep.interestPayoutType === 'Half-Yearly') {
      interestPayoutFactor = 2;
    } // Annually has a factor of 1, so no need to change it

    // Calculate total interest
    this.fixDep.interestPayoutAmount = this.fixDep.maturityAmount - this.fixDep.depositAmount;

    // Calculate monthly interest
    this.fixDep.monthlyInterest = this.fixDep.interestPayoutAmount / (this.fixDep.tenureYears * interestPayoutFactor);

    // Calculate FD maturity date
    this.fixDep.EndDate = new Date(this.fixDep.StartDate);
    this.fixDep.EndDate.setFullYear(this.fixDep.EndDate.getFullYear() + this.fixDep.tenureYears);
  }

  saveProduct(fixDep:FixedDeposit):any{
    this.service.saveFixDep(fixDep).subscribe(
      (response) => { 
        if(response){
          window.alert("FD succesfully submitted");
          this.router.navigate(['/myportfolio']);
        }
       }
    );
  }

  submitFD() {
    window.alert("Confirm Submission? your wallet balance -> " + this.fixDep.fdHolder.walletBalance + ", current deposit amount-> " + this.fixDep.depositAmount);
    if(this.fixDep.fdHolder.walletBalance<=this.fixDep.depositAmount){
      window.alert("Please add money to your wallet to invest this FD");
    }else{
      this.saveProduct(this.fixDep);
    }  
  }
}
