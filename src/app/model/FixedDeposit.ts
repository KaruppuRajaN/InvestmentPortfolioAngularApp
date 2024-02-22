export class FixedDeposit{
    depositAmount: number = 0;
  interestRate: number = 0;
  tenureYears: number = 0;
  interestPayout: string = '';
  maturityAmount: number = 0;
  fdCreationDate: Date =  new Date();
  fdMaturityDate: Date = new Date();
  totalInterest: number = 0;
  monthlyInterest: number = 0;
}