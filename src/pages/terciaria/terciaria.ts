import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

@Component({
  selector: 'page-terciaria',
  templateUrl: 'terciaria.html',
})
export class TerciariaPage {

  juego:any = {};

  constructor(private navParams:NavParams, private navCtrl:NavController){

    this.juego = this.navParams.get("videojuego");
    console.log(this.juego);
  }

  irAtras(){
    this.navCtrl.pop();
  }

  irHome(){
    this.navCtrl.popToRoot();
  }
}
