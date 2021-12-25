import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { TitleComponent } from './components/title/title.component';

const routes = [
  { path: '', component: TitleComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class OrdersRoutingModule {}

