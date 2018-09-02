import { TestBed, inject } from '@angular/core/testing';

import { ClimbExperienceService } from './climb-experience.service';

describe('ClimbExperienceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClimbExperienceService]
    });
  });

  it('should be created', inject([ClimbExperienceService], (service: ClimbExperienceService) => {
    expect(service).toBeTruthy();
  }));
});
