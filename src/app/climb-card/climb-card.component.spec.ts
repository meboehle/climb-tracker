import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbCardComponent } from './climb-card.component';

describe('ClimbCardComponent', () => {
  let component: ClimbCardComponent;
  let fixture: ComponentFixture<ClimbCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimbCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimbCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
