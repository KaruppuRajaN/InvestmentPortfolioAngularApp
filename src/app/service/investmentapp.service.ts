import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MutualFunds } from '../model/mutualfunds';
import { PurchasedMutualFunds } from '../model/purchasedmutualfunds';
import { UserProfile } from '../model/UserProfile';
import { FixedDeposit } from '../model/FixedDeposit';
import { RecurringDeposit } from '../model/RecurringDeposit';
import { Portal } from '@angular/cdk/portal';
import { Portfolio } from '../model/Portfolio';
import { FloatingRateBonds } from '../model/FloatingRateBonds';
import { SovereignGoldBonds } from '../model/SovereignGoldBonds';

@Injectable({
  providedIn: 'root'
})
export class InvestmentappService {

  private apiUrl='http://localhost:8090/';

  constructor(private http:HttpClient) { }

  investorLogin(user:UserProfile):Observable<any>{
    return this.http.post<any>(this.apiUrl+"user/login",user);
  }

  getAllMutualFunds(FilterMutualFundOptions:{capsCategory:string,riskCategory:string,paymentAmount:number}):Observable<MutualFunds[][]>{
    return this.http.post<MutualFunds[][]>(this.apiUrl+"stocks/mutualfunds",FilterMutualFundOptions);
  }

  getAllOwnMutualFunds(userProfile:UserProfile):Observable<PurchasedMutualFunds[][]>{
    return this.http.post<PurchasedMutualFunds[][]>(this.apiUrl+"stocks/getrespectivemutualfunds",userProfile);
  }
  purchaseMutualFunds(purchasedMF:PurchasedMutualFunds[]):Observable<string>{
    return this.http.post<string>(this.apiUrl+"stocks/purchasemutualfunds",purchasedMF);
  }

  withdrawMutualFunds(purchasedMF:PurchasedMutualFunds[]):Observable<string>{
    return this.http.post<string>(this.apiUrl+"stocks/withdrawmutualfunds",purchasedMF);
  }
  saveFixDep(fixDep: FixedDeposit):Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl+"deposit/submit/fd",fixDep);
  }
  saveRecDep(recDep:RecurringDeposit):Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl+"deposit/submit/rd",recDep);
  }
  getAllInvestments(userId:number):Observable<Portfolio>{
    const url = `${this.apiUrl}portfolio/`+userId;
    return this.http.get<Portfolio>(url);
  }
  
  saveFrb(frb: FloatingRateBonds):Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl+"bonds/submit/frd",frb);
  }
  saveSgb(sgb: SovereignGoldBonds):Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl+"bonds/submit/sgb",sgb);
  }
 
}
