import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdersListComponent } from './orders-list.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { OrdersService } from '../../shared/orders.service';
import { HttpClientService } from '../../../../http-client.service';
import { Router } from '@angular/router';
import { TranslationService } from '../../../../core/translation.service';
import { of } from 'rxjs';
import { PaginationComponent } from '../../../../shared/pagination/pagination.component';
import { OrderComponent } from '../order/order.component';
import { CheckboxComponent } from '../../../../shared/checkbox/checkbox.component';
import { InteractiveSvgIconComponent } from '../../../../shared/interactive-svg-icon/interactive-svg-icon.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from '../../../../shared/table/table.component';
import { CustomMaterialModule } from '../../../../shared/custom-material.module';

const TRANSLATIONS_EN = require('../../../../../assets/i18n/en.json');

describe('OrdersListComponent', () => {
  let component: OrdersListComponent;
  let fixture: ComponentFixture<OrdersListComponent>;
  let http: HttpTestingController;
  let ordersService: OrdersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, FormsModule, CustomMaterialModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (httpClient: HttpClient) => new TranslateHttpLoader(httpClient),
            deps: [HttpClient]
          }
        })
      ],
      declarations: [ OrdersListComponent, PaginationComponent, OrderComponent, CheckboxComponent, InteractiveSvgIconComponent, TableComponent],
      providers: [ OrdersService, HttpClientService, TranslationService, TranslateService,
        {provide: Router,
          useClass: class {
            private navigate = jasmine.createSpy('navigate');
          }} ]
    })
    .compileComponents();
    http = TestBed.get(HttpTestingController);
    ordersService = TestBed.get(OrdersService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersListComponent);
    component = fixture.componentInstance;
    http.expectOne('/assets/i18n/en.json').flush(TRANSLATIONS_EN);

    ordersService.currentStatusAndStageNames$.next({activeStatus: 'orderPipeline', selectedStage: null});
    ordersService.orderStatusCounts.orderPipeline = 250;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset data', () => {
    component.pageInfo.page = 23;
    component.resetData({activeStatus: 'orderPipeline', selectedStage: ''});

    expect(component.pageInfo.page).toEqual(1);
  });

  it('should move the page to 1st and fetch data based on the source of current orders', () => {
    spyOn(ordersService, 'getOrdersWithBasicSearchAndFilters').and.returnValue(of(''));
    ordersService.sourceOfOrdersView = 'search';
    component.settings.status = 'late';
    component.settings.stage = 'commercialIssues';
    component.pageInfo.page = 23;
    component.onPageSizeChange(65);

    expect(component.pageInfo).toEqual({page: 1, pageSize: 65});
    expect(ordersService.getOrdersWithBasicSearchAndFilters).toHaveBeenCalled();
  });

  it('should move the page and fetch data based on the source of current page size', () => {
    spyOn(ordersService, 'getOrdersWithBasicSearchAndFilters').and.returnValue(of(''));
    ordersService.sourceOfOrdersView = 'search';
    component.settings.status = 'late';
    component.settings.stage = 'commercialIssues';
    component.pageInfo.page = 2;
    component.pageInfo.pageSize = 20;
    component.onPageChange(4);

    expect(component.pageInfo).toEqual({page: 4, pageSize: 20});
    expect(ordersService.getOrdersWithBasicSearchAndFilters).toHaveBeenCalled();
  });

  it('Select ALL should have the isAllOrdersSelected true', () => {
    component.selectOrderItems(2);

    expect(ordersService.isAllOrdersSelected).toBeTruthy();
    expect(ordersService.selectedOrderList.length).toEqual(0);
  });

  it('Select Visible should have the isAllOrdersSelected false', () => {
    component.listOfOrders = [{orderID: 123456, customerName: 'Narayan', selected: false}];
    component.selectOrderItems(3);

    expect(ordersService.isAllOrdersSelected).toBeFalsy();
    expect(ordersService.selectedOrderList).toEqual([{orderID: 123456, customerName: 'Narayan', selected: true}]);
  });

  it('when select all was selected and user unselect a particular order', () => {
    component.selectAll = true;
    ordersService.deSelectedOrderList = [{orderId: 'AWQ123', sourceSystem: 'ecolab-ebs', selected: false},
      {orderId: 'AWQ123', sourceSystem: 'ecolab-crm', selected: false}];
    component.selectedOrderChange({orderId: 'AWQ123', sourceSystem: 'nalco-ebs', selected: false});

    expect(ordersService.deSelectedOrderList.length).toEqual(3);
  });

  it('when select all was selected and user selects a particular unselected order', () => {
    component.selectAll = true;
    ordersService.deSelectedOrderList = [{orderId: 'AWQ123', sourceSystem: 'ecolab-ebs', selected: false},
      {orderId: 'AWQ123', sourceSystem: 'ecolab-crm', selected: false}, {orderId: 'AWQ123', sourceSystem: 'nalco-ebs', selected: false}];
    component.selectedOrderChange({orderId: 'AWQ123', sourceSystem: 'nalco-ebs', selected: true});

    expect(ordersService.deSelectedOrderList.length).toEqual(2);
  });

  it('when user selects a particular unselected order', () => {
    component.selectAll = false;
    ordersService.selectedOrderList = [{orderId: 'AWQ123', sourceSystem: 'ecolab-ebs', selected: true},
      {orderId: 'AWQ123', sourceSystem: 'ecolab-crm', selected: true}];
    component.selectedOrderChange({orderId: 'AWQ123', sourceSystem: 'nalco-ebs', selected: true});

    expect(ordersService.selectedOrderList.length).toEqual(3);
  });

  it('when user unselects a particular selected order', () => {
    component.selectAll = false;
    ordersService.selectedOrderList = [{orderId: 'AWQ123', sourceSystem: 'ecolab-ebs', selected: true},
      {orderId: 'AWQ123', sourceSystem: 'ecolab-crm', selected: true}, {orderId: 'AWQ123', sourceSystem: 'nalco-ebs', selected: true}];
    component.selectedOrderChange({orderId: 'AWQ123', sourceSystem: 'nalco-ebs', selected: false});

    expect(ordersService.selectedOrderList.length).toEqual(2);
  });
});
