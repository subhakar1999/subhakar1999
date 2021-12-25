import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../shared/orders.service';
import { TranslationService } from '../../../../core/translation.service';
import { appVariables } from '../../../../app.constants';
import * as _ from 'lodash';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  /**
   * Pagination Setup data
   */
  pageInfo: {
    page: number,
    pageSize: number
  };
  pageSizes = [10, 20, 50, 100, 250];
  settings = {} as { [key: string]: any };
  listOfOrders: any[];
  selectAll = false;
  // None: 1, All: 2, Visible: 3
  selectOrderItemsStatus = 1;

  constructor(public ordersService: OrdersService, private translationService: TranslationService) { }

  ngOnInit() {
    this.pageInfo = _.cloneDeep(appVariables.orders.ordersList.defaultPageInfo);
    this.ordersService.currentStatusAndStageNames$.subscribe((res: {activeStatus: string, selectedStage: string}) => {
      this.resetData(res);
    });
  }

  resetData(currentStatusAndStageNames: {activeStatus: string, selectedStage: string}): void {
    this.selectOrderItemsStatus = 1;
    this.selectOrderItems(this.selectOrderItemsStatus);
    this.pageInfo = _.cloneDeep(appVariables.orders.ordersList.defaultPageInfo);
    this.settings.status = currentStatusAndStageNames.activeStatus;
    this.settings.stage = currentStatusAndStageNames.selectedStage;

    if (currentStatusAndStageNames.selectedStage) {
      this.listOfOrders = this.ordersService.activeStageOrderListData;
    } else {
      this.listOfOrders = this.ordersService.orderListData[currentStatusAndStageNames.activeStatus];
    }
  }

  selectOrderItems(selectedKey: number): void {
    this.selectOrderItemsStatus = selectedKey;
    switch (selectedKey) {
      case 1: this.selectAll = false;
              _.each(this.listOfOrders, (item: any) => {
                item.selected = false;
              });
              // reset the list in OrdersService
              this.ordersService.isAllOrdersSelected = false;
              this.ordersService.selectedOrderList = [];
              this.ordersService.deSelectedOrderList = [];
              break;
      case 2: this.selectAll = true;
              // set the list in OrdersService
              this.ordersService.isAllOrdersSelected = true;
              this.ordersService.selectedOrderList = [];
              this.ordersService.deSelectedOrderList = [];
              break;
      case 3: this.selectAll = false;
              _.each(this.listOfOrders, (item: any) => {
                item.selected = true;
              });
              // set the list in OrdersService
              this.ordersService.isAllOrdersSelected = false;
              this.ordersService.selectedOrderList = this.listOfOrders;
              this.ordersService.deSelectedOrderList = [];
              break;
    }
  }

  selectedOrderChange(order: any): void {
    if (this.selectAll) {
      const duplicateItem: any[] = [];
      _.forEach(this.ordersService.deSelectedOrderList, (deSelectedItem) => {
        if (deSelectedItem.orderId === order.orderId && deSelectedItem.sourceSystem === order.sourceSystem) {
          duplicateItem.push(order);
        }
      });
      if (duplicateItem.length > 0 && order.selected) {
        _.remove(this.ordersService.deSelectedOrderList, (deSelectedItem) =>
          (deSelectedItem.orderId === order.orderId && deSelectedItem.sourceSystem === order.sourceSystem));
      } else if (duplicateItem.length === 0 && !order.selected) {
        this.ordersService.deSelectedOrderList.push(order);
      }
    } else {
      const duplicateItem: any[] = [];
      _.forEach(this.ordersService.selectedOrderList, (selectedItem) => {
        if (selectedItem.orderId === order.orderId && selectedItem.sourceSystem === order.sourceSystem) {
          duplicateItem.push(order);
        }
      });
      if (duplicateItem.length > 0 && !order.selected) {
        _.remove(this.ordersService.selectedOrderList, (selectedItem) =>
          (selectedItem.orderId === order.orderId && selectedItem.sourceSystem === order.sourceSystem));
      } else if (duplicateItem.length === 0 && order.selected) {
        this.ordersService.selectedOrderList.push(order);
      }
    }

  }

  onPageSizeChange(size: number): void {
    this.pageInfo.page = 1;
    this.pageInfo.pageSize = size;
    this.settings.pageInfo = this.pageInfo;
    this.onChangeOfPagination(this.settings.status, this.settings.stage, this.pageInfo.page, this.pageInfo.pageSize);
  }

  onPageChange(page: number): void {
    this.pageInfo.page = page;
    this.settings.pageInfo = this.pageInfo;
    this.onChangeOfPagination(this.settings.status, this.settings.stage, this.pageInfo.page, this.pageInfo.pageSize);
  }

  onChangeOfPagination(activeStatus: string, selectedStage: string, page: number, pageSize: number) {
    switch (this.ordersService.sourceOfOrdersView) {
      case 'default': this.ordersService.getOrdersForTerritoryManagerWithFilters({bucket: activeStatus, stage: selectedStage}, page, pageSize)
                      .subscribe(() => this.listOfOrders = this.ordersService.paginatedOrderListData);
                      break;
      case 'search': this.ordersService.getOrdersWithBasicSearchAndFilters({bucket: activeStatus, stage: selectedStage}, page, pageSize)
                     .subscribe(() => this.listOfOrders = this.ordersService.paginatedOrderListData);
                     break;
      case 'advanceSearch': this.ordersService.getOrdersForTerritoryManagerWithFilters({bucket: activeStatus, stage: selectedStage}, page, pageSize)
                            .subscribe(() => this.listOfOrders = this.ordersService.paginatedOrderListData);
                            break;
    }
  }
}
