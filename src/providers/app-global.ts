import {Injectable} from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {UserInformation} from "./user-data";

/*
  Generated class for the AppGlobal provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class AppGlobal {

  private static instance: AppGlobal = new AppGlobal();

  /**是否是调试状态 */
  isDebug: boolean = true;
  server: string = this.isDebug ? "http://localhost" : "http://www.xxx.com";

  apiUrl: string = "/MobileApi/api";

  /**当前用户信息 */
  userInf: UserInformation;

  /**分页页数 */
  pageSize: number = 10;

  constructor() {
    console.log('Hello AppGlobal Provider');
    AppGlobal.instance = this;
    this.userInf=new  UserInformation();

  }
  /**
   * 获取当前实例
   *
   * @static
   * @returns {AppGlobal}
   */
  public static getInstance(): AppGlobal {
    return AppGlobal.instance;
  }

}
