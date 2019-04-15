import { Component, OnInit } from '@angular/core';
import {ToastController, AlertController} from '@ionic/angular';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-calculodos',
  templateUrl: './calculodos.page.html',
  styleUrls: ['./calculodos.page.scss'],
})
export class CalculodosPage implements OnInit {

  constructor(public toastCtrl : ToastController,
    public navCtrl : NavController,
    public alertCtrl: AlertController) { }
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

  async verResultado(){
  this.total=(parseFloat(this.EPE1)* 0.07 )+ (parseFloat(this.EPE2)*0.14 )+ (parseFloat(this.EPE3)*0.21 ) + (parseFloat(this.EVA1)*0.14 )+  (parseFloat(this.EVA2)*0.14)+ (parseFloat(this.EXA)*0.3);
  
  var prom = this.total.toString();
  var redondeo = prom.substring(3,4);
  var redondeado = parseInt(redondeo);
  if (redondeado < 5){
    prom = prom.substring(0,3);
    this.total = parseFloat(prom);

  }else{
    if (redondeado >=5){
      prom = prom.substring(0,3);
      var n = parseFloat(prom);
      n = n + 0.1;
      this.total = n;
    }
  }

  this.total = this.total
  if(this.total>=4){
    const alert = await this.alertCtrl.create({
      header: 'Aprobado',
      message: 'Su promedio es: ' + this.total,
      buttons: ['aceptar']
  });
  alert.present();
  }else{
    const alert = await this.alertCtrl.create({
      header: 'Reprobado',
      message: 'Su promedio es: ' + this.total,
      buttons: ['aceptar']
    });
    alert.present();
  }
}
buttonReset() {
  this.EPE1 = [];
  this.EPE2 = [];
  this.EPE3 = [];
  this.EVA1 = [];
  this.EVA2 = [];
  this.EXA = [];
}



  ngOnInit() {
  }

}
