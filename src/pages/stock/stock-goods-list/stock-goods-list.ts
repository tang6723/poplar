import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {StockGoods} from '../stock-goods/stock-goods';

/*
  Generated class for the StockGoodsList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-stock-goods-list',
  templateUrl: 'stock-goods-list.html'
})
export class StockGoodsList {

  myIcon: string = "md-ionic";
  items: string[];

  billTime1: string = "商品类";
  billTime2: string = "费用类";

  goodsItems1: any = [
    {goodsstate: '上架', id: '123456', name: '商品1', price: 200.00, num: 3, specification: '规格33MM'},
    {goodsstate: '上架', id: '123457', name: '商品2', price: 1120.00, num: 9, specification: '规格66MM'},
    {goodsstate: '下架', id: '123458', name: '商品3', price: 280.00, num: 6, specification: '规格40MM'},
    {goodsstate: '上架', id: '123459', name: '商品4', price: 2450.23, num: 15, specification: '规格20MM'},
    {goodsstate: '上架', id: '123460', name: '商品5', price: 900, num: 30, specification: '规格10MM'}
  ];

  goodsItems2: any = [
    {goodsstate: '上架', id: '654321', name: '运输费', price: 200.00, num: 3, specification: '说明1'},
    {goodsstate: '上架', id: '654322', name: '安装费', price: 1120.00, num: 9, specification: '说明2'},
    {goodsstate: '上架', id: '654323', name: '莫名其妙费', price: 280.00, num: 6, specification: '说明3'},
  ];

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('Hello StockGoodsList Page');
  }

  editGoods(item: any) {
    this.navCtrl.push(StockGoods, {"item": item});
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
