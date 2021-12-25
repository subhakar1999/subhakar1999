import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {
  ICarrierNameLookUp,
  ICustomerNameLookUp,
  ICustomerParentNameLookUp,
  IOrderListOfItems,
  IOrderListItemColumnNames,
  ICustomerNameLookUpColumnNames,
  ICustomerParentNameLookUpColumnNames,
  ICarrierNameLookUpColumnNames
} from '../../feature-modules/orders/shared/interfaces/orders.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() singleSelectionNeeded = false;
  @Input() buttons: {key: string, translationKey: string, isPrimary: boolean}[] = [];
  @Input() tableData: {listItemColumnNames: IOrderListItemColumnNames | ICustomerNameLookUpColumnNames  | ICustomerParentNameLookUpColumnNames | ICarrierNameLookUpColumnNames,
    listOfItems: IOrderListOfItems[] | ICustomerNameLookUp[]  | ICustomerParentNameLookUp[] | ICarrierNameLookUp[]};
  @Output() action: EventEmitter<{actionUsed: {key: string, translationKey: string, isPrimary: boolean},
    value: IOrderListOfItems | ICustomerNameLookUp  | ICustomerParentNameLookUp | ICarrierNameLookUp}> = new EventEmitter();

  selectedRowValue: any;
  columns: string[];

  constructor() { }

  ngOnInit() {
    this.columns = Object.keys(this.tableData.listItemColumnNames);
  }

  onButtonClick(event: {key: string, translationKey: string, isPrimary: boolean}) {
    const outputEvent = {actionUsed: event, value: this.selectedRowValue};
    this.action.emit(outputEvent);
  }
}
