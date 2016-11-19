import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//import {isUndefined} from "ionic-angular/util/util";

declare var hprose;

/*
  Generated class for the UserData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserData {
  test:string;
  client:any;

  constructor(public http: Http) {
    console.log('Hello UserData Provider');
    this.client = hprose.Client.create("http://localhost:8080/DataService/DataService", ["queryUser"]);
  }


  login(username:string):any{
    //var client = hprose.Client.create("http://localhost:8080/DataService/DataService", ["queryUser"]);
    var result = this.client.queryUser(username);
    return result;
  }

}

/******
 * UserRole
 * 作者：Tang
 */
@Injectable()
export class UserRole{
  enterpriseCode: string ;
  enterpriseName: string;
  organizationCode: string ;
  organizationName: string ;
  userCode:string;
  userType:string;
  userName:string;
  userNickName:string;
  userPermission:string;

  isBill: boolean = true;
  isCheck: boolean = true;
  isCharging: boolean = true;
  isStock: boolean = true;
  isTraffic: boolean = true;
  isInstall: boolean = true;
  isRaise: boolean = true;
  isSetting: boolean = true;

  constructor(){}
}




