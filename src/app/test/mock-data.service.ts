import { Injectable } from '@angular/core';

@Injectable()
export class MockDataService {
 public getSalesAlignmentForFRFromAPI = {
   'code': 200,
   'message': 'success',
   'correlationid': 'db5ab8c6-efbf-4252-b17f-1851859fb3ec',
   'territory': {
     'firstname': 'LUKAS',
     'lastname': 'FROMMENWILER',
     'legacycode': 'ECL_EBS',
     'territorycode': '50000019',
     'companycode': 'CH10',
     'countrycode': 'CHE',
     'territoryname': 'HC  AREA01  DISTRICT01 TK / 500',
     'regioncode': 'EU',
     'divisioncode': '40'
   }
 };

 public getSalesAlignmentForCSRFromAPI = {
  'code': 200,
  'message': 'no data foud',
  'correlationid': 'd0904169-7e3f-4fde-9ddc-dcf7d8f763a1'
};

  public getOrdersForTerrotoryManagerFromAPI = {
    'data': {
      'orderStatus': [
        {
          'orderStatusType': 1,
          'orderStatusKey': 'orderPipeline',
          'status': 'Order Pipeline',
          'count': 1210,
          'stagesCount': {
            'orderManagement': 210,
            'commercialIssues': 150,
            'stockAvailability': 250,
            'transportationPlanning': 100,
            'warehouseExecution': 50,
            'inTransit': 250,
            'delivered': 175
          },
          'listView': {
            'tonnageCount': 1210,
            'stagestonnageCount': {
              'orderManagement': 210,
              'commercialIssues': 150,
              'stockAvailability': 250,
              'transportationPlanning': 100,
              'warehouseExecution': 50,
              'inTransit': 250,
              'delivered': 175
            }
          }, // Can be empty when metricType was counts
          'orders': [
            {
              'selected': false,
              'status': 'inTransit', //status indicator - late, atRisk, noPod
              'orderId': 874326, //Unique ID
              'orderStageType': 1,
              'orderStage': 'orderManagement',
              'titleInfo': {
                'orderNumber': 1234567890,
                'shippingInfo': 'delay/hold/onTime',
                'customerName': 'INC',
                'customerPoNumber': '',
                'destinationCountry': 'United States',
                'deliveryNumber': '',
                'requestedDeliveryDate': '09 Jan 2019',
                'numberOfOrderLines': '08/10'
              },
              'details': {
                'destinationCity': '12345678901234567890123456789012345',
                'destinationAddress': '12345678901234567890123456789012345',
                'latestETADeliveryDate': '',
                'orderCreationDate': '09 Jan 2019',
                'actualDeliveryDate': '09 Jan 2019',
                'shippingNumber': '',
                'soldTo': 'ABCDEABCDE',
                'shipTo': 'ABCDEABCDE',
                'originWareHouse': 'ABCDEFGHIJKLMNO',
                'weight': '012345678912345',
                'carrierName': '',
                'carrierSCAC': null,
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'atRisk',
              'orderId': 874326,
              'orderStageType': 2,
              'orderStage': 'commercialIssues',
              'titleInfo': {
                'orderNumber': 5953830023,
                'customerName': 'CUSTOMERINCABCDEFDGHIJKLMNOPQRSTVUW',
                'customerPoNumber': '436999205614069454411574309943151331',
                'destinationCountry': 'United States',
                'deliveryNumber': '7752034372',
                'requestedDeliveryDate': '09 Jan 2019',
                'numberOfOrderLines': '08/10'
              },
              'details': {
                'actualDeliveryDate': '09 Jan 2019',
                'soldTo': 'nnZUcXrnQ3',
                'shipTo': 'Y55mmkY4me',
                'destinationCity': 'Kewanee',
                'destinationAddress': '8863 Sleepy Hollow St. Ogden, UT 84404',
                'shippingNumber': '374380332',
                'carrierName': 'UPS',
                'carrierSCAC': 'CEGL',
                'orderCreationDate': '10 May 2019 ',
                'latestETADeliveryDate': '20 May 2019',
                'originWareHouse': 'PHL5',
                'weight': '000000000584612',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'atRisk',
              'orderId': 874326,
              'orderStageType': 5,
              'orderStage': 'warehouseExecution',
              'titleInfo': {
                'orderNumber': 2557991291,
                'customerName': ' CUSTOMERINCABCDEFDGHIJKLMNOPQRSTVUW',
                'customerPoNumber': '536740595934806245342197955869909161',
                'destinationCountry': 'United States',
                'deliveryNumber': '40260a0193',
                'requestedDeliveryDate': '10 Feb 2019',
                'numberOfOrderLines': '05/10'
              },
              'details': {
                'actualDeliveryDate': '09 Jan 2019',
                'soldTo': 'T9u81jAMU1',
                'shipTo': 'Y55mmkY4me',
                'destinationCity': 'North Kingstown',
                'destinationAddress': '18 Ashley St. New Philadelphia, OH 44663',
                'shippingNumber': '468519625',
                'carrierName': 'J.B. Hunt Transport Services',
                'carrierSCAC': 'AKMR',
                'orderCreationDate': '24 Apr 2019',
                'latestETADeliveryDate': '6 May 2019',
                'originWareHouse': 'BWI1',
                'weight': '900000000565812',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'inTransit',
              'orderId': 874326,
              'orderStageType': 1,
              'orderStage': 'orderManagement',
              'titleInfo': {
                'orderNumber': 34006289,
                'customerName': 'CUSTOMERINCABCDEFDGHIJKLMNOPQRSTVUW ',
                'customerPoNumber': '1311961757264020492211238',
                'destinationCountry': 'Canada',
                'deliveryNumber': '2725375',
                'requestedDeliveryDate': '11 Mar 2020',
                'numberOfOrderLines': '04/10'
              },
              'details': {
                'actualDeliveryDate': '09 Jan 2019',
                'soldTo': '7mdjB8PIYQ',
                'shipTo': 'szLG7RHEqy',
                'destinationCity': 'East Greenwich',
                'destinationAddress': '90 Oakland St. Bro-ckton, MA 02301',
                'shippingNumber': '553873855',
                'carrierName': 'Landstar System(Light-Asset)',
                'carrierSCAC': '11DX',
                'orderCreationDate': '3 Jun 2019',
                'latestETADeliveryDate': '13 Jun 2019',
                'originWareHouse': 'IND4',
                'weight': '000000000012345',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'late',
              'orderId': 874326,
              'orderStageType': 3,
              'orderStage': 'stockAvailability',
              'titleInfo': {
                'orderNumber': '86759AN28',
                'customerName': 'CustomerINC ABCDefghIJKLMNOPQRSTVUW ',
                'customerPoNumber': '8865249294003850810540182185124434',
                'destinationCountry': 'Canada',
                'deliveryNumber': '5237851003',
                'requestedDeliveryDate': '09 Jan 2020',
                'numberOfOrderLines': '02/10'
              },
              'details': {
                'actualDeliveryDate': '09 Jan 2019',
                'soldTo': '~LEBoTvGEm',
                'shipTo': 'Ilhd  zRSP',
                'destinationCity': 'Murray',
                'destinationAddress': '8979 Clay St.  Ballston Spa, NY 12020',
                'shippingNumber': '589653305',
                'carrierName': 'Celadon Group*',
                'carrierSCAC': 'CHIW',
                'orderCreationDate': '20 May 2019',
                'latestETADeliveryDate': '1 Jun 2019',
                'originWareHouse': 'CVG3',
                'weight': '000000000123450',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'late',
              'orderId': 874326,
              'orderStageType': 6,
              'orderStage': 'inTransit',
              'titleInfo': {
                'orderNumber': 604760-34,
                'customerName': '123CustomerINCABCDEFDGHIKLMPQRSTVUW',
                'customerPoNumber': '000500228127282927983941556950780356',
                'destinationCountry': 'United States',
                'deliveryNumber': '6486-3293',
                'requestedDeliveryDate': '31 Dec 2019',
                'numberOfOrderLines': '08/10'
              },
              'details': {
                'actualDeliveryDate': '09 Jan 2019',
                'soldTo': 'CttwMjuE&&',
                'shipTo': 'wRr4aZ%jKm',
                'destinationCity': 'Opp',
                'destinationAddress': '7264 Ryan Dr. West Isl/p, NY 11795',
                'shippingNumber': '49809468',
                'carrierName': 'Quality Distribution(Light-Asset)',
                'carrierSCAC': 'CAMN',
                'orderCreationDate': '26 Aug 2019',
                'latestETADeliveryDate': '5 Sep 2019',
                'originWareHouse': 'DFW7',
                'weight': '000000000212344',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'atRisk',
              'orderId': 874326,
              'orderStageType': 7,
              'orderStage': 'delivered',
              'titleInfo': {
                'orderNumber': 99905,
                'customerName': 'cUSTOMERINCabcdEFD',
                'customerPoNumber': '828948736899585285292513142108105312',
                'destinationCountry': 'United States',
                'deliveryNumber': '9329656554',
                'requestedDeliveryDate': '09 Dec 2018',
                'numberOfOrderLines': '09/08'
              },
              'details': {
                'actualDeliveryDate': '09 Jan 2019',
                'soldTo': 'wRr4aZ%jKm',
                'shipTo': 'CttwMjuE&&',
                'destinationCity': 'Watkins---Glen',
                'destinationAddress': '7038 Mayfair Drive Media, PA 19063',
                'shippingNumber': '818930542',
                'carrierName': 'Roadrunner Transportation Services (Light-Asset)',
                'carrierSCAC': 'CPJQ',
                'orderCreationDate': '16 Oct 2019',
                'latestETADeliveryDate': '28 Oct 2018',
                'originWareHouse': 'RNO1',
                'weight': '678910111234567',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'inTransit',
              'orderId': 874326,
              'orderStageType': 4,
              'orderStage': 'transportationPlanning',
              'titleInfo': {
                'orderNumber': 571744084,
                'customerName': '$12345678Customer/(ABC D3fghijKLM*/',
                'customerPoNumber': '548126789252805699349533334868381155',
                'destinationCountry': 'Canada',
                'deliveryNumber': '~129233331',
                'requestedDeliveryDate': '09 Jun 2019',
                'numberOfOrderLines': '09/09'
              },
              'details': {
                'actualDeliveryDate': '09 Jan 2019',
                'soldTo': 'Ilhd  zRSP',
                'shipTo': '~LEBoTvGEm',
                'destinationCity': 'Oskaloosa',
                'destinationAddress': '2 Princeton Street Mooresville, NC 28115',
                'shippingNumber': '340853756',
                'carrierName': 'COSCO Container Lines',
                'carrierSCAC': 'COSU',
                'orderCreationDate': '27 Aug 2019',
                'latestETADeliveryDate': '26 Aug 2019',
                'originWareHouse': 'BNA2',
                'weight': '248910111234858',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'inTransit',
              'orderId': 874326,
              'orderStageType': 6,
              'orderStage': 'inTransit',
              'titleInfo': {
                'orderNumber': 2784515,
                'customerName': 'O’Reilly CUSTOMERINCABCDE98423108413',
                'customerPoNumber': '37826747085279ABGH2082123147373406',
                'destinationCountry': 'Belgium',
                'deliveryNumber': '9578127315',
                'requestedDeliveryDate': '14 Feb 2019',
                'numberOfOrderLines': '09/09'
              },
              'details': {
                'actualDeliveryDate': '09 Jan 2019',
                'soldTo': 'szLG7RHEqy',
                'shipTo': '7mdjB8PIYQ',
                'destinationCity': 'Winchester-on-the-Severn',
                'destinationAddress': '9084 Bridgeton Lane Tacoma, WA 98444',
                'shippingNumber': '415885321',
                'carrierName': 'Sinokor Merchant Marine Co.,Ltd',
                'carrierSCAC': 'SKLU',
                'orderCreationDate': '4 Sep 2019',
                'latestETADeliveryDate': '23 Aug 2019',
                'originWareHouse': 'CH35',
                'weight': '948910111234858',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'atRisk',
              'orderId': 874326,
              'orderStageType': 6,
              'orderStage': 'inTransit',
              'titleInfo': {
                'orderNumber': '6455a72535',
                'customerName': 'Customer@Rockford*h~~~67jhuILLINOIS',
                'customerPoNumber': '993458208430326  358677127870358121',
                'destinationCountry': 'France',
                'deliveryNumber': '22027899',
                'requestedDeliveryDate': '16 Jul 2019',
                'numberOfOrderLines': '02/05'
              },
              'details': {
                'actualDeliveryDate': '09 Jan 2019',
                'soldTo': 'Y55mmkY4me',
                'shipTo': 'T9u81jAMU1',
                'destinationCity': 'Rancho Santa Margarita',
                'destinationAddress': '79 Wood Ave. Minot, ND 58701',
                'shippingNumber': '902155860',
                'carrierName': 'The Shipping Coporation of India Ltd.',
                'carrierSCAC': '	SCIU',
                'orderCreationDate': '6 Jun 2019',
                'latestETADeliveryDate': '16 Jun 2019',
                'originWareHouse': 'NA10',
                'weight': '2',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'inTransit',
              'orderId': 874326,
              'orderStageType': 6,
              'orderStage': 'inTransit',
              'titleInfo': {
                'orderNumber': 360408/410,
                'customerName': 'customer@Naperville*HHh~~~67Chicago',
                'customerPoNumber': '179600547551783816428968372840670267',
                'destinationCountry': 'Germany',
                'deliveryNumber': '5747048360',
                'requestedDeliveryDate': '19 Sep 2019',
                'numberOfOrderLines': '01/06'
              },
              'details': {
                'actualDeliveryDate': '09 Jan 2019',
                'soldTo': 'DKJymw6bJG',
                'shipTo': 'nnZUcXrnQ3',
                'destinationCity': 'Little Harbor on the HillsboroFlora',
                'destinationAddress': '6 Poor House Street Rocky Mount, NC 27804',
                'shippingNumber': '710200337',
                'carrierName': 'Wan Hai Lines',
                'carrierSCAC': '22AA',
                'orderCreationDate': '12 Mar 2019',
                'latestETADeliveryDate': '24 Mar 2019',
                'originWareHouse': '18FG',
                'weight': '000000000000006',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            }] //count for 20 orders by default
        },
        {
          'orderStatusType': 2,
          'orderStatusKey': 'atRisk',
          'status': 'At Risk',
          'count': 210,
          'stagesCount': {
            'orderManagement': 20,
            'commercialIssues': 50,
            'stockAvailability': 45,
            'transportationPlanning': 30,
            'warehouseExecution': 10,
            'inTransit': 20,
            'delivered': 25
          },
          'orders': [
            {
              'selected': false,
              'status': 'atRisk',
              'orderId': 874326,
              'orderStageType': 2,
              'orderStage': 'commercialIssues',
              'titleInfo': {
                'orderNumber': 5953830023,
                'shippingInfo': 'atRisk',
                'customerName': 'CUSTOMERINCABCDEFDGHIJKLMNOPQRSTVUW',
                'customerPoNumber': '436999205614069454411574309943151331',
                'destinationCountry': 'United States',
                'deliveryNumber': '7752034372',
                'requestedDeliveryDate': '09 Jan 2019',
                'numberOfOrderLines': '08/10',
              },
              'details': {
                'soldTo': 'nnZUcXrnQ3',
                'shipTo': 'Y55mmkY4me',
                'destinationCity': 'Kewanee',
                'destinationAddress': '8863 Sleepy Hollow St. Ogden, UT 84404',
                'shipmentNumber': '374380332',
                'carrierName': 'UPS',
                'carrierSCAC': 'CEGL',
                'orderCreationDate': '10 May 2019 ',
                'latestETADeliveryDate': '20 May 2019',
                'originWareHouse': 'PHL5',
                'weight': '000000000584612',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'atRisk',
              'orderId': 874326,
              'orderStageType': 4,
              'orderStage': 'transportationPlanning',
              'titleInfo': {
                'orderNumber': 2557991291,
                'shippingInfo': 'atRisk',
                'customerName': ' CUSTOMERINCABCDEFDGHIJKLMNOPQRSTVUW',
                'customerPoNumber': '536740595934806245342197955869909161',
                'destinationCountry': 'United States',
                'deliveryNumber': '40260a0193',
                'requestedDeliveryDate': '10 Feb 2019',
                'numberOfOrderLines': '05/10',

              },
              'details': {
                'soldTo': 'T9u81jAMU1',
                'shipTo': 'Y55mmkY4me',
                'destinationCity': 'North Kingstown',
                'destinationAddress': '18 Ashley St. New Philadelphia, OH 44663',
                'shipmentNumber': '468519625',
                'carrierName': 'J.B. Hunt Transport Services',
                'carrierSCAC': 'AKMR',
                'orderCreationDate': '24 Apr 2019',
                'latestETADeliveryDate': '6 May 2019',
                'originWareHouse': 'BWI1',
                'weight': '900000000565812',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'atRisk',
              'orderId': 874326,
              'orderStageType': 5,
              'orderStage': 'warehouseExecution',
              'titleInfo': {
                'orderNumber': 99905,
                'shippingInfo': 'atRisk',
                'customerName': 'cUSTOMERINCabcdEFD',
                'customerPoNumber': '828948736899585285292513142108105312',
                'destinationCountry': 'United States',
                'deliveryNumber': '9329656554',
                'requestedDeliveryDate': '09 Dec 2018',
                'numberOfOrderLines': '09/08',

              },
              'details': {
                'soldTo': 'wRr4aZ%jKm',
                'shipTo': 'CttwMjuE&&',
                'destinationCity': 'Watkins---Glen',
                'destinationAddress': '7038 Mayfair Drive Media, PA 19063',
                'shipmentNumber': '818930542',
                'carrierName': 'Roadrunner Transportation Services (Light-Asset)',
                'carrierSCAC': 'CPJQ',
                'orderCreationDate': '16 Oct 2019',
                'latestETADeliveryDate': '28 Oct 2018',
                'originWareHouse': 'RNO1',
                'weight': '678910111234567',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'atRisk',
              'orderId': 874326,
              'orderStageType': 7,
              'orderStage': 'delivered',
              'titleInfo': {
                'orderNumber': '6455a72535',
                'shippingInfo': 'atRisk',
                'customerName': 'Customer@Rockford*h~~~67jhuILLINOIS',
                'customerPoNumber': '993458208430326  358677127870358121',
                'destinationCountry': 'France',
                'deliveryNumber': '22027899',
                'requestedDeliveryDate': '16  Jul 2019',
                'numberOfOrderLines': '02/05',

              },
              'details': {
                'soldTo': 'Y55mmkY4me',
                'shipTo': 'T9u81jAMU1',
                'destinationCity': 'Rancho Santa Margarita',
                'destinationAddress': '79 Wood Ave. Minot, ND 58701',
                'shipmentNumber': '902155860',
                'carrierName': 'The Shipping Coporation of India Ltd.',
                'carrierSCAC': '	SCIU',
                'orderCreationDate': '6 Jun 2019',
                'latestETADeliveryDate': '16 Jun 2019',
                'originWareHouse': 'NA10',
                'weight': '2',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'atRisk',
              'orderId': 874326,
              'orderStageType': 3,
              'orderStage': 'stockAvailability',
              'titleInfo': {
                'orderNumber': 2557991291,
                'shippingInfo': 'atRisk',
                'customerName': ' CUSTOMERINCABCDEFDGHIJKLMNOPQRSTVUW',
                'customerPoNumber': '536740595934806245342197955869909161',
                'destinationCountry': 'United States',
                'deliveryNumber': '40260a0193',
                'requestedDeliveryDate': '10 Feb 2019',
                'numberOfOrderLines': '05/10',

              },
              'details': {
                'soldTo': 'T9u81jAMU1',
                'shipTo': 'Y55mmkY4me',
                'destinationCity': 'North Kingstown',
                'destinationAddress': '18 Ashley St. New Philadelphia, OH 44663',
                'shipmentNumber': '468519625',
                'carrierName': 'J.B. Hunt Transport Services',
                'carrierSCAC': 'AKMR',
                'orderCreationDate': '24 Apr 2019',
                'latestETADeliveryDate': '6 May 2019',
                'originWareHouse': 'BWI1',
                'weight': '900000000565812',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'atRisk',
              'orderId': 874326,
              'orderStageType': 1,
              'orderStage': 'orderManagement',
              'titleInfo': {
                'orderNumber': 99905,
                'shippingInfo': 'atRisk',
                'customerName': 'cUSTOMERINCabcdEFD',
                'customerPoNumber': '828948736899585285292513142108105312',
                'destinationCountry': 'United States',
                'deliveryNumber': '9329656554',
                'requestedDeliveryDate': '09 Dec 2018',
                'numberOfOrderLines': '09/08',

              },
              'details': {
                'soldTo': 'wRr4aZ%jKm',
                'shipTo': 'CttwMjuE&&',
                'destinationCity': 'Watkins---Glen',
                'destinationAddress': '7038 Mayfair Drive Media, PA 19063',
                'shipmentNumber': '818930542',
                'carrierName': 'Roadrunner Transportation Services (Light-Asset)',
                'carrierSCAC': 'CPJQ',
                'orderCreationDate': '16 Oct 2019',
                'latestETADeliveryDate': '28 Oct 2018',
                'originWareHouse': 'RNO1',
                'weight': '678910111234567',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'atRisk',
              'orderId': 874326,
              'orderStageType': 1,
              'orderStage': 'orderManagement',
              'titleInfo': {
                'orderNumber': '6455a72535',
                'shippingInfo': 'atRisk',
                'customerName': 'Customer@Rockford*h~~~67jhuILLINOIS',
                'customerPoNumber': '993458208430326  358677127870358121',
                'destinationCountry': 'France',
                'deliveryNumber': '22027899',
                'requestedDeliveryDate': '16  Jul 2019',
                'numberOfOrderLines': '02/05',

              },
              'details': {
                'soldTo': 'Y55mmkY4me',
                'shipTo': 'T9u81jAMU1',
                'destinationCity': 'Rancho Santa Margarita',
                'destinationAddress': '79 Wood Ave. Minot, ND 58701',
                'shipmentNumber': '902155860',
                'carrierName': 'The Shipping Coporation of India Ltd.',
                'carrierSCAC': '	SCIU',
                'orderCreationDate': '6 Jun 2019',
                'latestETADeliveryDate': '16 Jun 2019',
                'originWareHouse': 'NA10',
                'weight': '2',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'atRisk',
              'orderId': 874326,
              'orderStageType': 1,
              'orderStage': 'orderManagement',
              'titleInfo': {
                'orderNumber': 2557991291,
                'shippingInfo': 'atRisk',
                'customerName': ' CUSTOMERINCABCDEFDGHIJKLMNOPQRSTVUW',
                'customerPoNumber': '536740595934806245342197955869909161',
                'destinationCountry': 'United States',
                'deliveryNumber': '40260a0193',
                'requestedDeliveryDate': '10 Feb 2019',
                'numberOfOrderLines': '05/10',

              },
              'details': {
                'soldTo': 'T9u81jAMU1',
                'shipTo': 'Y55mmkY4me',
                'destinationCity': 'North Kingstown',
                'destinationAddress': '18 Ashley St. New Philadelphia, OH 44663',
                'shipmentNumber': '468519625',
                'carrierName': 'J.B. Hunt Transport Services',
                'carrierSCAC': 'AKMR',
                'orderCreationDate': '24 Apr 2019',
                'latestETADeliveryDate': '6 May 2019',
                'originWareHouse': 'BWI1',
                'weight': '900000000565812',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'atRisk',
              'orderId': 874326,
              'orderStageType': 1,
              'orderStage': 'orderManagement',
              'titleInfo': {
                'orderNumber': 99905,
                'shippingInfo': 'atRisk',
                'customerName': 'cUSTOMERINCabcdEFD',
                'customerPoNumber': '828948736899585285292513142108105312',
                'destinationCountry': 'United States',
                'deliveryNumber': '9329656554',
                'requestedDeliveryDate': '09 Dec 2018',
                'numberOfOrderLines': '09/08',

              },
              'details': {
                'soldTo': 'wRr4aZ%jKm',
                'shipTo': 'CttwMjuE&&',
                'destinationCity': 'Watkins---Glen',
                'destinationAddress': '7038 Mayfair Drive Media, PA 19063',
                'shipmentNumber': '818930542',
                'carrierName': 'Roadrunner Transportation Services (Light-Asset)',
                'carrierSCAC': 'CPJQ',
                'orderCreationDate': '16 Oct 2019',
                'latestETADeliveryDate': '28 Oct 2018',
                'originWareHouse': 'RNO1',
                'weight': '678910111234567',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'atRisk',
              'orderId': 874326,
              'orderStageType': 1,
              'orderStage': 'orderManagement',
              'titleInfo': {
                'orderNumber': '6455a72535',
                'shippingInfo': 'atRisk',
                'customerName': 'Customer@Rockford*h~~~67jhuILLINOIS',
                'customerPoNumber': '993458208430326  358677127870358121',
                'destinationCountry': 'France',
                'deliveryNumber': '22027899',
                'requestedDeliveryDate': '16  Jul 2019',
                'numberOfOrderLines': '02/05',

              },
              'details': {
                'soldTo': 'Y55mmkY4me',
                'shipTo': 'T9u81jAMU1',
                'destinationCity': 'Rancho Santa Margarita',
                'destinationAddress': '79 Wood Ave. Minot, ND 58701',
                'shipmentNumber': '902155860',
                'carrierName': 'The Shipping Coporation of India Ltd.',
                'carrierSCAC': '	SCIU',
                'orderCreationDate': '6 Jun 2019',
                'latestETADeliveryDate': '16 Jun 2019',
                'originWareHouse': 'NA10',
                'weight': '2',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'atRisk',
              'orderId': 874326,
              'orderStageType': 1,
              'orderStage': 'orderManagement',
              'titleInfo': {
                'orderNumber': '6455a72535',
                'shippingInfo': 'atRisk',
                'customerName': 'Customer@Rockford*h~~~67jhuILLINOIS',
                'customerPoNumber': '993458208430326  358677127870358121',
                'destinationCountry': 'France',
                'deliveryNumber': '22027899',
                'requestedDeliveryDate': '16  Jul 2019',
                'numberOfOrderLines': '02/05',

              },
              'details': {
                'soldTo': 'Y55mmkY4me',
                'shipTo': 'T9u81jAMU1',
                'destinationCity': 'Rancho Santa Margarita',
                'destinationAddress': '79 Wood Ave. Minot, ND 58701',
                'shipmentNumber': '902155860',
                'carrierName': 'The Shipping Coporation of India Ltd.',
                'carrierSCAC': '	SCIU',
                'orderCreationDate': '6 Jun 2019',
                'latestETADeliveryDate': '16 Jun 2019',
                'originWareHouse': 'NA10',
                'weight': '2',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            }
          ] //count for 20 orders by default
        },
        {
          'orderStatusType': 3,
          'orderStatusKey': 'late',
          'status': 'Late',
          'count': 6,
          'stagesCount': {
            'orderManagement': 0,
            'commercialIssues': 0,
            'stockAvailability': 0,
            'transportationPlanning': 3,
            'warehouseExecution': 2,
            'inTransit': 0,
            'delivered': 1
          },
          'orders': [
            {
              'selected': false,
              'status': 'late',
              'orderId': 874326,
              'orderStageType': 3,
              'orderStage': 'stockAvailability',
              'titleInfo': {
                'orderNumber': '86759AN28',
                'customerName': 'CustomerINC ABCDefghIJKLMNOPQRSTVUW ',
                'customerPoNumber': '8865249294003850810540182185124434',
                'destinationCountry': 'Canada',
                'deliveryNumber': '5237851003',
                'requestedDeliveryDate': '09 Jan 2020',
                'numberOfOrderLines': '02/10',

              },
              'details': {
                'actualDeliveryDate': '09 Jan 2019',
                'soldTo': '~LEBoTvGEm',
                'shipTo': 'Ilhd  zRSP',
                'destinationCity': 'Murray',
                'destinationAddress': '8979 Clay St.  Ballston Spa, NY 12020',
                'shippingNumber': '589653305',
                'carrierName': 'Celadon Group*',
                'carrierSCAC': 'CHIW',
                'orderCreationDate': '20 May 2019',
                'latestETADeliveryDate': '1 Jun 2019',
                'originWareHouse': 'CVG3',
                'weight': '000000000123450',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'late',
              'orderId': 874326,
              'orderStageType': 3,
              'orderStage': 'stockAvailability',
              'titleInfo': {
                'orderNumber': '86759AN28',
                'customerName': 'CustomerINC ABCDefghIJKLMNOPQRSTVUW ',
                'customerPoNumber': '8865249294003850810540182185124434',
                'destinationCountry': 'Canada',
                'deliveryNumber': '5237851003',
                'requestedDeliveryDate': '09 Jan 2020',
                'numberOfOrderLines': '02/10',

              },
              'details': {
                'actualDeliveryDate': '09 Jan 2019',
                'soldTo': '~LEBoTvGEm',
                'shipTo': 'Ilhd  zRSP',
                'destinationCity': 'Murray',
                'destinationAddress': '8979 Clay St.  Ballston Spa, NY 12020',
                'shippingNumber': '589653305',
                'carrierName': 'Celadon Group*',
                'carrierSCAC': 'CHIW',
                'orderCreationDate': '20 May 2019',
                'latestETADeliveryDate': '1 Jun 2019',
                'originWareHouse': 'CVG3',
                'weight': '000000000123450',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            }
          ] //count for 20 orders by default
        },
        {
          'orderStatusType': 4,
          'orderStatusKey': 'expedite',
          'status': 'Expedite',
          'count': 530,
          'stagesCount': {
            'orderManagement': 28,
            'commercialIssues': 36,
            'stockAvailability': 176,
            'transportationPlanning': 60,
            'warehouseExecution': 140,
            'inTransit': 28,
            'delivered': 36
          },
          'orders': [{
            'selected': false,
            'status': 'inTransit',
            'orderId': 874326,
            'orderStageType': 1,
            'orderStage': 'orderManagement',
            'titleInfo': {
              'orderNumber': 1234567890,
              'shippingInfo': 'delay/hold/onTime',
              'customerName': 'INC',
              'customerPoNumber': '',
              'destinationCountry': 'United States',
              'deliveryNumber': '',
              'requestedDeliveryDate': '09 Jan 2019',
              'numberOfOrderLines': '08/10'
            },
            'details': {
              'destinationCity': '12345678901234567890123456789012345',
              'destinationAddress': '12345678901234567890123456789012345',
              'latestETADeliveryDate': '',
              'orderCreationDate': '09 Jan 2019',
              'actualDeliveryDate': '09 Jan 2019',
              'shippingNumber': '',
              'soldTo': 'ABCDEABCDE',
              'shipTo': 'ABCDEABCDE',
              'originWareHouse': 'ABCDEFGHIJKLMNO',
              'weight': '012345678912345',
              'carrierName': '',
              'carrierSCAC': null,
              'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
            }
          },
            {
              'selected': false,
              'status': 'inTransit',
              'orderId': 874326,
              'orderStageType': 1,
              'orderStage': 'orderManagement',
              'titleInfo': {
                'orderNumber': 1234567890,
                'shippingInfo': 'delay/hold/onTime',
                'customerName': 'INC',
                'customerPoNumber': '',
                'destinationCountry': 'United States',
                'deliveryNumber': '',
                'requestedDeliveryDate': '09 Jan 2019',
                'numberOfOrderLines': '08/10'
              },
              'details': {
                'destinationCity': '12345678901234567890123456789012345',
                'destinationAddress': '12345678901234567890123456789012345',
                'latestETADeliveryDate': '',
                'orderCreationDate': '09 Jan 2019',
                'actualDeliveryDate': '09 Jan 2019',
                'shippingNumber': '',
                'soldTo': 'ABCDEABCDE',
                'shipTo': 'ABCDEABCDE',
                'originWareHouse': 'ABCDEFGHIJKLMNO',
                'weight': '012345678912345',
                'carrierName': '',
                'carrierSCAC': null,
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            }] //count for 20 orders by default
        },
        {
          'orderStatusType': 5,
          'orderStatusKey': 'returns',
          'status': 'Returns',
          'count': 58,
          'stagesCount': {
            'orderManagement': 5,
            'commercialIssues': 0,
            'stockAvailability': 3,
            'transportationPlanning': 22,
            'warehouseExecution': 12,
            'inTransit': 6,
            'delivered': 7
          },
          'orders': [{
            'selected': false,
            'status': 'inTransit',
            'orderId': 874326,
            'orderStageType': 1,
            'orderStage': 'orderManagement',
            'titleInfo': {
              'orderNumber': 1234567890,
              'shippingInfo': 'delay/hold/onTime',
              'customerName': 'INC',
              'customerPoNumber': '',
              'destinationCountry': 'United States',
              'deliveryNumber': '',
              'requestedDeliveryDate': '09 Jan 2019',
              'numberOfOrderLines': '08/10'
            },
            'details': {
              'destinationCity': '12345678901234567890123456789012345',
              'destinationAddress': '12345678901234567890123456789012345',
              'latestETADeliveryDate': '',
              'orderCreationDate': '09 Jan 2019',
              'actualDeliveryDate': '09 Jan 2019',
              'shippingNumber': '',
              'soldTo': 'ABCDEABCDE',
              'shipTo': 'ABCDEABCDE',
              'originWareHouse': 'ABCDEFGHIJKLMNO',
              'weight': '012345678912345',
              'carrierName': '',
              'carrierSCAC': null,
              'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
            }
          },
            {
              'selected': false,
              'status': 'inTransit',
              'orderId': 874326,
              'orderStageType': 1,
              'orderStage': 'orderManagement',
              'titleInfo': {
                'orderNumber': 1234567890,
                'shippingInfo': 'delay/hold/onTime',
                'customerName': 'INC',
                'customerPoNumber': '',
                'destinationCountry': 'United States',
                'deliveryNumber': '',
                'requestedDeliveryDate': '09 Jan 2019',
                'numberOfOrderLines': '08/10'
              },
              'details': {
                'destinationCity': '12345678901234567890123456789012345',
                'destinationAddress': '12345678901234567890123456789012345',
                'latestETADeliveryDate': '',
                'orderCreationDate': '09 Jan 2019',
                'actualDeliveryDate': '09 Jan 2019',
                'shippingNumber': '',
                'soldTo': 'ABCDEABCDE',
                'shipTo': 'ABCDEABCDE',
                'originWareHouse': 'ABCDEFGHIJKLMNO',
                'weight': '012345678912345',
                'carrierName': '',
                'carrierSCAC': null,
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            }] //count for 20 orders by default
        },
        {
          'orderStatusType': 6,
          'orderStatusKey': 'futureOrders',
          'status': 'Future Orders',
          'count': 58,
          'stagesCount': {
            'orderManagement': 5,
            'commercialIssues': 0,
            'stockAvailability': 3,
            'transportationPlanning': 22,
            'warehouseExecution': 12,
            'inTransit': 6,
            'delivered': 7
          },
          'orders': [{
            'selected': false,
            'status': 'inTransit',
            'orderId': 874326,
            'orderStageType': 1,
            'orderStage': 'orderManagement',
            'titleInfo': {
              'orderNumber': 1234567890,
              'shippingInfo': 'delay/hold/onTime',
              'customerName': 'INC',
              'customerPoNumber': '',
              'destinationCountry': 'United States',
              'deliveryNumber': '',
              'requestedDeliveryDate': '09 Jan 2019',
              'numberOfOrderLines': '08/10'
            },
            'details': {
              'destinationCity': '12345678901234567890123456789012345',
              'destinationAddress': '12345678901234567890123456789012345',
              'latestETADeliveryDate': '',
              'orderCreationDate': '09 Jan 2019',
              'actualDeliveryDate': '09 Jan 2019',
              'shippingNumber': '',
              'soldTo': 'ABCDEABCDE',
              'shipTo': 'ABCDEABCDE',
              'originWareHouse': 'ABCDEFGHIJKLMNO',
              'weight': '012345678912345',
              'carrierName': '',
              'carrierSCAC': null,
              'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
            }
          },
            {
              'selected': false,
              'status': 'inTransit',
              'orderId': 874326,
              'orderStageType': 1,
              'orderStage': 'orderManagement',
              'titleInfo': {
                'orderNumber': 1234567890,
                'shippingInfo': 'delay/hold/onTime',
                'customerName': 'INC',
                'customerPoNumber': '',
                'destinationCountry': 'United States',
                'deliveryNumber': '',
                'requestedDeliveryDate': '09 Jan 2019',
                'numberOfOrderLines': '08/10'
              },
              'details': {
                'destinationCity': '12345678901234567890123456789012345',
                'destinationAddress': '12345678901234567890123456789012345',
                'latestETADeliveryDate': '',
                'orderCreationDate': '09 Jan 2019',
                'actualDeliveryDate': '09 Jan 2019',
                'shippingNumber': '',
                'soldTo': 'ABCDEABCDE',
                'shipTo': 'ABCDEABCDE',
                'originWareHouse': 'ABCDEFGHIJKLMNO',
                'weight': '012345678912345',
                'carrierName': '',
                'carrierSCAC': null,
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            }] //count for 20 orders by default
        },
        {
          'orderStatusType': 7,
          'orderStatusKey': 'noProofOfDelivery',
          'status': 'No POD',
          'count': 58,
          'stagesCount': {
            'orderManagement': 587,
            'commercialIssues': 43,
            'stockAvailability': 98,
            'transportationPlanning': 2,
            'warehouseExecution': 142,
            'inTransit': 6,
            'delivered': 7
          },
          'orders': [{
            'selected': false,
            'status': 'noPod',
            'orderId': 874326,
            'orderStageType': 1,
            'orderStage': 'orderManagement',
            'titleInfo': {
              'orderNumber': 1234567890,
              'shippingInfo': 'delay/hold/onTime',
              'customerName': 'INC',
              'customerPoNumber': '',
              'destinationCountry': 'United States',
              'deliveryNumber': '',
              'requestedDeliveryDate': '09 Jan 2019',
              'numberOfOrderLines': '08/10'
            },
            'details': {
              'destinationCity': '12345678901234567890123456789012345',
              'destinationAddress': '12345678901234567890123456789012345',
              'latestETADeliveryDate': '',
              'orderCreationDate': '09 Jan 2019',
              'actualDeliveryDate': '09 Jan 2019',
              'shippingNumber': '',
              'soldTo': 'ABCDEABCDE',
              'shipTo': 'ABCDEABCDE',
              'originWareHouse': 'ABCDEFGHIJKLMNO',
              'weight': '012345678912345',
              'carrierName': '',
              'carrierSCAC': null,
              'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
            }
          },
            {
              'selected': false,
              'status': 'noPod',
              'orderId': 874326,
              'orderStageType': 1,
              'orderStage': 'orderManagement',
              'titleInfo': {
                'orderNumber': 1234567890,
                'shippingInfo': 'delay/hold/onTime',
                'customerName': 'INC',
                'customerPoNumber': '',
                'destinationCountry': 'United States',
                'deliveryNumber': '',
                'requestedDeliveryDate': '09 Jan 2019',
                'numberOfOrderLines': '08/10'
              },
              'details': {
                'destinationCity': '12345678901234567890123456789012345',
                'destinationAddress': '12345678901234567890123456789012345',
                'latestETADeliveryDate': '',
                'orderCreationDate': '09 Jan 2019',
                'actualDeliveryDate': '09 Jan 2019',
                'shippingNumber': '',
                'soldTo': 'ABCDEABCDE',
                'shipTo': 'ABCDEABCDE',
                'originWareHouse': 'ABCDEFGHIJKLMNO',
                'weight': '012345678912345',
                'carrierName': '',
                'carrierSCAC': null,
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            }] //count for 20 orders by default
        }
      ],
      'searchCriteria': {
        'regionType': {
          'options': [
            {
              'name': 'NA',
              'value': 'na',
              'isDisabled': true
            },
            {
              'name': 'EU',
              'value': 'eu',
              'isDisabled': false
            }
          ],
          'value': 'eu'
        },
        'legacyType': {
          'options': [
            {
              'name': 'Ecolab',
              'value': 'ecolab',
              'isDisabled': true
            },
            {
              'name': 'Nalco',
              'value': 'nalco',
              'isDisabled': false
            }
          ],
          'value': 'nalco'
        },
        'division': {
          'options': [
            {
              'name': 'HC',
              'code': 4001,
              'isDisabled': false
            },
            {
              'name': 'TCD',
              'code': 4002,
              'isDisabled': false
            },
            {
              'name': 'F&B',
              'code': 4003,
              'isDisabled': false
            },
            {
              'name': 'Institutional',
              'code': 4004,
              'isDisabled': false
            },
            {
              'name': 'Energy',
              'code': 4005,
              'isDisabled': false
            }
          ]
        },
        'salesOrg': {
          'options': [
            {
              'name': 'BE 50',
              'code': 4001,
              'isDisabled': false
            },
            {
              'name': 'BE 25',
              'code': 4002,
              'isDisabled': false
            },
            {
              'name': 'GE',
              'code': 4003,
              'isDisabled': false
            },
            {
              'name': 'HU 50',
              'code': 4004,
              'isDisabled': false
            },
            {
              'name': 'ES 70',
              'code': 4005,
              'isDisabled': false
            }
          ]
        },
        'requestedDeliveryDate': {
          'begin': '2019-04-19T21:53:09.339Z',
          'end': '2019-04-19T21:53:09.339Z',
          'minDate': '2019-04-19T21:53:09.339Z',
          'maxDate': '2019-04-19T21:53:09.339Z'
        },
        'creationDate': {
          'begin': '2019-04-19T21:53:09.339Z',
          'end': '2019-04-19T21:53:09.339Z',
          'minDate': '2019-04-19T21:53:09.339Z',
          'maxDate': '2019-04-19T21:53:09.339Z'
        },
        'orderType': {
          'options': [
            {
              'name': 'Customer Order',
              'code': 1001,
              'isDisabled': false
            },
            {
              'name': 'Customer Return',
              'code': 1002,
              'isDisabled': false
            }
          ]
        },
        'shippingCondition': {
          'options': [
            {
              'name': 'Standard',
              'key': 'standard',
              'code': 1001,
              'isDisabled': false
            },
            {
              'name': 'Expedite',
              'key': 'expedite',
              'code': 1002,
              'isDisabled': false
            }
          ]
        },
        'isExport': {
          'options': [
            {
              'name': 'Yes',
              'value': 'yes',
              'isDisabled': true
            },
            {
              'name': 'No',
              'value': 'no',
              'isDisabled': false
            }
          ],
          'value': 'no'
        },
        'customerSearchValue': {
          'isCustomerNameSearch': true,
          'options': [
            {
              'name': 'Name',
              'key': 'name',
              'placeHolder': 'Customer Name'
            },
            {
              'name': 'Parent Name',
              'key': 'parentName',
              'placeHolder': 'Customer Parent Name'
            }
          ],
          'value': null,
          'isDisabled': false
        },
        'customerType': {
          'options': [
            {
              'name': 'Distributor',
              'key': 'distributor',
              'code': 1001,
              'isDisabled': false
            },
            {
              'name': 'Direct',
              'key': 'direct',
              'code': 1002,
              'isDisabled': false
            }
          ]
        },
        'shipToCountry': {
          'options': [
            {
              'countryName': 'France',
              'countryCode': 'FR',
              'code': 1001,
              'states': [
                {
                  'stateName': 'Occitanie',
                  'stateCode': 'OC',
                  'code': 24,
                  'cities': [
                    {
                      'cityName': 'Minneapolis',
                      'cityCode': 'MSP',
                      'code': 121
                    }
                  ]
                }
              ]
            },
            {
              'countryName': 'Germany',
              'countryCode': 'DE',
              'code': 1002,
              'states': [
                {
                  'stateName': 'Berlin',
                  'stateCode': 'BE',
                  'code': 2,
                  'cities': [
                    {
                      'cityName': 'Minneapolis',
                      'cityCode': 'MSP',
                      'code': 121
                    }
                  ]
                },
                {
                  'stateName': 'Hamberg',
                  'stateCode': 'HM',
                  'code': 12,
                  'cities': [
                    {
                      'cityName': 'Minneapolis',
                      'cityCode': 'MSP',
                      'code': 121
                    }
                  ]
                }
              ]
            },
            {
              'countryName': 'Italy',
              'countryCode': 'IT',
              'code': 1003,
              'states': [
                {
                  'stateName': 'Lo Stato Italiano',
                  'stateCode': 'HB',
                  'code': 2,
                  'cities': [
                    {
                      'cityName': 'Minneapolis',
                      'cityCode': 'MSP',
                      'code': 121
                    }
                  ]
                }
              ]
            }
          ],
          'value': null,
        },
        'shipToState': {
          'value': null,
        },
        'shipToCity': {
          'value': null,
        },
        'plantOrWarehouseCountry': {
          'options': [
            {
              'countryName': 'France',
              'countryCode': 'FR',
              'code': 1001,
              'states': [
                {
                  'stateName': 'Occitanie',
                  'stateCode': 'OC',
                  'code': 24
                }
              ]
            },
            {
              'countryName': 'Germany',
              'countryCode': 'DE',
              'code': 1002,
              'states': [
                {
                  'stateName': 'Berlin',
                  'stateCode': 'BE',
                  'code': 2
                },
                {
                  'stateName': 'Hamberg',
                  'stateCode': 'HM',
                  'code': 12
                }
              ]
            },
            {
              'countryName': 'Italy',
              'countryCode': 'IT',
              'code': 1003,
              'states': [
                {
                  'stateName': 'Lo Stato Italiano',
                  'stateCode': 'HB',
                  'code': 2
                }
              ]
            }
          ],
          'value': null,
        },
        'plantOrWarehouseState': {
          'value': null,
        },
        'transportationMode': {
          'options': [
            {
              'name': 'Air',
              'code': 1001,
              'isDisabled': false
            },
            {
              'name': 'Bulk',
              'code': 1002,
              'isDisabled': false
            },
            {
              'name': 'Intermodal',
              'code': 1003,
              'isDisabled': false
            },
            {
              'name': 'LTL',
              'code': 1004,
              'isDisabled': false
            },
            {
              'name': 'Parcel',
              'code': 1005,
              'isDisabled': false
            },
            {
              'name': 'Rail',
              'code': 1006,
              'isDisabled': false
            },
            {
              'name': 'Sea',
              'code': 1007,
              'isDisabled': false
            },
            {
              'name': 'TL',
              'code': 1008,
              'isDisabled': false
            },
            {
              'name': 'Road',
              'code': 1009,
              'isDisabled': false
            }
          ]
        },
        'carrierSearchValue': {
          'isCarrierNameSearch': true,
          'options': [
            {
              'name': 'Name',
              'key': 'name',
              'placeHolder': 'Carrier Name'
            },
            {
              'name': 'SCAC',
              'key': 'scac',
              'placeHolder': 'Carrier SCAC'
            }
          ],
          'value': null,
          'isDisabled': false
        }
      }
    }
  };

  public getOrdersForTerrotoryManagerWithFiltersFromAPI = {
    'data': {
      'orderStatus': [
        {
          'orderStatusType': 1,
          'orderStatusKey': 'orderPipeline',
          'status': 'Order Pipeline',
          'count': 1210,
          'stagesCount': {
            'orderManagement': 210,
            'commercialIssues': 150,
            'stockAvailability': 250,
            'transportationPlanning': 100,
            'warehouseExecution': 50,
            'inTransit': 250,
            'delivered': 175
          },
          'listView': {
            'tonnageCount': 1210,
            'stagestonnageCount': {
              'orderManagement': 210,
              'commercialIssues': 150,
              'stockAvailability': 250,
              'transportationPlanning': 100,
              'warehouseExecution': 50,
              'inTransit': 250,
              'delivered': 175
            }
          }, // Can be empty when metricType was counts
          'orders': [
            {
              'selected': false,
              'status': 'inTransit', //status indicator - late, atRisk, noPod
              'orderId': 874326, //Unique ID
              'orderStageType': 1,
              'orderStage': 'orderManagement',
              'titleInfo': {
                'orderNumber': 1234567890,
                'shippingInfo': 'delay/hold/onTime',
                'customerName': 'INC',
                'customerPoNumber': '',
                'destinationCountry': 'United States',
                'deliveryNumber': '',
                'requestedDeliveryDate': '09 Jan 2019',
                'numberOfOrderLines': '08/10'
              },
              'details': {
                'destinationCity': '12345678901234567890123456789012345',
                'destinationAddress': '12345678901234567890123456789012345',
                'latestETADeliveryDate': '',
                'orderCreationDate': '09 Jan 2019',
                'actualDeliveryDate': '09 Jan 2019',
                'shippingNumber': '',
                'soldTo': 'ABCDEABCDE',
                'shipTo': 'ABCDEABCDE',
                'originWareHouse': 'ABCDEFGHIJKLMNO',
                'weight': '012345678912345',
                'carrierName': '',
                'carrierSCAC': null,
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'atRisk',
              'orderId': 874326,
              'orderStageType': 2,
              'orderStage': 'commercialIssues',
              'titleInfo': {
                'orderNumber': 5953830023,
                'customerName': 'CUSTOMERINCABCDEFDGHIJKLMNOPQRSTVUW',
                'customerPoNumber': '436999205614069454411574309943151331',
                'destinationCountry': 'United States',
                'deliveryNumber': '7752034372',
                'requestedDeliveryDate': '09 Jan 2019',
                'numberOfOrderLines': '08/10'
              },
              'details': {
                'actualDeliveryDate': '09 Jan 2019',
                'soldTo': 'nnZUcXrnQ3',
                'shipTo': 'Y55mmkY4me',
                'destinationCity': 'Kewanee',
                'destinationAddress': '8863 Sleepy Hollow St. Ogden, UT 84404',
                'shippingNumber': '374380332',
                'carrierName': 'UPS',
                'carrierSCAC': 'CEGL',
                'orderCreationDate': '10 May 2019 ',
                'latestETADeliveryDate': '20 May 2019',
                'originWareHouse': 'PHL5',
                'weight': '000000000584612',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'atRisk',
              'orderId': 874326,
              'orderStageType': 5,
              'orderStage': 'warehouseExecution',
              'titleInfo': {
                'orderNumber': 2557991291,
                'customerName': ' CUSTOMERINCABCDEFDGHIJKLMNOPQRSTVUW',
                'customerPoNumber': '536740595934806245342197955869909161',
                'destinationCountry': 'United States',
                'deliveryNumber': '40260a0193',
                'requestedDeliveryDate': '10 Feb 2019',
                'numberOfOrderLines': '05/10'
              },
              'details': {
                'actualDeliveryDate': '09 Jan 2019',
                'soldTo': 'T9u81jAMU1',
                'shipTo': 'Y55mmkY4me',
                'destinationCity': 'North Kingstown',
                'destinationAddress': '18 Ashley St. New Philadelphia, OH 44663',
                'shippingNumber': '468519625',
                'carrierName': 'J.B. Hunt Transport Services',
                'carrierSCAC': 'AKMR',
                'orderCreationDate': '24 Apr 2019',
                'latestETADeliveryDate': '6 May 2019',
                'originWareHouse': 'BWI1',
                'weight': '900000000565812',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'inTransit',
              'orderId': 874326,
              'orderStageType': 1,
              'orderStage': 'orderManagement',
              'titleInfo': {
                'orderNumber': 34006289,
                'customerName': 'CUSTOMERINCABCDEFDGHIJKLMNOPQRSTVUW ',
                'customerPoNumber': '1311961757264020492211238',
                'destinationCountry': 'Canada',
                'deliveryNumber': '2725375',
                'requestedDeliveryDate': '11 Mar 2020',
                'numberOfOrderLines': '04/10'
              },
              'details': {
                'actualDeliveryDate': '09 Jan 2019',
                'soldTo': '7mdjB8PIYQ',
                'shipTo': 'szLG7RHEqy',
                'destinationCity': 'East Greenwich',
                'destinationAddress': '90 Oakland St. Bro-ckton, MA 02301',
                'shippingNumber': '553873855',
                'carrierName': 'Landstar System(Light-Asset)',
                'carrierSCAC': '11DX',
                'orderCreationDate': '3 Jun 2019',
                'latestETADeliveryDate': '13 Jun 2019',
                'originWareHouse': 'IND4',
                'weight': '000000000012345',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'inTransit',
              'orderId': 874326,
              'orderStageType': 6,
              'orderStage': 'inTransit',
              'titleInfo': {
                'orderNumber': 360408/410,
                'customerName': 'customer@Naperville*HHh~~~67Chicago',
                'customerPoNumber': '179600547551783816428968372840670267',
                'destinationCountry': 'Germany',
                'deliveryNumber': '5747048360',
                'requestedDeliveryDate': '19 Sep 2019',
                'numberOfOrderLines': '01/06'
              },
              'details': {
                'actualDeliveryDate': '09 Jan 2019',
                'soldTo': 'DKJymw6bJG',
                'shipTo': 'nnZUcXrnQ3',
                'destinationCity': 'Little Harbor on the HillsboroFlora',
                'destinationAddress': '6 Poor House Street Rocky Mount, NC 27804',
                'shippingNumber': '710200337',
                'carrierName': 'Wan Hai Lines',
                'carrierSCAC': '22AA',
                'orderCreationDate': '12 Mar 2019',
                'latestETADeliveryDate': '24 Mar 2019',
                'originWareHouse': '18FG',
                'weight': '000000000000006',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            }] //count for 20 orders by default
        },
        {
          'orderStatusType': 2,
          'orderStatusKey': 'atRisk',
          'status': 'At Risk',
          'count': 210,
          'stagesCount': {
            'orderManagement': 20,
            'commercialIssues': 50,
            'stockAvailability': 45,
            'transportationPlanning': 30,
            'warehouseExecution': 10,
            'inTransit': 20,
            'delivered': 25
          },
          'orders': [
            {
              'selected': false,
              'status': 'atRisk',
              'orderId': 874326,
              'orderStageType': 2,
              'orderStage': 'commercialIssues',
              'titleInfo': {
                'orderNumber': 5953830023,
                'shippingInfo': 'atRisk',
                'customerName': 'CUSTOMERINCABCDEFDGHIJKLMNOPQRSTVUW',
                'customerPoNumber': '436999205614069454411574309943151331',
                'destinationCountry': 'United States',
                'deliveryNumber': '7752034372',
                'requestedDeliveryDate': '09 Jan 2019',
                'numberOfOrderLines': '08/10',
              },
              'details': {
                'soldTo': 'nnZUcXrnQ3',
                'shipTo': 'Y55mmkY4me',
                'destinationCity': 'Kewanee',
                'destinationAddress': '8863 Sleepy Hollow St. Ogden, UT 84404',
                'shipmentNumber': '374380332',
                'carrierName': 'UPS',
                'carrierSCAC': 'CEGL',
                'orderCreationDate': '10 May 2019 ',
                'latestETADeliveryDate': '20 May 2019',
                'originWareHouse': 'PHL5',
                'weight': '000000000584612',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'atRisk',
              'orderId': 874326,
              'orderStageType': 4,
              'orderStage': 'transportationPlanning',
              'titleInfo': {
                'orderNumber': 2557991291,
                'shippingInfo': 'atRisk',
                'customerName': ' CUSTOMERINCABCDEFDGHIJKLMNOPQRSTVUW',
                'customerPoNumber': '536740595934806245342197955869909161',
                'destinationCountry': 'United States',
                'deliveryNumber': '40260a0193',
                'requestedDeliveryDate': '10 Feb 2019',
                'numberOfOrderLines': '05/10',

              },
              'details': {
                'soldTo': 'T9u81jAMU1',
                'shipTo': 'Y55mmkY4me',
                'destinationCity': 'North Kingstown',
                'destinationAddress': '18 Ashley St. New Philadelphia, OH 44663',
                'shipmentNumber': '468519625',
                'carrierName': 'J.B. Hunt Transport Services',
                'carrierSCAC': 'AKMR',
                'orderCreationDate': '24 Apr 2019',
                'latestETADeliveryDate': '6 May 2019',
                'originWareHouse': 'BWI1',
                'weight': '900000000565812',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'atRisk',
              'orderId': 874326,
              'orderStageType': 5,
              'orderStage': 'warehouseExecution',
              'titleInfo': {
                'orderNumber': 99905,
                'shippingInfo': 'atRisk',
                'customerName': 'cUSTOMERINCabcdEFD',
                'customerPoNumber': '828948736899585285292513142108105312',
                'destinationCountry': 'United States',
                'deliveryNumber': '9329656554',
                'requestedDeliveryDate': '09 Dec 2018',
                'numberOfOrderLines': '09/08',

              },
              'details': {
                'soldTo': 'wRr4aZ%jKm',
                'shipTo': 'CttwMjuE&&',
                'destinationCity': 'Watkins---Glen',
                'destinationAddress': '7038 Mayfair Drive Media, PA 19063',
                'shipmentNumber': '818930542',
                'carrierName': 'Roadrunner Transportation Services (Light-Asset)',
                'carrierSCAC': 'CPJQ',
                'orderCreationDate': '16 Oct 2019',
                'latestETADeliveryDate': '28 Oct 2018',
                'originWareHouse': 'RNO1',
                'weight': '678910111234567',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'atRisk',
              'orderId': 874326,
              'orderStageType': 7,
              'orderStage': 'delivered',
              'titleInfo': {
                'orderNumber': '6455a72535',
                'shippingInfo': 'atRisk',
                'customerName': 'Customer@Rockford*h~~~67jhuILLINOIS',
                'customerPoNumber': '993458208430326  358677127870358121',
                'destinationCountry': 'France',
                'deliveryNumber': '22027899',
                'requestedDeliveryDate': '16  Jul 2019',
                'numberOfOrderLines': '02/05',

              },
              'details': {
                'soldTo': 'Y55mmkY4me',
                'shipTo': 'T9u81jAMU1',
                'destinationCity': 'Rancho Santa Margarita',
                'destinationAddress': '79 Wood Ave. Minot, ND 58701',
                'shipmentNumber': '902155860',
                'carrierName': 'The Shipping Coporation of India Ltd.',
                'carrierSCAC': '	SCIU',
                'orderCreationDate': '6 Jun 2019',
                'latestETADeliveryDate': '16 Jun 2019',
                'originWareHouse': 'NA10',
                'weight': '2',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'atRisk',
              'orderId': 874326,
              'orderStageType': 3,
              'orderStage': 'stockAvailability',
              'titleInfo': {
                'orderNumber': 2557991291,
                'shippingInfo': 'atRisk',
                'customerName': ' CUSTOMERINCABCDEFDGHIJKLMNOPQRSTVUW',
                'customerPoNumber': '536740595934806245342197955869909161',
                'destinationCountry': 'United States',
                'deliveryNumber': '40260a0193',
                'requestedDeliveryDate': '10 Feb 2019',
                'numberOfOrderLines': '05/10',

              },
              'details': {
                'soldTo': 'T9u81jAMU1',
                'shipTo': 'Y55mmkY4me',
                'destinationCity': 'North Kingstown',
                'destinationAddress': '18 Ashley St. New Philadelphia, OH 44663',
                'shipmentNumber': '468519625',
                'carrierName': 'J.B. Hunt Transport Services',
                'carrierSCAC': 'AKMR',
                'orderCreationDate': '24 Apr 2019',
                'latestETADeliveryDate': '6 May 2019',
                'originWareHouse': 'BWI1',
                'weight': '900000000565812',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'atRisk',
              'orderId': 874326,
              'orderStageType': 1,
              'orderStage': 'orderManagement',
              'titleInfo': {
                'orderNumber': 99905,
                'shippingInfo': 'atRisk',
                'customerName': 'cUSTOMERINCabcdEFD',
                'customerPoNumber': '828948736899585285292513142108105312',
                'destinationCountry': 'United States',
                'deliveryNumber': '9329656554',
                'requestedDeliveryDate': '09 Dec 2018',
                'numberOfOrderLines': '09/08',

              },
              'details': {
                'soldTo': 'wRr4aZ%jKm',
                'shipTo': 'CttwMjuE&&',
                'destinationCity': 'Watkins---Glen',
                'destinationAddress': '7038 Mayfair Drive Media, PA 19063',
                'shipmentNumber': '818930542',
                'carrierName': 'Roadrunner Transportation Services (Light-Asset)',
                'carrierSCAC': 'CPJQ',
                'orderCreationDate': '16 Oct 2019',
                'latestETADeliveryDate': '28 Oct 2018',
                'originWareHouse': 'RNO1',
                'weight': '678910111234567',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'atRisk',
              'orderId': 874326,
              'orderStageType': 1,
              'orderStage': 'orderManagement',
              'titleInfo': {
                'orderNumber': '6455a72535',
                'shippingInfo': 'atRisk',
                'customerName': 'Customer@Rockford*h~~~67jhuILLINOIS',
                'customerPoNumber': '993458208430326  358677127870358121',
                'destinationCountry': 'France',
                'deliveryNumber': '22027899',
                'requestedDeliveryDate': '16  Jul 2019',
                'numberOfOrderLines': '02/05',

              },
              'details': {
                'soldTo': 'Y55mmkY4me',
                'shipTo': 'T9u81jAMU1',
                'destinationCity': 'Rancho Santa Margarita',
                'destinationAddress': '79 Wood Ave. Minot, ND 58701',
                'shipmentNumber': '902155860',
                'carrierName': 'The Shipping Coporation of India Ltd.',
                'carrierSCAC': '	SCIU',
                'orderCreationDate': '6 Jun 2019',
                'latestETADeliveryDate': '16 Jun 2019',
                'originWareHouse': 'NA10',
                'weight': '2',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'atRisk',
              'orderId': 874326,
              'orderStageType': 1,
              'orderStage': 'orderManagement',
              'titleInfo': {
                'orderNumber': 2557991291,
                'shippingInfo': 'atRisk',
                'customerName': ' CUSTOMERINCABCDEFDGHIJKLMNOPQRSTVUW',
                'customerPoNumber': '536740595934806245342197955869909161',
                'destinationCountry': 'United States',
                'deliveryNumber': '40260a0193',
                'requestedDeliveryDate': '10 Feb 2019',
                'numberOfOrderLines': '05/10',

              },
              'details': {
                'soldTo': 'T9u81jAMU1',
                'shipTo': 'Y55mmkY4me',
                'destinationCity': 'North Kingstown',
                'destinationAddress': '18 Ashley St. New Philadelphia, OH 44663',
                'shipmentNumber': '468519625',
                'carrierName': 'J.B. Hunt Transport Services',
                'carrierSCAC': 'AKMR',
                'orderCreationDate': '24 Apr 2019',
                'latestETADeliveryDate': '6 May 2019',
                'originWareHouse': 'BWI1',
                'weight': '900000000565812',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'atRisk',
              'orderId': 874326,
              'orderStageType': 1,
              'orderStage': 'orderManagement',
              'titleInfo': {
                'orderNumber': 99905,
                'shippingInfo': 'atRisk',
                'customerName': 'cUSTOMERINCabcdEFD',
                'customerPoNumber': '828948736899585285292513142108105312',
                'destinationCountry': 'United States',
                'deliveryNumber': '9329656554',
                'requestedDeliveryDate': '09 Dec 2018',
                'numberOfOrderLines': '09/08',

              },
              'details': {
                'soldTo': 'wRr4aZ%jKm',
                'shipTo': 'CttwMjuE&&',
                'destinationCity': 'Watkins---Glen',
                'destinationAddress': '7038 Mayfair Drive Media, PA 19063',
                'shipmentNumber': '818930542',
                'carrierName': 'Roadrunner Transportation Services (Light-Asset)',
                'carrierSCAC': 'CPJQ',
                'orderCreationDate': '16 Oct 2019',
                'latestETADeliveryDate': '28 Oct 2018',
                'originWareHouse': 'RNO1',
                'weight': '678910111234567',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'atRisk',
              'orderId': 874326,
              'orderStageType': 1,
              'orderStage': 'orderManagement',
              'titleInfo': {
                'orderNumber': '6455a72535',
                'shippingInfo': 'atRisk',
                'customerName': 'Customer@Rockford*h~~~67jhuILLINOIS',
                'customerPoNumber': '993458208430326  358677127870358121',
                'destinationCountry': 'France',
                'deliveryNumber': '22027899',
                'requestedDeliveryDate': '16  Jul 2019',
                'numberOfOrderLines': '02/05',

              },
              'details': {
                'soldTo': 'Y55mmkY4me',
                'shipTo': 'T9u81jAMU1',
                'destinationCity': 'Rancho Santa Margarita',
                'destinationAddress': '79 Wood Ave. Minot, ND 58701',
                'shipmentNumber': '902155860',
                'carrierName': 'The Shipping Coporation of India Ltd.',
                'carrierSCAC': '	SCIU',
                'orderCreationDate': '6 Jun 2019',
                'latestETADeliveryDate': '16 Jun 2019',
                'originWareHouse': 'NA10',
                'weight': '2',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'atRisk',
              'orderId': 874326,
              'orderStageType': 1,
              'orderStage': 'orderManagement',
              'titleInfo': {
                'orderNumber': '6455a72535',
                'shippingInfo': 'atRisk',
                'customerName': 'Customer@Rockford*h~~~67jhuILLINOIS',
                'customerPoNumber': '993458208430326  358677127870358121',
                'destinationCountry': 'France',
                'deliveryNumber': '22027899',
                'requestedDeliveryDate': '16  Jul 2019',
                'numberOfOrderLines': '02/05',

              },
              'details': {
                'soldTo': 'Y55mmkY4me',
                'shipTo': 'T9u81jAMU1',
                'destinationCity': 'Rancho Santa Margarita',
                'destinationAddress': '79 Wood Ave. Minot, ND 58701',
                'shipmentNumber': '902155860',
                'carrierName': 'The Shipping Coporation of India Ltd.',
                'carrierSCAC': '	SCIU',
                'orderCreationDate': '6 Jun 2019',
                'latestETADeliveryDate': '16 Jun 2019',
                'originWareHouse': 'NA10',
                'weight': '2',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            }
          ] //count for 20 orders by default
        },
        {
          'orderStatusType': 3,
          'orderStatusKey': 'late',
          'status': 'Late',
          'count': 6,
          'stagesCount': {
            'orderManagement': 0,
            'commercialIssues': 0,
            'stockAvailability': 0,
            'transportationPlanning': 3,
            'warehouseExecution': 2,
            'inTransit': 0,
            'delivered': 1
          },
          'orders': [
            {
              'selected': false,
              'status': 'late',
              'orderId': 874326,
              'orderStageType': 3,
              'orderStage': 'stockAvailability',
              'titleInfo': {
                'orderNumber': '86759AN28',
                'customerName': 'CustomerINC ABCDefghIJKLMNOPQRSTVUW ',
                'customerPoNumber': '8865249294003850810540182185124434',
                'destinationCountry': 'Canada',
                'deliveryNumber': '5237851003',
                'requestedDeliveryDate': '09 Jan 2020',
                'numberOfOrderLines': '02/10',

              },
              'details': {
                'actualDeliveryDate': '09 Jan 2019',
                'soldTo': '~LEBoTvGEm',
                'shipTo': 'Ilhd  zRSP',
                'destinationCity': 'Murray',
                'destinationAddress': '8979 Clay St.  Ballston Spa, NY 12020',
                'shippingNumber': '589653305',
                'carrierName': 'Celadon Group*',
                'carrierSCAC': 'CHIW',
                'orderCreationDate': '20 May 2019',
                'latestETADeliveryDate': '1 Jun 2019',
                'originWareHouse': 'CVG3',
                'weight': '000000000123450',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            },
            {
              'selected': false,
              'status': 'late',
              'orderId': 874326,
              'orderStageType': 3,
              'orderStage': 'stockAvailability',
              'titleInfo': {
                'orderNumber': '86759AN28',
                'customerName': 'CustomerINC ABCDefghIJKLMNOPQRSTVUW ',
                'customerPoNumber': '8865249294003850810540182185124434',
                'destinationCountry': 'Canada',
                'deliveryNumber': '5237851003',
                'requestedDeliveryDate': '09 Jan 2020',
                'numberOfOrderLines': '02/10',

              },
              'details': {
                'actualDeliveryDate': '09 Jan 2019',
                'soldTo': '~LEBoTvGEm',
                'shipTo': 'Ilhd  zRSP',
                'destinationCity': 'Murray',
                'destinationAddress': '8979 Clay St.  Ballston Spa, NY 12020',
                'shippingNumber': '589653305',
                'carrierName': 'Celadon Group*',
                'carrierSCAC': 'CHIW',
                'orderCreationDate': '20 May 2019',
                'latestETADeliveryDate': '1 Jun 2019',
                'originWareHouse': 'CVG3',
                'weight': '000000000123450',
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            }
          ] //count for 20 orders by default
        },
        {
          'orderStatusType': 4,
          'orderStatusKey': 'expedite',
          'status': 'Expedite',
          'count': 530,
          'stagesCount': {
            'orderManagement': 28,
            'commercialIssues': 36,
            'stockAvailability': 176,
            'transportationPlanning': 60,
            'warehouseExecution': 140,
            'inTransit': 28,
            'delivered': 36
          },
          'orders': [{
            'selected': false,
            'status': 'inTransit',
            'orderId': 874326,
            'orderStageType': 1,
            'orderStage': 'orderManagement',
            'titleInfo': {
              'orderNumber': 1234567890,
              'shippingInfo': 'delay/hold/onTime',
              'customerName': 'INC',
              'customerPoNumber': '',
              'destinationCountry': 'United States',
              'deliveryNumber': '',
              'requestedDeliveryDate': '09 Jan 2019',
              'numberOfOrderLines': '08/10'
            },
            'details': {
              'destinationCity': '12345678901234567890123456789012345',
              'destinationAddress': '12345678901234567890123456789012345',
              'latestETADeliveryDate': '',
              'orderCreationDate': '09 Jan 2019',
              'actualDeliveryDate': '09 Jan 2019',
              'shippingNumber': '',
              'soldTo': 'ABCDEABCDE',
              'shipTo': 'ABCDEABCDE',
              'originWareHouse': 'ABCDEFGHIJKLMNO',
              'weight': '012345678912345',
              'carrierName': '',
              'carrierSCAC': null,
              'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
            }
          },
            {
              'selected': false,
              'status': 'inTransit',
              'orderId': 874326,
              'orderStageType': 1,
              'orderStage': 'orderManagement',
              'titleInfo': {
                'orderNumber': 1234567890,
                'shippingInfo': 'delay/hold/onTime',
                'customerName': 'INC',
                'customerPoNumber': '',
                'destinationCountry': 'United States',
                'deliveryNumber': '',
                'requestedDeliveryDate': '09 Jan 2019',
                'numberOfOrderLines': '08/10'
              },
              'details': {
                'destinationCity': '12345678901234567890123456789012345',
                'destinationAddress': '12345678901234567890123456789012345',
                'latestETADeliveryDate': '',
                'orderCreationDate': '09 Jan 2019',
                'actualDeliveryDate': '09 Jan 2019',
                'shippingNumber': '',
                'soldTo': 'ABCDEABCDE',
                'shipTo': 'ABCDEABCDE',
                'originWareHouse': 'ABCDEFGHIJKLMNO',
                'weight': '012345678912345',
                'carrierName': '',
                'carrierSCAC': null,
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            }] //count for 20 orders by default
        },
        {
          'orderStatusType': 5,
          'orderStatusKey': 'returns',
          'status': 'Returns',
          'count': 58,
          'stagesCount': {
            'orderManagement': 5,
            'commercialIssues': 0,
            'stockAvailability': 3,
            'transportationPlanning': 22,
            'warehouseExecution': 12,
            'inTransit': 6,
            'delivered': 7
          },
          'orders': [{
            'selected': false,
            'status': 'inTransit',
            'orderId': 874326,
            'orderStageType': 1,
            'orderStage': 'orderManagement',
            'titleInfo': {
              'orderNumber': 1234567890,
              'shippingInfo': 'delay/hold/onTime',
              'customerName': 'INC',
              'customerPoNumber': '',
              'destinationCountry': 'United States',
              'deliveryNumber': '',
              'requestedDeliveryDate': '09 Jan 2019',
              'numberOfOrderLines': '08/10'
            },
            'details': {
              'destinationCity': '12345678901234567890123456789012345',
              'destinationAddress': '12345678901234567890123456789012345',
              'latestETADeliveryDate': '',
              'orderCreationDate': '09 Jan 2019',
              'actualDeliveryDate': '09 Jan 2019',
              'shippingNumber': '',
              'soldTo': 'ABCDEABCDE',
              'shipTo': 'ABCDEABCDE',
              'originWareHouse': 'ABCDEFGHIJKLMNO',
              'weight': '012345678912345',
              'carrierName': '',
              'carrierSCAC': null,
              'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
            }
          },
            {
              'selected': false,
              'status': 'inTransit',
              'orderId': 874326,
              'orderStageType': 1,
              'orderStage': 'orderManagement',
              'titleInfo': {
                'orderNumber': 1234567890,
                'shippingInfo': 'delay/hold/onTime',
                'customerName': 'INC',
                'customerPoNumber': '',
                'destinationCountry': 'United States',
                'deliveryNumber': '',
                'requestedDeliveryDate': '09 Jan 2019',
                'numberOfOrderLines': '08/10'
              },
              'details': {
                'destinationCity': '12345678901234567890123456789012345',
                'destinationAddress': '12345678901234567890123456789012345',
                'latestETADeliveryDate': '',
                'orderCreationDate': '09 Jan 2019',
                'actualDeliveryDate': '09 Jan 2019',
                'shippingNumber': '',
                'soldTo': 'ABCDEABCDE',
                'shipTo': 'ABCDEABCDE',
                'originWareHouse': 'ABCDEFGHIJKLMNO',
                'weight': '012345678912345',
                'carrierName': '',
                'carrierSCAC': null,
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            }] //count for 20 orders by default
        },
        {
          'orderStatusType': 6,
          'orderStatusKey': 'futureOrders',
          'status': 'Future Orders',
          'count': 58,
          'stagesCount': {
            'orderManagement': 5,
            'commercialIssues': 0,
            'stockAvailability': 3,
            'transportationPlanning': 22,
            'warehouseExecution': 12,
            'inTransit': 6,
            'delivered': 7
          },
          'orders': [{
            'selected': false,
            'status': 'inTransit',
            'orderId': 874326,
            'orderStageType': 1,
            'orderStage': 'orderManagement',
            'titleInfo': {
              'orderNumber': 1234567890,
              'shippingInfo': 'delay/hold/onTime',
              'customerName': 'INC',
              'customerPoNumber': '',
              'destinationCountry': 'United States',
              'deliveryNumber': '',
              'requestedDeliveryDate': '09 Jan 2019',
              'numberOfOrderLines': '08/10'
            },
            'details': {
              'destinationCity': '12345678901234567890123456789012345',
              'destinationAddress': '12345678901234567890123456789012345',
              'latestETADeliveryDate': '',
              'orderCreationDate': '09 Jan 2019',
              'actualDeliveryDate': '09 Jan 2019',
              'shippingNumber': '',
              'soldTo': 'ABCDEABCDE',
              'shipTo': 'ABCDEABCDE',
              'originWareHouse': 'ABCDEFGHIJKLMNO',
              'weight': '012345678912345',
              'carrierName': '',
              'carrierSCAC': null,
              'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
            }
          },
            {
              'selected': false,
              'status': 'inTransit',
              'orderId': 874326,
              'orderStageType': 1,
              'orderStage': 'orderManagement',
              'titleInfo': {
                'orderNumber': 1234567890,
                'shippingInfo': 'delay/hold/onTime',
                'customerName': 'INC',
                'customerPoNumber': '',
                'destinationCountry': 'United States',
                'deliveryNumber': '',
                'requestedDeliveryDate': '09 Jan 2019',
                'numberOfOrderLines': '08/10'
              },
              'details': {
                'destinationCity': '12345678901234567890123456789012345',
                'destinationAddress': '12345678901234567890123456789012345',
                'latestETADeliveryDate': '',
                'orderCreationDate': '09 Jan 2019',
                'actualDeliveryDate': '09 Jan 2019',
                'shippingNumber': '',
                'soldTo': 'ABCDEABCDE',
                'shipTo': 'ABCDEABCDE',
                'originWareHouse': 'ABCDEFGHIJKLMNO',
                'weight': '012345678912345',
                'carrierName': '',
                'carrierSCAC': null,
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            }] //count for 20 orders by default
        },
        {
          'orderStatusType': 7,
          'orderStatusKey': 'noProofOfDelivery',
          'status': 'No POD',
          'count': 58,
          'stagesCount': {
            'orderManagement': 587,
            'commercialIssues': 43,
            'stockAvailability': 98,
            'transportationPlanning': 2,
            'warehouseExecution': 142,
            'inTransit': 6,
            'delivered': 7
          },
          'orders': [{
            'selected': false,
            'status': 'noPod',
            'orderId': 874326,
            'orderStageType': 1,
            'orderStage': 'orderManagement',
            'titleInfo': {
              'orderNumber': 1234567890,
              'shippingInfo': 'delay/hold/onTime',
              'customerName': 'INC',
              'customerPoNumber': '',
              'destinationCountry': 'United States',
              'deliveryNumber': '',
              'requestedDeliveryDate': '09 Jan 2019',
              'numberOfOrderLines': '08/10'
            },
            'details': {
              'destinationCity': '12345678901234567890123456789012345',
              'destinationAddress': '12345678901234567890123456789012345',
              'latestETADeliveryDate': '',
              'orderCreationDate': '09 Jan 2019',
              'actualDeliveryDate': '09 Jan 2019',
              'shippingNumber': '',
              'soldTo': 'ABCDEABCDE',
              'shipTo': 'ABCDEABCDE',
              'originWareHouse': 'ABCDEFGHIJKLMNO',
              'weight': '012345678912345',
              'carrierName': '',
              'carrierSCAC': null,
              'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
            }
          },
            {
              'selected': false,
              'status': 'noPod',
              'orderId': 874326,
              'orderStageType': 1,
              'orderStage': 'orderManagement',
              'titleInfo': {
                'orderNumber': 1234567890,
                'shippingInfo': 'delay/hold/onTime',
                'customerName': 'INC',
                'customerPoNumber': '',
                'destinationCountry': 'United States',
                'deliveryNumber': '',
                'requestedDeliveryDate': '09 Jan 2019',
                'numberOfOrderLines': '08/10'
              },
              'details': {
                'destinationCity': '12345678901234567890123456789012345',
                'destinationAddress': '12345678901234567890123456789012345',
                'latestETADeliveryDate': '',
                'orderCreationDate': '09 Jan 2019',
                'actualDeliveryDate': '09 Jan 2019',
                'shippingNumber': '',
                'soldTo': 'ABCDEABCDE',
                'shipTo': 'ABCDEABCDE',
                'originWareHouse': 'ABCDEFGHIJKLMNO',
                'weight': '012345678912345',
                'carrierName': '',
                'carrierSCAC': null,
                'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
              }
            }] //count for 20 orders by default
        }
      ],
      'searchCriteria': {
        'regionType': {
          'options': [
            {
              'name': 'NA',
              'value': 'na',
              'isDisabled': true
            },
            {
              'name': 'EU',
              'value': 'eu',
              'isDisabled': false
            }
          ],
          'value': 'eu'
        },
        'legacyType': {
          'options': [
            {
              'name': 'Ecolab',
              'value': 'ecolab',
              'isDisabled': true
            },
            {
              'name': 'Nalco',
              'value': 'nalco',
              'isDisabled': false
            }
          ],
          'value': 'nalco'
        },
        'division': {
          'options': [
            {
              'name': 'HC',
              'code': 4001,
              'isDisabled': false
            },
            {
              'name': 'TCD',
              'code': 4002,
              'isDisabled': false
            },
            {
              'name': 'F&B',
              'code': 4003,
              'isDisabled': false
            },
            {
              'name': 'Institutional',
              'code': 4004,
              'isDisabled': false
            },
            {
              'name': 'Energy',
              'code': 4005,
              'isDisabled': false
            }
          ]
        },
        'salesOrg': {
          'options': [
            {
              'name': 'BE 50',
              'code': 4001,
              'isDisabled': false
            },
            {
              'name': 'BE 25',
              'code': 4002,
              'isDisabled': false
            },
            {
              'name': 'GE',
              'code': 4003,
              'isDisabled': false
            },
            {
              'name': 'HU 50',
              'code': 4004,
              'isDisabled': false
            },
            {
              'name': 'ES 70',
              'code': 4005,
              'isDisabled': false
            }
          ]
        },
        'requestedDeliveryDate': {
          'begin': '2019-04-19T21:53:09.339Z',
          'end': '2019-04-19T21:53:09.339Z',
          'minDate': '2019-04-19T21:53:09.339Z',
          'maxDate': '2019-04-19T21:53:09.339Z'
        },
        'creationDate': {
          'begin': '2019-04-19T21:53:09.339Z',
          'end': '2019-04-19T21:53:09.339Z',
          'minDate': '2019-04-19T21:53:09.339Z',
          'maxDate': '2019-04-19T21:53:09.339Z'
        },
        'orderType': {
          'options': [
            {
              'name': 'Customer Order',
              'code': 1001,
              'isDisabled': false
            },
            {
              'name': 'Customer Return',
              'code': 1002,
              'isDisabled': false
            }
          ]
        },
        'shippingCondition': {
          'options': [
            {
              'name': 'Standard',
              'key': 'standard',
              'code': 1001,
              'isDisabled': false
            },
            {
              'name': 'Expedite',
              'key': 'expedite',
              'code': 1002,
              'isDisabled': false
            }
          ]
        },
        'isExport': {
          'options': [
            {
              'name': 'Yes',
              'value': 'yes',
              'isDisabled': true
            },
            {
              'name': 'No',
              'value': 'no',
              'isDisabled': false
            }
          ],
          'value': 'no'
        },
        'customerSearchValue': {
          'isCustomerNameSearch': true,
          'options': [
            {
              'name': 'Name',
              'key': 'name',
              'placeHolder': 'Customer Name'
            },
            {
              'name': 'Parent Name',
              'key': 'parentName',
              'placeHolder': 'Customer Parent Name'
            }
          ],
          'value': null,
          'isDisabled': false
        },
        'customerType': {
          'options': [
            {
              'name': 'Distributor',
              'key': 'distributor',
              'code': 1001,
              'isDisabled': false
            },
            {
              'name': 'Direct',
              'key': 'direct',
              'code': 1002,
              'isDisabled': false
            }
          ]
        },
        'shipToCountry': {
          'options': [
            {
              'countryName': 'France',
              'countryCode': 'FR',
              'code': 1001,
              'states': [
                {
                  'stateName': 'Occitanie',
                  'stateCode': 'OC',
                  'code': 24,
                  'cities': [
                    {
                      'cityName': 'Minneapolis',
                      'cityCode': 'MSP',
                      'code': 121
                    }
                  ]
                }
              ]
            },
            {
              'countryName': 'Germany',
              'countryCode': 'DE',
              'code': 1002,
              'states': [
                {
                  'stateName': 'Berlin',
                  'stateCode': 'BE',
                  'code': 2,
                  'cities': [
                    {
                      'cityName': 'Minneapolis',
                      'cityCode': 'MSP',
                      'code': 121
                    }
                  ]
                },
                {
                  'stateName': 'Hamberg',
                  'stateCode': 'HM',
                  'code': 12,
                  'cities': [
                    {
                      'cityName': 'Minneapolis',
                      'cityCode': 'MSP',
                      'code': 121
                    }
                  ]
                }
              ]
            },
            {
              'countryName': 'Italy',
              'countryCode': 'IT',
              'code': 1003,
              'states': [
                {
                  'stateName': 'Lo Stato Italiano',
                  'stateCode': 'HB',
                  'code': 2,
                  'cities': [
                    {
                      'cityName': 'Minneapolis',
                      'cityCode': 'MSP',
                      'code': 121
                    }
                  ]
                }
              ]
            }
          ],
          'value': null,
        },
        'shipToState': {
          'value': null,
        },
        'shipToCity': {
          'value': null,
        },
        'plantOrWarehouseCountry': {
          'options': [
            {
              'countryName': 'France',
              'countryCode': 'FR',
              'code': 1001,
              'states': [
                {
                  'stateName': 'Occitanie',
                  'stateCode': 'OC',
                  'code': 24
                }
              ]
            },
            {
              'countryName': 'Germany',
              'countryCode': 'DE',
              'code': 1002,
              'states': [
                {
                  'stateName': 'Berlin',
                  'stateCode': 'BE',
                  'code': 2
                },
                {
                  'stateName': 'Hamberg',
                  'stateCode': 'HM',
                  'code': 12
                }
              ]
            },
            {
              'countryName': 'Italy',
              'countryCode': 'IT',
              'code': 1003,
              'states': [
                {
                  'stateName': 'Lo Stato Italiano',
                  'stateCode': 'HB',
                  'code': 2
                }
              ]
            }
          ],
          'value': null,
        },
        'plantOrWarehouseState': {
          'value': null,
        },
        'transportationMode': {
          'options': [
            {
              'name': 'Air',
              'code': 1001,
              'isDisabled': false
            },
            {
              'name': 'Bulk',
              'code': 1002,
              'isDisabled': false
            },
            {
              'name': 'Intermodal',
              'code': 1003,
              'isDisabled': false
            },
            {
              'name': 'LTL',
              'code': 1004,
              'isDisabled': false
            },
            {
              'name': 'Parcel',
              'code': 1005,
              'isDisabled': false
            },
            {
              'name': 'Rail',
              'code': 1006,
              'isDisabled': false
            },
            {
              'name': 'Sea',
              'code': 1007,
              'isDisabled': false
            },
            {
              'name': 'TL',
              'code': 1008,
              'isDisabled': false
            },
            {
              'name': 'Road',
              'code': 1009,
              'isDisabled': false
            }
          ]
        },
        'carrierSearchValue': {
          'isCarrierNameSearch': true,
          'options': [
            {
              'name': 'Name',
              'key': 'name',
              'placeHolder': 'Carrier Name'
            },
            {
              'name': 'SCAC',
              'key': 'scac',
              'placeHolder': 'Carrier SCAC'
            }
          ],
          'value': null,
          'isDisabled': false
        }
      }
    }
  };

  // TODO: Remove when service was integrated
  public getListOfOrdersFromAPIWithActiveStage = {
    'orderStatus': [
      {
        'orderStatusType': 1,
        'orderStatusKey': 'orderPipeline',
        'status': 'Order Pipeline',
        'count': 1210,
        'stagesCount': {
          'orderManagement': 210,
          'commercialIssues': 150,
          'stockAvailability': 250,
          'transportationPlanning': 100,
          'warehouseExecution': 50,
          'inTransit': 250,
          'delivered': 175
        },
        'orders': [
          {
            'selected': false,
            'status': 'inTransit',
            'orderId': 874326,
            'orderStageType': 1,
            'orderStage': 'orderManagement',
            'titleInfo': {
              'orderNumber': 1234567890,
              'shippingInfo': 'delay/hold/onTime',
              'customerName': 'INC ABCDEFDGHIJKLMNO',
              'customerPoNumber': '12345678901234567890123456789012345',
              'destinationCountry': 'United States',
              'deliveryNumber': '1234567890',
              'requestedDeliveryDate': '09 Jan 2019',
              'numberOfOrderLines': '08/10'
            },
            'details': {
              'destinationCity': '12345678901234567890123456789012345',
              'destinationAddress': '12345678901234567890123456789012345',
              'latestETADeliveryDate': '09 Jan 2019',
              'orderCreationDate': '09 Jan 2019',
              'actualDeliveryDate': '09 Jan 2019',
              'shippingNumber': '0123456789',
              'soldTo': 'ABCDEABCDE',
              'shipTo': 'ABCDEABCDE',
              'originWareHouse': 'ABCDEFGHIJKLMNO',
              'weight': '012345678912345',
              'carrierName': '12345678901234567890123456789012345',
              'carrierSCAC': 'ABCD',
              'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
            }
          },
          {
            'selected': false,
            'status': 'atRisk',
            'orderId': 874326,
            'orderStageType': 1,
            'orderStage': 'orderManagement',
            'titleInfo': {
              'orderNumber': 5953830023,
              'customerName': 'CUSTOMERINCABCDEFDGHIJKLMNOPQRSTVUW',
              'customerPoNumber': '436999205614069454411574309943151331',
              'destinationCountry': 'United States',
              'deliveryNumber': '7752034372',
              'requestedDeliveryDate': '09 Jan 2019',
              'numberOfOrderLines': '08/10'
            },
            'details': {
              'actualDeliveryDate': '09 Jan 2019',
              'soldTo': 'nnZUcXrnQ3',
              'shipTo': 'Y55mmkY4me',
              'destinationCity': 'Kewanee',
              'destinationAddress': '8863 Sleepy Hollow St. Ogden, UT 84404',
              'shippingNumber': '374380332',
              'carrierName': 'UPS',
              'carrierSCAC': 'CEGL',
              'orderCreationDate': '10 May 2019 ',
              'latestETADeliveryDate': '20 May 2019',
              'originWareHouse': 'PHL5',
              'weight': '000000000584612',
              'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
            }
          },
          {
            'selected': false,
            'status': 'atRisk',
            'orderId': 874326,
            'orderStageType': 1,
            'orderStage': 'orderManagement',
            'titleInfo': {
              'orderNumber': 2557991291,
              'customerName': ' CUSTOMERINCABCDEFDGHIJKLMNOPQRSTVUW',
              'customerPoNumber': '536740595934806245342197955869909161',
              'destinationCountry': 'United States',
              'deliveryNumber': '40260a0193',
              'requestedDeliveryDate': '10 Feb 2019',
              'numberOfOrderLines': '05/10'
            },
            'details': {
              'actualDeliveryDate': '09 Jan 2019',
              'soldTo': 'T9u81jAMU1',
              'shipTo': 'Y55mmkY4me',
              'destinationCity': 'North Kingstown',
              'destinationAddress': '18 Ashley St. New Philadelphia, OH 44663',
              'shippingNumber': '468519625',
              'carrierName': 'J.B. Hunt Transport Services',
              'carrierSCAC': 'AKMR',
              'orderCreationDate': '24 Apr 2019',
              'latestETADeliveryDate': '6 May 2019',
              'originWareHouse': 'BWI1',
              'weight': '900000000565812',
              'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
            }
          },
          {
            'selected': false,
            'status': 'inTransit',
            'orderId': 874326,
            'orderStageType': 1,
            'orderStage': 'orderManagement',
            'titleInfo': {
              'orderNumber': 34006289,
              'customerName': 'CUSTOMERINCABCDEFDGHIJKLMNOPQRSTVUW ',
              'customerPoNumber': '1311961757264020492211238',
              'destinationCountry': 'Canada',
              'deliveryNumber': '2725375',
              'requestedDeliveryDate': '11 Mar 2020',
              'numberOfOrderLines': '04/10'
            },
            'details': {
              'actualDeliveryDate': '09 Jan 2019',
              'soldTo': '7mdjB8PIYQ',
              'shipTo': 'szLG7RHEqy',
              'destinationCity': 'East Greenwich',
              'destinationAddress': '90 Oakland St. Bro-ckton, MA 02301',
              'shippingNumber': '553873855',
              'carrierName': 'Landstar System(Light-Asset)',
              'carrierSCAC': '11DX',
              'orderCreationDate': '3 Jun 2019',
              'latestETADeliveryDate': '13 Jun 2019',
              'originWareHouse': 'IND4',
              'weight': '000000000012345',
              'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
            }
          }] //count for 20 orders by default
      },
      {
        'orderStatusType': 2,
        'orderStatusKey': 'atRisk',
        'status': 'At Risk',
        'count': 210,
        'stagesCount': {
          'orderManagement': 20,
          'commercialIssues': 50,
          'stockAvailability': 45,
          'transportationPlanning': 30,
          'warehouseExecution': 10,
          'inTransit': 20,
          'delivered': 25
        },
        'orders': [
          {
            'selected': false,
            'status': 'atRisk',
            'orderId': 874326,
            'orderStageType': 1,
            'orderStage': 'orderManagement',
            'titleInfo': {
              'orderNumber': 1234567890,
              'shippingInfo': 'delay/hold/onTime',
              'customerName': 'INC ABCDEFDGHIJKLMNO',
              'customerPoNumber': '12345678901234567890123456789012345',
              'destinationCountry': 'United States',
              'deliveryNumber': '1234567890',
              'requestedDeliveryDate': '09 Jan 2019',
              'numberOfOrderLines': '08/10'
            },
            'details': {
              'destinationCity': '12345678901234567890123456789012345',
              'destinationAddress': '12345678901234567890123456789012345',
              'latestETADeliveryDate': '09 Jan 2019',
              'orderCreationDate': '09 Jan 2019',
              'actualDeliveryDate': '09 Jan 2019',
              'shippingNumber': '0123456789',
              'soldTo': 'ABCDEABCDE',
              'shipTo': 'ABCDEABCDE',
              'originWareHouse': 'ABCDEFGHIJKLMNO',
              'weight': '012345678912345',
              'carrierName': '12345678901234567890123456789012345',
              'carrierSCAC': 'ABCD',
              'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
            }
          },
          {
            'selected': false,
            'status': 'atRisk',
            'orderId': 874326,
            'orderStageType': 1,
            'orderStage': 'orderManagement',
            'titleInfo': {
              'orderNumber': 5953830023,
              'customerName': 'CUSTOMERINCABCDEFDGHIJKLMNOPQRSTVUW',
              'customerPoNumber': '436999205614069454411574309943151331',
              'destinationCountry': 'United States',
              'deliveryNumber': '7752034372',
              'requestedDeliveryDate': '09 Jan 2019',
              'numberOfOrderLines': '08/10',

            },
            'details': {
              'actualDeliveryDate': '09 Jan 2019',
              'soldTo': 'nnZUcXrnQ3',
              'shipTo': 'Y55mmkY4me',
              'destinationCity': 'Kewanee',
              'destinationAddress': '8863 Sleepy Hollow St. Ogden, UT 84404',
              'shippingNumber': '374380332',
              'carrierName': 'UPS',
              'carrierSCAC': 'CEGL',
              'orderCreationDate': '10 May 2019 ',
              'latestETADeliveryDate': '20 May 2019',
              'originWareHouse': 'PHL5',
              'weight': '000000000584612',
              'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
            }
          },
          {
            'selected': false,
            'status': 'atRisk',
            'orderId': 874326,
            'orderStageType': 1,
            'orderStage': 'orderManagement',
            'titleInfo': {
              'orderNumber': 2557991291,
              'customerName': ' CUSTOMERINCABCDEFDGHIJKLMNOPQRSTVUW',
              'customerPoNumber': '536740595934806245342197955869909161',
              'destinationCountry': 'United States',
              'deliveryNumber': '40260a0193',
              'requestedDeliveryDate': '10 Feb 2019',
              'numberOfOrderLines': '05/10',

            },
            'details': {
              'actualDeliveryDate': '09 Jan 2019',
              'soldTo': 'T9u81jAMU1',
              'shipTo': 'Y55mmkY4me',
              'destinationCity': 'North Kingstown',
              'destinationAddress': '18 Ashley St. New Philadelphia, OH 44663',
              'shippingNumber': '468519625',
              'carrierName': 'J.B. Hunt Transport Services',
              'carrierSCAC': 'AKMR',
              'orderCreationDate': '24 Apr 2019',
              'latestETADeliveryDate': '6 May 2019',
              'originWareHouse': 'BWI1',
              'weight': '900000000565812',
              'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
            }
          },
          {
            'selected': false,
            'status': 'atRisk',
            'orderId': 874326,
            'orderStageType': 1,
            'orderStage': 'orderManagement',
            'titleInfo': {
              'orderNumber': 34006289,
              'customerName': 'CUSTOMERINCABCDEFDGHIJKLMNOPQRSTVUW ',
              'customerPoNumber': '1311961757264020492211238',
              'destinationCountry': 'Canada',
              'deliveryNumber': '2725375',
              'requestedDeliveryDate': '11 Mar 2020',
              'numberOfOrderLines': '04/10',

            },
            'details': {
              'actualDeliveryDate': '09 Jan 2019',
              'soldTo': '7mdjB8PIYQ',
              'shipTo': 'szLG7RHEqy',
              'destinationCity': 'East Greenwich',
              'destinationAddress': '90 Oakland St. Bro-ckton, MA 02301',
              'shippingNumber': '553873855',
              'carrierName': 'Landstar System(Light-Asset)',
              'carrierSCAC': '11DX',
              'orderCreationDate': '3 Jun 2019',
              'latestETADeliveryDate': '13 Jun 2019',
              'originWareHouse': 'IND4',
              'weight': '000000000012345',
              'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
            }
          }] //count for 20 orders by default
      },
      {
        'orderStatusType': 3,
        'orderStatusKey': 'late',
        'status': 'Late',
        'count': 6,
        'stagesCount': {
          'orderManagement': 0,
          'commercialIssues': 0,
          'stockAvailability': 0,
          'transportationPlanning': 3,
          'warehouseExecution': 2,
          'inTransit': 0,
          'delivered': 1
        },
        'orders': [] //count for 20 orders by default
      },
      {
        'orderStatusType': 4,
        'orderStatusKey': 'expedite',
        'status': 'Expedite',
        'count': 530,
        'stagesCount': {
          'orderManagement': 28,
          'commercialIssues': 36,
          'stockAvailability': 176,
          'transportationPlanning': 60,
          'warehouseExecution': 140,
          'inTransit': 28,
          'delivered': 36
        },
        'orders': [] //count for 20 orders by default
      },
      {
        'orderStatusType': 5,
        'orderStatusKey': 'returns',
        'status': 'Returns',
        'count': 58,
        'stagesCount': {
          'orderManagement': 5,
          'commercialIssues': 0,
          'stockAvailability': 3,
          'transportationPlanning': 22,
          'warehouseExecution': 12,
          'inTransit': 6,
          'delivered': 7
        },
        'orders': [] //count for 20 orders by default
      },
      {
        'orderStatusType': 6,
        'orderStatusKey': 'futureOrders',
        'status': 'Future Orders',
        'count': 58,
        'stagesCount': {
          'orderManagement': 5,
          'commercialIssues': 0,
          'stockAvailability': 3,
          'transportationPlanning': 22,
          'warehouseExecution': 12,
          'inTransit': 6,
          'delivered': 7
        },
        'orders': [{
          'selected': false,
          'status': 'inTransit',
          'orderId': 874326,
          'orderStageType': 1,
          'orderStage': 'orderManagement',
          'titleInfo': {
            'orderNumber': 1234567890,
            'shippingInfo': 'delay/hold/onTime',
            'customerName': 'INC',
            'customerPoNumber': '',
            'destinationCountry': 'United States',
            'deliveryNumber': '',
            'requestedDeliveryDate': '09 Jan 2019',
            'numberOfOrderLines': '08/10'
          },
          'details': {
            'destinationCity': '12345678901234567890123456789012345',
            'destinationAddress': '12345678901234567890123456789012345',
            'latestETADeliveryDate': '',
            'orderCreationDate': '09 Jan 2019',
            'actualDeliveryDate': '09 Jan 2019',
            'shippingNumber': '',
            'soldTo': 'ABCDEABCDE',
            'shipTo': 'ABCDEABCDE',
            'originWareHouse': 'ABCDEFGHIJKLMNO',
            'weight': '012345678912345',
            'carrierName': '',
            'carrierSCAC': null,
            'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
          }
        },
          {
            'selected': false,
            'status': 'inTransit',
            'orderId': 874326,
            'orderStageType': 1,
            'orderStage': 'orderManagement',
            'titleInfo': {
              'orderNumber': 1234567890,
              'shippingInfo': 'delay/hold/onTime',
              'customerName': 'INC',
              'customerPoNumber': '',
              'destinationCountry': 'United States',
              'deliveryNumber': '',
              'requestedDeliveryDate': '09 Jan 2019',
              'numberOfOrderLines': '08/10'
            },
            'details': {
              'destinationCity': '12345678901234567890123456789012345',
              'destinationAddress': '12345678901234567890123456789012345',
              'latestETADeliveryDate': '',
              'orderCreationDate': '09 Jan 2019',
              'actualDeliveryDate': '09 Jan 2019',
              'shippingNumber': '',
              'soldTo': 'ABCDEABCDE',
              'shipTo': 'ABCDEABCDE',
              'originWareHouse': 'ABCDEFGHIJKLMNO',
              'weight': '012345678912345',
              'carrierName': '',
              'carrierSCAC': null,
              'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
            }
          }] //count for 20 orders by default
      },
      {
        'orderStatusType': 7,
        'orderStatusKey': 'noProofOfDelivery',
        'status': 'No POD',
        'count': 58,
        'stagesCount': {
          'orderManagement': 587,
          'commercialIssues': 43,
          'stockAvailability': 98,
          'transportationPlanning': 2,
          'warehouseExecution': 142,
          'inTransit': 6,
          'delivered': 7
        },
        'orders': [{
          'selected': false,
          'status': 'inTransit',
          'orderId': 874326,
          'orderStageType': 1,
          'orderStage': 'orderManagement',
          'titleInfo': {
            'orderNumber': 1234567890,
            'shippingInfo': 'delay/hold/onTime',
            'customerName': 'INC',
            'customerPoNumber': '',
            'destinationCountry': 'United States',
            'deliveryNumber': '',
            'requestedDeliveryDate': '09 Jan 2019',
            'numberOfOrderLines': '08/10'
          },
          'details': {
            'destinationCity': '12345678901234567890123456789012345',
            'destinationAddress': '12345678901234567890123456789012345',
            'latestETADeliveryDate': '',
            'orderCreationDate': '09 Jan 2019',
            'actualDeliveryDate': '09 Jan 2019',
            'shippingNumber': '',
            'soldTo': 'ABCDEABCDE',
            'shipTo': 'ABCDEABCDE',
            'originWareHouse': 'ABCDEFGHIJKLMNO',
            'weight': '012345678912345',
            'carrierName': '',
            'carrierSCAC': null,
            'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
          }
        },
          {
            'selected': false,
            'status': 'inTransit',
            'orderId': 874326,
            'orderStageType': 1,
            'orderStage': 'orderManagement',
            'titleInfo': {
              'orderNumber': 1234567890,
              'shippingInfo': 'delay/hold/onTime',
              'customerName': 'INC',
              'customerPoNumber': '',
              'destinationCountry': 'United States',
              'deliveryNumber': '',
              'requestedDeliveryDate': '09 Jan 2019',
              'numberOfOrderLines': '08/10'
            },
            'details': {
              'destinationCity': '12345678901234567890123456789012345',
              'destinationAddress': '12345678901234567890123456789012345',
              'latestETADeliveryDate': '',
              'orderCreationDate': '09 Jan 2019',
              'actualDeliveryDate': '09 Jan 2019',
              'shippingNumber': '',
              'soldTo': 'ABCDEABCDE',
              'shipTo': 'ABCDEABCDE',
              'originWareHouse': 'ABCDEFGHIJKLMNO',
              'weight': '012345678912345',
              'carrierName': '',
              'carrierSCAC': null,
              'mapUrl': 'https://app.fourkites.com/#/integrations/trackLoad/VjJ8ZWNvbGFifDcwZmYyZDYxLWZhODYtNDAxMi05MzEzLTdmZGIwOWNmYWE1Mw'
            }
          }] //count for 20 orders by default
      }
    ],
    'searchCriteria': {
      'regionType': {
        'options': [
          {
            'name': 'NA',
            'value': 'na',
            'isDisabled': true
          },
          {
            'name': 'EU',
            'value': 'eu',
            'isDisabled': false
          }
        ],
        'value': 'eu'
      },
      'legacyType': {
        'options': [
          {
            'name': 'Ecolab',
            'value': 'ecolab',
            'isDisabled': true
          },
          {
            'name': 'Nalco',
            'value': 'nalco',
            'isDisabled': false
          }
        ],
        'value': 'nalco'
      },
      'division': {
        'options': [
          {
            'name': 'HC',
            'code': 4001,
            'isDisabled': false
          },
          {
            'name': 'TCD',
            'code': 4002,
            'isDisabled': false
          },
          {
            'name': 'F&B',
            'code': 4003,
            'isDisabled': false
          },
          {
            'name': 'Institutional',
            'code': 4004,
            'isDisabled': false
          },
          {
            'name': 'Energy',
            'code': 4005,
            'isDisabled': false
          }
        ]
      },
      'salesOrg': {
        'options': [
          {
            'name': 'BE 50',
            'code': 4001,
            'isDisabled': false
          },
          {
            'name': 'BE 25',
            'code': 4002,
            'isDisabled': false
          },
          {
            'name': 'GE',
            'code': 4003,
            'isDisabled': false
          },
          {
            'name': 'HU 50',
            'code': 4004,
            'isDisabled': false
          },
          {
            'name': 'ES 70',
            'code': 4005,
            'isDisabled': false
          }
        ]
      },
      'requestedDeliveryDate': {
        'begin': '2019-04-19T21:53:09.339Z',
        'end': '2019-04-19T21:53:09.339Z',
        'minDate': '2019-04-19T21:53:09.339Z',
        'maxDate': '2019-04-19T21:53:09.339Z'
      },
      'creationDate': {
        'begin': '2019-04-19T21:53:09.339Z',
        'end': '2019-04-19T21:53:09.339Z',
        'minDate': '2019-04-19T21:53:09.339Z',
        'maxDate': '2019-04-19T21:53:09.339Z'
      },
      'orderType': {
        'options': [
          {
            'name': 'Customer Order',
            'code': 1001,
            'isDisabled': false
          },
          {
            'name': 'Customer Return',
            'code': 1002,
            'isDisabled': false
          }
        ]
      },
      'shippingCondition': {
        'options': [
          {
            'name': 'Standard',
            'key': 'standard',
            'code': 1001,
            'isDisabled': false
          },
          {
            'name': 'Expedite',
            'key': 'expedite',
            'code': 1002,
            'isDisabled': false
          }
        ]
      },
      'isExport': {
        'options': [
          {
            'name': 'Yes',
            'value': 'yes',
            'isDisabled': true
          },
          {
            'name': 'No',
            'value': 'no',
            'isDisabled': false
          }
        ],
        'value': 'no'
      },
      'customerSearchValue': {
        'isCustomerNameSearch': true,
        'options': [
          {
            'name': 'Name',
            'key': 'name',
            'placeHolder': 'Customer Name'
          },
          {
            'name': 'Parent Name',
            'key': 'parentName',
            'placeHolder': 'Customer Parent Name'
          }
        ],
        'value': null,
        'isDisabled': false
      },
      'customerType': {
        'options': [
          {
            'name': 'Distributor',
            'key': 'distributor',
            'code': 1001,
            'isDisabled': false
          },
          {
            'name': 'Direct',
            'key': 'direct',
            'code': 1002,
            'isDisabled': false
          }
        ]
      },
      'shipToCountry': {
        'options': [
          {
            'countryName': 'France',
            'countryCode': 'FR',
            'code': 1001,
            'states': [
              {
                'stateName': 'Occitanie',
                'stateCode': 'OC',
                'code': 24,
                'cities': [
                  {
                    'cityName': 'Minneapolis',
                    'cityCode': 'MSP',
                    'code': 121
                  }
                ]
              }
            ]
          },
          {
            'countryName': 'Germany',
            'countryCode': 'DE',
            'code': 1002,
            'states': [
              {
                'stateName': 'Berlin',
                'stateCode': 'BE',
                'code': 2,
                'cities': [
                  {
                    'cityName': 'Minneapolis',
                    'cityCode': 'MSP',
                    'code': 121
                  }
                ]
              },
              {
                'stateName': 'Hamberg',
                'stateCode': 'HM',
                'code': 12,
                'cities': [
                  {
                    'cityName': 'Minneapolis',
                    'cityCode': 'MSP',
                    'code': 121
                  }
                ]
              }
            ]
          },
          {
            'countryName': 'Italy',
            'countryCode': 'IT',
            'code': 1003,
            'states': [
              {
                'stateName': 'Lo Stato Italiano',
                'stateCode': 'HB',
                'code': 2,
                'cities': [
                  {
                    'cityName': 'Minneapolis',
                    'cityCode': 'MSP',
                    'code': 121
                  }
                ]
              }
            ]
          }
        ],
        'value': null,
      },
      'shipToState': {
        'value': null,
      },
      'shipToCity': {
        'value': null,
      },
      'plantOrWarehouseCountry': {
        'options': [
          {
            'countryName': 'France',
            'countryCode': 'FR',
            'code': 1001,
            'states': [
              {
                'stateName': 'Occitanie',
                'stateCode': 'OC',
                'code': 24
              }
            ]
          },
          {
            'countryName': 'Germany',
            'countryCode': 'DE',
            'code': 1002,
            'states': [
              {
                'stateName': 'Berlin',
                'stateCode': 'BE',
                'code': 2
              },
              {
                'stateName': 'Hamberg',
                'stateCode': 'HM',
                'code': 12
              }
            ]
          },
          {
            'countryName': 'Italy',
            'countryCode': 'IT',
            'code': 1003,
            'states': [
              {
                'stateName': 'Lo Stato Italiano',
                'stateCode': 'HB',
                'code': 2
              }
            ]
          }
        ],
        'value': null,
      },
      'plantOrWarehouseState': {
        'value': null,
      },
      'transportationMode': {
        'options': [
          {
            'name': 'Air',
            'code': 1001,
            'isDisabled': false
          },
          {
            'name': 'Bulk',
            'code': 1002,
            'isDisabled': false
          },
          {
            'name': 'Intermodal',
            'code': 1003,
            'isDisabled': false
          },
          {
            'name': 'LTL',
            'code': 1004,
            'isDisabled': false
          },
          {
            'name': 'Parcel',
            'code': 1005,
            'isDisabled': false
          },
          {
            'name': 'Rail',
            'code': 1006,
            'isDisabled': false
          },
          {
            'name': 'Sea',
            'code': 1007,
            'isDisabled': false
          },
          {
            'name': 'TL',
            'code': 1008,
            'isDisabled': false
          },
          {
            'name': 'Road',
            'code': 1009,
            'isDisabled': false
          }
        ]
      },
      'carrierSearchValue': {
        'isCarrierNameSearch': true,
        'options': [
          {
            'name': 'Name',
            'key': 'name',
            'placeHolder': 'Carrier Name'
          },
          {
            'name': 'SCAC',
            'key': 'scac',
            'placeHolder': 'Carrier SCAC'
          }
        ],
        'value': null,
        'isDisabled': false
      }
    }
  };

  public getOrderListItems = {
    orderId: 1234567890,
    sourceSystem: 'ECC',
    listOfItems: [
      {
        productSKUNo: 123456789012345678, // Non-Empty field
        productName: 'ABCDEFGHIJKLMNOABCDEFGHIJKLMNOABCDEABCDE', // Non-Empty field
        productQuantity: 1238745.76, // Non-Empty field
        unitOfMeasure: 'Case', // Non-Empty field Eg:Case/pallet/bags
        invoiceAmount: '$239815646.07',
        materialAvailabilityDate: '09 JAN 2019' // Can be empty - show Not Yet Available when empty
      },
      {
        productSKUNo: 123, // Non-Empty field
        productName: 'ABCD', // Non-Empty field
        productQuantity: 1875872345.76, // Non-Empty field
        unitOfMeasure: 'Case', // Non-Empty field Eg:Case/pallet/bags
        invoiceAmount: '$239815646.07',
        materialAvailabilityDate: '09 JAN 2019' // Can be empty - show Not Yet Available when empty
      },
      {
        productSKUNo: 123456778, // Non-Empty field
        productName: 'CDE', // Non-Empty field
        productQuantity: 12345.768, // Non-Empty field
        unitOfMeasure: 'Case', // Non-Empty field Eg:Case/pallet/bags
        invoiceAmount: '$239815646.07',
        materialAvailabilityDate: '09 JAN 2019' // Can be empty - show Not Yet Available when empty
      },
      {
        productSKUNo: 123456789012345678, // Non-Empty field
        productName: 'ABCDEFGHIJKLMNOABCDEFGHIJKLMNOABCDEABCDE', // Non-Empty field
        productQuantity: 12345.768, // Non-Empty field
        unitOfMeasure: 'Case', // Non-Empty field Eg:Case/pallet/bags
        invoiceAmount: '$239815646.07',
        materialAvailabilityDate: '' // Can be empty - show Not Yet Available when empty
      },
      {
        productSKUNo: 123456789012345678, // Non-Empty field
        productName: 'ABCDEFGHIJKLMNOABCDEFGHIJKLMNOABCDEABCDE', // Non-Empty field
        productQuantity: 12345.768, // Non-Empty field
        unitOfMeasure: 'Case', // Non-Empty field Eg:Case/pallet/bags
        invoiceAmount: '$239815646.07',
        materialAvailabilityDate: '09 JAN 2019' // Can be empty - show Not Yet Available when empty
      },
      {
        productSKUNo: 123456789012345678, // Non-Empty field
        productName: 'ABCDEFGHIJKLMNOABCDEFGHIJKLMNOABCDEABCDE', // Non-Empty field
        productQuantity: 12345.768, // Non-Empty field
        unitOfMeasure: 'Case', // Non-Empty field Eg:Case/pallet/bags
        invoiceAmount: '$239815646.07',
        materialAvailabilityDate: '09 JAN 2019' // Can be empty - show Not Yet Available when empty
      },
      {
        productSKUNo: 123456789012345678, // Non-Empty field
        productName: 'ABCDEFGHIJKLMNOABCDEFGHIJKLMNOABCDEABCDE', // Non-Empty field
        productQuantity: 12345.768, // Non-Empty field
        unitOfMeasure: 'Case', // Non-Empty field Eg:Case/pallet/bags
        invoiceAmount: '$239815646.07',
        materialAvailabilityDate: '09 JAN 2019' // Can be empty - show Not Yet Available when empty
      },
      {
        productSKUNo: 123456789012345678, // Non-Empty field
        productName: 'ABCDEFGHIJKLMNOABCDEFGHIJKLMNOABCDEABCDE', // Non-Empty field
        productQuantity: 12345.768, // Non-Empty field
        unitOfMeasure: 'Case', // Non-Empty field Eg:Case/pallet/bags
        invoiceAmount: '$239815646.07',
        materialAvailabilityDate: '09 JAN 2019' // Can be empty - show Not Yet Available when empty
      },
      {
        productSKUNo: 123456789012345678, // Non-Empty field
        productName: 'ABCDEFGHIJKLMNOABCDEFGHIJKLMNOABCDEABCDE', // Non-Empty field
        productQuantity: 12345.768, // Non-Empty field
        unitOfMeasure: 'Case', // Non-Empty field Eg:Case/pallet/bags
        invoiceAmount: '$239815646.07',
        materialAvailabilityDate: '09 JAN 2019' // Can be empty - show Not Yet Available when empty
      },
      {
        productSKUNo: 123456789012345678, // Non-Empty field
        productName: 'ABCDEFGHIJKLMNOABCDEFGHIJKLMNOABCDEABCDE', // Non-Empty field
        productQuantity: 12345.768, // Non-Empty field
        unitOfMeasure: 'Case', // Non-Empty field Eg:Case/pallet/bags
        invoiceAmount: '$239815646.07',
        materialAvailabilityDate: '09 JAN 2019' // Can be empty - show Not Yet Available when empty
      },
      {
        productSKUNo: 123456789012345678, // Non-Empty field
        productName: 'ABCDEFGHIJKLMNOABCDEFGHIJKLMNOABCDEABCDE', // Non-Empty field
        productQuantity: 12345.768, // Non-Empty field
        unitOfMeasure: 'Case', // Non-Empty field Eg:Case/pallet/bags
        invoiceAmount: '$239815646.07',
        materialAvailabilityDate: '09 JAN 2019' // Can be empty - show Not Yet Available when empty
      }
    ]
  };

  public getLookUpDataFromAPI = {
    data: [
      {
        customerCode: 123456,
        customerName: 'ABCDEFGHIJKLMNOABCDEFGHIJKLMNOABCDEABCDE',
        address: '1300054 Ecolab Place',
        city: 'St.Paul',
        state: 'MN',
        country: 'United States'
      },
      {
        customerCode: 123456,
        customerName: 'ABCDEFGHIJKLMNOABCDEFGHIJKLMNOABCDEABCDE',
        address: '1300054 Ecolab Place',
        city: 'St.Paul',
        state: 'MN',
        country: 'United States'
      },
      {
        customerCode: 123456,
        customerName: 'ABCDEFGHIJKLMNOABCDEFGHIJKLMNOABCDEABCDE',
        address: '1300054 Ecolab Place',
        city: 'St.Paul',
        state: 'MN',
        country: 'United States'
      }
    ]
  };

  public getLookUpDataForCustomerNameFromAPI = {
    data: [
      {
        customerCode: 123456,
        customerSoldToName: 'EFGHIJKLMNOABCDEFGHIJKLMNOABCDEABCDEABCD',
        customerSoldToNo: 7723,
        customerShipToName: 'GHIJKLMNOABCDEFGHIJKLMNOABCDEABCDEABCDEF',
        customerShipToNo: 23424,
        city: 'St.Paul',
        state: 'MN',
        country: 'United States',
        zip: 55102
      },
      {
        customerCode: 123456,
        customerSoldToName: 'EFGHIJKLMNOABCDEFGHIJKLMNOABCDEABCDEABCD',
        customerSoldToNo: 7723,
        customerShipToName: 'GHIJKLMNOABCDEFGHIJKLMNOABCDEABCDEABCDEF',
        customerShipToNo: 23424,
        city: 'St.Paul',
        state: 'MN',
        country: 'United States',
        zip: 55102
      },
      {
        customerCode: 123456,
        customerSoldToName: 'EFGHIJKLMNOABCDEFGHIJKLMNOABCDEABCDEABCD',
        customerSoldToNo: 7723,
        customerShipToName: 'GHIJKLMNOABCDEFGHIJKLMNOABCDEABCDEABCDEF',
        customerShipToNo: 23424,
        city: 'St.Paul',
        state: 'MN',
        country: 'United States',
        zip: 55102
      },
      {
        customerCode: 123456,
        customerSoldToName: 'EFGHIJKLMNOABCDEFGHIJKLMNOABCDEABCDEABCD',
        customerSoldToNo: 7723,
        customerShipToName: 'GHIJKLMNOABCDEFGHIJKLMNOABCDEABCDEABCDEF',
        customerShipToNo: 23424,
        city: 'St.Paul',
        state: 'MN',
        country: 'United States',
        zip: 55102
      },
      {
        customerCode: 123456,
        customerSoldToName: 'EFGHIJKLMNOABCDEFGHIJKLMNOABCDEABCDEABCD',
        customerSoldToNo: 7723,
        customerShipToName: 'GHIJKLMNOABCDEFGHIJKLMNOABCDEABCDEABCDEF',
        customerShipToNo: 23424,
        city: 'St.Paul',
        state: 'MN',
        country: 'United States',
        zip: 55102
      },
      {
        customerCode: 123456,
        customerSoldToName: 'EFGHIJKLMNOABCDEFGHIJKLMNOABCDEABCDEABCD',
        customerSoldToNo: 7723,
        customerShipToName: 'GHIJKLMNOABCDEFGHIJKLMNOABCDEABCDEABCDEF',
        customerShipToNo: 23424,
        city: 'St.Paul',
        state: 'MN',
        country: 'United States',
        zip: 55102
      },
      {
        customerCode: 123456,
        customerSoldToName: 'EFGHIJKLMNOABCDEFGHIJKLMNOABCDEABCDEABCD',
        customerSoldToNo: 7723,
        customerShipToName: 'GHIJKLMNOABCDEFGHIJKLMNOABCDEABCDEABCDEF',
        customerShipToNo: 23424,
        city: 'St.Paul',
        state: 'MN',
        country: 'United States',
        zip: 55102
      },
      {
        customerCode: 123456,
        customerSoldToName: 'EFGHIJKLMNOABCDEFGHIJKLMNOABCDEABCDEABCD',
        customerSoldToNo: 7723,
        customerShipToName: 'GHIJKLMNOABCDEFGHIJKLMNOABCDEABCDEABCDEF',
        customerShipToNo: 23424,
        city: 'St.Paul',
        state: 'MN',
        country: 'United States',
        zip: 55102
      }
    ]
  };
}
