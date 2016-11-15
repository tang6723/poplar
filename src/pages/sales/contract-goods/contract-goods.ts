import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';

declare var hprose;
/*
  Generated class for the ContractGoods page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contract-goods',
  templateUrl: 'contract-goods.html'
})
export class ContractGoods {

  items: string[];

  goodsItems: any = [
    {imgurl: 'ios-flag-outline',id: '123456', name: 'Apple MacBook Air 13.3英寸笔记本电脑 ', price: 200.00, num: 3, specification: '规格13.3英寸笔记本'},
    {imgurl: 'ios-flame-outline',id: '123457', name: 'Apple MacBook Air ', price: 1120.00, num: 9, specification: '规格13.3英寸笔记本'},
    {imgurl: 'ios-flash-outline',id: '123458', name: '商品3 Apple MacBook Air ', price: 280.00, num: 6, specification: '规格13.3英寸笔记本'},
    {imgurl: 'ios-flash-outline',id: '123459', name: 'Apple MacBook Air ', price: 2450.23, num: 15, specification: '规格13.3英寸笔记本'},
    {imgurl: 'ios-flash-outline',id: '123460', name: 'Apple MacBook Air ', price: 900, num: 30, specification: '规格13.3英寸笔记本'}
  ];

  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello ContractGoods Page');
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
