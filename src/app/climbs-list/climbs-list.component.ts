import { Component, OnInit } from '@angular/core';
import { Climb } from '../climb';

@Component({
  selector: 'climbs-list',
  templateUrl: './climbs-list.component.html',
  styleUrls: ['./climbs-list.component.scss']
})
export class ClimbsListComponent implements OnInit {

  climbList: Climb[];

  constructor() { }

  ngOnInit() {
    this.getClimbList();
  }

  getClimbList(): Climb[] {
    return this.climbList;
  }

  addClimb(climb: Climb) : void {
    this.climbList.push(climb);
  }

}
