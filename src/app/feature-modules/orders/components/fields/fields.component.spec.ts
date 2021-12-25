import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FieldsComponent } from './fields.component';
import { TableComponent } from '../../../../shared/table/table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ControlContainer, FormsModule, NgModel } from '@angular/forms';
import { CustomMaterialModule } from '../../../../shared/custom-material.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { OrdersService } from '../../shared/orders.service';
import { HttpClientService } from '../../../../http-client.service';
import { TranslationService } from '../../../../core/translation.service';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appVariables } from '../../../../app.constants';
import { of } from 'rxjs';
import { MockDataService } from '../../../../test/mock-data.service';

describe('FieldsComponent', () => {
  let component: FieldsComponent;
  let fixture: ComponentFixture<FieldsComponent>;
  let ordersService: OrdersService;
  let mockDataService: MockDataService;

  beforeEach(async(() => {
    mockDataService = new MockDataService();
    TestBed.configureTestingModule({
      declarations: [FieldsComponent, TableComponent],
      imports: [ HttpClientTestingModule, FormsModule, BrowserAnimationsModule, CustomMaterialModule,
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
    fixture = TestBed.createComponent(FieldsComponent);
    component = fixture.componentInstance;
    component.data = {title: 'Advance Search', activeClass: 'advance-search-popover', buttons: [{text: 'ATHENA_WEB_UI.BUTTONS_TEXT.RESET', class: 'btn-secondary'},
        {text: 'ATHENA_WEB_UI.BUTTONS_TEXT.APPLY', class: 'btn-primary'}],
      resetData: appVariables.orders.title.advanceSearchReset};

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should intialize the formFieldsModelNames which has options and selected values', () => {
    component.ngOnInit();

    expect(component.formFieldsModelNames.regionType).toEqual({options: [{name: 'NA', value: 'na', isDisabled: false}, {name: 'EU', value: 'eu', isDisabled: false}], value: null});
  });

  it('should intialize the formFieldsModelNames which has options and selected values returned from the API', () => {
    component.data = {title: 'Advance Search', activeClass: 'advance-search-popover', buttons: [{text: 'ATHENA_WEB_UI.BUTTONS_TEXT.RESET', class: 'btn-secondary'},
        {text: 'ATHENA_WEB_UI.BUTTONS_TEXT.APPLY', class: 'btn-primary'}],
      resetData: mockDataService.getOrdersForTerrotoryManagerFromAPI.data.searchCriteria};
    component.ngOnInit();

    expect(component.formFieldsModelNames.regionType).toEqual({options: [{name: 'NA', value: 'na', isDisabled: true}, {name: 'EU', value: 'eu', isDisabled: false}], value: 'eu'});
  });

  it('should reset fields', () => {
    component.formFieldsModelNames.regionType.value = 'na';
    component.resetData();

    expect(component.formFieldsModelNames.regionType.value).toBeNull();
  });

  it('should enable preselect some of the fields when region and legacy are selected', () => {
    component.formFieldsModelNames.regionType.value = 'na';
    component.formFieldsModelNames.legacyType.value = 'nalco';
    component.enableDivision();

    expect(component.formFieldsModelNames.division.selected.length).toEqual(5);
  });

  it('should toggle btwn customer name and customer parent name', () => {
    component.isDisabled = false;
    component.formFieldsModelNames.customerSearchValue.value = null;
    component.formFieldsModelNames.customerSearchValue.isCustomerNameSearch = false;
    component.onCustomerSearchChange();

    expect(component.formFieldsModelNames.customerSearchValue.isCustomerNameSearch).toBeTruthy();
  });

  it('should toggle btwn carrier name and carrier SCAC', () => {
    component.isDisabled = false;
    component.formFieldsModelNames.carrierSearchValue.value = null;
    component.formFieldsModelNames.carrierSearchValue.isCarrierNameSearch = false;
    component.onCarrierSearchChange();

    expect(component.formFieldsModelNames.carrierSearchValue.isCarrierNameSearch).toBeTruthy();
  });

  it('should fetch the data from the API and show a lookup when customer search value was changed', () => {
    component.isDisabled = false;
    component.formFieldsModelNames.customerSearchValue.isCustomerNameSearch = true;
    spyOn(ordersService, 'getLookUpData').and.returnValue(of([{
      customerCode: 123456,
      customerSoldToName: 'Marriot',
      customerSoldToNo: 7723,
      customerShipToName: 'Marriot St.Paul',
      customerShipToNo: 23424,
      city: 'St.Paul',
      state: 'MN',
      country: 'United States',
      zip: 55102
    }]));
    component.customerSearchValueChange();

    expect(component.lookUpData).toEqual({listItemColumnNames: {customerSoldToName: 'Soldto Name', customerSoldToNo: 'Soldto#', customerShipToName: 'Shipto Name', customerShipToNo: 'Shipto#',
        city: 'City', state: 'State', country: 'Country', zip: 'Zip'},
      listOfItems: [{
        customerCode: 123456,
        customerSoldToName: 'Marriot',
        customerSoldToNo: 7723,
        customerShipToName: 'Marriot St.Paul',
        customerShipToNo: 23424,
        city: 'St.Paul',
        state: 'MN',
        country: 'United States',
        zip: 55102
      }]});
  });

  it('should fetch the data from the API and show a lookup when customer parent search value was changed', () => {
    component.isDisabled = false;
    component.formFieldsModelNames.customerSearchValue.isCustomerNameSearch = false;
    component.formFieldsModelNames.customerSearchValue.value = 'Test';
    spyOn(ordersService, 'getLookUpData').and.returnValue(of([{customerCode: 123, customerName: 'Test', address: 'test', city: 'St.Paul', state: '', country: ''}]));
    component.customerSearchValueChange();

    expect(ordersService.getLookUpData).toHaveBeenCalledWith({customerParentName: 'Test'});
    expect(component.lookUpData).toEqual({listItemColumnNames: {customerName: 'Customer Name', address: 'Address', city: 'City', state: 'State', country: 'Country'},
      listOfItems: [{customerCode: 123, customerName: 'Test', address: 'test', city: 'St.Paul', state: '', country: ''}]});
  });

  it('should fetch the data from the API and show a lookup when carrier name search value was changed', () => {
    component.isDisabled = false;
    component.formFieldsModelNames.carrierSearchValue.isCarrierNameSearch = true;
    spyOn(ordersService, 'getLookUpData').and.returnValue(of([{customerCode: 123, customerName: 'Test', address: 'test', city: 'St.Paul', state: '', country: ''}]));
    component.carrierSearchValueChange();

    expect(component.lookUpData).toEqual({listItemColumnNames: {customerName: 'Customer Name', address: 'Address', city: 'City', state: 'State', country: 'Country'},
      listOfItems: [{customerCode: 123, customerName: 'Test', address: 'test', city: 'St.Paul', state: '', country: ''}]});
  });

  it('should provide with state options when country was changed', () => {
    component.formFieldsModelNames.shipToCountry.selected = {states: [{stateName: 'Minnesota', stateCode: 'MN', code: 24, cities: [{cityName: 'Minneapolis', cityCode: 'MSP', code: 121}]}, {stateName: 'Texas', stateCode: 'TX', code: 28, cities: [{cityName: 'Minneapolis', cityCode: 'MSP', code: 121}]}]};
    component.countryChange('shipTo');

    expect(component.formFieldsModelNames.shipToState.options[0].stateName).toEqual('Minnesota');

    component.formFieldsModelNames.plantOrWarehouseCountry.selected = {countryName: 'United States Of America', countryCode: 'US', code: 1001,
      states: [{stateName: 'Texas', stateCode: 'TX', code: 28}, {stateName: 'Minnesota', stateCode: 'MN', code: 24}]};
    component.countryChange('plantOrWarehouse');

    expect(component.formFieldsModelNames.plantOrWarehouseState.options[0].stateName).toEqual('Texas');
  });

  it('should provide with city options when state was changed', () => {
    component.formFieldsModelNames.shipToState.selected = {cities: [{cityName: 'Minneapolis', cityCode: 'MSP', code: 121}]};
    component.stateChange();

    expect(component.formFieldsModelNames.shipToCity.options[0].cityName).toEqual('Minneapolis');
  });

  it('should enable the previous 180 days for the begin dates for export=yes', () => {
    const minDate = new Date(new Date().setDate(new Date().getDate() - 180));
    component.formFieldsModelNames.isExport = {options: [], value: 'yes'};
    (component as any).exportMinDate = minDate;
    component.onExportChange();

    expect(component.formFieldsModelNames.requestedDeliveryDate.minDate).toEqual(minDate);
  });

  it('should disable the search button when customer search field has value and not valid', () => {
    component.validate(false, 'test');

    expect(component.isLookUpFieldValid).toBeFalsy();
  });

  it('should set the options disable property to true when not selected and Submitted the form', () => {
    spyOn(component.userCriteria, 'emit').and.callThrough();
    component.formFieldsModelNames.regionType = {options: [{name: 'NA', value: 'na', isDisabled: false}, {name: 'EU', value: 'eu', isDisabled: false}], value: 'ea'};
    component.onSubmit();

    expect(component.formFieldsModelNames.regionType.options[0].isDisabled).toBeTruthy();
    expect(component.userCriteria.emit).toHaveBeenCalled();
  });

  it('should set the Ship To/PlantOrWarehouse fields disable when the country state and city are selected', () => {
    spyOn(component.userCriteria, 'emit').and.callThrough();
    component.formFieldsModelNames.shipToCountry.isDisabled = false;
    component.formFieldsModelNames.shipToCountry.selected = {countryName: 'United States Of America', countryCode: 'US', code: 1001,
      states: [{stateName: 'Minnesota', stateCode: 'MN', code: 24, cities: [{cityName: 'Minneapolis', cityCode: 'MSP', code: 121}]},
        {stateName: 'Texas', stateCode: 'TX', code: 28, cities: [{cityName: 'Minneapolis', cityCode: 'MSP', code: 121}]}]};
    component.formFieldsModelNames.shipToState.isDisabled = false;
    component.formFieldsModelNames.shipToState.selected = {stateName: 'Texas', stateCode: 'TX', code: 28, cities: [{cityName: 'Minneapolis', cityCode: 'MSP', code: 121}]};
    component.formFieldsModelNames.shipToCity.isDisabled = false;
    component.formFieldsModelNames.shipToCity.selected = {cityName: 'Minneapolis', cityCode: 'MSP', code: 121};

    component.formFieldsModelNames.plantOrWarehouseCountry.isDisabled = false;
    component.formFieldsModelNames.plantOrWarehouseCountry.selected = {countryName: 'United States Of America', countryCode: 'US', code: 1001,
      states: [{stateName: 'Minnesota', stateCode: 'MN', code: 24}, {stateName: 'Texas', stateCode: 'TX', code: 28}]};
    component.formFieldsModelNames.plantOrWarehouseState.isDisabled = false;
    component.formFieldsModelNames.plantOrWarehouseState.selected = {stateName: 'Texas', stateCode: 'TX', code: 28};

    component.onSubmit();

    expect(component.formFieldsModelNames.shipToCountry.isDisabled).toBeTruthy();
    expect(component.formFieldsModelNames.shipToState.isDisabled).toBeTruthy();
    expect(component.formFieldsModelNames.shipToCity.isDisabled).toBeTruthy();
    expect(component.formFieldsModelNames.plantOrWarehouseCountry.isDisabled).toBeTruthy();
    expect(component.formFieldsModelNames.plantOrWarehouseState.isDisabled).toBeTruthy();
    expect(component.userCriteria.emit).toHaveBeenCalled();
  });

  it('should set the Ship To fields disable when the country state and city are selected', () => {
    spyOn(component.userCriteria, 'emit').and.callThrough();
    component.formFieldsModelNames.shipToCountry.isDisabled = false;
    component.formFieldsModelNames.shipToCountry.selected = {countryName: 'United States Of America', countryCode: 'US', code: 1001,
      states: [{stateName: 'Minnesota', stateCode: 'MN', code: 24, cities: [{cityName: 'Minneapolis', cityCode: 'MSP', code: 121}]},
        {stateName: 'Texas', stateCode: 'TX', code: 28, cities: [{cityName: 'Minneapolis', cityCode: 'MSP', code: 121}]}]};
    component.formFieldsModelNames.shipToState.isDisabled = false;
    component.formFieldsModelNames.shipToState.selected = {stateName: 'Texas', stateCode: 'TX', code: 28, cities: [{cityName: 'Minneapolis', cityCode: 'MSP', code: 121}]};
    component.formFieldsModelNames.shipToCity.isDisabled = false;
    component.formFieldsModelNames.shipToCity.selected = null;

    component.formFieldsModelNames.plantOrWarehouseCountry.isDisabled = false;
    component.formFieldsModelNames.plantOrWarehouseCountry.selected = {countryName: 'United States Of America', countryCode: 'US', code: 1001,
      states: [{stateName: 'Minnesota', stateCode: 'MN', code: 24}, {stateName: 'Texas', stateCode: 'TX', code: 28}]};
    component.formFieldsModelNames.plantOrWarehouseState.isDisabled = false;
    component.formFieldsModelNames.plantOrWarehouseState.selected = null;
    component.onSubmit();

    expect(component.formFieldsModelNames.shipToCountry.isDisabled).toBeTruthy();
    expect(component.formFieldsModelNames.shipToState.isDisabled).toBeTruthy();
    expect(component.formFieldsModelNames.shipToCity.isDisabled).toBeFalsy();
    expect(component.formFieldsModelNames.plantOrWarehouseCountry.isDisabled).toBeTruthy();
    expect(component.formFieldsModelNames.plantOrWarehouseState.isDisabled).toBeFalsy();
    expect(component.userCriteria.emit).toHaveBeenCalled();
  });

  it('should close the look up and assign the value to customer search input', () => {
    component.activeLookUpFor = 'customerSearchField';
    component.showLookUp = true;
    component.lookUpAction({actionUsed: {key: 'ok', translationKey: '', isPrimary: true},
      value: {
        customerCode: 123456,
        customerSoldToName: 'Marriot',
        customerSoldToNo: 7723,
        customerShipToName: 'Marriot St.Paul',
        customerShipToNo: 23424,
        city: 'St.Paul',
        state: 'MN',
        country: 'United States',
        zip: 55102
      }});

    expect(component.showLookUp).toBeFalsy();
    expect(component.formFieldsModelNames.customerSearchValue.value).toEqual('Marriot');
  });

  it('should close the look up and assign the value to carrier search input', () => {
    component.activeLookUpFor = 'carrierSearchField';
    component.showLookUp = true;
    component.lookUpAction({actionUsed: {key: 'ok', translationKey: '', isPrimary: true},
      value: {customerCode: 3784, address: '1 Ecolab Place', customerName: 'FedEx', city: 'St.Paul', state: 'MN', country: 'US'}});

    expect(component.showLookUp).toBeFalsy();
    expect(component.formFieldsModelNames.carrierSearchValue.value).toEqual('FedEx');
  });

  it('should close the look up when user clicks on cancel button', () => {
    component.activeLookUpFor = 'carrierSearchField';
    component.showLookUp = true;
    component.lookUpAction({actionUsed: {key: 'cancel', translationKey: '', isPrimary: false},
      value: undefined});

    expect(component.showLookUp).toBeFalsy();
    expect(component.activeLookUpFor).toEqual('');
  });

  // fit('should select all the available options when Select All was used inside multi-select', () => {
  //   const select = ;
  //   component.selectAll({} as Event, select, [{name: 'Institutional', code: 1001, isDisabled: false}, {name: 'F&B', code: 1002, isDisabled: false}], [{name: 'F&B', code: 1002, isDisabled: false}], 'division');
  //
  //   expect(component.isLookUpFieldValid).toBeFalsy();
  // });


});
