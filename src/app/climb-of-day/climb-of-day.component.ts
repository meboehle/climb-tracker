import { Component, OnInit } from '@angular/core';

import { Climb } from '../climb';

@Component({
  selector: 'climb-of-day',
  templateUrl: './climb-of-day.component.html',
  styleUrls: ['./climb-of-day.component.scss']
})
export class ClimbOfDayComponent implements OnInit {

  title: string;

  climb: Climb = {
    name: 'Edge of Reason',
    grade: 'V3',
    location: 'Bishop, California',
    rating: '2.3/5'
  };

  constructor() { 
    this.title = 'Climb of the Day';
  }

  ngOnInit() {
  }

}
