import { Component, OnInit } from '@angular/core';
import {NavController, ToastController} from '@ionic/angular';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public navCtrl : NavController, Public toast : ToastController) { }
async verToast(){
  const  toast = await this.navCtrl.create({
    message: 'hola estudiante',
    duration:1000,
    position:'middle'
  })
  toast.present();
}
  ngOnInit() {
  }
  irCalculo(){
    this.navCtrl.navigateForward('calculo');
  }
  IrCalculo2(){
    this.navCtrl.navigateForward('calculodos');
  }
  IrScalculo(){
    this.navCtrl.navigateForward('scalculo');
  }
  IrScalculo2(){
    this.navCtrl.navigateForward('scalculo2');
  }
  IrNcalculo(){
    this.navCtrl.navigateForward('ncalculo');
  }
  IrNcalculo2(){
    this.navCtrl.navigateForward('ncalculo2');
  }
  IrCcalculo(){
    this.navCtrl.navigateForward('ccalculo');
  }
  IrCcalculo2(){
    this.navCtrl.navigateForward('ccalculo2');
  }

}
