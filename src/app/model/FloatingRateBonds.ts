import { UserProfile } from "./UserProfile";

export class FloatingRateBonds{
   
	initialRate : number =0;
	finalRate : number =0;;
	spread : number =0;
    principal :number =0;
	n : number =0;
    interestOne : number =0;
	time : number = 0;
    interestAmount : number =0;
	finalReturns : number =0;
	frbHolder: UserProfile | undefined;

}