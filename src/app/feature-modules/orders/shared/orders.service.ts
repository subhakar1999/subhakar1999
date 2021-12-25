import { Injectable } from '@angular/core';
import { HttpClientService, IRequestOptions } from '../../../http-client.service';
import { environment } from '../../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { MockDataService } from '../../../test/mock-data.service';
import { UserService } from '../../../core/user.service';
import { appVariables } from '../../../app.constants';
import * as _ from 'lodash';

@Injectable()
export class OrdersService {

  sourceOfOrdersView: 'default' | 'search' | 'advanceSearch';
  sourceValueOfOrdersView: {default: {}, search: {searchKey: string, searchValue: string}, advanceSearch: {}} =
    {default: {}, search: {searchKey: '', searchValue: ''}, advanceSearch: {}};
  searchCriteriaForOrders: any;

  actionButtons: { isFiltersDisabled: boolean } = {
    isFiltersDisabled: true
  };

  orderStatusCounts: any = {
    orderPipeline: 0, atRisk: 0, late: 0, expedite: 0, returns: 0, futureOrders: 0, noProofOfDelivery: 0
  };
  orderStagesCounts: any = {
    orderPipeline: {orderManagement: 0, commercialIssues: 0, stockAvailability: 0, transportationPlanning: 0, warehouseExecution: 0,
      inTransit: 0, delivered: 0},
    atRisk: {orderManagement: 0, commercialIssues: 0, stockAvailability: 0, transportationPlanning: 0, warehouseExecution: 0,
      inTransit: 0, delivered: 0},
    late: {orderManagement: 0, commercialIssues: 0, stockAvailability: 0, transportationPlanning: 0, warehouseExecution: 0,
      inTransit: 0, delivered: 0},
    expedite: {orderManagement: 0, commercialIssues: 0, stockAvailability: 0, transportationPlanning: 0, warehouseExecution: 0,
      inTransit: 0, delivered: 0},
    returns: {orderManagement: 0, commercialIssues: 0, stockAvailability: 0, transportationPlanning: 0, warehouseExecution: 0,
      inTransit: 0, delivered: 0},
    futureOrders: {orderManagement: 0, commercialIssues: 0, stockAvailability: 0, transportationPlanning: 0, warehouseExecution: 0,
      inTransit: 0, delivered: 0},
    noProofOfDelivery: {orderManagement: 0, commercialIssues: 0, stockAvailability: 0, transportationPlanning: 0, warehouseExecution: 0,
      inTransit: 0, delivered: 0}
  };

  // This object contains all the 1st page orders for each of the key.
  orderListData: {
    orderPipeline: any[], atRisk: any[], late: any[], expedite: any[], returns: any[], futureOrders: any[], noProofOfDelivery: any[]
  } = {
    orderPipeline: [], atRisk: [], late: [], expedite: [], returns: [], futureOrders: [], noProofOfDelivery: []
  };
  // This array has the orders of selected stage
  activeStageOrderListData: any[] = [];
  // This array has the paginated orders
  paginatedOrderListData: any[] = [];

  currentStatusAndStageNames$ = new BehaviorSubject<{activeStatus: string, selectedStage: string}>({activeStatus: '', selectedStage: ''});

  // copy of selectAll flag in order-list comp
  isAllOrdersSelected = false;
  // This array is used when individual checkboxes are used or the "Visible" was selected
  selectedOrderList: any[] = [];
  deSelectedOrderList: any[] = [];

  private readonly restApiURL: string;

  constructor(private httpClientService: HttpClientService, private userService: UserService) {
    this.restApiURL = environment.apiHost;
  }

  public getOrdersForTerrotoryManager(settings: {[key: string]: any}): Observable<any> {
    return this.httpClientService.get<any>(`${this.restApiURL}/enterprise-orders-api/v1/orders/territoryManager/${
      this.userService.currentUserValue.email}?pageNumber=${appVariables.orders.ordersList.defaultPageInfo.page}&pageSize=${appVariables.orders.ordersList.defaultPageInfo.pageSize}`).pipe(
      map((response: any) => {
        this.formatOrders(response);
        // TODO: 05212019 Need to be removed and requires a new end point integration
        this.searchCriteriaForOrders = this.buildSearchCriteria(response.data.searchCriteria);
      }),
      catchError((err: any) => throwError(err))
    );
  }

