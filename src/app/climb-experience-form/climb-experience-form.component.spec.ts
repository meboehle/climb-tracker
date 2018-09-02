import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbExperienceFormComponent } from './climb-experience-form.component';

describe('ClimbExperienceFormComponent', () => {
  let component: ClimbExperienceFormComponent;
  let fixture: ComponentFixture<ClimbExperienceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimbExperienceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimbExperienceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
