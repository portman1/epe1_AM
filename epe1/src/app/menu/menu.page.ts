import { Component, OnInit } from '@angular/core';
import {NavController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public navCtrl : NavController, toast : ToastController) { }

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

}
