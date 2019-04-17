import { Component } from '@angular/core';
import {NavController, AlertController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
constructor(public navCtrl : NavController,
  public alertCtrl: AlertController,
  public toastCtrl: ToastController){}
  irMenu(){
    this.navCtrl.navigateForward('menu');

  }

  IrAcerca(){
    this.navCtrl.navigateForward('acercados');
  }

  async verAlerta(){
    const alert = await this.alertCtrl.create({
      header: 'Integrantes',
      subHeader: 'IPCHILE',
      message: 'Hector Navarro - Luis Sánchez',
      buttons: ['ACEPTAR']
    });
    alert.present();
  }
  async verToast(){

    const toast = await this.toastCtrl.create({
      message:"Bienvenido al Menú de notas",
      duration: 1000,
      position: 'bottom'
    });

    toast.present();
  }
  async verToast1(){

    const toast = await this.toastCtrl.create({
      message:"Abriendo Integrantes",
      duration: 1000,
      position: 'bottom'
    });

    toast.present();
  }
  
}

