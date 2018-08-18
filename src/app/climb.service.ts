import { Injectable } from '@angular/core';
import { Climb } from './climb';

@Injectable({
  providedIn: 'root'
})
export class ClimbService {

  climbs: Climb[] = [];

  constructor() { }

  getClimbs(): Climb[] {
    return this.climbs;
  }

  addClimb(climb: Climb): void {
    climb.inMyList = true;
    this.climbs.push(climb);
  }

  removeClimb(climb: Climb): void {
    this.climbs = this.climbs.filter(c => c !== climb);
    climb.inMyList = false;
  }

  added(climb: Climb): boolean {
    return climb.inMyList;
  }
}
