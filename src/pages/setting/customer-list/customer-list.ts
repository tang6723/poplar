import { Component } from '@angular/core';
import { NavController,  AlertController } from 'ionic-angular';

import {Customer} from '../customer/customer';

declare var hprose;
/*
  Generated class for the CustomerList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-customer-list',
  templateUrl: 'customer-list.html'
})
export class CustomerList {

  items:any =
    [
      {id:"111", name:"客户1", address: "北京长安街1号", person: "张三", phone: "1234567", remark: "说明"},
      {id:"222", name:"客户2", address: "北京长安街2号", person: "李四", phone: "1234567", remark: "说明"},
      {id:"333", name:"客户3", address: "北京长安街3号", person: "王五", phone: "1234567", remark: "说明"},
      {id:"444", name:"客户4", address: "北京长安街4号", person: "赵六", phone: "1234567", remark: "说明"}
    ];

  constructor(public navCtrl: NavController, private alertCtrl:AlertController) {}

  ionViewDidLoad() {
    console.log('Hello CustomerList Page');
  }

  EditGoods(item: any) {
    this.navCtrl.push(Customer, {"item": item});
  }

  DeleteGoods(item: any) {
    let alert = this.alertCtrl.create({
      title: '您确定要删除这条商品吗？',
      buttons: [
        {
          text: '不删除',
          role: 'cancel',
          handler: () => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: '删除',
          handler: data => {
            //this.items.remove(d=>d.id  = data.id);
            for (var i = 0; i < this.items.length; i++) {
              if (this.items[i].id == item.id) {
                this.items = this.items.slice(0, i).concat(this.items.slice(i + 1, this.items.length));
              }
            }
          }
        }
      ]
    });
    alert.present();
  }

  addCustomer()
  {
    this.navCtrl.push(Customer, {});
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
