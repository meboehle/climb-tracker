import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbsMapComponent } from './climbs-map.component';

describe('ClimbsMapComponent', () => {
  let component: ClimbsMapComponent;
  let fixture: ComponentFixture<ClimbsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimbsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimbsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
