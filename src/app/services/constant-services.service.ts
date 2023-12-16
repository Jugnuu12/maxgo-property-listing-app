import { Injectable } from '@angular/core';
import {environment} from '../Environment/environment'
@Injectable({
  providedIn: 'root'
})
export class ConstantServicesService {
  public readonly getPropertyList = environment.ApiUrl + 'listings';
}
