import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Climb } from '../climb';
import { CLIMBS } from '../mock-climbs';

@Component({
  selector: 'climb-card',
  templateUrl: './climb-card.component.html',
  styleUrls: ['./climb-card.component.scss']
})
export class ClimbCardComponent implements OnInit {

  climbs = CLIMBS;

  @Output() climbAdded = new EventEmitter<Climb>();

  constructor() { }

  ngOnInit() {
  }

  add(climb: Climb): void {
    this.climbAdded.emit(climb);
  }

  remove(climb: Climb): void {

  }
}
