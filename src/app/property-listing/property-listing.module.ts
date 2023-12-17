import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PropertyListingRoutingModule } from './property-listing-routing.module';
import { PropertyListingComponent } from './property-listing.component';
import { PropertyListViewComponent } from './property-list-view/property-list-view.component';
import { PropertyCardViewComponent } from './property-card-view/property-card-view.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {SearchPipe} from '../../../src/app/Pipes/search.pipe'
import {FormsModule} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  declarations: [
    PropertyListingComponent,
    PropertyListViewComponent,
    PropertyCardViewComponent,
    PropertyDetailsComponent,
    LandingPageComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    PropertyListingRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatSortModule
  ]
})
export class PropertyListingModule { }
