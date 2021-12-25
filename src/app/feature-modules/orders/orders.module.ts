import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { OrdersService } from './shared/orders.service';
import { OrderStagesComponent } from './components/order-stages/order-stages.component';
import { SharedModule } from '../../shared/shared.module';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { TitleComponent } from './components/title/title.component';
import { OrderComponent } from './components/order/order.component';
import { FieldsComponent } from './components/fields/fields.component';

@NgModule({
  declarations: [ TitleComponent, OrderStatusComponent, OrderStagesComponent, OrdersListComponent, OrderComponent, FieldsComponent ],
  imports: [
    CommonModule,
    SharedModule,
    OrdersRoutingModule
  ],
  providers: [ OrdersService ]
})
export class OrdersModule { }
