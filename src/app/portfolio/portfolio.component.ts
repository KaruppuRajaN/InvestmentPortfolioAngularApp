import { Component } from '@angular/core';
import { Portfolio } from '../model/Portfolio';
import { InvestmentappService } from '../service/investmentapp.service';
import { Router } from '@angular/router';
import { UserinfoComponent } from '../userinfo/userinfo.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  emptyResult:boolean=false;


  portfolio:Portfolio = new Portfolio(); 
  userdetails:any=[];
  goldinv:any=[];
  fixed:any=[];
  recurring:any=[];
  ratebond:any=[];
  goldbond:any=[];
  
 
  constructor(private service:InvestmentappService, private router: Router) {
    
  }

  ngOnInit():void{
    this.portfolio.user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.portfolio.user.userId);
    this.service.getAllInvestments(this.portfolio.user.userId).subscribe(
      (response) => { 
        console.log(response);
        this.portfolio=response;
        
        this.userdetails=this.portfolio.user;
        this.fixed=this.portfolio.fixedDeposists;
        this.recurring=this.portfolio.recurringDeposits
        this.goldinv=this.portfolio.golds;
        this.ratebond=this.portfolio.floatingRateBonds;
        this.goldbond=this.portfolio.sovereignGoldBonds;
        
        }
    );
  }
}
