import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderStatusComponent } from './order-status.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientService } from '../../../../http-client.service';
import { TranslationService } from '../../../../core/translation.service';
import { OrdersService } from '../../shared/orders.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

const TRANSLATIONS_EN = require('../../../../../assets/i18n/en.json');

describe('OrderStatusComponent', () => {
  let component: OrderStatusComponent;
  let fixture: ComponentFixture<OrderStatusComponent>;
  let http: HttpTestingController;
  let ordersService: OrdersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderStatusComponent ],
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
    fixture = TestBed.createComponent(OrderStatusComponent);
    component = fixture.componentInstance;
    http.expectOne('/assets/i18n/en.json').flush(TRANSLATIONS_EN);

    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
    expect(component.orderStatus[0].status).toBeDefined();
  });

  it('should set the default active status and request for orders data', () => {
    component.ngOnInit();

    expect(ordersService.currentStatusAndStageNames$.getValue().activeStatus).toEqual('orderPipeline');
  });

  it('Update the selected OrderStatus as Active status and unselect the active OrderStage filter', () => {
    component.onStatusChange({status: 'late', title: 'Late(Delivery Delayed)'});

    expect(ordersService.currentStatusAndStageNames$.getValue().activeStatus).toEqual('late');
    expect(ordersService.currentStatusAndStageNames$.getValue().selectedStage).toEqual('');
  });
});
