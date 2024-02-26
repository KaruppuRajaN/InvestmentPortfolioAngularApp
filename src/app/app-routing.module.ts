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
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';

const routes: Routes = [
  { path: 'home', component: UserinfoComponent },
  { path: 'login-signup', component: LoginSignupComponent },
  { path: 'deposits/fd', component: FixedDepositCalculatorComponent },
  { path: 'deposits/rd', component: RecurringDepositComponent },
  { path: 'gold', component: GoldComponent }, 
  { path: 'bonds/sgb', component: SovereignGoldBondComponent },
  { path: 'bonds/frb', component: FloatingRateBondComponent },
  { path: 'mfunds', component: DisplayoptionsComponent },
  { path: 'myportfolio', component: PortfolioComponent },  
  { path: '', redirectTo: '/login-signup', pathMatch: 'full' },
  { path: '**', redirectTo: '/login-signup' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
