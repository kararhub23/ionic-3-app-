import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase ,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { HomePage } from '../home/home';

/**
 * Generated class for the UpdatapagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-updatapage',
  templateUrl: 'updatapage.html',
})
export class UpdatapagePage {

    key;
    name ;
    lname;
    age;
    dept;

  persons : Observable<any[]>;
  kk: AngularFireList<any>;

  constructor(public db:AngularFireDatabase,public NavP:NavParams,public navCtrl: NavController) {
//constructor(public db:AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.key= this.NavP.get("key")
    this.name=this.NavP.get("name")
    this.lname=this.NavP.get("lname")
    this.age=this.NavP.get("age")
    this.dept=this.NavP.get("dept")
    this.kk=db.list('/people');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatapagePage');
  }
  update( name , lname , age , dept){
    this.kk.update(this.key,{
       "name" :name ,
       "lname":lname,
        "age":age,
       "dept":dept
   }).then(kr=>{
    this.navCtrl.push(HomePage)
  },error=>{console.log(error);});
  }

}
