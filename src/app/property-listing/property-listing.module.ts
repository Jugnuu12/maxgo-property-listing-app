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
@NgModule({
  declarations: [
    PropertyListingComponent,
    PropertyListViewComponent,
    PropertyCardViewComponent,
    PropertyDetailsComponent
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
    MatCardModule
  ]
})
export class PropertyListingModule { }
