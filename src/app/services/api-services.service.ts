import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConstantServicesService } from '../services/constant-services.service';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  constructor(private http: HttpClient, private constant: ConstantServicesService) {}

  getListings(): Observable<any> {
    const url = this.constant.getPropertyList;
    return this.http.get(url);
  }

  getDataForDetailView(id: number): Observable<any> {
    const url = `${this.constant.getDataForDetailView}/${id}`;
    return this.http.get(url);
  }
}
