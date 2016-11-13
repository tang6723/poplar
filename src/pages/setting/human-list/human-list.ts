import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { HumanPage } from '../human/human';

/*
  Generated class for the HumanList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-human-list',
  templateUrl: 'human-list.html'
})
export class HumanList {

  items:any = [
    {id:"111", name:"资源名称1", price:"200", fenlei: "咨询、中介", remark: "说明"},
    {id:"222", name:"资源名称2", price:"210", fenlei: "安装、质检", remark: "说明"},
    {id:"333", name:"资源名称3", price:"220", fenlei: "修理", remark: "说明"},
    {id:"444", name:"资源名称4", price:"230", fenlei: "制造", remark: "说明"},
    {id:"555", name:"资源名称5", price:"240", fenlei: "运输、装卸、包装", remark: "说明"},
    {id:"666", name:"资源名称6", price:"250", fenlei: "修理", remark: "说明"},
    {id:"777", name:"资源名称7", price:"260", fenlei: "安装、质检", remark: "说明"},
    {id:"888", name:"资源名称8", price:"270", fenlei: "咨询、中介", remark: "说明"},
    {id:"999", name:"资源名称9", price:"280", fenlei: "运输、装卸、包装", remark: "说明"},
  ];

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('Hello HumanList Page');
  }

  itemSelected(item: any){
    this.navCtrl.push(HumanPage, {});
  }

  EditGoods(item: any) {
    this.navCtrl.push(HumanPage, {"item": item});
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

}
