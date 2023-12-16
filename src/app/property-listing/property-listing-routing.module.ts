import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyListViewComponent } from './property-list-view/property-list-view.component';
import { PropertyCardViewComponent } from './property-card-view/property-card-view.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      { path: 'property-detail/:id', component: PropertyDetailsComponent },
      { path: 'table-view', component: PropertyListViewComponent },
      { path: 'landing-page', component: LandingPageComponent },
      { path: 'card-view', component: PropertyCardViewComponent },
      { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyListingRoutingModule { }
