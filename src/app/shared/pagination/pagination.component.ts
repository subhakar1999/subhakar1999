import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { appVariables } from '../../app.constants';
import { TranslationService } from '../../core/translation.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  // current page
  @Input() currentPage: number; // 1

  // max items count
  @Input() maxItemsCounts: number; // 61

  // page size i.e., it can be 10, 20, 30...
  @Input() itemsPerPage: number; // 10

  // emit page selected from page array
  @Output() pageSelected: EventEmitter<number> = new EventEmitter();

  // pager object
  pager: {currentPage: number, lastPageNum: number, pages: number[]};
  translations: object;

  // specifies first and last page
  private startIndex: number;
  private endIndex: number;

  constructor( private translationService: TranslationService ) { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes.currentPage && changes.currentPage.currentValue !== changes.currentPage.previousValue)
      || (changes.itemsPerPage && changes.itemsPerPage.currentValue !== changes.itemsPerPage.previousValue)
      || (changes.maxItemsCounts && changes.maxItemsCounts.currentValue !== changes.maxItemsCounts.previousValue)
    ) {
      this.setPage(this.currentPage);
      this.translationService.getTranslations([appVariables.shared.pagination.displayInfo],
        {startIndex: this.startIndex + 1, endIndex: this.endIndex, maxItemsCount: this.maxItemsCounts})
        .subscribe((res: any) => {
          this.translations = res;
        });
    }
  }

  // emit current page to the parent component.
  pageChanged(page: number): void {
    this.pageSelected.emit(page);
  }

  /**
   * See if the selected page was valid or not
   * @param page The selected page is passed here
   */
  private setPage(page: number): void {
    // calculate total pages
    const lastPageNum = Math.ceil(this.maxItemsCounts / this.itemsPerPage);
    if (page < 1 || page > lastPageNum) {
      return;
    }
    this.getPager(page, lastPageNum);
  }

  /**
   * Sets the start, end indexes and page array to be displayed
   * @param currentPage: current page will show the current selected page
   * @param lastPageNum: highest page num for the itemsCount
   */
  private getPager(currentPage: number, lastPageNum: number): void {
    // create an array of pages to ng-repeat in the pager control
    let startPage: number;
    let endPage: number;

    if (lastPageNum <= 6) {
      startPage = 1;
      endPage = lastPageNum;
    } else {
      if (currentPage <= 4) {
        startPage = 1;
        endPage = 6;
      } else if (currentPage + 1 >= lastPageNum) {
        startPage = lastPageNum - 5;
        endPage = lastPageNum;
      } else {
        startPage = currentPage - 3;
        endPage = currentPage + 2;
      }
    }
    const pages = _.range(startPage, endPage + 1);

    // calculate start and end item indexes
    this.startIndex = (currentPage - 1) * this.itemsPerPage;
    if (currentPage < lastPageNum) {
      this.endIndex = this.startIndex + this.itemsPerPage;
    } else if (currentPage === lastPageNum) {
      this.endIndex = this.maxItemsCounts;
    }

    // return object with all pager properties required by the view
    this.pager = {
      currentPage,
      lastPageNum,
      pages
    };
  }
}
