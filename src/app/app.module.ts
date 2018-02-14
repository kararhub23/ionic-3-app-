import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import {UpdatapagePage} from '../pages/updatapage/updatapage';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../pages/tabs/tabs';
import { AngularFireDatabaseModule , AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseApp } from '@firebase/app-types';

var config ={
  apiKey: "AIzaSyA9-AXs4mGN2v9_HkznCTw4Cw_c3SwTXb4",
  authDomain: "ionicdb-7b8b6.firebaseapp.com",
  databaseURL: "https://ionicdb-7b8b6.firebaseio.com",
  storageBucket: "ionicdb-7b8b6.appspot.com",
  messagingSenderId: "94791394008"
};
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    UpdatapagePage,
    LoginPage,
    RegisterPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    UpdatapagePage,
    LoginPage,
    RegisterPage,

    TabsPage
  ],
  providers: [
    AngularFireDatabase,
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
