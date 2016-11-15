import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var hprose;
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

  ngAfterViewInit(){
    console.time("hprose");
    var client = hprose.Client.create("http://www.hprose.com/example/", ["hello"]);
    client.hello("World!").then(function (result) {
      //alert(result);
      console.info(result);
      console.log(result);
      console.warn(result);
      console.error(result);

    }, function (err) {
      //alert(err);
      console.error(err);
    })
    console.timeEnd("hprose");
  }

}
