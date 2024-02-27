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
UserinfoComponent: any;
  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('Navigation is starting');
      }
    });
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
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      const user = navigation.extras.state['user'];
      console.log(user); // Check if user object is logged correctly
    } else {
      console.log('Route state is not available');
    }

  }

}
