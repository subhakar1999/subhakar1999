import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SwitchGroupsComponent } from './switch-groups.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('SwitchGroupsComponent', () => {
  let component: SwitchGroupsComponent;
  let fixture: ComponentFixture<SwitchGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule, FormsModule],
      declarations: [ SwitchGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the values the form values', () => {
    spyOn(component.userGroup, 'emit').and.callThrough();
    component.onSubmit();

    expect(component.userGroup.emit).toHaveBeenCalled();
  });
});
