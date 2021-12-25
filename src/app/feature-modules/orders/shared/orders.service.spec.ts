import { inject, TestBed } from '@angular/core/testing';
import { OrdersService } from './orders.service';
import { HttpClientService } from '../../../http-client.service';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { MockDataService } from '../../../test/mock-data.service';
import { UserService } from '../../../core/user.service';
import { of } from 'rxjs';

describe('OrdersService', () => {
  let httpClientService: HttpClientService;
  let userService: UserService;
  let mockDataService: MockDataService;

  beforeEach(() => {
    mockDataService = new MockDataService();
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
            deps: [HttpClient]
          }
        })
      ],
      providers: [OrdersService, HttpClientService,
        {provide: Router,
          useClass: class {
            private navigate = jasmine.createSpy('navigate');
          }
        }
      ]
    });
    httpClientService = TestBed.get(HttpClientService);
    userService = TestBed.get(UserService);
    (userService as any).currentUserSubject.next({
      email: 'abc.ecolab.com',
      isTerritoryManager: true,
      firstName: 'ABC',
      lastName: 'Mr',
      legacyCode: '00112',
      territoryCode: '019274',
      territoryName: 'Institutional',
      regionCode: 'NA',
      companyCode: '001',
      divisionCode: 'DIVONS',
      countryCode: 'US',
    });
  });

  it('should be created', inject([OrdersService], (service: OrdersService) => {
    expect(service).toBeTruthy();
  }));

  it('get the list of orders', inject([OrdersService], (service: OrdersService) => {
    spyOn(httpClientService, 'get').and.returnValue(of(mockDataService.getOrdersForTerrotoryManagerFromAPI));
    service.getOrdersForTerrotoryManager({}).subscribe(() => {
      expect(service.orderStatusCounts.orderPipeline).toEqual(1210);
    });
  }));

  it('get the list of orders with stage selected', inject([OrdersService], (service: OrdersService) => {
    spyOn(httpClientService, 'post').and.returnValue(of(mockDataService.getOrdersForTerrotoryManagerWithFiltersFromAPI));
    service.getOrdersForTerritoryManagerWithFilters({bucket: 'orderPipeline', stage: 'orderManagement'}, 1, 10).subscribe(() => {
      expect(service.activeStageOrderListData.length).toEqual(5);
    });
  }));

  it('get the list of orders when basic search was used', inject([OrdersService], (service: OrdersService) => {
    spyOn(httpClientService, 'get').and.returnValue(of(mockDataService.getOrdersForTerrotoryManagerFromAPI));
    service.getOrdersWithBasicSearch({searchKey: 'orderNumber', searchValue: '162534'}).subscribe(() => {
      expect(service.orderStatusCounts.orderPipeline).toEqual(1210);
    });
  }));

  it('get the list of orders with stage selected and source as basic search', inject([OrdersService], (service: OrdersService) => {
    spyOn(httpClientService, 'post').and.returnValue(of(mockDataService.getOrdersForTerrotoryManagerWithFiltersFromAPI));
    service.sourceValueOfOrdersView.search.searchKey = 'orderNumber';
    service.sourceValueOfOrdersView.search.searchValue = '162534';
    service.getOrdersWithBasicSearchAndFilters({bucket: 'orderPipeline', stage: 'orderManagement'}, 1, 10).subscribe(() => {
      expect(service.activeStageOrderListData.length).toEqual(5);
    });
  }));

  it('get the list items of the order', inject([OrdersService], (service: OrdersService) => {
    // TODO: 04/11/2019 Add this when the Real BackEnd Data was integrated with UI
    // spyOn(httpClientService, 'get').and.returnValue(of(mockDataService.getOrderListItems));
    service.getOrderListItems({orderId: 'AQW123', sourceSystem: 'nalco-ebs'}).subscribe((response: any) => {
      expect(response.length).toEqual(11);
    });
  }));

  it('get the list items of the order', inject([OrdersService], (service: OrdersService) => {
    // TODO: 04/11/2019 Add this when the Real BackEnd Data was integrated with UI
    // spyOn(httpClientService, 'get').and.returnValue(of(mockDataService.getLookUpDataFromAPI));
    service.getLookUpData({customerName: 'Narayan'}).subscribe((response: any) => {
      expect(response.length).toEqual(8);
    });
  }));
});
