import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../shared/orders.service';
import { appVariables } from '../../../../app.constants';

@Component({
  selector: 'app-order-stages',
  templateUrl: './order-stages.component.html',
  styleUrls: ['./order-stages.component.scss']
})
export class OrderStagesComponent implements OnInit {

  // @Output() stageChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  orderStages: any[] = [
    {status: appVariables.orders.orderStages.stageKeys[0], title: appVariables.orders.orderStages.stageTitles[0], imgUrl: appVariables.orders.orderStages.stageSvgUrls[0]},
    {status: appVariables.orders.orderStages.stageKeys[1], title: appVariables.orders.orderStages.stageTitles[1], imgUrl: appVariables.orders.orderStages.stageSvgUrls[1]},
    {status: appVariables.orders.orderStages.stageKeys[2], title: appVariables.orders.orderStages.stageTitles[2], imgUrl: appVariables.orders.orderStages.stageSvgUrls[2]},
    {status: appVariables.orders.orderStages.stageKeys[3], title: appVariables.orders.orderStages.stageTitles[3], imgUrl: appVariables.orders.orderStages.stageSvgUrls[3]},
    {status: appVariables.orders.orderStages.stageKeys[4], title: appVariables.orders.orderStages.stageTitles[4], imgUrl: appVariables.orders.orderStages.stageSvgUrls[4]},
    {status: appVariables.orders.orderStages.stageKeys[5], title: appVariables.orders.orderStages.stageTitles[5], imgUrl: appVariables.orders.orderStages.stageSvgUrls[5]},
    {status: appVariables.orders.orderStages.stageKeys[6], title: appVariables.orders.orderStages.stageTitles[6], imgUrl: appVariables.orders.orderStages.stageSvgUrls[6]}
  ];

  constructor(public ordersService: OrdersService) { }

  ngOnInit() {}

  onStageChange(stage: string): void {
    const previousStatusAndStagenames = this.ordersService.currentStatusAndStageNames$.getValue();
    this.onChangeOfStatusOrStage(previousStatusAndStagenames.activeStatus, previousStatusAndStagenames.selectedStage === stage ? '' : stage);
  }

  onChangeOfStatusOrStage(activeStatus: string, selectedStage: string) {
    if (activeStatus && selectedStage) {
      switch (this.ordersService.sourceOfOrdersView) {
        case 'default': this.ordersService.getOrdersForTerritoryManagerWithFilters({bucket: activeStatus, stage: selectedStage}, 1, 10)
                        .subscribe(() => this.updateCurrentStatusAndStageNames$(activeStatus, selectedStage));
                        break;
        case 'search': this.ordersService.getOrdersWithBasicSearchAndFilters({bucket: activeStatus, stage: selectedStage}, 1, 10)
                       .subscribe(() => this.updateCurrentStatusAndStageNames$(activeStatus, selectedStage));
                       break;
        case 'advanceSearch': this.ordersService.getOrdersForTerritoryManagerWithFilters({bucket: activeStatus, stage: selectedStage}, 1, 10)
                              .subscribe(() => this.updateCurrentStatusAndStageNames$(activeStatus, selectedStage));
                              break;
      }
    } else {
      this.updateCurrentStatusAndStageNames$(activeStatus, selectedStage);
    }
  }

  updateCurrentStatusAndStageNames$(activeStatus: string, selectedStage: string) {
    this.ordersService.currentStatusAndStageNames$.next({activeStatus, selectedStage});
  }
}
