import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.page.html',
  styleUrls: ['./acerca.page.scss'],
})
export class AcercaPage implements OnInit {

  constructor(public alertCtrl: AlertController) { }
  async verAlerta(){
    const alert = await this.alertCtrl.create({
      header: 'Integrantes',
      subHeader: 'N OS',
      message: 'Hector Navarro - Luis Sánchez',
      buttons: ['ACEPTAR']
    });
    alert.present();
  }

  ngOnInit() {
  }

}
