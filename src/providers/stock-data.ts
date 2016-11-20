import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var hprose;

/*
  Generated class for the StockData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class StockDataProperty{
  StockDataID	:number;
  RowGUID	:string;
  EnterpriseCode	:string;
  EnterpriseName	:string;
  OrganizationCode	:string;
  OrganizationName	:string;
  StockID	:string;
  MaterialID	:string;
  CostOrganizationCode	:string;
  AccountYear	:string;
  BatchNo	:string;
  OpeningStock	:number;
  WarehouseQty	:number;
  OutputQty	:number;
  EndingQty	:number;
  OpeningAmount	:number;
  State	:string;
  Remarks	:string;

};

@Injectable()
export class StockData {
  client:any;

  pagingParam:{};


  constructor(public http: Http) {
    console.log('Hello StockData Provider');
    this.client = hprose.Client.create("http://localhost:8080/DataService/DataService", ["getPaging"]);
    hprose.ClassManager.register(this.pagingParam, 'com.ft.model.PagingInputParam');
    console.log(this.pagingParam.valueOf());
  }

  getPaging(){
    console.log("getStockDataList Start!!");
    this.pagingParam['pageIndex'] = Number(0);
    this.pagingParam['pageSize'] = Number(2);
    this.pagingParam['querySQL'] = "";
    this.pagingParam['qeryParam'] = [];
    var result;
    this.client.getPaging(this.pagingParam, "com.ft.db.mapping.StockData").then(d=>result = d);
    console.log(result);
    return result;
  }

}
