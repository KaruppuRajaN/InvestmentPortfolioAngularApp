export class FixedDeposit{
    depositAmount!: number ;
  interestRate!: number;
  tenureYears!: number ;
  interestPayout: string = '';
  maturityAmount: number = 0;
  fdCreationDate: Date =  new Date();
  fdMaturityDate: Date = new Date();
  totalInterest: number = 0;
  monthlyInterest: number = 0;
}