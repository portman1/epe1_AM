import { Component, OnInit } from '@angular/core';
import {ToastController} from '@ionic/angular';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-ccalculo2',
  templateUrl: './ccalculo2.page.html',
  styleUrls: ['./ccalculo2.page.scss'],
})
export class Ccalculo2Page implements OnInit {

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
  EXA: any;
  
  total: any;

  verResultado(){
    this.total=(parseFloat(this.EPE1)* 0.07 )+ (parseFloat(this.EPE2)*0.105 )+ (parseFloat(this.EPE3)*0.175 ) + (parseFloat(this.EPE4)*0.175 )+ (parseFloat(this.EVA1)*0.035 )+  (parseFloat(this.EVA2)*0.035)+ (parseFloat(this.EVA3)*0.035)+ (parseFloat(this.EVA4)*0.07)+(parseFloat(this.EXA)*0.3);

    var prom = this.total.toString();
    var redondeo = prom.substring(3,4);
    var redondeado = parseInt(redondeo);
    if (redondeado <5) {
      prom = prom.substring(0,3);
      this.total = parseFloat(prom);

    }else{
      if(redondeado >=5){
        prom = prom.substring(0,3);
        var n = parseFloat(prom);
        n = n +0.1;
        this.total = n;
      }
    }
  }

  ngOnInit() {
  }

}
