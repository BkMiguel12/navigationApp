import { Component } from '@angular/core';
import {  NavController, NavParams, ModalController } from 'ionic-angular';

import { ModalPage } from '../index.paginas';

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl:ModalController) {
  }

  irTabHome(){
    this.navCtrl.parent.select(0);
  }

  openModal(){
    let modal = this.modalCtrl.create(ModalPage, {nombre: 'Miguel', edad: 22});

    modal.present();

    modal.onDidDismiss( datos => {

      if(datos){
        console.log('Informacion del usuario:');
        console.log(datos);
      }
      else{
        console.log('Se cerro el modal sin parametros');
      }
    });
  }
}
