import { HttpClient, HttpHeaders } from '@angular/common/http';
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
import { GoldInvestment } from '../model/GoldInvestment';

@Injectable({
  providedIn: 'root'
})
export class InvestmentappService {


  private apiUrl='http://localhost:8090/';

  constructor(private http:HttpClient) { }

  investorSignUp(userSignUp: UserProfile):Observable<any> {
    return this.http.post<any>(this.apiUrl+"user/signup",userSignUp);
  }

  investorDetails(user:UserProfile):Observable<any>{
    return this.http.get<any>(this.apiUrl+"user/profile/"+user.userId);
  }

  investorLogin(user:UserProfile):Observable<any>{
    return this.http.post<any>(this.apiUrl+"user/login",user);
  }


  forgotPassword(user: UserProfile):Observable<any> {
    return this.http.put<any>(this.apiUrl+"user/forgotPassword",user);
  }

  updatePassword(user: UserProfile):Observable<any> {
    return this.http.put<any>(this.apiUrl+"user/updatePassword",user);
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
  saveGoldInv(gold: GoldInvestment):Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl+"gold/buy",gold);
  }
  getAllInvestments(userId:number):Observable<Portfolio>{
    const url = `${this.apiUrl}portfolio/`+userId;
    console.log(url);
    return this.http.get<Portfolio>(url);
  }
  
  saveFrb(frb: FloatingRateBonds):Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl+"bonds/submit/frd",frb);
  }
  saveSgb(sgb: SovereignGoldBonds):Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl+"bonds/submit/sgb",sgb);
  }
  getValues():Observable<FloatingRateBonds> {
    return this.http.get<FloatingRateBonds>("http://localhost:8085/apiprovider/floatingratebonds");
  }
 
  getGoldPrice():Observable<any> {
   
    const headers = new HttpHeaders({
      'x-access-token': 'goldapi-19kw691slt708kk5-io',
      'Content-Type': 'application/json'
    });

    const requestOptions = {
      headers: headers
    };

    return this.http.get("https://www.goldapi.io/api/XAU/INR/20240228", requestOptions);
      
  }
 
}
