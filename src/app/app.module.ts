import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { AjustesPage, 
        Ajustes2Page, 
        ModalPage, 
        PrincipalPage, 
        SecundariaPage, 
        TabsPage, 
        TerciariaPage } from './../pages/index.paginas';

@NgModule({
  declarations: [
    MyApp,
    AjustesPage, 
    Ajustes2Page, 
    ModalPage, 
    PrincipalPage, 
    SecundariaPage, 
    TabsPage, 
    TerciariaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Atrás'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AjustesPage, 
    Ajustes2Page, 
    ModalPage, 
    PrincipalPage, 
    SecundariaPage, 
    TabsPage, 
    TerciariaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
