import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ClimbExperience } from '../climb-experience';
import { ClimbExperienceService } from '../climb-experience.service';

@Component({
  selector: 'app-climb-experience-form',
  templateUrl: './climb-experience-form.component.html',
  styleUrls: ['./climb-experience-form.component.scss']
})
export class ClimbExperienceFormComponent {

  constructor(private experienceService: ClimbExperienceService) {
  }

  climbTypes = [ 'Boulder', 'Top Rope', 'Lead', 'Other'];
  numYears = [ '<1', '1', '2', '3', '4', '5+', '10+', '15+'];

  model = new ClimbExperience('Lead', '2', 'White Rastafarian', 'Black Diamond', 'Energy release & goal-setting');

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.experienceService.addExperience(this.model);
  }

}
