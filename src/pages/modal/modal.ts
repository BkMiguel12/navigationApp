import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  nombre:string = "";
  edad:number= 0;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {

    this.nombre = this.navParams.get('nombre');
    this.edad = this.navParams.get('edad');

    console.log(this.nombre, this.edad);
  }

  closeWithParams(){
    let data = {
      nombre: 'Miguel Mendoza',
      edad: 22,
      profesion: {
        ocupacion: 'Programador',
        lugar: 'Dynos Energy'
      }
    }
    this.viewCtrl.dismiss(data);
  }

  closeWithoutParams(){
    this.viewCtrl.dismiss()
  }

  

}
