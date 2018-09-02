import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { ClimbOfDayComponent } from './climb-of-day/climb-of-day.component';
import { ClimbCardComponent } from './climb-card/climb-card.component';
import { ClimbsListComponent } from './climbs-list/climbs-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { ShopItemsComponent } from './shop-items/shop-items.component';
import { ClimbExperienceFormComponent } from './climb-experience-form/climb-experience-form.component';



@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    ClimbOfDayComponent,
    ClimbCardComponent,
    ClimbsListComponent,
    ShopItemsComponent,
    ClimbExperienceFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    MatDividerModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
