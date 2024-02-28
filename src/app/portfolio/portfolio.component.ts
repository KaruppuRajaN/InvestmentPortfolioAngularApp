import { Component } from '@angular/core';
import { Portfolio } from '../model/Portfolio';
import { InvestmentappService } from '../service/investmentapp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  emptyResult:boolean=false;


  portfolio:Portfolio = new Portfolio(); 
 
  constructor(private service:InvestmentappService, private router: Router) {
    
  }

  ngOnInit():void{
    this.service.getAllInvestments(2).subscribe(
      (response) => { 
        console.log(response);
        this.portfolio=response;
        }
    );
  }
}
