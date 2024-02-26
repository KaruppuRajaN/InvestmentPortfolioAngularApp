// recurring-deposit.model.ts
export class RecurringDeposit {
    monthlyDeposit!: number;
    tenureYears!: number;
    interestRate!: number;
    startDate!: Date;
    totalAmountInvested!: number;
    totalInterestEarned!: number;
    maturityAmount!: number;
    maturityDate!: Date;
  }
  