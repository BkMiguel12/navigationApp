import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-terciaria',
  templateUrl: 'terciaria.html',
})
export class TerciariaPage {

  juego:any = {};

  constructor(private navParams:NavParams){

    this.juego = this.navParams.get("videojuego");
    console.log(this.juego);
  }
}
