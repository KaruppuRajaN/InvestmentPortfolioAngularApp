import { UserProfile } from "./UserProfile";

// recurring-deposit.model.ts
export class RecurringDeposit {
    regularMonthlyDepositAmount!: number;
    tenureYears!: number;
    rate!: number;
    startDate!: Date;
    totalAmountInvested!: number;
    interestAmount: number | undefined;
    maturityAmount: number | undefined;
    endDate!: Date;
    rdHolder: UserProfile | undefined;
  }
  