import { Component } from '@angular/core';
import { RecurringDeposit } from '../model/RecurringDeposit';

@Component({
  selector: 'app-recurring-deposit',
  templateUrl: './recurring-deposit.component.html',
  styleUrl: './recurring-deposit.component.css'
})
export class RecurringDepositComponent {

   rd: RecurringDeposit = new RecurringDeposit();
  constructor() {
    this.rd.startDate = new Date();
  }

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

}
