import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { CommonServicesService } from 'src/app/services/common-services.service';

@Component({
  selector: 'app-property-card-view',
  templateUrl: './property-card-view.component.html',
  styleUrls: ['./property-card-view.component.scss']
})
export class PropertyCardViewComponent {
  listings: any;
  dataSource!: MatTableDataSource<any>; 
  constructor(private apiServices: ApiServicesService, private commonServices : CommonServicesService){}

  ngOnInit() {
    this.getPropertyListForListView();
  }
  getPropertyListForListView() {
    this.apiServices.getListings().subscribe((res) => {
      if (res) {
        this.listings = res;
        this.dataSource = new MatTableDataSource(this.listings);
      }
    });
  }
  onCardClick(id : number){
    this.commonServices.navigateToDetails(id);
  }
}
