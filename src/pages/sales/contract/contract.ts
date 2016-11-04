import { Component } from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';

import {ContractGoods} from '../contract-goods/contract-goods';
import {AppGlobal} from '../../../providers/app-global';

/*
  Generated class for the Contract page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contract',
  templateUrl: 'contract.html'
})
export class Contract {

  billid:string="#201609040008";
  billstate:string="草案";
  billtotal:string ="30，380.00";
  freight:string ="0.00";
  dateissue:string ="2016年9月3日";
  customer:string ="鞍山矿业集团有限公司";
  contacts:string="韦小宝";
  telephone:string ="13599915899";
  customeraddress:string ="辽宁省鞍山市铁东区湖南街34号";
  customerList; any;
  typeTmp: string;
  tracfficCost:string="2450.23";
  installCost:string="900";

  isBill:boolean=false;
  isCheck:boolean=false;
  isCharging:boolean=false;
  isStock:boolean=false;
  isTraffic:boolean=false;
  isInstall:boolean=false;
  isRaise:boolean=false;
  isSetting:boolean=false;
  appInstance:AppGlobal;

   items: any = [
    {imgurl: 'ios-flag-outline',id: '123456', name: '商品1', price: 200.00, num: 3, specification: '规格33MM'},
    {imgurl: 'ios-flame-outline',id: '123457', name: '商品2', price: 1120.00, num: 9, specification: '规格66MM'},
    {imgurl: 'ios-flash-outline',id: '123458', name: '商品3', price: 280.00, num: 6, specification: '规格40MM'},
    {imgurl: 'ios-flash-outline',id: '123459', name: '运费', price: 2450.23, num: 15, specification: '货物运输费'},
    {imgurl: 'ios-flash-outline',id: '123460', name: '安装费', price: 900, num: 30, specification: '现场安装费'}
  ];

  constructor(public navCtrl: NavController ,public modalCtrl: ModalController) {
    this.appInstance=AppGlobal.getInstance();
    this.isBill=this.appInstance.isBill;
    this.isCheck=this.appInstance.isCheck;
    this.isCharging=this.appInstance.isCharging;
    this.isStock=this.appInstance.isStock;
    this.isTraffic=this.appInstance.isTraffic;
    this.isInstall=this.appInstance.isInstall;
    this.isRaise=this.appInstance.isRaise;
    this.isSetting=this.appInstance.isSetting;
  }

  ionViewDidLoad() {
    console.log('Hello Contract Page');
  }

  presentGoodsModal(){
    let modal=this.modalCtrl.create(ContractGoods);
    modal.present();

  }

}
