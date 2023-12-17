import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonServicesService {

  constructor(private router: Router) { }
  
  navigateToDetails(id : number){
    this.router.navigate(['../property-detail', id]);
  }
}
