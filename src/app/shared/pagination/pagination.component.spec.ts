import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationComponent } from './pagination.component';
import { TranslationService } from '../../core/translation.service';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SimpleChange } from '@angular/core';

const TRANSLATIONS_EN = require('../../../assets/i18n/en.json');

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let http: HttpTestingController;
  let translationService: TranslationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (httpClient: HttpClient) => new TranslateHttpLoader(httpClient),
            deps: [HttpClient]
          }
        })],
      declarations: [ PaginationComponent ],
      providers: [ TranslationService, TranslateService ]
    })
    .compileComponents();
    http = TestBed.get(HttpTestingController);
    translationService = TestBed.get(TranslationService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    http.expectOne('/assets/i18n/en.json').flush(TRANSLATIONS_EN);

    component.currentPage = 3;
    component.itemsPerPage = 35;
    component.maxItemsCounts = 105;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the translated values', () => {
    spyOn(translationService, 'getTranslations').and.callThrough();
    component.ngOnChanges({currentPage: new SimpleChange(null, component.currentPage, true),
      itemsPerPage: new SimpleChange(null, component.itemsPerPage, true),
      maxItemsCounts: new SimpleChange(null, component.maxItemsCounts, true)});

    expect(translationService.getTranslations).toHaveBeenCalled();
    expect(component.translations).toEqual({info: 'Displaying 71 - 105 of 105 matches'});
  });

  it('should get the translated values when the inputs were updated as (1, 10, 75)', () => {
    component.currentPage = 1;
    component.itemsPerPage = 10;
    component.maxItemsCounts = 75;
    spyOn(translationService, 'getTranslations').and.callThrough();
    component.ngOnChanges({currentPage: new SimpleChange(3, component.currentPage, true),
      itemsPerPage: new SimpleChange(35, component.itemsPerPage, true),
      maxItemsCounts: new SimpleChange(105, component.maxItemsCounts, true)});

    expect(translationService.getTranslations).toHaveBeenCalled();
    expect(component.translations).toEqual({info: 'Displaying 1 - 10 of 75 matches'});
  });

  it('should get the translated values when the inputs were updated as (6, 10, 75)', () => {
    component.currentPage = 6;
    component.itemsPerPage = 10;
    component.maxItemsCounts = 75;
    spyOn(translationService, 'getTranslations').and.callThrough();
    component.ngOnChanges({currentPage: new SimpleChange(3, component.currentPage, true),
      itemsPerPage: new SimpleChange(35, component.itemsPerPage, true),
      maxItemsCounts: new SimpleChange(105, component.maxItemsCounts, true)});

    expect(translationService.getTranslations).toHaveBeenCalled();
    expect(component.translations).toEqual({info: 'Displaying 51 - 60 of 75 matches'});
  });

  it('should get the translated values when the inputs were updated as (5, 10, 75)', () => {
    component.currentPage = 5;
    component.itemsPerPage = 10;
    component.maxItemsCounts = 75;
    spyOn(translationService, 'getTranslations').and.callThrough();
    component.ngOnChanges({currentPage: new SimpleChange(3, component.currentPage, true),
      itemsPerPage: new SimpleChange(35, component.itemsPerPage, true),
      maxItemsCounts: new SimpleChange(105, component.maxItemsCounts, true)});

    expect(translationService.getTranslations).toHaveBeenCalled();
    expect(component.translations).toEqual({info: 'Displaying 41 - 50 of 75 matches'});
  });

  it('should emit the value of selected page', () => {
    spyOn(component.pageSelected, 'emit');
    component.pageChanged(2);

    expect(component.pageSelected.emit).toHaveBeenCalledWith(2);
  });
});
