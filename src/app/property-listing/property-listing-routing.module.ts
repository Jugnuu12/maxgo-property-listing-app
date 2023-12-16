import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyListingComponent } from './property-listing.component';
import { PropertyListViewComponent } from './property-list-view/property-list-view.component';
import { PropertyCardViewComponent } from './property-card-view/property-card-view.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

const routes: Routes = [
  {
    path: '',
    component: PropertyListingComponent,
    children: [
      { path: 'table-view', component: PropertyListViewComponent },
      { path: 'card-view', component: PropertyCardViewComponent },
      { path: 'property-detail/:id', component: PropertyDetailsComponent }, 
      { path: '', redirectTo: 'table-view', pathMatch: 'full' },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyListingRoutingModule { }
