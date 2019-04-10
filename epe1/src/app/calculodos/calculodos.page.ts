import { Component, OnInit } from '@angular/core';
import {ToastController} from '@ionic/angular';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-calculodos',
  templateUrl: './calculodos.page.html',
  styleUrls: ['./calculodos.page.scss'],
})
export class CalculodosPage implements OnInit {

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
  EXA: any;
 
  

  total: any;

verResultado(){
  this.total=(parseFloat(this.EPE1)* 0.07 )+ (parseFloat(this.EPE2)*0.14 )+ (parseFloat(this.EPE3)*0.21 ) + (parseFloat(this.EVA1)*0.14 )+  (parseFloat(this.EVA2)*0.14)+ (parseFloat(this.EXA)*0.3);
}

  ngOnInit() {
  }

}