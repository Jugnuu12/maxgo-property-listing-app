import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyDetailsComponent } from './property-listing/property-details/property-details.component';

const routes: Routes = [
  { path: 'property-detail/:id', component: PropertyDetailsComponent },
  { path: '', loadChildren: () => import('./property-listing/property-listing.module').then(m => m.PropertyListingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
