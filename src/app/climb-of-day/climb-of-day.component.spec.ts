import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbOfDayComponent } from './climb-of-day.component';

describe('ClimbOfDayComponent', () => {
  let component: ClimbOfDayComponent;
  let fixture: ComponentFixture<ClimbOfDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimbOfDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimbOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
