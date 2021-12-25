/* CoreModule
    All services which have to have one and only one instance per application (singleton services) should be implemented here.
    Typical example can be authentication service or user service.
*/

/* 3rd party libraries */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

/* our own custom services  */
// e.g. import { SomeSingletonService } from './some-singleton/some-singleton.service';

import { TranslationService } from './translation.service';
import { MockDataService } from '../test/mock-data.service';

@NgModule({
  imports: [
    /* 3rd party libraries */
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    /* our own custom services  */
    // SomeSingletonService
    TranslationService,
    // TODO: 02/18/2019 Remove this when the Real BackEnd Data was integrated with UI
    MockDataService
  ]
})

export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  /* Components to have its own instance of a Service and at the same time to have an instance of its parent's service, use @SkipSelf() */
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
