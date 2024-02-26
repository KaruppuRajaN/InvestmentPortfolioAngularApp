export class MutualFunds{
    companyId:number|undefined;
	companyName:string|undefined;
	companySymbol:string|undefined;
	riskCategory:string|undefined;
	capsCategory:string|undefined;
	initialActionDate:string|undefined;
	initialActionAmount:number|undefined;
	lastActionDate:string|undefined;
	lastActionAmount:number=0;
    interval:number|undefined;
	calculatedAnnualAmount:number=0;
	calculatedAnnualReturnAmount:number=0;
	returnsPercentage:number|undefined;
	returnsAnnualAmount:number|undefined;
	allocationPercentageFromMoney:number=0;
}

