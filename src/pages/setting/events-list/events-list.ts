import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the EventsList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-events-list',
  templateUrl: 'events-list.html'
})
export class EventsList {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello EventsList Page');
  }

}
