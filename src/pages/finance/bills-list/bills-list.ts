import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Bills} from '../bills/bills';

declare var hprose;
/*
  Generated class for the BillsList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bills-list',
  templateUrl: 'bills-list.html'
})
export class BillsList {
  myIcon: string = "md-ionic";
  items: string[];

  charging: string = "contract";

  billTime1:string="2016年9月";
  billTime2:string="2016年8月";
  billTime3:string="2016年7月";
  billTime4:string="2016年6月";

  contractitems1: any = [
    {imgurl: 'ios-flag-outline', id: '123456', customer: '鞍山矿业集团有限公司',billno: '#201609040008', dateissue: '09-04', billstate: '草案',total: 30080  },
    {imgurl: 'ios-flame-outline',id: '123457', customer: '鞍山公交公司',billno: '#201609040007', dateissue: '09-04', billstate: '执行',total: 30080  },
    {imgurl: 'ios-flash-outline',id: '123458', customer: '鞍山一中',billno: '#201609040006', dateissue: '09-04', billstate: '审核',total: 30080  },
    {imgurl: 'ios-flash-outline',id: '123459', customer: '鞍山矿业集团有限公司',billno: '#201609040005', dateissue: '09-04', billstate: '审核',total: 30080  },
    {imgurl: 'ios-flash-outline',id: '123460', customer: '鞍山一中',billno: '#201609040004', dateissue: '09-04', billstate: '结账',total: 30080  }
  ];

  contractitems2: any = [
    {imgurl: 'ios-flag-outline', id: '123456', customer: '鞍山一中',billno: '#201608040008', dateissue: '08-04', billstate: '草案',total: 30080 },
    {imgurl: 'ios-flame-outline',id: '123457', customer: '鞍山矿业集团有限公司',billno: '#201608040007', dateissue: '08-04', billstate: '执行',total: 30080 },
    {imgurl: 'ios-flash-outline',id: '123458', customer: '鞍山公交公司',billno: '#201608040006', dateissue: '08-04', billstate: '审核',total: 30080 },
    {imgurl: 'ios-flash-outline',id: '123459', customer: '鞍山矿业集团有限公司',billno: '#201608040005', dateissue: '08-04', billstate: '审核',total: 30080 },
    {imgurl: 'ios-flash-outline',id: '123460', customer: '鞍山一中',billno: '#201608040004', dateissue: '08-04', billstate: '结账',total: 30080 }
  ];

  orderitems1: any = [
    {imgurl: 'ios-flag-outline', id: '123456', customer: '江苏木业公司',billno: '#201609040008', dateissue: '09-04', billstate: '草案',total: 30080  },
    {imgurl: 'ios-flame-outline',id: '123457', customer: '王老吉凉茶叶',billno: '#201609040007', dateissue: '09-04', billstate: '执行',total: 30080  },
    {imgurl: 'ios-flash-outline',id: '123458', customer: '木林森集团',billno: '#201609040006', dateissue: '09-04', billstate: '审核',total: 30080  },
    {imgurl: 'ios-flash-outline',id: '123459', customer: '木林森集团',billno: '#201609040005', dateissue: '09-04', billstate: '审核',total: 30080  },
    {imgurl: 'ios-flash-outline',id: '123460', customer: '王老吉凉茶叶',billno: '#201609040004', dateissue: '09-04', billstate: '结账',total: 30080  }
  ];

  orderitems2: any = [
    {imgurl: 'ios-flag-outline', id: '123456', customer: '王老吉凉茶叶',billno: '#201608040008', dateissue: '08-04', billstate: '草案',total: 30080 },
    {imgurl: 'ios-flame-outline',id: '123457', customer: '江苏木业公司',billno: '#201608040007', dateissue: '08-04', billstate: '执行',total: 30080 },
    {imgurl: 'ios-flash-outline',id: '123458', customer: '王老吉凉茶叶',billno: '#201608040006', dateissue: '08-04', billstate: '审核',total: 30080 },
    {imgurl: 'ios-flash-outline',id: '123459', customer: '木林森集团',billno: '#201608040005', dateissue: '08-04', billstate: '审核',total: 30080 },
    {imgurl: 'ios-flash-outline',id: '123460', customer: '江苏木业公司',billno: '#201608040004', dateissue: '08-04', billstate: '结账',total: 30080 }
  ];

  expenseitems1: any = [
    {imgurl: 'ios-flag-outline', id: '123456', customer: '王宝强',billno: '出差报销', dateissue: '09-04', billstate: '草案',total: 30080  },
    {imgurl: 'ios-flame-outline',id: '123457', customer: '微小宝',billno: '水电费', dateissue: '09-04', billstate: '执行',total: 30080  },
    {imgurl: 'ios-flash-outline',id: '123458', customer: '马蓉',billno: '出差报销', dateissue: '09-04', billstate: '审核',total: 30080  },
    {imgurl: 'ios-flash-outline',id: '123459', customer: '王宝强',billno: '加班费', dateissue: '09-04', billstate: '审核',total: 30080  },
    {imgurl: 'ios-flash-outline',id: '123460', customer: '微小宝',billno: '水电费', dateissue: '09-04', billstate: '结账',total: 30080  }
  ];

  expenseitems2: any = [
    {imgurl: 'ios-flag-outline', id: '123456', customer: '微小宝',billno: '加班费', dateissue: '08-04', billstate: '草案',total: 30080 },
    {imgurl: 'ios-flame-outline',id: '123457', customer: '王宝强',billno: '房租', dateissue: '08-04', billstate: '执行',total: 30080 },
    {imgurl: 'ios-flash-outline',id: '123458', customer: '马蓉',billno: '出差报销', dateissue: '08-04', billstate: '审核',total: 30080 },
    {imgurl: 'ios-flash-outline',id: '123459', customer: '王宝强',billno: '加班费', dateissue: '08-04', billstate: '审核',total: 30080 },
    {imgurl: 'ios-flash-outline',id: '123460', customer: '微小宝',billno: '水电费', dateissue: '08-04', billstate: '结账',total: 30080 }
  ];

  raiseitems1: any = [
    {imgurl: 'ios-flag-outline', id: '123456', customer: '客户1',billno: '#201609040008', dateissue: '09-04', billstate: '草案',total: 30080  },
    {imgurl: 'ios-flame-outline',id: '123457', customer: '客户2',billno: '#201609040007', dateissue: '09-04', billstate: '执行',total: 30080  },
    {imgurl: 'ios-flash-outline',id: '123458', customer: '客户3',billno: '#201609040006', dateissue: '09-04', billstate: '审核',total: 30080  },
    {imgurl: 'ios-flash-outline',id: '123459', customer: '客户4',billno: '#201609040005', dateissue: '09-04', billstate: '审核',total: 30080  },
    {imgurl: 'ios-flash-outline',id: '123460', customer: '客户5',billno: '#201609040004', dateissue: '09-04', billstate: '结账',total: 30080  }
  ];

  raiseitems2: any = [
    {imgurl: 'ios-flag-outline', id: '123456', customer: '客户1',billno: '#201608040008', dateissue: '08-04', billstate: '草案',total: 30080 },
    {imgurl: 'ios-flame-outline',id: '123457', customer: '客户2',billno: '#201608040007', dateissue: '08-04', billstate: '执行',total: 30080 },
    {imgurl: 'ios-flash-outline',id: '123458', customer: '客户3',billno: '#201608040006', dateissue: '08-04', billstate: '审核',total: 30080 },
    {imgurl: 'ios-flash-outline',id: '123459', customer: '客户4',billno: '#201608040005', dateissue: '08-04', billstate: '审核',total: 30080 },
    {imgurl: 'ios-flash-outline',id: '123460', customer: '客户5',billno: '#201608040004', dateissue: '08-04', billstate: '结账',total: 30080 }
  ];

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello BillsList Page');
  }

  itemSelected(item: any)
  {
    this.navCtrl.push(Bills, {item});
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
