import { Component, OnInit } from '@angular/core';
import {ToastController} from '@ionic/angular';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-ccalculo',
  templateUrl: './ccalculo.page.html',
  styleUrls: ['./ccalculo.page.scss'],
})
export class CcalculoPage implements OnInit {

  constructor(public toastCtrl : ToastController,
    public navCtrl : NavController) { }
    irVolver(){
      this.navCtrl.navigateBack('menu');
    }
      
  EPE1: any;
  EPE2: any;
  EPE3: any;
  EPE4: any;
  EVA1: any;
  EVA2: any;
  EVA3: any;
  EVA4: any;
  
  total: any;

  verResultado(){
    this.total=(parseFloat(this.EPE1)* 0.1 )+ (parseFloat(this.EPE2)*0.15 )+ (parseFloat(this.EPE3)*0.25 ) + (parseFloat(this.EPE4)*0.25 )+ (parseFloat(this.EVA1)*0.05 )+  (parseFloat(this.EVA2)*0.05)+ (parseFloat(this.EVA3)*0.05)+ (parseFloat(this.EVA4)*0.1);
  }

  ngOnInit() {
  }

}
