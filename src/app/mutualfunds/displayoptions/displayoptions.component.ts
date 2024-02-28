import { Component } from '@angular/core';
import { UserinfoComponent } from '../../userinfo/userinfo.component';

@Component({
  selector: 'app-displayoptions',
  templateUrl: './displayoptions.component.html',
  styleUrl: './displayoptions.component.css'
})
export class DisplayoptionsComponent {
  walletBalance:number=UserinfoComponent.user.walletBalance;;
  ngOnInit(){
    this.walletBalance=UserinfoComponent.user.walletBalance;
  }

  
  changePageToMyMf:boolean=false;
  buyButton:boolean=true;
  mymfButton:boolean=false;
  changeOptions(id:number):void{
    if(id==1){
      this.buyButton=true;
      this.mymfButton=false;
    }
    if(id==2){
      this.buyButton=false;
      this.mymfButton=true;
    }
    this.walletBalance=UserinfoComponent.user.walletBalance;
  }
  reloadComponentForShowingMyMF(value:boolean){
    this.buyButton=false;
    this.mymfButton=true;
    this.walletBalance=UserinfoComponent.user.walletBalance;
  }



}
