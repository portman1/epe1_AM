import { Component, OnInit } from '@angular/core';
import {NavController, ToastController} from '@ionic/angular';
@Component({
  selector: 'app-acercados',
  templateUrl: './acercados.page.html',
  styleUrls: ['./acercados.page.scss'],
})
export class AcercadosPage implements OnInit {

  constructor(public navCtrl : NavController) { }

  ngOnInit() {
  }
  irCalculo(){
    this.navCtrl.navigateForward('acercados');
  }
}
