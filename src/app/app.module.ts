import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FixedDepositCalculatorComponent } from './fixed-deposit/fixed-deposit.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { GoldComponent } from './gold/gold.component';

@NgModule({
  declarations: [
    AppComponent,
    FixedDepositCalculatorComponent,
    UserinfoComponent,
    SignupComponent,
    LoginComponent,
    GoldComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
