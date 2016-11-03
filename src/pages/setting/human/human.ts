import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Human page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-human',
  templateUrl: 'human.html'
})
export class Human {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Human Page');
  }

}
