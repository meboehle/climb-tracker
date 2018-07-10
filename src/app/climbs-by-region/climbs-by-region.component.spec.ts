import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbsByRegionComponent } from './climbs-by-region.component';

describe('ClimbsByRegionComponent', () => {
  let component: ClimbsByRegionComponent;
  let fixture: ComponentFixture<ClimbsByRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimbsByRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimbsByRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
