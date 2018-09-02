import { Component } from '@angular/core';

import { ClimbExperience } from '../climb-experience';

@Component({
  selector: 'app-climb-experience-form',
  templateUrl: './climb-experience-form.component.html',
  styleUrls: ['./climb-experience-form.component.scss']
})
export class ClimbExperienceFormComponent {

  climbTypes = [ 'Boulder', 'Top Rope', 'Lead', 'Other'];
  numYears = [ '<1', '1', '2', '3', '4', '5+', '10+', '15+'];

  model = new ClimbExperience('Lead', '2', 'White Rastafarian', 'Black Diamond', 'Energy release & goal-setting');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

}
