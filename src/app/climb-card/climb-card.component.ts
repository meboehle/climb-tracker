import { Component, OnInit } from '@angular/core';
import { CLIMBS } from '../mock-climbs';
import { ClimbService } from '../climb.service';

@Component({
  selector: 'app-climb-card',
  templateUrl: './climb-card.component.html',
  styleUrls: ['./climb-card.component.scss']
})

export class ClimbCardComponent implements OnInit {

  climbs = CLIMBS;

  constructor(public climbService: ClimbService) { }

  ngOnInit() {
  }

}
