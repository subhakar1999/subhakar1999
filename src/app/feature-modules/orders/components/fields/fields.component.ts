import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as _ from 'lodash';
import { OrdersService } from '../../shared/orders.service';
import {
  ICarrierNameLookUp,
  ICarrierNameLookUpColumnNames, ICustomerNameLookUp,
  ICustomerNameLookUpColumnNames, ICustomerParentNameLookUp,
  ICustomerParentNameLookUpColumnNames, IFormFieldsModelNames
} from '../../shared/interfaces/orders.interface';
import { NgModel } from '@angular/forms';
import { appVariables } from '../../../../app.constants';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss']
})

export class FieldsComponent implements OnInit {

  @Input() data: {title: string, activeClass: string, buttons: any[], resetData: any};
  @Output() userCriteria: EventEmitter<IFormFieldsModelNames> = new EventEmitter<IFormFieldsModelNames>();

  formFieldOptions: any;

  showLookUp = false;
  isLookUpFieldValid = true;
  lookUpData: {listItemColumnNames: ICustomerNameLookUpColumnNames  | ICustomerParentNameLookUpColumnNames | ICarrierNameLookUpColumnNames,
    listOfItems: ICustomerNameLookUp[]  | ICustomerParentNameLookUp[] | ICarrierNameLookUp[]};
  lookUpButtons: {key: string, translationKey: string, isPrimary: boolean}[]
    = [{key: 'ok', isPrimary: true, translationKey: 'ATHENA_WEB_UI.BUTTONS_TEXT.OK'}, {key: 'cancel', isPrimary: false, translationKey: 'ATHENA_WEB_UI.BUTTONS_TEXT.CANCEL'}];
  activeLookUpFor: string;

  isDisabled = true;

  formFieldsModelNames: IFormFieldsModelNames = {} as IFormFieldsModelNames;

