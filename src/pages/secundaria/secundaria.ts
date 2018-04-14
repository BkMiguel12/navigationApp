import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TerciariaPage } from '../index.paginas';

@Component({
  selector: 'page-secundaria',
  templateUrl: 'secundaria.html',
})
export class SecundariaPage {

  terciaria:any = TerciariaPage;
  juegos:any[] = [
    {
      nombre: 'Call of duty 4: Modern Warfare',
      genero: 'First Person Shooter',
      img: 'cod4.jpg'
    },
    {
      nombre: 'Assasins Creed: Brotherhood',
      genero: 'Accion y aventura',
      img: 'ac.jpg'
    },
    {
      nombre: 'Dark Souls 3',
      genero: 'Role Playing Game',
      img: 'ds3.jpg'
    },
    {
      nombre: 'Red Dead Redemption',
      genero: 'Western SandBox',
      img: 'rdd.jpg'
    }
  ];

  constructor(public navCtrl:NavController, public navParams:NavParams){}

  paginaTerciaria(juego:any){
    console.log(juego);

    this.navCtrl.push(TerciariaPage, {"videojuego":juego});
  }
}
