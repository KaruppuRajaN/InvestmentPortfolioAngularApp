import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 
  navLinks = [
    { label: 'Home', path: '/home' },
    { label: 'Deposits', dropdownItems: [
        { label: 'Fixed Deposit', path: '/deposits/fd' },
        { label: 'Recurring Deposit', path: '/deposits/rd' }
      ]
    },
    { label: 'Gold', path: '/gold' },
    { label: 'Bonds', dropdownItems: [
      { label: 'Soveriegn Gold Bond', path: '/bonds/sgb' },
      { label: 'Floating Rate Bond', path: '/bonds/frb' }
      ]
    },
    { label: 'Mutual Funds', dropdownItems: [
      { label: 'Buy Mutual funds', path: '/mfunds/buy' },
      { label: 'Display Mutual Funds', path: '/mfunds/show' },
      { label: 'Own Mutual Funds', path: '/mfunds/own' }
      ]
    },
  ];
}
