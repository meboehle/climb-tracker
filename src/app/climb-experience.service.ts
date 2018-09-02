import { Injectable } from '@angular/core';

import { ClimbExperience } from './climb-experience';

@Injectable({
  providedIn: 'root'
})
export class ClimbExperienceService {

  experiences: ClimbExperience[] = [];

  constructor() { }

  getExperience(): ClimbExperience[] {
    return this.experiences;
  }

  addExperience(experience: ClimbExperience): void {
    this.experiences.push(experience);
  }

}
