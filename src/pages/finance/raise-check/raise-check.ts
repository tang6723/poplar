import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';

/*
  Generated class for the RaiseCheck page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-raise-check',
  templateUrl: 'raise-check.html'
})
export class RaiseCheck {

  constructor(public navCtrl: NavController ,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello RaiseCheck Page');
  }
  dismiss(){
    let data={'foo':'bar'};
    this.viewCtrl.dismiss(data);
  }

}
