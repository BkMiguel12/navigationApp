import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SecundariaPage } from '../index.paginas';

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  secundaria:any = SecundariaPage;

  constructor(public navCtrl:NavController){}

  navegarPagina(){
    this.navCtrl.push(SecundariaPage);
  }
}