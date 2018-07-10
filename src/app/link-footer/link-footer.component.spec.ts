import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkFooterComponent } from './link-footer.component';

describe('LinkFooterComponent', () => {
  let component: LinkFooterComponent;
  let fixture: ComponentFixture<LinkFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
