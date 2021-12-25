import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientService } from '../../../../http-client.service';
import { TranslationService } from '../../../../core/translation.service';
import { OrdersService } from '../../shared/orders.service';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { OrderStagesComponent } from './order-stages.component';
import { of } from 'rxjs';

describe('OrderStagesComponent', () => {
  let component: OrderStagesComponent;
  let fixture: ComponentFixture<OrderStagesComponent>;
  let http: HttpTestingController;
  let ordersService: OrdersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderStagesComponent ],
      imports: [ HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (httpClient: HttpClient) => new TranslateHttpLoader(httpClient),
            deps: [HttpClient]
          }
        })
      ],
      providers: [HttpClientService, TranslateService, TranslationService, OrdersService,
        {provide: Router,
          useClass: class {
            private navigate = jasmine.createSpy('navigate');
          }}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    http = TestBed.get(HttpTestingController);
    ordersService = TestBed.get(OrdersService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderStagesComponent);
    component = fixture.componentInstance;
    ordersService.currentStatusAndStageNames$.next({activeStatus: 'orderPipeline', selectedStage: ''});

    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
    expect(component.orderStages[0].status).toBeDefined();
  });

  it('should update the selected stage and emit the stage change event depending on source as search',  () => {
    spyOn(ordersService, 'getOrdersWithBasicSearchAndFilters').and.returnValue(of(''));
    ordersService.sourceOfOrdersView = 'search';
    component.onStageChange('inTransit');

    expect(ordersService.getOrdersWithBasicSearchAndFilters).toHaveBeenCalled();
    expect(ordersService.currentStatusAndStageNames$.getValue().selectedStage).toEqual('inTransit');

    component.onStageChange('inTransit');

    expect(ordersService.currentStatusAndStageNames$.getValue().selectedStage).toEqual('');
  });

  it('should update the selected stage and emit the stage change event depending on source as default territory code',  () => {
    spyOn(ordersService, 'getOrdersForTerritoryManagerWithFilters').and.returnValue(of(''));
    ordersService.sourceOfOrdersView = 'default';
    component.onStageChange('inTransit');

    expect(ordersService.getOrdersForTerritoryManagerWithFilters).toHaveBeenCalled();
    expect(ordersService.currentStatusAndStageNames$.getValue().selectedStage).toEqual('inTransit');

    component.onStageChange('inTransit');

    expect(ordersService.currentStatusAndStageNames$.getValue().selectedStage).toEqual('');
  });
});
