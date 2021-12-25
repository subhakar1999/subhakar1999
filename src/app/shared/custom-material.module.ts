import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatNativeDateModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatButtonModule,
  MatSelectModule,
  MatRadioModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatTabsModule,
  MatInputModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule, MatNativeDateModule, MatDatepickerModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatRadioModule, MatSelectModule, MatCardModule, MatTabsModule, MatInputModule
  ],
  exports: [ ReactiveFormsModule, MatButtonModule, MatNativeDateModule, MatDatepickerModule, MatCheckboxModule, MatSelectModule, MatMenuModule, MatIconModule, MatRadioModule, MatCardModule , MatTabsModule, MatInputModule]
})
export class CustomMaterialModule { }
