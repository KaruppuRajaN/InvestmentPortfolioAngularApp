import { Component } from '@angular/core';
import { FloatLabelType } from '@angular/material/form-field';
import { FloatingRateBonds } from '../model/FloatingRateBonds';

@Component({
  selector: 'app-floating-rate-bond',
  templateUrl: './floating-rate-bond.component.html',
  styleUrl: './floating-rate-bond.component.css'
})
export class FloatingRateBondComponent {
  frb: FloatingRateBonds = new FloatingRateBonds(); 


 

}
