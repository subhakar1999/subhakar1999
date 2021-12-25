import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IInteractiveSVGIcon } from '../../feature-modules/orders/shared/interfaces/orders.interface';
import * as _ from 'lodash';

@Component({
  selector: 'app-interactive-svg-icon',
  templateUrl: './interactive-svg-icon.component.html',
  styleUrls: ['./interactive-svg-icon.component.scss']
})
export class InteractiveSvgIconComponent implements OnInit, OnChanges {

  @Input() listOfSvgItems: IInteractiveSVGIcon[];
  @Output() activeSvgItem: EventEmitter<IInteractiveSVGIcon> = new EventEmitter<IInteractiveSVGIcon>();

  srcValues: {[key: string]: string} = {};

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.listOfSvgItems && changes.listOfSvgItems.currentValue !== changes.listOfSvgItems.previousValue) {
      _.each(this.listOfSvgItems, (item: IInteractiveSVGIcon) => {
        this.srcValues[item.key] = item.isActive ? item.activeSrc : item.src;
      });
    }
  }

  getActiveSvgSrc(item: IInteractiveSVGIcon): void {
    if (!item.isDisabled) {
      this.srcValues[item.key] = item.activeSrc;
    }
  }

  getSvgSrc(item: IInteractiveSVGIcon): void {
    if (!item.isDisabled && !item.isActive) {
      this.srcValues[item.key] = item.src;
    }
  }

  onActionClick(item: IInteractiveSVGIcon): void {
    if (!item.isDisabled) {
      this.activeSvgItem.emit(item);
    }
  }

}
