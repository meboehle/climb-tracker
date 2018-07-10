import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material'; 
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { ClimbOfDayComponent } from './climb-of-day/climb-of-day.component';
import { ClimbsByRegionComponent } from './climbs-by-region/climbs-by-region.component';
import { ClimbsMapComponent } from './climbs-map/climbs-map.component';
import { ClimbCardComponent } from './climb-card/climb-card.component';
import { LinkFooterComponent } from './link-footer/link-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    ClimbOfDayComponent,
    ClimbsByRegionComponent,
    ClimbsMapComponent,
    ClimbCardComponent,
    LinkFooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
