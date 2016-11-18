import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//import {isUndefined} from "ionic-angular/util/util";

declare var hprose;

@Injectable()
export class UserRole{
  enterpriseCode: string = "En001";
  enterpriseName: string = "测试企业名称";
  organizationCode: string = "Org001";
  organizationName: string = "测试机构名称";
  userCode:string;
  userType:string;
  userName:string;
  userNickName:string;
  userPermission:string="经理";

  isBill: boolean = true;
  isCheck: boolean = true;
  isCharging: boolean = true;
  isStock: boolean = true;
  isTraffic: boolean = true;
  isInstall: boolean = true;
  isRaise: boolean = true;
  isSetting: boolean = true;
}

@Injectable()
export class SystemUser{
  systemUserID:number;
  rowGUID:string;
  userCode:string;
  userType:string;
  userName:string;
  userNickName:string;

  userPassWord:string;
  userPermission:string;
  logTime:string;
  onlineState:string;

  state:string;
  remarks:string;
};
hprose.ClassManager.register(SystemUser, 'com_ft_db_mapping_SystemUser');

@Injectable()
export class SystemUserProperty{
  systemUserPropertyID:number;
  rowGUID:string;
  systemUserID:number;
  propertyType:string;
  propertyClassfication

  propertyKey:string;
  propertyValue:string;
  state:string;
  remarks:string;
}
hprose.ClassManager.register(SystemUser, 'com_ft_db_mapping_SystemUserProperty');


/*
  Generated class for the UserData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserData {
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





