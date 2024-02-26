import { Component } from '@angular/core';
import { InvestmentappService } from './service/investmentapp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',"../../node_modules/primeng/resources/themes/lara-light-blue/theme.css",
  "../../node_modules/primeng/resources/primeng.min.css"]
})
export class AppComponent {

  isLogin:boolean = false;

  swapLogin(swap:number){
    if(swap===0){
      this.isLogin = true;
    }
    else{
      this.isLogin = false;
    }
  }

}

