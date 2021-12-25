import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SearchComponent } from './search/search.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InteractiveSvgIconComponent } from './interactive-svg-icon/interactive-svg-icon.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomMaterialModule } from './custom-material.module';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [ CommonModule, TranslateModule, FormsModule, NgbModule, CustomMaterialModule],
  exports: [ CommonModule, FormsModule, TranslateModule, NgbModule, SearchComponent, PaginationComponent, CheckboxComponent,
    InteractiveSvgIconComponent, TableComponent, CustomMaterialModule],
  declarations: [ SearchComponent, PaginationComponent, CheckboxComponent, InteractiveSvgIconComponent, TableComponent ]
})
export class SharedModule { }
