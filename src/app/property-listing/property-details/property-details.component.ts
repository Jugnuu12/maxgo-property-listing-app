import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServicesService } from 'src/app/services/api-services.service';
@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent {
  property: any; 

  constructor(private route: ActivatedRoute, private apiService : ApiServicesService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const propertyId = params['id'];
      this.property = this.getPropertyDetailsById(propertyId);
    });
  }

  getPropertyDetailsById(id: number): any {
    this.apiService.getDataForDetailView(id).subscribe(
      (res) =>{
        if(res){
          this.property = res;
        }
      }
    )
  }
}
