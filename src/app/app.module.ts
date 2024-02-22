import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
<<<<<<< HEAD
import { FixedDepositCalculatorComponent } from './fixed-deposit/fixed-deposit.component';
=======
import { UserinfoComponent } from './userinfo/userinfo.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
>>>>>>> debfbd65c28765e52dd3de0ac71e25d1749402e9

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    FixedDepositCalculatorComponent
=======
    UserinfoComponent,
    SignupComponent,
    LoginComponent
>>>>>>> debfbd65c28765e52dd3de0ac71e25d1749402e9
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
