import { Component } from '@angular/core';

@Component({
  selector: 'app-displayoptions',
  templateUrl: './displayoptions.component.html',
  styleUrl: './displayoptions.component.css'
})
export class DisplayoptionsComponent {

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
  }
  reloadComponentForShowingMyMF(value:boolean){
    console.log("kasias");
    this.buyButton=false;
    this.mymfButton=true;
  }



}
