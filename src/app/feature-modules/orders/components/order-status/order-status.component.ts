import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../shared/orders.service';
import { appVariables } from '../../../../app.constants';
import { TranslationService } from '../../../../core/translation.service';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent implements OnInit {

  orderStatus: any[] = [
    {status: appVariables.orders.orderStatus.statusKeys[0], title: appVariables.orders.orderStatus.statusTitles[0]},
    {status: appVariables.orders.orderStatus.statusKeys[1], title: appVariables.orders.orderStatus.statusTitles[1]},
    {status: appVariables.orders.orderStatus.statusKeys[2], title: appVariables.orders.orderStatus.statusTitles[2]},
    {status: appVariables.orders.orderStatus.statusKeys[3], title: appVariables.orders.orderStatus.statusTitles[3]},
    {status: appVariables.orders.orderStatus.statusKeys[4], title: appVariables.orders.orderStatus.statusTitles[4]},
    {status: appVariables.orders.orderStatus.statusKeys[5], title: appVariables.orders.orderStatus.statusTitles[5]},
    {status: appVariables.orders.orderStatus.statusKeys[6], title: appVariables.orders.orderStatus.statusTitles[6]}
  ];
  showOrderList = false;

  constructor(public ordersService: OrdersService, private translationService: TranslationService) { }

  ngOnInit() {
    this.ordersService.currentStatusAndStageNames$.next({activeStatus: appVariables.orders.orderStatus.defaultStatusKey, selectedStage: ''});
    this.ordersService.currentStatusAndStageNames$.subscribe((res: {activeStatus: string, selectedStage: string}) => {
      this.showOrderList = res.selectedStage ? this.ordersService.activeStageOrderListData.length > 0 :
        this.ordersService.orderListData[res.activeStatus].length > 0;
    });
  }

  onStatusChange(data: any) {
    this.ordersService.currentStatusAndStageNames$.next({activeStatus: data.status, selectedStage: ''});
  }
}
