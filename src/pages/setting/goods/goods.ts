import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {StockGoodsList} from "../../stock/stock-goods-list/stock-goods-list";

declare var hprose;
/*
  Generated class for the Goods page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-goods',
  templateUrl: 'goods.html'
})
export class Goods {
  stockGoodsList=StockGoodsList;
  goodsName : String;
  goodsID: String;

  constructor(public navCtrl: NavController) {
    this.goodsName="鼠标";
    this.goodsID="X2130";
  }

  ionViewDidLoad() {
    console.log('Hello Goods Page');
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