  public getOrdersForTerritoryManagerWithFilters(filter: object, pageNumber: number, pageSize: number): Observable<any> {
    return this.httpClientService.post<any>(`${this.restApiURL}/enterprise-orders-api/v1/orders/territoryManager/${
      this.userService.currentUserValue.email}?pageNumber=${pageNumber}&pageSize=${pageSize}`,
      filter).pipe(
      map((response: any) => {
        this.actionButtons.isFiltersDisabled = false;
        this.formatOrdersForFilter(filter, pageNumber, pageSize, response);
      }),
      catchError((err: any) => throwError(err))
    );
  }

  public getOrdersWithBasicSearch(settings: {searchKey: 'orderNumber' | 'customerPo' | 'deliveryNumber' |
      'customerNumber' | 'stockTransferOrderNumber' | 'proNumber' | 'tmsLoadNumber' | 'containerNumber', searchValue: string}): Observable<any> {
    this.sourceValueOfOrdersView.search = settings;
    return this.httpClientService.get<any>(
      `${this.restApiURL}/enterprise-orders-api/v1/orders/basicSearch?searchType=${settings.searchKey}&searchValue=${settings.searchValue}&pageNumber=${
        appVariables.orders.ordersList.defaultPageInfo.page}&pageSize=${appVariables.orders.ordersList.defaultPageInfo.pageSize}`).pipe(
        map((response: any) => {
          this.actionButtons.isFiltersDisabled = false;
          this.formatOrders(response);
          // TODO: 05212019 Need to be removed and requires a new end point integration
          this.searchCriteriaForOrders = this.buildSearchCriteria(response.data.searchCriteria);
        }),
        catchError((err: any) => throwError(err))
      );
  }

