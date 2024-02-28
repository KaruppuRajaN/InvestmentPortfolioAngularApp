import { FixedDeposit } from "./FixedDeposit";
import { FloatingRateBonds } from "./FloatingRateBonds";
import { GoldInvestment } from "./GoldInvestment";
import { RecurringDeposit } from "./RecurringDeposit";
import { SovereignGoldBonds } from "./SovereignGoldBonds";
import { UserProfile } from "./UserProfile";
import { PurchasedMutualFunds } from "./purchasedmutualfunds";

export class Portfolio{
     user: UserProfile | undefined;
	 fixedDeposists: Array<FixedDeposit> | undefined;
	 recurringDeposits: Array<RecurringDeposit> | undefined;
	 golds: Array<GoldInvestment> | undefined;
	 floatingRateBonds: Array<FloatingRateBonds> | undefined;
	 sovereignGoldBonds: Array<SovereignGoldBonds> | undefined;
	 mutualFunds: Array<PurchasedMutualFunds> | undefined 
}