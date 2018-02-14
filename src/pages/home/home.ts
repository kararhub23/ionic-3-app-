import { AboutPage } from '../about/about';
import { Component } from '@angular/core';
import { AngularFireDatabase ,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { NavController, NavParams } from 'ionic-angular';
import {UpdatapagePage} from '../updatapage/updatapage';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name;
  lname;
  age;
  dept;
  kk: AngularFireList<any>;
  persons : Observable<any[]>;
  constructor(public k25:AngularFireAuth ,public db:AngularFireDatabase,public NavP:NavParams,public navCtrl: NavController) {

    k25.auth.onAuthStateChanged(function(user){

      if(!user){
        navCtrl.setRoot(LoginPage)
      }
    });

    this.name=this.NavP.get("name");
    this.lname=this.NavP.get("lname");
    this.age=this.NavP.get("age");
    this.dept=this.NavP.get("dept");

    this.kk=db.list('/people');

    this.persons = this.kk.snapshotChanges().map(changes => {
      return changes.map(c => ({
         key: c.payload.key,
         name:c.payload.val().name,
         lname:c.payload.val().lname,
         age:c.payload.val().age,
        dept:c.payload.val().dept
         })
      );
    });
  }
  delete11(key , name , lname ){
    alert( "Delete - "  + name +" "+ lname );
    this.kk.remove(key)
  }
  update(key,name , lname , age , dept){
    //للتاكد من اخذ المتغيرات في   console.log(id,name , lname , age , dept);
   this.navCtrl.push(UpdatapagePage,
     {
       "key":key,
       "name":name,
       "lname":lname,
       "age":age,
       "dept":dept
    }
    );
  }
}

