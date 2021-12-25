import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderComponent } from './order.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CheckboxComponent } from '../../../../shared/checkbox/checkbox.component';
import { InteractiveSvgIconComponent } from '../../../../shared/interactive-svg-icon/interactive-svg-icon.component';
import { SimpleChange, SimpleChanges } from '@angular/core';
import { TableComponent } from '../../../../shared/table/table.component';
import { CustomMaterialModule } from '../../../../shared/custom-material.module';
import { OrdersService } from '../../shared/orders.service';
import { HttpClientService } from '../../../../http-client.service';
import { Router } from '@angular/router';
import { TranslationService } from '../../../../core/translation.service';
import { of } from 'rxjs';
import { appVariables } from '../../../../app.constants';
import { MockDataService } from '../../../../test/mock-data.service';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;
  let ordersService: OrdersService;
  let mockDataService: MockDataService;

  beforeEach(async(() => {
    mockDataService = new MockDataService();
    TestBed.configureTestingModule({
      declarations: [OrderComponent, CheckboxComponent, InteractiveSvgIconComponent, TableComponent],
      imports: [ HttpClientTestingModule, FormsModule, CustomMaterialModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (httpClient: HttpClient) => new TranslateHttpLoader(httpClient),
            deps: [HttpClient]
          }
        }) ],
      providers: [OrdersService, HttpClientService, TranslationService,
        {provide: Router,
        useClass: class {
          private navigate = jasmine.createSpy('navigate');
        }}]
    })
    .compileComponents();
    ordersService = TestBed.get(OrdersService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    component.orderDetails = {orderID: 123456, customerName: 'Narayan', selected: true, orderStageType: 2, titleInfo: {deliveryNumber: '7752034372'}, details: {mapUrl: null}};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get updated translation when stage name the input was changed', () => {
    const orderDetails: SimpleChange = new SimpleChange({orderID: 123456, customerName: 'Narayan', selected: true, orderStageType: 1, titleInfo: {deliveryNumber: '7752034372'}, details: {mapUrl: null}},
      {orderID: 123456, customerName: 'Narayan', selected: true, orderStageType: 2, titleInfo: {deliveryNumber: '7752034372'}, details: {mapUrl: null}}, false);
    const changes: SimpleChanges = {orderDetails};
    component.ngOnChanges(changes);

    expect(component.stageName).toEqual('ATHENA_WEB_UI.ORDERS.ORDER_STAGES.COMMERCIAL_ISSUES');
  });

  it('should toggle the text of ShowDetails and HideDetails', () => {
    component.toggleShowDetails = true;
    component.toggle();

    expect(component.toggleShowDetails).toBeFalsy();
  });

  it('should emit the selection of the order to the parent component', () => {
    spyOn(component.selectedOrder, 'emit').and.callThrough();
    component.selectCheckbox(true, {orderID: 123456, customerName: 'Narayan', selected: false});

    expect(component.selectedOrder.emit).toHaveBeenCalledWith({orderID: 123456, customerName: 'Narayan', selected: true});
  });

  it('should fetch the list items of the order', () => {
    spyOn(ordersService, 'getOrderListItems').and.returnValue(of([]));
    component.orderDetails = {orderId: 1233, sourceSystem: 'nalco-ebs'};
    component.activeOrderDetailIcon({key: appVariables.orders.order.iconKeys[0], src: appVariables.orders.order.iconSrc[0],
      activeSrc: appVariables.orders.order.iconActiveSrc[0], altName: appVariables.orders.order.iconAltKeys[0], isActive: false, isDisabled: false});

    expect(component.orderListItemDetails.listOfItems).toEqual([]);
  });
});
