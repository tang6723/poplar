import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';

/*
  Generated class for the ContractCustomer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contract-customer',
  templateUrl: 'contract-customer.html'
})
export class ContractCustomer {

  items: string[];

  constructor(public navCtrl: NavController ,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello ContractCustomer Page');
  }

  dismiss(){
    let data={'foo':'bar'};
    this.viewCtrl.dismiss(data);
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    //this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
