import { Component, OnInit } from '@angular/core';
import { RecurringDeposit } from '../model/RecurringDeposit';
import { InvestmentappService } from '../service/investmentapp.service';
import { Router } from '@angular/router';
import { UserinfoComponent } from '../userinfo/userinfo.component';

@Component({
  selector: 'app-recurring-deposit',
  templateUrl: './recurring-deposit.component.html',
  styleUrl: './recurring-deposit.component.css'
})
export class RecurringDepositComponent implements OnInit {

  currentDate: Date = new Date();
  startDate: string | undefined;

  rd: RecurringDeposit = new RecurringDeposit();

  constructor(private service:InvestmentappService, private router: Router) {
    this.startDate = new Date().toISOString().substr(0, 10);;
  }

  // This function is called when the date input value changes
  onDateChange(event: any) {
    this.rd.startDate = new Date(event.target.value);
  }

  ngOnInit() {
    this.rd.rdHolder = JSON.parse(localStorage.getItem('currentUser'));
  }

  calculate() {
    const monthlyDeposit = this.rd.regularMonthlyDepositAmount;
    const tenureYears = this.rd.tenureYears;
    const interestRate = this.rd.rate / 100;

    let totalAmountInvested = 0;
    let totalInterestEarned = 0;
    let maturityAmount = 0;

    let currentDate = new Date();

    for(let i =0;i<tenureYears;i++){
      for(let j = 0; j<12;j++){
        totalAmountInvested+=monthlyDeposit;
        totalInterestEarned+=totalAmountInvested* (interestRate/12);
      }
    }

    maturityAmount = totalAmountInvested + totalInterestEarned;

    this.rd.totalAmountInvested = totalAmountInvested;
    this.rd.interestAmount = totalInterestEarned;
    this.rd.maturityAmount = maturityAmount;
    this.rd.endDate = new Date(this.currentDate);
    this.rd.endDate.setFullYear(this.currentDate.getFullYear() + tenureYears);
  }

  saveProduct(recDep:RecurringDeposit):any{
    this.service.saveRecDep(recDep).subscribe(
      (response) => { 
        if(response){
          window.alert("RD succesfully submitted");
          this.router.navigate(['/myportfolio']);
        }
       }
    );
  }

  submitRD() {
    window.alert("Confirm Submission" + this.rd.rdHolder.walletBalance + " " + this.rd.regularMonthlyDepositAmount);
    if(this.rd.rdHolder.walletBalance<=this.rd.regularMonthlyDepositAmount){
      window.alert("Please add money to your wallet to invest this FD");
    }else{
      this.saveProduct(this.rd);
    }
    
  }

}
