import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  email:string = '';
  password:string='';
  constructor(public k22:AngularFireAuth ,public navCtrl: NavController, public navParams: NavParams) {
  }
  myregister(){
    this.k22.auth.createUserWithEmailAndPassword(this.email , this.password).then(user=>{
      alert( " hello you register");
    }).catch(function(error){
      var errorCode=error.code;
      var errorMessage=error.message;
    });
    this.navCtrl.push(HomePage);

   // console.log(this.email + ""+this.password)
  }
}
 /*ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');

    .then(user=>{
      this.navCtrl.push(HomePage);
    });
  }*/
