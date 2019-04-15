import { Component, OnInit } from '@angular/core';
import {NavController, ToastController} from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public navCtrl : NavController, public toastCtrl : ToastController) { }
  async verToast(){

    const toast = await this.toastCtrl.create({
      message:"Abriendo 32 horas",
      duration: 10000,
      position: 'bottom'
    });
    toast.present();
  }
  async verToast1(){

    const toast = await this.toastCtrl.create({
      message:"Abriendo 32 horas + examen",
      duration: 10000,
      position: 'bottom'
    });
    toast.present();
  }
  async verToast2(){

    const toast = await this.toastCtrl.create({
      message:"Abriendo 64 horas",
      duration: 10000,
      position: 'bottom'
    });
    toast.present();
  }
  async verToast3(){

    const toast = await this.toastCtrl.create({
      message:"Abriendo 64 horas + examen",
      duration: 10000,
      position: 'bottom'
    });
    toast.present();
  }
  async verToast4(){

    const toast = await this.toastCtrl.create({
      message:"Abriendo 96 horas",
      duration: 10000,
      position: 'bottom'
    });
    toast.present();
  }
  async verToast5(){

    const toast = await this.toastCtrl.create({
      message:"Abriendo 96 horas + examen"  ,
      duration: 10000,
      position: 'bottom'
    });
    toast.present();
  }
  async verToast6(){

    const toast = await this.toastCtrl.create({
      message:"Abriendo 128 horas",
      duration: 10000,
      position: 'bottom'
    });
    toast.present();
  }
  async verToast7(){

    const toast = await this.toastCtrl.create({
      message:"Abriendo 128 horas + examen",
      duration: 10000,
      position: 'bottom'
    });
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


