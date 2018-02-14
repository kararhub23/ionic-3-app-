import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  name;
  lname;
  age;
  dept;
 peoplelist : AngularFireList<any>
    constructor(public k26:AngularFireAuth,public db:AngularFireDatabase,public navCtrl: NavController) {

      k26.auth.onAuthStateChanged(function(user){

        if(!user){
          navCtrl.setRoot(LoginPage)
        }
      });


  this.peoplelist = db.list('/people')
  }
    createperson(name,lname,age,dept){
    alert( name + dept);
    this.navCtrl.setRoot(HomePage,
      {
        name:name,
        lname:lname,
        age:age,
        dept:dept,
      }
  );
    this.peoplelist.push({
      "name":name,
      "lname":lname,
      "age":age,
      "dept":dept,
    }).then(newperson =>{
      this.navCtrl.push(HomePage)
    },error=>{console.log(error);});
  }

}
