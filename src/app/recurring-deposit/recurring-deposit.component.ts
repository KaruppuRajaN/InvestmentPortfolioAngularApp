import { Component, OnInit } from '@angular/core';
import { RecurringDeposit } from '../model/RecurringDeposit';
import { InvestmentappService } from '../service/investmentapp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recurring-deposit',
  templateUrl: './recurring-deposit.component.html',
  styleUrl: './recurring-deposit.component.css'
})
export class RecurringDepositComponent implements OnInit {

  startDate: string | undefined;

   rd: RecurringDeposit = new RecurringDeposit();

  constructor(private service:InvestmentappService, private router: Router) {
    this.startDate = new Date().toISOString().substr(0, 10);;
  }

  // This function is called when the date input value changes
  onDateChange(event: any) {
    this.rd.startDate = new Date(event.target.value);
  }

  ngOnInit() {}

  calculate() {
    const monthlyDeposit = this.rd.monthlyDeposit;
    const tenureYears = this.rd.tenureYears;
    const interestRate = this.rd.interestRate / 100;

    let totalAmountInvested = 0;
    let totalInterestEarned = 0;
    let maturityAmount = 0;

    const startDate = this.rd.startDate;
    const maturityDate = new Date(startDate);
    maturityDate.setFullYear(startDate.getFullYear() + tenureYears);

    let currentDate = new Date(startDate);

    while (currentDate < maturityDate) {
      totalAmountInvested += monthlyDeposit;
      totalInterestEarned += totalAmountInvested * (interestRate / 12);
      currentDate.setMonth(currentDate.getMonth() + 1);
    }

    maturityAmount = totalAmountInvested + totalInterestEarned;

    this.rd.totalAmountInvested = totalAmountInvested;
    this.rd.totalInterestEarned = totalInterestEarned;
    this.rd.maturityAmount = maturityAmount;
    this.rd.maturityDate = maturityDate;
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
    this.saveProduct(this.rd);
  }

}
