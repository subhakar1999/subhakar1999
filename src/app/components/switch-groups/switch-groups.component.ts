import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-switch-groups',
  templateUrl: './switch-groups.component.html',
  styleUrls: ['./switch-groups.component.scss']
})
export class SwitchGroupsComponent implements OnInit {

  @Output() userGroup: EventEmitter<{isTM: boolean, email: string}> = new EventEmitter<{isTM: boolean, email: string}>();

  isTM = false;
  email: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.userGroup.emit({isTM: this.isTM, email: this.email});
  }
}
