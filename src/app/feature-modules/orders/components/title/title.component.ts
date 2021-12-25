import { Component, OnInit } from '@angular/core';
import { appVariables } from '../../../../app.constants';
import { IFormFieldsModelNames, IInteractiveSVGIcon } from '../../shared/interfaces/orders.interface';
import { OrdersService } from '../../shared/orders.service';
import { UserService } from '../../../../core/user.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-title',
  templateUrl: `./title.component.html`,
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  searchOptions: {itemKey: string, itemValue: string, placeHolder: string, focus: boolean}[];
  advanceSearch: IInteractiveSVGIcon[];
  orderActionItems: IInteractiveSVGIcon[];
  canLoadOrders = false;
  advanceSearchInputData: {title: string, buttons: any[], activeClass: string, resetData: any};
  filtersInputData: {title: string, buttons: any[], activeClass: string, resetData: any};

  private currentDate = new Date();
  constructor(private ordersService: OrdersService, public userService: UserService) {
  }

  ngOnInit(): void {
    this.searchOptions = [
      {itemKey: appVariables.orders.title.searchKeys[0], itemValue: appVariables.orders.title.searchOptions[0],
        placeHolder: appVariables.orders.title.searchOptionsPlaceHolders[0], focus: !this.userService.currentUserValue.isTerritoryManager},
      {itemKey: appVariables.orders.title.searchKeys[1], itemValue: appVariables.orders.title.searchOptions[1],
        placeHolder: appVariables.orders.title.searchOptionsPlaceHolders[1], focus: false},
      {itemKey: appVariables.orders.title.searchKeys[2], itemValue: appVariables.orders.title.searchOptions[2],
        placeHolder: appVariables.orders.title.searchOptionsPlaceHolders[2], focus: false},
      {itemKey: appVariables.orders.title.searchKeys[3], itemValue: appVariables.orders.title.searchOptions[3],
        placeHolder: appVariables.orders.title.searchOptionsPlaceHolders[3], focus: false},
      {itemKey: appVariables.orders.title.searchKeys[4], itemValue: appVariables.orders.title.searchOptions[4],
        placeHolder: appVariables.orders.title.searchOptionsPlaceHolders[4], focus: false},
      {itemKey: appVariables.orders.title.searchKeys[5], itemValue: appVariables.orders.title.searchOptions[5],
        placeHolder: appVariables.orders.title.searchOptionsPlaceHolders[5], focus: false},
      {itemKey: appVariables.orders.title.searchKeys[6], itemValue: appVariables.orders.title.searchOptions[6],
        placeHolder: appVariables.orders.title.searchOptionsPlaceHolders[6], focus: false},
      {itemKey: appVariables.orders.title.searchKeys[7], itemValue: appVariables.orders.title.searchOptions[7],
        placeHolder: appVariables.orders.title.searchOptionsPlaceHolders[7], focus: false},
    ];
    this.initAdvanceSearch();
    this.initOrderActionItems();
    if (this.userService.currentUserValue.isTerritoryManager) {
      this.ordersService.sourceOfOrdersView = 'default';
      this.ordersService.getOrdersForTerrotoryManager({}).subscribe(() => {
        this.canLoadOrders = true;
        this.ordersService.actionButtons.isFiltersDisabled = false;
        this.initOrderActionItems();
      });
    }
  }

  initAdvanceSearch() {
    this.advanceSearch = [{key: appVariables.orders.title.advSearchKey, src: appVariables.orders.title.advSearchSrc,
      activeSrc: appVariables.orders.title.advSearchActiveSrc, altName: appVariables.orders.title.advSearchAltname, isActive: false, isDisabled: false}];
  }

  initOrderActionItems(): void {
    this.orderActionItems = [{key: appVariables.orders.title.orderActionKeys[0], src: appVariables.orders.title.orderActionSrc[0],
      activeSrc: appVariables.orders.title.orderActionActiveSrc[0], altName: appVariables.orders.title.orderActionAltnames[0], isActive: false, isDisabled: false},
      {key: appVariables.orders.title.orderActionKeys[1], src: appVariables.orders.title.orderActionSrc[1],
        activeSrc: appVariables.orders.title.orderActionActiveSrc[1], altName: appVariables.orders.title.orderActionAltnames[1], isActive: false, isDisabled: false},
      {key: appVariables.orders.title.orderActionKeys[2], src: appVariables.orders.title.orderActionSrc[2],
        activeSrc: appVariables.orders.title.orderActionActiveSrc[2], altName: appVariables.orders.title.orderActionAltnames[2], isActive: false, isDisabled: false},
      {key: appVariables.orders.title.orderActionKeys[3], src: appVariables.orders.title.orderActionSrc[3],
        activeSrc: appVariables.orders.title.orderActionActiveSrc[3], altName: appVariables.orders.title.orderActionAltnames[3], isActive: false,
        isDisabled: this.ordersService.actionButtons.isFiltersDisabled}
    ];
  }

  onMenuClose(popover: any): void {
    if (popover.isOpen()) {
      popover.close();
    }
    this.initOrderActionItems();
  }

  activeAdvanceSearch(event: IInteractiveSVGIcon, popover: any): void {
    this.advanceSearch[0].isActive = !this.advanceSearch[0].isActive;
    if (popover.isOpen()) {
      popover.close();
    } else {
      const advSearchReset = appVariables.orders.title.advanceSearchReset;
      advSearchReset.requestedDeliveryDate = {begin: this.currentDate, end: this.currentDate};
      advSearchReset.creationDate = {begin: this.currentDate, end: this.currentDate};

      this.advanceSearchInputData = {title: 'ATHENA_WEB_UI.ORDERS.TITLE.POPOVER_TITLES.ADVANCE_SEARCH', buttons: [{text: 'ATHENA_WEB_UI.BUTTONS_TEXT.RESET', class: 'btn-secondary'},
          {text: 'ATHENA_WEB_UI.BUTTONS_TEXT.SEARCH', class: 'btn-primary'}], activeClass: 'advance-search-popover',
        resetData: advSearchReset};
      popover.open();
    }
  }

  activeOrderAction(event: IInteractiveSVGIcon, popover: any): void {
    _.each(this.orderActionItems, (item: IInteractiveSVGIcon) => {
      if (item.key === event.key && event.key === appVariables.orders.title.orderActionKeys[3]) {
        item.isActive = !item.isActive;
        if (popover.isOpen()) {
          popover.close();
        } else {
          this.filtersInputData = {title: 'ATHENA_WEB_UI.ORDERS.TITLE.POPOVER_TITLES.FILTER', buttons: [{text: 'ATHENA_WEB_UI.BUTTONS_TEXT.RESET', class: 'btn-secondary'},
              {text: 'ATHENA_WEB_UI.BUTTONS_TEXT.APPLY', class: 'btn-primary'}], activeClass: 'filter-popover',
            resetData: this.ordersService.searchCriteriaForOrders};
          popover.open();
        }
      }
    });
  }

  userSearchContext(event: {itemKey: 'orderNumber' | 'customerPo' | 'deliveryNumber' |
      'customerNumber' | 'stockTransferOrderNumber' | 'proNumber' | 'tmsLoadNumber' | 'containerNumber', searchValue: string}) {
    this.ordersService.sourceOfOrdersView = 'search';
    this.ordersService.getOrdersWithBasicSearch({searchKey: event.itemKey, searchValue: event.searchValue}).subscribe(() => {
      this.canLoadOrders = true;
      this.initOrderActionItems();
    });
  }

  advanceSearchUserCriteria(event: IFormFieldsModelNames, popover: any): void {
    this.ordersService.sourceOfOrdersView = 'advanceSearch';
    popover.close();
    this.initAdvanceSearch();

    event.requestedDeliveryDate.minDate = event.requestedDeliveryDate.begin;
    event.requestedDeliveryDate.maxDate = event.requestedDeliveryDate.end;

    event.creationDate.minDate = event.creationDate.begin;
    event.creationDate.maxDate = event.creationDate.end;

    this.ordersService.searchCriteriaForOrders = event;
    this.ordersService.searchCriteriaForOrders.shipToCountry.value = _.get(event.shipToCountry.selected, 'countryCode');
    this.ordersService.searchCriteriaForOrders.shipToState.value = _.get(event.shipToState.selected, 'stateCode');
    this.ordersService.searchCriteriaForOrders.shipToCity.value = _.get(event.shipToCity.selected, 'cityCode');
    this.ordersService.searchCriteriaForOrders.plantOrWarehouseCountry.value = _.get(event.plantOrWarehouseCountry.selected, 'countryCode');
    this.ordersService.searchCriteriaForOrders.plantOrWarehouseState.value = _.get(event.plantOrWarehouseState.selected, 'stateCode');
  }
}
