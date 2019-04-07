import { Component, OnInit } from '@angular/core';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-cien',
  templateUrl: './cien.page.html',
  styleUrls: ['./cien.page.scss'],
})
export class CienPage implements OnInit {

  constructor(public toastCtrl : ToastController) { }
  EPE1: any;
  EPE2: any;
  EPE3: any;
  EPE4: any;
  EVA1: any;
  EVA2: any;
  EVA3: any;
  EVA4: any;
  
  
  EXA: any;

  total: any;

verResultado(){
  this.total=(parseFloat(this.EPE1)* 0.07 )+ (parseFloat(this.EPE2)*0.105 )+ (parseFloat(this.EPE3)*0.175 ) +(parseFloat(this.EPE4)*0.175 ) + (parseFloat(this.EVA1)*0.035 )+  (parseFloat(this.EVA2)*0.035)+(parseFloat(this.EVA3)*0.035)+(parseFloat(this.EVA4)*0.07)+ (parseFloat(this.EXA)*0.30);
}


  ngOnInit() {
  }

}
