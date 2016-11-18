import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//import {isUndefined} from "ionic-angular/util/util";

declare var hprose;

@Injectable()
export class UserRole{

}

@Injectable()
export class UserDept{

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
  //userName:string='kkkkk';
  hadIceCream: boolean = false;
  //systemUser:any=[]
  systemUser:SystemUser;

  //hprose.ClassManager.register(systemUser, 'com_ft_db_mapping_SystemUser')
  //systemUser:any;



  constructor(public http: Http) {
    console.log('Hello UserData Provider');
    //this.systemUser.userName='ddd';
    //hprose.ClassManager.register(systemUser, 'com_ft_db_mapping_SystemUser');
  }
  load(){

  }

  getHelloWord():any{
    //var userinf;
    //result:SystemUser;
    var client = hprose.Client.create("http://localhost:8080/DataService/DataService", ["queryUser"]);
    var result = client.queryUser('1');
    return result;
  }

  getIceCream():any {
    var client = hprose.Client.create("http://localhost:8080/DataService/DataService", ["queryUser"]);
    var result;
    client.queryUser('3').then(d=>result = d);
    console.log(result);
    return result;
  }
}





