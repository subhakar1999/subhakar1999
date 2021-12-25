import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() checked = false;
  @Input() disabled = false;
  @Output() checkboxChange: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onCheckboxChange(isSelected: boolean) {
    this.checkboxChange.emit(isSelected);
  }

}
