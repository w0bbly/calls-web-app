import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsViewComponent } from './calls-view.component';

describe('CallsViewComponent', () => {
  let component: CallsViewComponent;
  let fixture: ComponentFixture<CallsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
