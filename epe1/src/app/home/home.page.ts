import { Component } from '@angular/core';
import {NavController, AlertController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
constructor(public navCtrl : NavController,
  public alertCtrl: AlertController){}
  irMenu(){
    this.navCtrl.navigateForward('menu');

  }
  async verAlerta(){
    const alert = await this.alertCtrl.create({
      header: 'Integrantes',
      subHeader: 'N OS',
      message: 'Hector Navarro - Luis Sánchez',
      buttons: ['ACEPTAR']
    });
    alert.present();
  }
}

