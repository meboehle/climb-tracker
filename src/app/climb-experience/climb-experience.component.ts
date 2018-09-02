import { Component, OnInit } from '@angular/core';
import { ClimbExperienceService } from '../climb-experience.service';
import { ClimbExperience } from '../climb-experience';

@Component({
  selector: 'app-climb-experience',
  templateUrl: './climb-experience.component.html',
  styleUrls: ['./climb-experience.component.scss']
})
export class ClimbExperienceComponent implements OnInit {

  experiences: ClimbExperience[];

  constructor(private experienceService: ClimbExperienceService) { }

  ngOnInit() {
    this.getExperiences();
  }

  getExperiences(): ClimbExperience[] {
    return this.experienceService.getExperience();
  }

}
