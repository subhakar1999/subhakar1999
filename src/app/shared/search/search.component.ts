import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslationService } from '../../core/translation.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() currentSearchItem: {itemKey: string, itemValue: string, placeHolder: string, focus: boolean};

  @Input() dropdownItems: {itemKey: string, itemValue: string, placeHolder: string, focus: boolean}[];

  @Output() searchContext: EventEmitter<{itemKey: string, searchValue: string}> = new EventEmitter<{itemKey: string, searchValue: string}>();

  searchTextValue = '';

  constructor(private translationService: TranslationService) { }

  ngOnInit() {
  }

  onSearchChange(item: {itemKey: string, itemValue: string, placeHolder: string, focus: boolean}) {
    this.currentSearchItem = item;
    this.searchTextValue = '';
  }

  onSearchValueChange() {
    this.searchContext.emit({itemKey: this.currentSearchItem.itemKey, searchValue: this.searchTextValue});
  }
}
