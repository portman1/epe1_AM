import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public navCtrl : NavController) { }

  ngOnInit() {
  }
  irCalculo(){
    this.navCtrl.navigateForward('calculo');
  }
  irSesenta(){
    this.navCtrl.navigateForward('sesenta');
  }
  IrNoventa(){
    this.navCtrl.navigateForward('noventa');
  }
  irCien(){
    this.navCtrl.navigateForward('cien');
  }

}
