import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'climbs-by-region',
  templateUrl: './climbs-by-region.component.html',
  styleUrls: ['./climbs-by-region.component.scss']
})
export class ClimbsByRegionComponent implements OnInit {

  climbs : Array<number>;

  constructor() { }

  ngOnInit() {
    this.climbs = [1,2,3];
  }

}
