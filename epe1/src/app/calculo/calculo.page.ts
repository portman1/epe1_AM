import { Component, OnInit } from '@angular/core';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.page.html',
  styleUrls: ['./calculo.page.scss'],
})
export class CalculoPage implements OnInit {

  constructor(public toastCtrl : ToastController) { }
  EPE1: any;
  EPE2: any;
  EPE3: any;
  EVA1: any;
  EVA2: any;
  EVA3: any;
  EXA: any;

  total: any;

verResultado(){
  this.total=(parseFloat(this.EPE1)* 0.07 )+ (parseFloat(this.EPE2)*0.14 )+ (parseFloat(this.EPE3)*0.21 ) + (parseFloat(this.EVA1)*0.21 )+  (parseFloat(this.EVA2)*0.14)+ (parseFloat(this.EXA)*0.30);
}

  ngOnInit() {
    
  }

}
