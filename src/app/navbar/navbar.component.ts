import { Component } from '@angular/core';
import { UserinfoComponent } from '../userinfo/userinfo.component';
 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navLinks = [
    {path: '/myportfolio'},
    {path: '/myportfolio'},
    {path: '/myportfolio'},
    {path: '/myportfolio'},
    {path: '/myportfolio'},
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
    { label: 'Mutual Funds', path: '/mfunds' },
    { label: 'My Portfolio', path: '/myportfolio' },
    { path: '/mutualprocess', },
    {path: '/myportfolio'},
    {path: '/myportfolio'},
    {path: '/myportfolio'},
    {path: '/myportfolio'},
    
    { label: 'Login/SignUp', path: '/login-signup' }
  ];
 
}