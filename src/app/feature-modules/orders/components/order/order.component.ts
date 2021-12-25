import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { appVariables } from '../../../../app.constants';
import { OrdersService } from '../../shared/orders.service';
import {TranslationService} from '../../../../core/translation.service';
import {
  IInteractiveSVGIcon,
  IOrderListItemColumnNames,
  IOrderListItemDetails, IOrderListOfItems
} from '../../shared/interfaces/orders.interface';
import * as _ from 'lodash';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

export class OrderComponent implements OnInit, OnChanges {

  // order detail object
  // TODO: create the order interface and make strongly typed
  @Input() orderDetails: any;

  // select all checkboxes
  @Input() selectAll: boolean;

  // let parent compoennt know the order that was selected
  // TODO: Use the order interface and make strongly typed
  @Output() selectedOrder: EventEmitter<any> = new EventEmitter();

  toggleShowDetails = true;
  stageName: string;
  listOfOptionalDetailsText: { [key: string]: any } = {};

  orderDetailIcons: IInteractiveSVGIcon[];
  orderListItemColumnNames: IOrderListItemColumnNames;
  orderListItemDetails: IOrderListItemDetails = {} as IOrderListItemDetails;

  constructor(private ordersService: OrdersService, private translationService: TranslationService) { }

  ngOnInit() {
    const translationKeys = [
      appVariables.orders.order.optionalDetailsText[0],
      appVariables.orders.order.optionalDetailsText[1],
      appVariables.orders.order.optionalDetailsText[2],
      appVariables.orders.order.optionalDetailsText[3],
      appVariables.orders.order.optionalDetailsText[4],
      appVariables.orders.order.optionalDetailsText[5]
    ];
    this.translationService.getTranslations(translationKeys)
      .subscribe((response: object) => this.listOfOptionalDetailsText = response);

    this.orderDetailIcons = [{key: appVariables.orders.order.iconKeys[0], src: appVariables.orders.order.iconSrc[0],
      activeSrc: appVariables.orders.order.iconActiveSrc[0], altName: appVariables.orders.order.iconAltKeys[0], isActive: false, isDisabled: false},
      {key: appVariables.orders.order.iconKeys[1], src: appVariables.orders.order.iconSrc[1],
        activeSrc: appVariables.orders.order.iconActiveSrc[1], altName: appVariables.orders.order.iconAltKeys[1], isActive: false, isDisabled: !this.orderDetails.details.mapUrl}];

    this.orderListItemColumnNames = {
      productSKUNo: appVariables.orders.order.listItemColumnNames[0],
      productName: appVariables.orders.order.listItemColumnNames[1],
      productQuantity: appVariables.orders.order.listItemColumnNames[2],
      unitOfMeasure: appVariables.orders.order.listItemColumnNames[3],
      materialAvailabilityDate: appVariables.orders.order.listItemColumnNames[5],
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.orderDetails && changes.orderDetails.currentValue !== changes.orderDetails.previousValue) {
      this.stageName = appVariables.orders.order.stageTitles[this.orderDetails.orderStageType - 1];
    }
  }

  /**
   *
   * @param selected order object will be emitted to parent component
   */
  selectCheckbox(isSelected: boolean, order: any): void {
    order.selected = isSelected;
    this.selectedOrder.emit(order);
  }

  toggle() {
    this.toggleShowDetails = !this.toggleShowDetails;
    if (this.toggleShowDetails) {
      _.each(this.orderDetailIcons, (item: IInteractiveSVGIcon) => {
        item.isActive = false;
      });
    }
  }

  activeOrderDetailIcon(activeIcon: IInteractiveSVGIcon) {
    _.each(this.orderDetailIcons, (item: IInteractiveSVGIcon) => {
      if (activeIcon.key === item.key && item.key === 'list') {
        item.isActive = !activeIcon.isActive;
        this.ordersService.getOrderListItems({orderId: this.orderDetails.orderId, sourceSystem: this.orderDetails.sourceSystem})
          .subscribe((res: IOrderListOfItems[]) => {
            this.orderListItemDetails.listItemColumnNames = this.orderListItemColumnNames;
            this.orderListItemDetails.listOfItems = res;
          });
      } else if (activeIcon.key === item.key && item.key === 'map') {
        window.open(this.orderDetails.details.mapUrl);
      }
    });
  }
}
