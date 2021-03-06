import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Popover} from '../pages/home/popover/popover';
import {Login} from '../pages/login/login';

import {Contract} from '../pages/sales/contract/contract';
import {ContractCharging} from '../pages/sales/contract-charging/contract-charging';
import {ContractCheck} from '../pages/sales/contract-check/contract-check';
import {ContractCustomer} from '../pages/sales/contract-customer/contract-customer';
import {ContractGoods} from '../pages/sales/contract-goods/contract-goods';
import {ContractInstall} from '../pages/sales/contract-install/contract-install';
import {ContractItem} from '../pages/sales/contract-item/contract-item';
import {ContractList} from '../pages/sales/contract-list/contract-list'
import {ContractStock} from '../pages/sales/contract-stock/contract-stock';
import {ContractTimeline} from '../pages/sales/contract-timeline/contract-timeline';
import {ContractTraffic} from '../pages/sales/contract-traffic/contract-traffic';
//import {UserData} from '../providers/user-data';


import {Bills} from '../pages/finance/bills/bills';
import {BillsItem} from '../pages/finance/bills-item/bills-item';
import {BillsList} from '../pages/finance/bills-list/bills-list';
import {Charging} from '../pages/finance/charging/charging';
import {ChargingList} from '../pages/finance/charging-list/charging-list';
import {Expense} from '../pages/finance/expense/expense';
import {ExpenseCharging} from '../pages/finance/expense-charging/expense-charging';
import {ExpenseCheck} from '../pages/finance/expense-check/expense-check';
import {ExpenseItem} from '../pages/finance/expense-item/expense-item';
import {ExpenseList} from '../pages/finance/expense-list/expense-list';
import {Raise} from '../pages/finance/raise/raise';
import {RaiseCharging} from '../pages/finance/raise-charging/raise-charging';
import {RaiseCheck} from '../pages/finance/raise-check/raise-check';
import {RaiseItem} from '../pages/finance/raise-item/raise-item';
import {RaiseList} from '../pages/finance/raise-list/raise-list';

import {Order} from '../pages/purchase/order/order';
import {OrderCheck} from '../pages/purchase/order-check/order-check';
import {OrderGoods} from '../pages/purchase/order-goods/order-goods';
import {OrderInspection} from '../pages/purchase/order-inspection/order-inspection';
import {OrderItem} from '../pages/purchase/order-item/order-item';
import {OrderList} from '../pages/purchase/order-list/order-list';
import {OrderPayment} from '../pages/purchase/order-payment/order-payment';
import {OrderStock} from '../pages/purchase/order-stock/order-stock';
import {OrderStorage} from '../pages/purchase/order-storage/order-storage';
import {OrderSupplier} from "../pages/purchase/order-supplier/order-supplier";
import {OrderTimeline} from '../pages/purchase/order-timeline/order-timeline';


import {SettingHome} from '../pages/setting/setting-home/setting-home';
import {Customer} from '../pages/setting/customer/customer';
import {CustomerList} from '../pages/setting/customer-list/customer-list';
import {Employee} from '../pages/setting/employee/employee';
import {EmployeeList} from '../pages/setting/employee-list/employee-list';
import {Events} from '../pages/setting/events/events';
import {EventsList} from '../pages/setting/events-list/events-list';
import {Goods} from '../pages/setting/goods/goods';
import {GoodsList} from '../pages/setting/goods-list/goods-list';
import {HumanPage} from '../pages/setting/human/human';
import {HumanList} from '../pages/setting/human-list/human-list';
import {ReportAsset} from '../pages/setting/report-asset/report-asset';
import {ReportBalance} from '../pages/setting/report-balance/report-balance';
import {ReportIncome} from '../pages/setting/report-income/report-income';
import {ReportPayout} from '../pages/setting/report-payout/report-payout';
import {ReportProfit} from '../pages/setting/report-profit/report-profit';

import {StockGoods} from '../pages/stock/stock-goods/stock-goods';
import {StockGoodsList} from '../pages/stock/stock-goods-list/stock-goods-list';
import {StockInventory} from '../pages/stock/stock-inventory/stock-inventory';
import {StockInventoryList} from '../pages/stock/stock-inventory-list/stock-inventory-list';

import {UserData,  UserInformation} from "../providers/user-data";
import {AppGlobal} from "../providers/app-global";


@NgModule({
  declarations: [
    MyApp,

    Contract,
    ContractCharging,
    ContractCheck,
    ContractCustomer,
    ContractGoods,
    ContractInstall,
    ContractItem,
    ContractList,
    ContractStock,
    ContractTraffic,
    ContractTimeline,


    Bills,
    BillsItem,
    BillsList,
    Charging,
    ChargingList,
    Expense,
    ExpenseCharging,
    ExpenseCheck,
    ExpenseItem,
    ExpenseList,
    Raise,
    RaiseCharging,
    RaiseCheck,
    RaiseItem,
    RaiseList,

    Order,
    OrderCheck,
    OrderGoods,
    OrderInspection,
    OrderItem,
    OrderList,
    OrderPayment,
    OrderStock,
    OrderStorage,
    OrderSupplier,
    OrderTimeline,

    SettingHome,
    Customer,
    CustomerList,
    Employee,
    EmployeeList,
    Events,
    EventsList,
    Goods,
    GoodsList,
    HumanPage,
    HumanList,
    ReportAsset,
    ReportBalance,
    ReportIncome,
    ReportPayout,
    ReportProfit,

    StockGoods,
    StockGoodsList,
    StockInventory,
    StockInventoryList,

    Login,
    Popover,
    HomePage
  ],
  imports: [
    //IonicModule.forRoot(MyApp)
    IonicModule.forRoot(MyApp, {
        backButtonText: '返回',
        iconMode: 'ios',
        mode: 'ios',
        modalEnter: 'modal-slide-in',
        modalLeave: 'modal-slide-out',
        tabsPlacement: 'bottom',
        pageTransition: 'ios'
      }, {}
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //UserData,
    Contract,
    ContractCharging,
    ContractCheck,
    ContractCustomer,
    ContractGoods,
    ContractInstall,
    ContractItem,
    ContractList,
    ContractStock,
    ContractTraffic,
    ContractTimeline,
    //UserData,

    Bills,
    BillsItem,
    BillsList,
    Charging,
    ChargingList,
    Expense,
    ExpenseCharging,
    ExpenseCheck,
    ExpenseItem,
    ExpenseList,
    Raise,
    RaiseCharging,
    RaiseCheck,
    RaiseItem,
    RaiseList,

    Order,
    OrderCheck,
    OrderGoods,
    OrderInspection,
    OrderItem,
    OrderList,
    OrderPayment,
    OrderStock,
    OrderStorage,
    OrderSupplier,
    OrderTimeline,

    SettingHome,
    Customer,
    CustomerList,
    Employee,
    EmployeeList,
    Events,
    EventsList,
    Goods,
    GoodsList,
    HumanPage,
    HumanList,
    ReportAsset,
    ReportBalance,
    ReportIncome,
    ReportPayout,
    ReportProfit,

    StockGoods,
    StockGoodsList,
    StockInventory,
    StockInventoryList,

    Login,
    Popover,
    HomePage
  ],
  providers: [
    AppGlobal,
    UserData,
    UserInformation
  ]
})
export class AppModule {}
