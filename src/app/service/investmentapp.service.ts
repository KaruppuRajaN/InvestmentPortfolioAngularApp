import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvestmentappService {

  private apiUrl='http://localhost:8090/user'
  constructor(private http:HttpClient) { }

  investorLogin(credentials:{username:string, password:string}){
    console.log("Ji");
    return this.http.post(this.apiUrl+"/login",credentials);
  }
}
