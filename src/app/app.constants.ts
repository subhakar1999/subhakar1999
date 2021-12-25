import { environment } from '../environments/environment';

export const appApiResources = {
  baseUrl: environment.apiHost
};

export const appVariables = {
  locale: 'en-us',
  userLocalStorage: 'user',
  resourceAccessLocalStorage: 'resourceAccessRaw',
  accessTokenServer: 'X-Auth-Token',
  defaultContentTypeHeader: 'application/json',
  unauthorizedPageUrl: '/unauthorized',
  landingPageUrl: '/orders',
  adminDevGroup: [
    'narayan.chittajallu@ecolab.com',
    'jasreet.dhindsa@ecolab.com'
  ],
  orders: {
    orderStatus: {
      statusTitles: [
        'ATHENA_WEB_UI.ORDERS.ORDER_STATUS.ORDER_PIPELINE',
        'ATHENA_WEB_UI.ORDERS.ORDER_STATUS.AT_RISK',
        'ATHENA_WEB_UI.ORDERS.ORDER_STATUS.LATE',
        'ATHENA_WEB_UI.ORDERS.ORDER_STATUS.EXPEDITE',
        'ATHENA_WEB_UI.ORDERS.ORDER_STATUS.RETURNS',
        'ATHENA_WEB_UI.ORDERS.ORDER_STATUS.FUTURE_ORDERS',
        'ATHENA_WEB_UI.ORDERS.ORDER_STATUS.NO_POD'
      ],
      statusKeys: ['orderPipeline', 'atRisk', 'late', 'expedite', 'returns', 'futureOrders', 'noProofOfDelivery'],
      defaultStatusKey: 'orderPipeline'
    },
    orderStages: {
      stageTitles: [
        'ATHENA_WEB_UI.ORDERS.ORDER_STAGES.ORDER_MANAGEMENT',
        'ATHENA_WEB_UI.ORDERS.ORDER_STAGES.COMMERCIAL_ISSUES',
        'ATHENA_WEB_UI.ORDERS.ORDER_STAGES.STOCK_AVAILABILITY',
        'ATHENA_WEB_UI.ORDERS.ORDER_STAGES.TRANSPORTATION_PLANNING',
        'ATHENA_WEB_UI.ORDERS.ORDER_STAGES.WAREHOUSE_EXECUTION',
        'ATHENA_WEB_UI.ORDERS.ORDER_STAGES.IN_TRANSIT',
        'ATHENA_WEB_UI.ORDERS.ORDER_STAGES.DELIVERED'
      ],
      stageKeys: ['orderManagement', 'commercialIssues', 'stockAvailability', 'transportationPlanning', 'warehouseExecution',
        'inTransit', 'delivered'],
      stageSvgUrls: ['assets/images/01_orderMgmnt.svg', 'assets/images/02_commIssues.svg', 'assets/images/03_stockAvail.svg', 'assets/images/04_planning.svg',
        'assets/images/05_warehouse.svg', 'assets/images/06_inTransit.svg', 'assets/images/07_delivered.svg']
    },
    title: {
      searchKeys: ['orderNumber', 'customerPO', 'deliveryNumber', 'customerNumber', 'stockTransferOrderNumber', 'proNumber', 'tmsLoadNumber', 'containerNumber'],
      searchOptions: ['ATHENA_WEB_UI.ORDERS.TITLE.ORDER_NO', 'ATHENA_WEB_UI.ORDERS.TITLE.CUSTOMER_PO_NO', 'ATHENA_WEB_UI.ORDERS.TITLE.DELIVERY_NO',
        'ATHENA_WEB_UI.ORDERS.TITLE.CUSTOMER_NO', 'ATHENA_WEB_UI.ORDERS.TITLE.STOCK_TRANSFER_ORDER_NO', 'ATHENA_WEB_UI.ORDERS.TITLE.PRO_NO', 'ATHENA_WEB_UI.ORDERS.TITLE.TMS_LOAD_NO', 'ATHENA_WEB_UI.ORDERS.TITLE.CONTAINER_NO'],
      searchOptionsPlaceHolders: ['ATHENA_WEB_UI.ORDERS.TITLE.ORDER_NO_PLACE_HOLDER', 'ATHENA_WEB_UI.ORDERS.TITLE.CUSTOMER_PO_NO_PLACE_HOLDER', 'ATHENA_WEB_UI.ORDERS.TITLE.DELIVERY_NO_PLACE_HOLDER',
        'ATHENA_WEB_UI.ORDERS.TITLE.CUSTOMER_NO_PLACE_HOLDER', 'ATHENA_WEB_UI.ORDERS.TITLE.STOCK_TRANSFER_ORDER_NO_PLACE_HOLDER', 'ATHENA_WEB_UI.ORDERS.TITLE.PRO_NO_PLACE_HOLDER', 'ATHENA_WEB_UI.ORDERS.TITLE.TMS_LOAD_NO_PLACE_HOLDER', 'ATHENA_WEB_UI.ORDERS.TITLE.CONTAINER_NO_PLACE_HOLDER'],
      orderActionKeys: ['envelope', 'save', 'print', 'filter'],
      orderActionAltnames: ['Envelope', 'Save', 'Print', 'Filter'],
      orderActionSrc: ['assets/images/mail.svg', 'assets/images/export.svg', 'assets/images/print.svg', 'assets/images/filter.svg'],
      orderActionActiveSrc: ['assets/images/mail-o.svg', 'assets/images/export-o.svg', 'assets/images/print-o.svg', 'assets/images/filter-o.svg'],
      advSearchKey: 'advSearch',
      advSearchAltname: 'Adv Search',
      advSearchSrc: 'assets/images/advSearch.svg',
      advSearchActiveSrc: 'assets/images/advSearch-o.svg',
      advanceSearchReset: {regionType: {options: [], value: null},
        legacyType: {options: [], value: null},
        division: {selectAll: true, options: [], selected: []},
        salesOrg: {options: [], selected: []},
        requestedDeliveryDate: {begin: null, end: null},
        creationDate: {begin: null, end: null},
        orderType: {options: [], selected: []},
        shippingCondition: {options: [], selected: {standard: true, expedite: false}},
        isExport: {options: [], value: null},
        customerSearchValue: {isCustomerNameSearch: true, options: [], value: null},
        customerType: {options: [], selected: null},
        shipToCountry: {options: [], selected: null, isDisabled: true},
        shipToState: {options: [], selected: null, isDisabled: true},
        shipToCity: {options: [], selected: null, isDisabled: true},
        plantOrWarehouseCountry: {options: [], selected: null, isDisabled: true},
        plantOrWarehouseState: {options: [], selected: null, isDisabled: true},
        transportationMode: {options: [], selected: []},
        carrierSearchValue: {isCarrierNameSearch: true, options: [], value: null}
      }
    },
    ordersList: {
      defaultPageInfo: {
        page: 1,
        pageSize: 10
      }
    },
    order: {
      iconKeys: ['list', 'map'],
      iconAltKeys: ['list-icon', 'map-icon'],
      iconSrc: ['assets/images/list.svg', 'assets/images/map.svg'],
      iconActiveSrc: ['assets/images/list-o.svg', 'assets/images/map-o.svg'],
      stageTitles: [
        'ATHENA_WEB_UI.ORDERS.ORDER_STAGES.ORDER_MANAGEMENT',
        'ATHENA_WEB_UI.ORDERS.ORDER_STAGES.COMMERCIAL_ISSUES',
        'ATHENA_WEB_UI.ORDERS.ORDER_STAGES.STOCK_AVAILABILITY',
        'ATHENA_WEB_UI.ORDERS.ORDER_STAGES.TRANSPORTATION_PLANNING',
        'ATHENA_WEB_UI.ORDERS.ORDER_STAGES.WAREHOUSE_EXECUTION',
        'ATHENA_WEB_UI.ORDERS.ORDER_STAGES.IN_TRANSIT',
        'ATHENA_WEB_UI.ORDERS.ORDER_STAGES.DELIVERED',
        'ATHENA_WEB_UI.ORDERS.ORDER_STAGES.FUTURE_ORDERS'
      ],
      listItemColumnNames: [
        'ATHENA_WEB_UI.ORDERS.ORDER.PRODUCT_SKU_NO',
        'ATHENA_WEB_UI.ORDERS.ORDER.PRODUCT_NAME',
        'ATHENA_WEB_UI.ORDERS.ORDER.PRODUCT_QUANTITY',
        'ATHENA_WEB_UI.ORDERS.ORDER.UNIT_OF_MEASURE',
        'ATHENA_WEB_UI.ORDERS.ORDER.INVOICE_AMOUNT',
        'ATHENA_WEB_UI.ORDERS.ORDER.MATERIAL_AVAILABILITY',
      ],
      optionalDetailsText: [
        'ATHENA_WEB_UI.ORDERS.ORDER.OPTIONAL_DETAILS_TEXT.DELIVERY_NO',
        'ATHENA_WEB_UI.ORDERS.ORDER.OPTIONAL_DETAILS_TEXT.CUSTOMER_PO_NO',
        'ATHENA_WEB_UI.ORDERS.ORDER.OPTIONAL_DETAILS_TEXT.SHIPPING_NO',
        'ATHENA_WEB_UI.ORDERS.ORDER.OPTIONAL_DETAILS_TEXT.CARRIER_NAME',
        'ATHENA_WEB_UI.ORDERS.ORDER.OPTIONAL_DETAILS_TEXT.CARRIER_SCAC',
        'ATHENA_WEB_UI.ORDERS.ORDER.OPTIONAL_DETAILS_TEXT.LATEST_ETA'
      ]
    },
    fields: {
      formFieldOptions: {
        region: {options: [{name: 'NA', value: 'na', isDisabled: false}, {name: 'EU', value: 'eu', isDisabled: false}]},
        legacy: {options: [{name: 'Ecolab', value: 'ecolab', isDisabled: false}, {name: 'Nalco', value: 'nalco', isDisabled: false}]},
        division: {options: {
            na: {ecolab: [{name: 'Institutional', code: 1001, isDisabled: false}, {name: 'F&B', code: 1002, isDisabled: false}, {name: 'TCD', code: 1003, isDisabled: false}, {name: 'HC', code: 1004, isDisabled: false}, {name: 'LS', code: 1004, isDisabled: false}],
              nalco: [{name: 'LS', code: 2001, isDisabled: false}, {name: 'FRS', code: 2002, isDisabled: false}, {name: 'Champion', code: 2003, isDisabled: false}, {name: 'Energy', code: 2004, isDisabled: false}, {name: 'Institutional', code: 2005, isDisabled: false}]},
            eu: {ecolab: [{name: 'Energy', code: 3001, isDisabled: false}, {name: 'Champion', code: 3002, isDisabled: false}, {name: 'FRS', code: 3003, isDisabled: false}],
              nalco: [{name: 'HC', code: 4001, isDisabled: false}, {name: 'TCD', code: 4002, isDisabled: false}, {name: 'F&B', code: 4003, isDisabled: false}, {name: 'Institutional', code: 4004, isDisabled: false}, {name: 'Energy', code: 4005, isDisabled: false}]}
          }},
        salesOrg: {options: {
            na: {ecolab: [{name: 'US 10', code: 1001, isDisabled: false}, {name: 'US 50', code: 1002, isDisabled: false}],
              nalco: [{name: 'CA 10', code: 2001, isDisabled: false}, {name: 'US 100', code: 2002, isDisabled: false}, {name: 'US 150', code: 2003, isDisabled: false}, {name: 'US 200', code: 2004, isDisabled: false}, {name: 'US 250', code: 2005, isDisabled: false}]},
            eu: {ecolab: [{name: 'FR 10', code: 3001, isDisabled: false}, {name: 'FR 50', code: 3002, isDisabled: false}, {name: 'AT 20', code: 3003, isDisabled: false}],
              nalco: [{name: 'BE 50', code: 4001, isDisabled: false}, {name: 'BE 25', code: 4002, isDisabled: false}, {name: 'GE', code: 4003, isDisabled: false}, {name: 'HU 50', code: 4004, isDisabled: false}, {name: 'ES 70', code: 4005, isDisabled: false}]}
          }},
        requestedDelivery: {options: {begin: {minDate: null, isDisabled: false}, end: {isDisabled: false}}},
        orderCreation: {options: {begin: {minDate: null, isDisabled: false}, end: {isDisabled: false}}},
        orderType: {options: [{name: 'Customer Order', code: 1001, isDisabled: false}, {name: 'Customer Return', code: 1002, isDisabled: false}]}, // Release-2 - 04082019, {name: 'Stock Transfer', code: 1003, isDisabled: false}
        shippingCondition: {options: [{name: 'Standard', key: 'standard', code: 1001, isDisabled: false}, {name: 'Expedite', key: 'expedite', code: 1002, isDisabled: false}]},
        export: {options: [{name: 'Yes', value: 'yes', isDisabled: false}, {name: 'No', value: 'no', isDisabled: false}]},
        customer: {options: [{name: 'Name', key: 'name', placeHolder: 'Customer Name'}, {name: 'Parent Name', key: 'parentName', placeHolder: 'Customer Parent Name'}]},
        customerType: {options: [{name: 'Distributor', key: 'distributor', code: 1001, isDisabled: false}, {name: 'Direct', key: 'direct', code: 1002, isDisabled: false}]},
        shipTo: {options: {
            na: [{countryName: 'United States Of America', countryCode: 'US', code: 1001, states: [{stateName: 'Minnesota', stateCode: 'MN', code: 24, cities: [{cityName: 'Minneapolis', cityCode: 'MSP', code: 121}]}, {stateName: 'Texas', stateCode: 'TX', code: 28, cities: [{cityName: 'Minneapolis', cityCode: 'MSP', code: 121}]}]},
              {countryName: 'Canada', countryCode: 'CA', code: 1002, states: [{stateName: 'Quebec', stateCode: 'QC', code: 2, cities: [{cityName: 'Minneapolis', cityCode: 'MSP', code: 121}]}, {stateName: 'Ontario', stateCode: 'ON', code: 12, cities: [{cityName: 'Minneapolis', cityCode: 'MSP', code: 121}]}]},
              {countryName: 'Cuba', countryCode: 'CU', code: 1003, states: [{stateName: 'Habana', stateCode: 'HB', code: 2, cities: [{cityName: 'Minneapolis', cityCode: 'MSP', code: 121}]}, {stateName: 'Matanzas', stateCode: 'MA', code: 4, cities: [{cityName: 'Minneapolis', cityCode: 'MSP', code: 121}]}]},
              {countryName: 'Jamaica', countryCode: 'JM', code: 1004, states: [{stateName: 'St Mary', stateCode: 'SM', code: 4, cities: [{cityName: 'Minneapolis', cityCode: 'MSP', code: 121}]}, {stateName: 'Portland', stateCode: 'PO', code: 8, cities: [{cityName: 'Minneapolis', cityCode: 'MSP', code: 121}]}]},
              {countryName: 'Mexico', countryCode: 'MX', code: 1005, states: [{stateName: 'Chiapas', stateCode: 'CH', code: 24, cities: [{cityName: 'Minneapolis', cityCode: 'MSP', code: 121}]}, {stateName: 'Colima', stateCode: 'CO', code: 28, cities: [{cityName: 'Minneapolis', cityCode: 'MSP', code: 121}]}]}
            ],
            eu: [{countryName: 'France', countryCode: 'FR', code: 1001, states: [{stateName: 'Occitanie', stateCode: 'OC', code: 24, cities: [{cityName: 'Minneapolis', cityCode: 'MSP', code: 121}]}]},
              {countryName: 'Germany', countryCode: 'DE', code: 1002, states: [{stateName: 'Berlin', stateCode: 'BE', code: 2, cities: [{cityName: 'Minneapolis', cityCode: 'MSP', code: 121}]}, {stateName: 'Hamberg', stateCode: 'HM', code: 12, cities: [{cityName: 'Minneapolis', cityCode: 'MSP', code: 121}]}]},
              {countryName: 'Italy', countryCode: 'IT', code: 1003, states: [{stateName: 'Lo Stato Italiano', stateCode: 'HB', code: 2, cities: [{cityName: 'Minneapolis', cityCode: 'MSP', code: 121}]}]}
            ]
          }},
        plantOrWarehouse: {options: {
            na: [{countryName: 'United States Of America', countryCode: 'US', code: 1001, states: [{stateName: 'Minnesota', stateCode: 'MN', code: 24}, {stateName: 'Texas', stateCode: 'TX', code: 28}]},
              {countryName: 'Canada', countryCode: 'CA', code: 1002, states: [{stateName: 'Quebec', stateCode: 'QC', code: 2}, {stateName: 'Ontario', stateCode: 'ON', code: 12}]},
              {countryName: 'Cuba', countryCode: 'CU', code: 1003, states: [{stateName: 'Habana', stateCode: 'HB', code: 2}, {stateName: 'Matanzas', stateCode: 'MA', code: 4}]},
              {countryName: 'Jamaica', countryCode: 'JM', code: 1004, states: [{stateName: 'St Mary', stateCode: 'SM', code: 4}, {stateName: 'Portland', stateCode: 'PO', code: 8}]},
              {countryName: 'Mexico', countryCode: 'MX', code: 1005, states: [{stateName: 'Chiapas', stateCode: 'CH', code: 24}, {stateName: 'Colima', stateCode: 'CO', code: 28}]}
            ],
            eu: [{countryName: 'France', countryCode: 'FR', code: 1001, states: [{stateName: 'Occitanie', stateCode: 'OC', code: 24}]},
              {countryName: 'Germany', countryCode: 'DE', code: 1002, states: [{stateName: 'Berlin', stateCode: 'BE', code: 2}, {stateName: 'Hamberg', stateCode: 'HM', code: 12}]},
              {countryName: 'Italy', countryCode: 'IT', code: 1003, states: [{stateName: 'Lo Stato Italiano', stateCode: 'HB', code: 2}]}
            ]
          }},
        transportationMode: {options: [{name: 'Air', code: 1001, isDisabled: false}, {name: 'Bulk', code: 1002, isDisabled: false}, {name: 'Intermodal', code: 1003, isDisabled: false}, {name: 'LTL', code: 1004, isDisabled: false},
            {name: 'Parcel', code: 1005, isDisabled: false}, {name: 'Rail', code: 1006, isDisabled: false}, {name: 'Sea', code: 1007, isDisabled: false}, {name: 'TL', code: 1008, isDisabled: false}, {name: 'Road', code: 1009, isDisabled: false}
          ]},
        carrier: {options: [{name: 'Name', key: 'name', placeHolder: 'Carrier Name'}, {name: 'SCAC', key: 'scac', placeHolder: 'Carrier SCAC'}]}
      }
    }
  },
  shared: {
    pagination: {
      displayInfo: 'ATHENA_WEB_UI.SHARED.PAGINATION.INFO'
    }
  },
};
