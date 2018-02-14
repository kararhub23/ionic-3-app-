import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public k25:AngularFireAuth) {

  }
  login(){
        this.navCtrl.push(LoginPage);

      }
      register(){
       this.navCtrl.push(RegisterPage);

      }
      signOut(){
      this.k25.auth.signOut();

      }
}
