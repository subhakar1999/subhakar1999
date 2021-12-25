
export interface IFormFieldsModelNames {
  regionType: {options: any[], value: string};
  legacyType: {options: any[], value: string};
  division: {options: any[], selected: any[]};
  salesOrg: {options: any[], selected: any[]};
  requestedDeliveryDate: {begin: object, end: object, minDate: object, maxDate: object};
  creationDate: {begin: object, end: object, minDate: object, maxDate: object};
  orderType: {options: any[], selected: any[]};
  shippingCondition: {options: any[], selected: object};
  isExport: {options: any[], value: string};
  customerSearchValue: {isCustomerNameSearch: boolean, options: any[], value: string, isDisabled: boolean};
  customerType: {options: any[], selected: object};
  shipToCountry: {options: any[], selected: object, isDisabled: boolean};
  shipToState: {options: any[], selected: object, isDisabled: boolean};
  shipToCity: {options: any[], selected: object, isDisabled: boolean};
  plantOrWarehouseCountry: {options: any[], selected: object, isDisabled: boolean};
  plantOrWarehouseState: {options: any[], selected: object, isDisabled: boolean};
  transportationMode: {options: any[], selected: any[]};
  carrierSearchValue: {isCarrierNameSearch: boolean, options: any[], value: string, isDisabled: boolean};
}

export interface IGetOrderListItems {
  orderId: number;
  sourceSystem: string;
  listOfItems: IOrderListOfItems[];
}

export interface IOrderListItemColumnNames {
  productSKUNo: string;
  productName: string;
  productQuantity: string;
  unitOfMeasure: string;
  materialAvailabilityDate: string;
}

export interface ICustomerNameLookUpColumnNames {
  customerSoldToName: string;
  customerSoldToNo: string;
  customerShipToName: string;
  customerShipToNo: string;
  city: string;
  state: string;
  country: string;
  zip: string;
}

export interface ICustomerNameLookUp {
  customerCode: number;
  customerSoldToName: string;
  customerSoldToNo: number;
  customerShipToName: string;
  customerShipToNo: number;
  city: string;
  state: string;
  country: string;
  zip: number;
}

export interface ICustomerParentNameLookUpColumnNames {
  customerName: string;
  address: string;
  city: string;
  state: string;
  country: string;
}

export interface ICustomerParentNameLookUp {
  customerCode: number;
  customerName: string;
  address: string;
  city: string;
  state: string;
  country: string;
}

export interface ICarrierNameLookUpColumnNames {
  customerName: string;
  address: string;
  city: string;
  state: string;
  country: string;
}

export interface ICarrierNameLookUp {
  customerCode: number;
  customerName: string;
  address: string;
  city: string;
  state: string;
  country: string;
}

export interface IOrderListOfItems {
  productSKUNo: number;
  productName: string;
  productQuantity: string;
  unitOfMeasure: string;
  invoiceAmount: string;
  materialAvailabilityDate: string;
}

export interface IOrderListItemDetails {
  listItemColumnNames: IOrderListItemColumnNames;
  listOfItems: IOrderListOfItems[];
}

export interface IInteractiveSVGIcon {
  key: string;
  src: string;
  activeSrc: string;
  altName: string;
  isActive: boolean;
  isDisabled: boolean;
}
