import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveSvgIconComponent } from './interactive-svg-icon.component';
import { SimpleChange, SimpleChanges } from '@angular/core';

describe('InteractiveSvgIconComponent', () => {
  let component: InteractiveSvgIconComponent;
  let fixture: ComponentFixture<InteractiveSvgIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractiveSvgIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveSvgIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the src value onInit', () => {
    component.listOfSvgItems = [{key: 'filter', src: '../../images/filter.svg', activeSrc: '../../images/filter-o.svg', altName: 'filter-icon', isActive: false, isDisabled: false},
      {key: 'mail', src: '../../images/mail.svg', activeSrc: '../../images/mail-o.svg', altName: 'mail-icon', isActive: true, isDisabled: false}];
    const listOfSvgItems: SimpleChange = new SimpleChange(null, component.listOfSvgItems, false);
    const changes: SimpleChanges = {listOfSvgItems};
    component.ngOnChanges(changes);

    expect(component.srcValues).toEqual({filter: '../../images/filter.svg', mail: '../../images/mail-o.svg'});
  });

  it('should update the src value when it is active', () => {
    component.srcValues.filter = '../../images/filter.svg';
    component.getActiveSvgSrc({key: 'filter', src: '../../images/filter.svg', activeSrc: '../../images/filter-o.svg', altName: '', isActive: true, isDisabled: false});

    expect(component.srcValues.filter).toEqual('../../images/filter-o.svg');
  });

  it('should update the active src value when it is not active', () => {
    component.srcValues.filter = '../../images/filter-o.svg';
    component.getSvgSrc({key: 'filter', src: '../../images/filter.svg', activeSrc: '../../images/filter-o.svg', altName: '', isActive: false, isDisabled: false});

    expect(component.srcValues.filter).toEqual('../../images/filter.svg');
  });
});
