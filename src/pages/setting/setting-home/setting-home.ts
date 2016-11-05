import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {CustomerList} from '../customer-list/customer-list';
import {EmployeeList} from '../employee-list/employee-list';
import {EventsList} from '../events-list/events-list';
import {GoodsList} from '../goods-list/goods-list';
import {HumanList} from '../human-list/human-list';
import {ReportAsset} from '../report-asset/report-asset';
import {ReportBalance} from '../report-balance/report-balance';
import {ReportIncome} from '../report-income/report-income';
import {ReportPayout} from '../report-payout/report-payout';
import {ReportProfit} from '../report-profit/report-profit';

/*
  Generated class for the SettingHome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-setting-home',
  templateUrl: 'setting-home.html'
})
export class SettingHome {

  goodsPage=GoodsList;
  customerPage=CustomerList;
  employeePage=EmployeeList;
  eventsPage=EventsList;
  humanPage=HumanList;
  reportAssetPage=ReportAsset;
  reportBalancePage=ReportBalance;
  reportProfitPage=ReportProfit;
  reportIncomePage=ReportIncome;
  reportPayoutPage=ReportPayout;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SettingHome Page');
  }

}
