import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../core/translation.service';
import { appVariables } from '../../app.constants';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  const searchOptions = [
    {itemKey: appVariables.orders.title.searchKeys[0], itemValue: appVariables.orders.title.searchOptions[0],
      placeHolder: appVariables.orders.title.searchOptionsPlaceHolders[0], focus: false},
    {itemKey: appVariables.orders.title.searchKeys[1], itemValue: appVariables.orders.title.searchOptions[1],
      placeHolder: appVariables.orders.title.searchOptionsPlaceHolders[1], focus: false},
    {itemKey: appVariables.orders.title.searchKeys[2], itemValue: appVariables.orders.title.searchOptions[2],
      placeHolder: appVariables.orders.title.searchOptionsPlaceHolders[2], focus: false},
    {itemKey: appVariables.orders.title.searchKeys[3], itemValue: appVariables.orders.title.searchOptions[3],
      placeHolder: appVariables.orders.title.searchOptionsPlaceHolders[3], focus: false},
    {itemKey: appVariables.orders.title.searchKeys[4], itemValue: appVariables.orders.title.searchOptions[4],
      placeHolder: appVariables.orders.title.searchOptionsPlaceHolders[4], focus: false},
    {itemKey: appVariables.orders.title.searchKeys[5], itemValue: appVariables.orders.title.searchOptions[5],
      placeHolder: appVariables.orders.title.searchOptionsPlaceHolders[5], focus: false},
    {itemKey: appVariables.orders.title.searchKeys[6], itemValue: appVariables.orders.title.searchOptions[6],
      placeHolder: appVariables.orders.title.searchOptionsPlaceHolders[6], focus: false},
    {itemKey: appVariables.orders.title.searchKeys[7], itemValue: appVariables.orders.title.searchOptions[7],
      placeHolder: appVariables.orders.title.searchOptionsPlaceHolders[7], focus: false},
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, FormsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (httpClient: HttpClient) => new TranslateHttpLoader(httpClient),
            deps: [HttpClient]
          }
        })
      ],
      declarations: [ SearchComponent ],
      providers: [ TranslationService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    component.currentSearchItem = searchOptions[0];
    component.dropdownItems = searchOptions;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the place holder when search item was changed', () => {
    component.currentSearchItem = searchOptions[0];
    component.onSearchChange(searchOptions[3]);

    expect(component.currentSearchItem).toEqual(searchOptions[3]);
    expect(component.searchTextValue).toEqual('');
  });

  it('should emit the search text value to the parent component', () => {
    spyOn(component.searchContext, 'emit').and.callThrough();
    component.currentSearchItem = searchOptions[0];
    component.searchTextValue = '12345';
    component.onSearchValueChange();

    expect(component.searchContext.emit).toHaveBeenCalledWith({itemKey: searchOptions[0].itemKey, searchValue: '12345'});
  });
});
