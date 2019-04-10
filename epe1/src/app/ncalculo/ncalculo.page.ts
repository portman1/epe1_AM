import { Component, OnInit } from '@angular/core';
import {ToastController} from '@ionic/angular';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-ncalculo',
  templateUrl: './ncalculo.page.html',
  styleUrls: ['./ncalculo.page.scss'],
})
export class NcalculoPage implements OnInit {

  constructor(public toastCtrl : ToastController,
    public navCtrl : NavController) { }
    irVolver(){
      this.navCtrl.navigateBack('menu');
    }
      
  EPE1: any;
  EPE2: any;
  EPE3: any;
  EVA1: any;
  EVA2: any;
  EVA3: any;
  
  total: any;

  verResultado(){
    this.total=(parseFloat(this.EPE1)* 0.1 )+ (parseFloat(this.EPE2)*0.2 )+ (parseFloat(this.EPE3)*0.3 ) + (parseFloat(this.EVA1)*0.1 )+  (parseFloat(this.EVA2)*0.1)+ (parseFloat(this.EVA3)*0.2);
  }

  ngOnInit() {
  }

}
