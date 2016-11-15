import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CustomerList} from '../customer-list/customer-list';

declare var hprose;
/*
  Generated class for the Customer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html'
})
export class Customer {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Customer Page');
  }

  popCustomerList()
  {
    this.navCtrl.push(CustomerList, {});
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
