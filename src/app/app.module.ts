import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DisplayoptionsComponent } from './mutualfunds/displayoptions/displayoptions.component';
import { BuymutualfundsComponent } from './mutualfunds/buymutualfunds/buymutualfunds.component';
import { OwnmutualfundsComponent } from './mutualfunds/ownmutualfunds/ownmutualfunds.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { RoundPipe } from './custom.pipe';

import { FixedDepositCalculatorComponent } from './fixed-deposit/fixed-deposit.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SovereignGoldBondComponent } from './sovereign-gold-bond/sovereign-gold-bond.component';
import { FloatingRateBondComponent } from './floating-rate-bond/floating-rate-bond.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DisplayoptionsComponent,
    BuymutualfundsComponent,
    OwnmutualfundsComponent,
    FixedDepositCalculatorComponent,
    RoundPipe,
    UserinfoComponent,
    SignupComponent,
    LoginComponent,
    SovereignGoldBondComponent,
    FloatingRateBondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
