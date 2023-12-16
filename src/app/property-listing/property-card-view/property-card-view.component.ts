import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-property-card-view',
  templateUrl: './property-card-view.component.html',
  styleUrls: ['./property-card-view.component.scss']
})
export class PropertyCardViewComponent {
  listings: any;
  p: number = 1;
  pageSize: number = 7;
  dataSource!: MatTableDataSource<any>; 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [
    'imageUrl',
    'title',
    'address',
    'coveredAreaSQFT',
    'propertyType',
    'price',
  ];

  sortDirections: { [key: string]: 'asc' | 'desc' } = {};

  constructor(private apiServices: ApiServicesService){}

  ngOnInit() {
    this.getPropertyListForListView();
  }
  getPropertyListForListView() {
    this.apiServices.getListings().subscribe((res) => {
      if (res) {
        this.listings = res;
        this.dataSource = new MatTableDataSource(this.listings);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  onPageChange(event: PageEvent) {
    this.p = event.pageIndex + 1;
  }
}
