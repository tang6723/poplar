import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {EmployeeList} from '../employee-list/employee-list';

/*
  Generated class for the Employee page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-employee',
  templateUrl: 'employee.html'
})
export class Employee {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Employee Page');
  }


  pushemployeelist()
  {
    this.navCtrl.push(EmployeeList, {});
  }

}