  public getOrdersWithBasicSearchAndFilters(filter: object, pageNumber: number, pageSize: number): Observable<any> {
    return this.httpClientService.post<any>(`${this.restApiURL}/enterprise-orders-api/v1/orders/basicSearch/filter?searchType=${
      this.sourceValueOfOrdersView.search.searchKey}&searchValue=${this.sourceValueOfOrdersView.search.searchValue}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
      filter).pipe(
      map((response: any) => {
        this.formatOrdersForFilter(filter, pageNumber, pageSize, response);
      }),
      catchError((err: any) => throwError(err))
    );
  }

  public getOrderListItems(order: {orderId: string, sourceSystem: string}): Observable<any> {
    const mockDataService = new MockDataService();
    return of(mockDataService.getOrderListItems).pipe(
      map((response: any) => response.listOfItems),
      catchError((err: any) => throwError(err))
      );

    // return this.httpClientService.get(`${this.restApiURL}/api/listItemsOfOrder`).pipe(
    //   map((response: any) => {
    //     },
    //     catchError((err: any) => throwError(err))  )
    // );
  }

  public getLookUpData(searchCriteria: {customerName: string} | {customerParentName: string} | {carrierName: string}): Observable<any> {
    const search = {search: searchCriteria};

    const mockDataService = new MockDataService();
    if (searchCriteria.hasOwnProperty('customerName')) {
      return of(mockDataService.getLookUpDataForCustomerNameFromAPI).pipe(
        map((response: any) => response.data),
        catchError((err: any) => throwError(err))
      );
    } else {
      return of(mockDataService.getLookUpDataFromAPI).pipe(
        map((response: any) => response.data),
        catchError((err: any) => throwError(err))
      );
    }

    // return this.httpClientService.get(`${this.restApiURL}/api/lookUpData/${search}`).pipe(
    //   map((response: any) => response),
    //     catchError((err: any) => throwError(err))  )
    // );
  }

  private formatOrders(response: any) {
    _.each(response.data.orderStatus, (item: any) => {
      switch (item.orderStatusType) {
        case 1: this.orderStatusCounts.orderPipeline = item.count;
                this.orderStagesCounts.orderPipeline = item.stagesCount;
                this.orderListData.orderPipeline = item.orders;
                break;
        case 2: this.orderStatusCounts.atRisk = item.count;
                this.orderStagesCounts.atRisk = item.stagesCount;
                this.orderListData.atRisk = item.orders;
                break;
        case 3: this.orderStatusCounts.late = item.count;
                this.orderStagesCounts.late = item.stagesCount;
                this.orderListData.late = item.orders;
                break;
        case 4: this.orderStatusCounts.expedite = item.count;
                this.orderStagesCounts.expedite = item.stagesCount;
                this.orderListData.expedite = item.orders;
                break;
        case 5: this.orderStatusCounts.returns = item.count;
                this.orderStagesCounts.returns = item.stagesCount;
                this.orderListData.returns = item.orders;
                break;
        case 6: this.orderStatusCounts.futureOrders = item.count;
                this.orderStagesCounts.futureOrders = item.stagesCount;
                this.orderListData.futureOrders = item.orders;
                break;
        case 7: this.orderStatusCounts.noProofOfDelivery = item.count;
                this.orderStagesCounts.noProofOfDelivery = item.stagesCount;
                this.orderListData.noProofOfDelivery = item.orders;
                break;
      }
    });
  }

  private formatOrdersForFilter(filter: object, pageNumber: number, pageSize: number, response: any) {
    _.each(response.data.orderStatus, (item: any) => {
      switch (item.orderStatusType) {
        case 1: this.orderStatusCounts.orderPipeline = item.count;
                this.orderStagesCounts.orderPipeline = item.stagesCount;
                if (_.get(filter, 'stage') && _.get(filter, 'bucket') === item.orderStatusKey && pageNumber === appVariables.orders.ordersList.defaultPageInfo.page &&
                  pageSize === appVariables.orders.ordersList.defaultPageInfo.pageSize) {
                  this.activeStageOrderListData = item.orders;
                } else if ((pageNumber !== appVariables.orders.ordersList.defaultPageInfo.page || pageSize !== appVariables.orders.ordersList.defaultPageInfo.pageSize) &&
                  _.get(filter, 'bucket') === item.orderStatusKey) {
                  this.paginatedOrderListData = item.orders;
                } else if (filter && _.get(filter, 'bucket') && !_.get(filter, 'stage')) {
                  this.orderListData.orderPipeline = item.orders;
                }
                break;
        case 2: this.orderStatusCounts.atRisk = item.count;
                this.orderStagesCounts.atRisk = item.stagesCount;
                if (_.get(filter, 'stage') && _.get(filter, 'bucket') === item.orderStatusKey && pageNumber === appVariables.orders.ordersList.defaultPageInfo.page &&
                  pageSize === appVariables.orders.ordersList.defaultPageInfo.pageSize) {
                  this.activeStageOrderListData = item.orders;
                } else if ((pageNumber !== appVariables.orders.ordersList.defaultPageInfo.page || pageSize !== appVariables.orders.ordersList.defaultPageInfo.pageSize) &&
                  _.get(filter, 'bucket') === item.orderStatusKey) {
                  this.paginatedOrderListData = item.orders;
                } else if (filter && _.get(filter, 'bucket') && !_.get(filter, 'stage')) {
                  this.orderListData.atRisk = item.orders;
                }
                break;
        case 3: this.orderStatusCounts.late = item.count;
                this.orderStagesCounts.late = item.stagesCount;
                if (_.get(filter, 'stage') && _.get(filter, 'bucket') === item.orderStatusKey && pageNumber === appVariables.orders.ordersList.defaultPageInfo.page &&
                  pageSize === appVariables.orders.ordersList.defaultPageInfo.pageSize) {
                  this.activeStageOrderListData = item.orders;
                } else if ((pageNumber !== appVariables.orders.ordersList.defaultPageInfo.page || pageSize !== appVariables.orders.ordersList.defaultPageInfo.pageSize) &&
                  _.get(filter, 'bucket') === item.orderStatusKey) {
                  this.paginatedOrderListData = item.orders;
                } else if (filter && _.get(filter, 'bucket') && !_.get(filter, 'stage')) {
                  this.orderListData.late = item.orders;
                }
                break;
        case 4: this.orderStatusCounts.expedite = item.count;
                this.orderStagesCounts.expedite = item.stagesCount;
                if (_.get(filter, 'stage') && _.get(filter, 'bucket') === item.orderStatusKey && pageNumber === appVariables.orders.ordersList.defaultPageInfo.page &&
                  pageSize === appVariables.orders.ordersList.defaultPageInfo.pageSize) {
                  this.activeStageOrderListData = item.orders;
                } else if ((pageNumber !== appVariables.orders.ordersList.defaultPageInfo.page || pageSize !== appVariables.orders.ordersList.defaultPageInfo.pageSize) &&
                  _.get(filter, 'bucket') === item.orderStatusKey) {
                  this.paginatedOrderListData = item.orders;
                } else if (filter && _.get(filter, 'bucket') && !_.get(filter, 'stage')) {
                  this.orderListData.expedite = item.orders;
                }
                break;
        case 5: this.orderStatusCounts.returns = item.count;
                this.orderStagesCounts.returns = item.stagesCount;
                if (_.get(filter, 'stage') && _.get(filter, 'bucket') === item.orderStatusKey && pageNumber === appVariables.orders.ordersList.defaultPageInfo.page &&
                  pageSize === appVariables.orders.ordersList.defaultPageInfo.pageSize) {
                  this.activeStageOrderListData = item.orders;
                } else if ((pageNumber !== appVariables.orders.ordersList.defaultPageInfo.page || pageSize !== appVariables.orders.ordersList.defaultPageInfo.pageSize) &&
                  _.get(filter, 'bucket') === item.orderStatusKey) {
                  this.paginatedOrderListData = item.orders;
                } else if (filter && _.get(filter, 'bucket') && !_.get(filter, 'stage')) {
                  this.orderListData.returns = item.orders;
                }
                break;
        case 6: this.orderStatusCounts.futureOrders = item.count;
                this.orderStagesCounts.futureOrders = item.stagesCount;
                if (_.get(filter, 'stage') && _.get(filter, 'bucket') === item.orderStatusKey && pageNumber === appVariables.orders.ordersList.defaultPageInfo.page &&
                  pageSize === appVariables.orders.ordersList.defaultPageInfo.pageSize) {
                  this.activeStageOrderListData = item.orders;
                } else if ((pageNumber !== appVariables.orders.ordersList.defaultPageInfo.page || pageSize !== appVariables.orders.ordersList.defaultPageInfo.pageSize) &&
                  _.get(filter, 'bucket') === item.orderStatusKey) {
                  this.paginatedOrderListData = item.orders;
                } else if (filter && _.get(filter, 'bucket') && !_.get(filter, 'stage')) {
                  this.orderListData.futureOrders = item.orders;
                }
                break;
        case 7: this.orderStatusCounts.noProofOfDelivery = item.count;
                this.orderStagesCounts.noProofOfDelivery = item.stagesCount;
                if (_.get(filter, 'stage') && _.get(filter, 'bucket') === item.orderStatusKey && pageNumber === appVariables.orders.ordersList.defaultPageInfo.page &&
                  pageSize === appVariables.orders.ordersList.defaultPageInfo.pageSize) {
                  this.activeStageOrderListData = item.orders;
                } else if ((pageNumber !== appVariables.orders.ordersList.defaultPageInfo.page || pageSize !== appVariables.orders.ordersList.defaultPageInfo.pageSize) &&
                  _.get(filter, 'bucket') === item.orderStatusKey) {
                  this.paginatedOrderListData = item.orders;
                } else if (filter && _.get(filter, 'bucket') && !_.get(filter, 'stage')) {
                  this.orderListData.noProofOfDelivery = item.orders;
                }
                break;
      }
    });
  }

  private buildSearchCriteria(searchCriteriaFromApi: any) {
    this.searchCriteriaForOrders = searchCriteriaFromApi;
  }
}
