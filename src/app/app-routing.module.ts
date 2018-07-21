import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClimbsListComponent } from './climbs-list/climbs-list.component';
import { ClimbOfDayComponent } from './climb-of-day/climb-of-day.component';


//Fix the routes and components
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'my-climbs-list', component: ClimbsListComponent },
  { path: 'home', component: ClimbOfDayComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
