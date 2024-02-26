import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MutualFunds } from '../model/mutualfunds';
import { PurchasedMutualFunds } from '../model/purchasedmutualfunds';

@Injectable({
  providedIn: 'root'
})
export class InvestmentappService {

  private apiUrl='http://localhost:8090/'

  constructor(private http:HttpClient) { }

  investorLogin(credentials:{username:string, password:string}){
    return this.http.post(this.apiUrl+"/login",credentials);
  }

  getAllMutualFunds(FilterMutualFundOptions:{capsCategory:string,riskCategory:string,paymentAmount:number}):Observable<MutualFunds[][]>{
    return this.http.post<MutualFunds[][]>(this.apiUrl+"stocks/mutualfunds",FilterMutualFundOptions);
  }

  purchaseMutualFunds(purchasedMF:PurchasedMutualFunds[]):Observable<string>{
    return this.http.post<string>(this.apiUrl+"stocks/purchasemutualfunds",purchasedMF);
  }
  
}