  private currentDate = new Date();
  private minDate = new Date(new Date().setDate(new Date().getDate() - 31));
  private exportMinDate = new Date(new Date().setDate(new Date().getDate() - 180));

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.formFieldOptions = _.cloneDeep(appVariables.orders.fields.formFieldOptions);
    this.initFormFieldsModelNames();
  }

  initFormFieldsModelNames() {
    this.formFieldsModelNames.regionType = {options: [...this.data.resetData.regionType.options], value: this.data.resetData.regionType.value};
    this.formFieldsModelNames.legacyType = {options: [...this.data.resetData.legacyType.options], value: this.data.resetData.legacyType.value};
    this.formFieldsModelNames.isExport = {options: [...this.data.resetData.isExport.options], value: this.data.resetData.isExport.value};

    this.formFieldsModelNames.division = {options: [...this.data.resetData.division.options], selected: []};
    this.formFieldsModelNames.division.selected = _.filter(this.data.resetData.division.options, (option: any) => !option.isDisabled);
    this.formFieldsModelNames.salesOrg = {options: [...this.data.resetData.salesOrg.options], selected: []};
    this.formFieldsModelNames.salesOrg.selected = _.filter(this.data.resetData.salesOrg.options, (option: any) => !option.isDisabled);
    this.formFieldsModelNames.orderType = {options: [...this.data.resetData.orderType.options], selected: []};
    this.formFieldsModelNames.orderType.selected = _.filter(this.data.resetData.orderType.options, (option: any) => !option.isDisabled);
    this.formFieldsModelNames.transportationMode = {options: [...this.data.resetData.transportationMode.options], selected: []};
    this.formFieldsModelNames.transportationMode.selected = _.filter(this.data.resetData.transportationMode.options, (option: any) => !option.isDisabled);

    this.formFieldsModelNames.requestedDeliveryDate = {begin: this.data.resetData.requestedDeliveryDate.begin, end: this.data.resetData.requestedDeliveryDate.end,
      minDate: this.data.resetData.requestedDeliveryDate.minDate || this.minDate, maxDate: this.data.resetData.requestedDeliveryDate.maxDate || null
    };
    this.formFieldsModelNames.creationDate = {begin: this.data.resetData.creationDate.begin, end: this.data.resetData.creationDate.end,
      minDate: this.data.resetData.creationDate.minDate || null, maxDate: this.data.resetData.creationDate.maxDate || null
    };

    this.formFieldsModelNames.shippingCondition = {options: [...this.data.resetData.shippingCondition.options], selected: {}};
    _.each(this.data.resetData.shippingCondition.options, (option: any) => {
      this.formFieldsModelNames.shippingCondition.selected[option.key] = !option.isDisabled;
    });
    this.formFieldsModelNames.customerType = {options: [...this.data.resetData.customerType.options], selected: {}};
    _.each(this.data.resetData.customerType.options, (option: any) => {
      this.formFieldsModelNames.customerType.selected[option.key] = !option.isDisabled;
    });

    this.formFieldsModelNames.customerSearchValue = {isCustomerNameSearch: this.data.resetData.customerSearchValue.isCustomerNameSearch,
      options: [...this.data.resetData.customerSearchValue.options], value: this.data.resetData.customerSearchValue.value, isDisabled: this.data.resetData.customerSearchValue.isDisabled};
    this.formFieldsModelNames.carrierSearchValue = {isCarrierNameSearch: this.data.resetData.carrierSearchValue.isCarrierNameSearch,
      options: [...this.data.resetData.carrierSearchValue.options], value: this.data.resetData.carrierSearchValue.value, isDisabled: this.data.resetData.carrierSearchValue.isDisabled};

    this.formFieldsModelNames.shipToCountry = {options: [...this.data.resetData.shipToCountry.options], selected: null, isDisabled: false};
    this.formFieldsModelNames.shipToCountry.selected = _.find(this.data.resetData.shipToCountry.options, ['countryCode', this.data.resetData.shipToCountry.value]);

    if (this.formFieldsModelNames.shipToCountry.selected) {
      this.formFieldsModelNames.shipToCountry.isDisabled = true;
      this.formFieldsModelNames.shipToState = {options: [...this.formFieldsModelNames.shipToCountry.selected['states']], selected: null, isDisabled: false};
      this.formFieldsModelNames.shipToState.selected = _.find(this.formFieldsModelNames.shipToState.options, ['stateCode', this.data.resetData.shipToState.value]);

      if (this.formFieldsModelNames.shipToState.selected) {
        this.formFieldsModelNames.shipToState.isDisabled = true;
        this.formFieldsModelNames.shipToCity = {options: [...this.formFieldsModelNames.shipToState.selected['cities']], selected: null, isDisabled: false};
        this.formFieldsModelNames.shipToCity.selected = _.find(this.formFieldsModelNames.shipToCity.options, ['cityCode', this.data.resetData.shipToCity.value]);

        if (this.formFieldsModelNames.shipToCity.selected) {
          this.formFieldsModelNames.shipToCity.isDisabled = true;
        }
      } else {
        // this.formFieldsModelNames.shipToState = {options: [], selected: null, isDisabled: true};
        this.formFieldsModelNames.shipToCity = {options: [], selected: null, isDisabled: true};
      }
    } else {
      this.formFieldsModelNames.shipToState = {options: [], selected: null, isDisabled: true};
      this.formFieldsModelNames.shipToCity = {options: [], selected: null, isDisabled: true};
    }

    this.formFieldsModelNames.plantOrWarehouseCountry = {options: [...this.data.resetData.plantOrWarehouseCountry.options], selected: null, isDisabled: false};
    this.formFieldsModelNames.plantOrWarehouseCountry.selected = _.find(this.formFieldsModelNames.plantOrWarehouseCountry.options,
      ['countryCode', this.data.resetData.plantOrWarehouseCountry.value]);

    if (this.formFieldsModelNames.plantOrWarehouseCountry.selected) {
      this.formFieldsModelNames.plantOrWarehouseCountry.isDisabled = true;
      this.formFieldsModelNames.plantOrWarehouseState = {options: [...this.formFieldsModelNames.plantOrWarehouseCountry.selected['states']], selected: null, isDisabled: false};
      this.formFieldsModelNames.plantOrWarehouseState.selected = _.find(this.formFieldsModelNames.plantOrWarehouseState.options, ['stateCode', this.data.resetData.plantOrWarehouseState.value]);

      if (this.formFieldsModelNames.plantOrWarehouseState.selected) {
        this.formFieldsModelNames.plantOrWarehouseState.isDisabled = true;
      }
    } else {
      this.formFieldsModelNames.plantOrWarehouseState = {options: [], selected: null, isDisabled: true};
    }

    // ONLY FOR ADV SEARCH
    if (this.data.resetData.regionType.value && this.data.resetData.legacyType.value) {
      this.isDisabled = false;
    } else {
      this.selectDefaultFieldsInit();
    }
  }

  selectDefaultFieldsInit() {
    this.formFieldsModelNames.regionType = {options: [...this.formFieldOptions.region.options], value: null};
    this.formFieldsModelNames.legacyType = {options: [...this.formFieldOptions.legacy.options], value: null};
    this.formFieldsModelNames.isExport = {options: [...this.formFieldOptions.export.options], value: 'no'};

    this.formFieldsModelNames.requestedDeliveryDate = {begin: this.currentDate, end: this.currentDate, minDate: this.minDate, maxDate: null};
    this.formFieldsModelNames.creationDate = {begin: this.currentDate, end: this.currentDate, minDate: null, maxDate: null};

    this.formFieldsModelNames.shippingCondition = {options: [...this.formFieldOptions.shippingCondition.options], selected: {}};
    _.each(this.formFieldOptions.shippingCondition.options, (option: any) => {
      this.formFieldsModelNames.shippingCondition.selected[option.key] = true;
    });
    this.formFieldsModelNames.customerType = {options: [...this.formFieldOptions.customerType.options], selected: {}};
    _.each(this.formFieldOptions.customerType.options, (option: any) => {
      this.formFieldsModelNames.customerType.selected[option.key] = true;
    });

    this.formFieldsModelNames.orderType = {options: [...this.formFieldOptions.orderType.options], selected: [...this.formFieldOptions.orderType.options]};
    this.formFieldsModelNames.transportationMode = {options: [...this.formFieldOptions.transportationMode.options], selected: [...this.formFieldOptions.transportationMode.options]};

    this.formFieldsModelNames.customerSearchValue = {isCustomerNameSearch: true, options: [...this.formFieldOptions.customer.options], value: null, isDisabled: false};
    this.formFieldsModelNames.carrierSearchValue = {isCarrierNameSearch: true, options: [...this.formFieldOptions.carrier.options], value: null, isDisabled: false};
  }

  resetData() {
    this.lookUpData = null;
    this.isDisabled = true;

    this.initFormFieldsModelNames();
  }

  enableDivision() {
    if (this.formFieldsModelNames.regionType.value && this.formFieldsModelNames.legacyType.value) {
      // populate the Division multi select options
      this.formFieldsModelNames.division.options = [...this.formFieldOptions.division.options[this.formFieldsModelNames.regionType.value][this.formFieldsModelNames.legacyType.value]];
      this.formFieldsModelNames.division.selected = [...this.formFieldsModelNames.division.options];

      // populate the Sales Org select options
      this.formFieldsModelNames.salesOrg.options = [...this.formFieldOptions.salesOrg.options[this.formFieldsModelNames.regionType.value][this.formFieldsModelNames.legacyType.value]];
      this.formFieldsModelNames.salesOrg.selected = [...this.formFieldsModelNames.salesOrg.options];

      this.formFieldsModelNames.shipToCountry = {options: [...this.formFieldOptions.shipTo.options[this.formFieldsModelNames.regionType.value]], selected: null, isDisabled: false};
      this.formFieldsModelNames.shipToState = {options: [], selected: null, isDisabled: true};
      this.formFieldsModelNames.shipToCity = {options: [], selected: null, isDisabled: true};

      this.formFieldsModelNames.plantOrWarehouseCountry = {options: [...this.formFieldOptions.plantOrWarehouse.options[this.formFieldsModelNames.regionType.value]], selected: null, isDisabled: false};
      this.formFieldsModelNames.plantOrWarehouseState = {options: [], selected: null, isDisabled: true};

      this.isDisabled = false;
    }
  }

  onCustomerSearchChange() {
    if (!this.isDisabled && !this.formFieldsModelNames.customerSearchValue.value) {
      this.formFieldsModelNames.customerSearchValue.isCustomerNameSearch = !this.formFieldsModelNames.customerSearchValue.isCustomerNameSearch;
    }
  }

  onCarrierSearchChange() {
    if (!this.isDisabled && !this.formFieldsModelNames.carrierSearchValue.value) {
      this.formFieldsModelNames.carrierSearchValue.isCarrierNameSearch = !this.formFieldsModelNames.carrierSearchValue.isCarrierNameSearch;
    }
  }

  customerSearchValueChange() {
    if (!this.isDisabled) {
      this.showLookUp = true;
      this.activeLookUpFor = 'customerSearchField';
      // TODO: 04042019-Added 3 different interfaces ICustomerNameLookUp, ICustomerParentNameLookUp, ICarrierNameLookUp
      //  for future use if api response was same for all of them change to only one interface.
      if (this.formFieldsModelNames.customerSearchValue.isCustomerNameSearch) {
        this.ordersService.getLookUpData( {customerName: this.formFieldsModelNames.customerSearchValue.value}).subscribe((res: ICustomerNameLookUp[]) => {
          this.lookUpData = {listItemColumnNames: {customerSoldToName: 'Soldto Name', customerSoldToNo: 'Soldto#', customerShipToName: 'Shipto Name', customerShipToNo: 'Shipto#',
              city: 'City', state: 'State', country: 'Country', zip: 'Zip'},
            listOfItems: res};
        });
      } else {
        this.ordersService.getLookUpData( {customerParentName: this.formFieldsModelNames.customerSearchValue.value}).subscribe((res: ICustomerParentNameLookUp[]) => {
          this.lookUpData = {listItemColumnNames: {customerName: 'Customer Name', address: 'Address', city: 'City', state: 'State', country: 'Country'},
            listOfItems: res};
        });
      }
    }
  }

  carrierSearchValueChange() {
    if (!this.isDisabled && this.formFieldsModelNames.carrierSearchValue.isCarrierNameSearch) {
      this.showLookUp = true;
      this.activeLookUpFor = 'carrierSearchField';
      this.ordersService.getLookUpData({carrierName: this.formFieldsModelNames.carrierSearchValue.value})
        .subscribe((res: ICarrierNameLookUp[]) => {
          this.lookUpData = {listItemColumnNames: {customerName: 'Customer Name', address: 'Address', city: 'City', state: 'State', country: 'Country'},
            listOfItems: res};
        });
    }
  }

  countryChange(type: string) {
    if (type === 'shipTo') {
      this.formFieldsModelNames.shipToState.options = [...this.formFieldsModelNames.shipToCountry.selected['states']];
      this.formFieldsModelNames.shipToState.selected = null;
      this.formFieldsModelNames.shipToState.isDisabled = false;
      this.formFieldsModelNames.shipToCity.options = [];
      this.formFieldsModelNames.shipToCity.selected = null;
      this.formFieldsModelNames.shipToCity.isDisabled = true;
    } else {
      this.formFieldsModelNames.plantOrWarehouseState.options = [...this.formFieldsModelNames.plantOrWarehouseCountry.selected['states']];
      this.formFieldsModelNames.plantOrWarehouseState.isDisabled = false;
    }
  }

  stateChange() {
    this.formFieldsModelNames.shipToCity.options = [...this.formFieldsModelNames.shipToState.selected['cities']];
    this.formFieldsModelNames.shipToCity.isDisabled = false;
  }

  onExportChange() {
    if (this.formFieldsModelNames.isExport.value === 'yes') {
      this.formFieldsModelNames.requestedDeliveryDate.minDate = this.exportMinDate;
    } else {
      this.formFieldsModelNames.requestedDeliveryDate.minDate = this.minDate;
    }
  }

  lookUpAction(event: {actionUsed: {key: string, translationKey: string, isPrimary: boolean},
    value: ICustomerNameLookUp  | ICustomerParentNameLookUp | ICarrierNameLookUp}): void {
    if (event.actionUsed.key === 'ok') {
      this.showLookUp = false;
      if (this.activeLookUpFor === 'customerSearchField') {
        this.activeLookUpFor = '';
        this.isLookUpFieldValid = true;
        this.formFieldsModelNames.customerSearchValue.value = this.formFieldsModelNames.customerSearchValue.isCustomerNameSearch ? event.value['customerSoldToName'] :  event.value['customerName'];
      } else {
        this.activeLookUpFor = '';
        this.isLookUpFieldValid = true;
        this.formFieldsModelNames.carrierSearchValue.value = event.value['customerName'];
      }
    } else {
      this.showLookUp = false;
      this.activeLookUpFor = '';
    }
  }

  // Here comes the logic for Search in adv search / Apply in filters
  onSubmit() {
    // Region, Legacy & Export
    _.each(this.formFieldsModelNames.regionType.options, (option: any) => {
      if (option.value !== this.formFieldsModelNames.regionType.value) {
        option.isDisabled = true;
      }
    });
    _.each(this.formFieldsModelNames.legacyType.options, (option: any) => {
      if (option.value !== this.formFieldsModelNames.legacyType.value) {
        option.isDisabled = true;
      }
    });
    _.each(this.formFieldsModelNames.isExport.options, (option: any) => {
      if (option.value !== this.formFieldsModelNames.isExport.value) {
        option.isDisabled = true;
      }
    });

    // Division & OrderType
    _.each(this.formFieldsModelNames.division.options, (option: any) => {
      if (!(_.find(this.formFieldsModelNames.division.selected, option))) {
        option.isDisabled = true;
      }
    });
    _.each(this.formFieldsModelNames.orderType.options, (option: any) => {
      if (!(_.find(this.formFieldsModelNames.orderType.selected, option))) {
        option.isDisabled = true;
      }
    });

    // SalesOrg & TransportationMode
    if (this.formFieldsModelNames.salesOrg.selected.length > 0) {
      _.each(this.formFieldsModelNames.salesOrg.options, (option: any) => {
        if (!(_.find(this.formFieldsModelNames.salesOrg.selected, option))) {
        option.isDisabled = true;
        }
      });
    } else {
      this.formFieldsModelNames.salesOrg.selected = [...this.formFieldsModelNames.salesOrg.options];
    }
    if (this.formFieldsModelNames.transportationMode.selected.length > 0) {
      _.each(this.formFieldsModelNames.transportationMode.options, (option: any) => {
        if (!(_.find(this.formFieldsModelNames.transportationMode.selected, option))) {
          option.isDisabled = true;
        }
      });
    } else {
      this.formFieldsModelNames.transportationMode.selected = [...this.formFieldsModelNames.transportationMode.options];
    }

    // CustomerType & ShippingCondition
    if (!(this.formFieldsModelNames.customerType.selected['distributor'] && this.formFieldsModelNames.customerType.selected['direct'])) {
      if (!(!this.formFieldsModelNames.customerType.selected['distributor'] && !this.formFieldsModelNames.customerType.selected['direct'])) {
        _.each(this.formFieldsModelNames.customerType.options, (option: any) => {
          if (!this.formFieldsModelNames.customerType.selected[option.key]) {
            option.isDisabled = true;
          }
        });
      } else {
        this.formFieldsModelNames.customerType.selected = {distributor: true, direct: true};
      }
    } else {
      this.formFieldsModelNames.customerType.selected = {distributor: true, direct: true};
    }
    if (!(this.formFieldsModelNames.shippingCondition.selected['standard'] && this.formFieldsModelNames.shippingCondition.selected['expedite'])) {
      if (!(!this.formFieldsModelNames.shippingCondition.selected['standard'] && !this.formFieldsModelNames.shippingCondition.selected['expedite'])) {
        _.each(this.formFieldsModelNames.shippingCondition.options, (option: any) => {
          if (!this.formFieldsModelNames.shippingCondition.selected[option.key]) {
            option.isDisabled = true;
          }
        });
      } else {
        this.formFieldsModelNames.shippingCondition.selected = {standard: true, expedite: true};
      }
    } else {
      this.formFieldsModelNames.shippingCondition.selected = {standard: true, expedite: true};
    }

    // ShipTo & PlantOrWarehouse
    if (this.formFieldsModelNames.shipToCountry.selected && this.formFieldsModelNames.shipToState.selected && this.formFieldsModelNames.shipToCity.selected) {
      this.formFieldsModelNames.shipToCountry.isDisabled = true;
      this.formFieldsModelNames.shipToState.isDisabled = true;
      this.formFieldsModelNames.shipToCity.isDisabled = true;
    } else {
      if (this.formFieldsModelNames.shipToCountry.selected) {
        this.formFieldsModelNames.shipToCountry.isDisabled = true;
        this.formFieldsModelNames.shipToState.isDisabled = false;
        this.formFieldsModelNames.shipToCity.isDisabled = false;
      }
      if (this.formFieldsModelNames.shipToState.selected) {
        this.formFieldsModelNames.shipToState.isDisabled = true;
        this.formFieldsModelNames.shipToCity.isDisabled = false;
      }
      if (this.formFieldsModelNames.shipToCity.selected) {
        this.formFieldsModelNames.shipToCity.isDisabled = true;
      }
    }
    if (this.formFieldsModelNames.plantOrWarehouseCountry.selected && this.formFieldsModelNames.plantOrWarehouseState.selected) {
      this.formFieldsModelNames.plantOrWarehouseCountry.isDisabled = true;
      this.formFieldsModelNames.plantOrWarehouseState.isDisabled = true;
    } else {
      if (this.formFieldsModelNames.plantOrWarehouseCountry.selected) {
        this.formFieldsModelNames.plantOrWarehouseCountry.isDisabled = true;
        this.formFieldsModelNames.plantOrWarehouseState.isDisabled = false;
      }
      if (this.formFieldsModelNames.plantOrWarehouseState.selected) {
        this.formFieldsModelNames.plantOrWarehouseState.isDisabled = true;
      }
    }

    // CustomerSearch & CarrierSearch
    if (this.formFieldsModelNames.customerSearchValue.value) {
      this.formFieldsModelNames.customerSearchValue.isDisabled = true;
    }
    if (this.formFieldsModelNames.carrierSearchValue.value) {
      this.formFieldsModelNames.carrierSearchValue.isDisabled = true;
    }

    this.userCriteria.emit(this.formFieldsModelNames);
  }

  validate(multiValidationField: boolean, searchValue: string): void {
    this.isLookUpFieldValid = searchValue ? (multiValidationField && !this.formFieldsModelNames.carrierSearchValue.isCarrierNameSearch) : true;
  }

  selectAll(event: Event, ngModel: NgModel, options: any[], selected: any[], formfieldName: string) {
    console.log(event, ngModel);
    event.preventDefault();
    const availableOptions = _.filter(options, ['isDisabled', false]);
    if ((selected.length === availableOptions.length + 1)) {
      ngModel.update.emit([]);
      this.formFieldsModelNames[formfieldName].selectAll = false;
    } else {
      ngModel.update.emit(availableOptions);
      this.formFieldsModelNames[formfieldName].selectAll = true;
    }
  }

  isSelectALL(options: any[], selected: any[]): boolean {
    return (_.filter(options, ['isDisabled', false]).length < (selected.length + 1));
  }
}
