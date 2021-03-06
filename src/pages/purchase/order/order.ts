import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import {OrderGoods} from '../order-goods/order-goods';
import {OrderSupplier} from '../order-supplier/order-supplier';
import {OrderTimeline} from '../order-timeline/order-timeline';
import {AppGlobal} from '../../../providers/app-global';

declare var hprose;
/*
  Generated class for the Order page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})
export class Order {

  billid:string="#201609040008";
  billstate:string="草案";
  billtotal:number =30380.00;
  freight:string ="0.00";
  dateissue:string ="2016年9月3日";
  customerId = '2';
  customer:string ="鞍山矿业集团有限公司";
  contacts:string="韦小宝";
  telephone:string ="13599915899";
  customeraddress:string ="辽宁省鞍山市铁东区湖南街34号";
  customerList; any;
  typeTmp: string;
  tracfficCost:number=2450;
  installCost:number=900;

  isBill:boolean=true;
  isCheck:boolean=true;
  isCharging:boolean=true;
  isStock:boolean=true;
  isTraffic:boolean=true;
  isInstall:boolean=true;
  isRaise:boolean=true;
  isSetting:boolean=true;
  appInstance:AppGlobal;

  items: any = [
    {imgurl: 'ios-flag-outline',id: '123456', name: 'Apple MacBook Air 13.3英寸笔记本电脑 ', price: 200.00, num: 3, specification: '规格13.3英寸笔记本'},
    {imgurl: 'ios-flame-outline',id: '123457', name: 'Apple MacBook Air ', price: 1120.00, num: 9, specification: '规格13.3英寸笔记本'},
    {imgurl: 'ios-flash-outline',id: '123458', name: '商品3 Apple MacBook Air ', price: 280.00, num: 6, specification: '规格13.3英寸笔记本'},
    {imgurl: 'ios-flash-outline',id: '123459', name: 'Apple MacBook Air ', price: 2450.23, num: 15, specification: '规格13.3英寸笔记本'},
    {imgurl: 'ios-flash-outline',id: '123460', name: 'Apple MacBook Air ', price: 900, num: 30, specification: '规格13.3英寸笔记本'}
  ];

  constructor(public navCtrl: NavController ,public modalCtrl: ModalController) {
    this.appInstance=AppGlobal.getInstance();
    /*
    this.isBill=this.appInstance.isBill;
    this.isCheck=this.appInstance.isCheck;
    this.isCharging=this.appInstance.isCharging;
    this.isStock=this.appInstance.isStock;
    this.isTraffic=this.appInstance.isTraffic;
    this.isInstall=this.appInstance.isInstall;
    this.isRaise=this.appInstance.isRaise;
    this.isSetting=this.appInstance.isSetting;
    */
  }

  ionViewDidLoad() {
    console.log('Hello Contract Page');
  }

  presentCustomerModal(){
    let modal=this.modalCtrl.create(OrderSupplier,{ 'customerId': this.customerId });
    modal.onDidDismiss(data => {
      this.customerId=data.customerIdParam;
      this.customer=data.customerParam;
      this.contacts=data.contactsParam;
      this.telephone=data.telephoneParam;
      this.customeraddress=data.customeraddressParam;

      console.log(data.customerParam);
    });
    modal.present();

  }

  presentGoodsModal(){
    let modal=this.modalCtrl.create(OrderGoods);
    modal.present();

  }

  presentContractTimelineModal(mytype:string) {
    /*
     this.typeTmp=mytype;
     let modal=this.modalCtrl.create(ContractTimeline,{
     id:this.billid,
     type:this.typeTmp
     });
     console.log(this.typeTmp);
     modal.present();
     */
    this.typeTmp=mytype;
    this.navCtrl.push(OrderTimeline, {
      id: this.billid,
      type: this.typeTmp

    });
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
