import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../model/UserProfile';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { InvestmentappService } from '../service/investmentapp.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrl: './userinfo.component.css'
})
export class UserinfoComponent implements OnInit{


  public static user : UserProfile = new UserProfile();
  userdata: UserProfile;

  constructor() {

  }

  static setUser(userData: UserProfile) {
    console.log(userData);
    UserinfoComponent.user = userData;
  }

  isLogin:boolean = false;

  swapLogin(swap:number){
    if(swap===0){
      this.isLogin = true;
    }
    else{
      this.isLogin = false;
    }
  }
 

  ngOnInit(): void {
    this.userdata = JSON.parse(localStorage.getItem('currentUser'));
  }

}
