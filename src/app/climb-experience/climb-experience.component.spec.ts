import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbExperienceComponent } from './climb-experience.component';

describe('ClimbExperienceComponent', () => {
  let component: ClimbExperienceComponent;
  let fixture: ComponentFixture<ClimbExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimbExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimbExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
