import { UserProfile } from "./UserProfile";

export class FixedDeposit{
<<<<<<< HEAD
  depositAmount: number = 0;
  rate: number = 0;
  tenureYears: number = 0;
  interestPayoutType: string = '';
=======
    depositAmount!: number ;
  interestRate!: number;
  tenureYears!: number ;
  interestPayout: string = '';
>>>>>>> 5860a59893b7e3c2418b60b1432cfe8679e529e9
  maturityAmount: number = 0;
  StartDate: Date =  new Date();
  EndDate: Date = new Date();
  interestPayoutAmount: number = 0;
  monthlyInterest: number = 0;
  fdHolder: UserProfile | undefined;
}