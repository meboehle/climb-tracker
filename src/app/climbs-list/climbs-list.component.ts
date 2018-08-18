import { Component, OnInit } from '@angular/core';
import { ClimbService } from '../climb.service';

@Component({
  selector: 'app-climbs-list',
  templateUrl: './climbs-list.component.html',
  styleUrls: ['./climbs-list.component.scss']
})
export class ClimbsListComponent implements OnInit {

  constructor(public climbService: ClimbService) { }

  ngOnInit() {
  }

}
