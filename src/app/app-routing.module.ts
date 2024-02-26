import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoldComponent } from './gold/gold.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { OwnmutualfundsComponent } from './mutualfunds/ownmutualfunds/ownmutualfunds.component';
import { FloatingRateBondComponent } from './floating-rate-bond/floating-rate-bond.component';
import { BuymutualfundsComponent } from './mutualfunds/buymutualfunds/buymutualfunds.component';
import { DisplayoptionsComponent } from './mutualfunds/displayoptions/displayoptions.component';
import { FixedDepositCalculatorComponent } from './fixed-deposit/fixed-deposit.component';
import { RecurringDepositComponent } from './recurring-deposit/recurring-deposit.component';
import { SovereignGoldBondComponent } from './sovereign-gold-bond/sovereign-gold-bond.component';

const routes: Routes = [
  { path: 'home', component: UserinfoComponent },
  { path: 'deposits/fd', component: FixedDepositCalculatorComponent },
  { path: 'deposits/rd', component: RecurringDepositComponent },
  { path: 'gold', component: GoldComponent }, 
  { path: 'bonds/sgb', component: SovereignGoldBondComponent },
  { path: 'bonds/frb', component: FloatingRateBondComponent },
  { path: 'mfunds/buy', component: BuymutualfundsComponent },
  { path: 'mfunds/show', component: DisplayoptionsComponent },
  { path: 'mfunds/own', component: OwnmutualfundsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
