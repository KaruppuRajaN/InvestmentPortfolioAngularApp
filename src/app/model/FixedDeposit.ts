import { UserProfile } from "./UserProfile";

export class FixedDeposit{



    depositAmount!: number ;
  interestRate!: number;
  tenureYears!: number ;
  interestPayoutType: string = '';
 
  maturityAmount: number = 0;
  StartDate: Date =  new Date();
  EndDate: Date = new Date();
  interestPayoutAmount: number = 0;
  monthlyInterest: number = 0;
  fdHolder: UserProfile | undefined;
}