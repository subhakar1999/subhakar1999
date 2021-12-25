import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { TranslationService } from '../../core/translation.service';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { appVariables } from '../../app.constants';
import { MockDataService } from '../../test/mock-data.service';
import { CustomMaterialModule } from '../custom-material.module';
import { FormsModule } from '@angular/forms';

const TRANSLATIONS_EN = require('../../../assets/i18n/en.json');

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let http: HttpTestingController;
  let translationService: TranslationService;
  let mockDataService: MockDataService;

  beforeEach(async(() => {
    mockDataService = new MockDataService();
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, CustomMaterialModule, FormsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (httpClient: HttpClient) => new TranslateHttpLoader(httpClient),
            deps: [HttpClient]
          }
        })],
      declarations: [ TableComponent ],
      providers: [ TranslationService, TranslateService ]
    })
      .compileComponents();
    http = TestBed.get(HttpTestingController);
    translationService = TestBed.get(TranslationService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    http.expectOne('/assets/i18n/en.json').flush(TRANSLATIONS_EN);

    component.tableData = {
      listItemColumnNames: {productSKUNo: appVariables.orders.order.listItemColumnNames[0],
        productName: appVariables.orders.order.listItemColumnNames[1],
        productQuantity: appVariables.orders.order.listItemColumnNames[2],
        unitOfMeasure: appVariables.orders.order.listItemColumnNames[3],
        // invoiceAmount: appVariables.orders.order.listItemColumnNames[4],
        materialAvailabilityDate: appVariables.orders.order.listItemColumnNames[5]},
      listOfItems: [{
        productSKUNo: 123456789012345678, // Non-Empty field
        productName: 'ABCDEFGHIJKLMNOABCDEFGHIJKLMNOABCDEABCDE', // Non-Empty field
        productQuantity: '12345.768', // Non-Empty field
        unitOfMeasure: 'Case', // Non-Empty field Eg:Case/pallet/bags
        invoiceAmount: '$239815646.07',
        materialAvailabilityDate: '09 JAN 2019' // Can be empty - show Not Yet Available when empty
      }]
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the translated values when the inputs were updated', () => {
    component.ngOnInit();
    expect(component.columns).toEqual(['productSKUNo', 'productName', 'productQuantity', 'unitOfMeasure', 'materialAvailabilityDate']);
  });
});
