import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-property-list-view',
  templateUrl: './property-list-view.component.html',
  styleUrls: ['./property-list-view.component.scss']
})
export class PropertyListViewComponent implements OnInit {
  listings: any;
  p: number = 1;
  pageSize: number = 7;
  dataSource!: MatTableDataSource<any>; 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [
    'id',
    'title',
    'address',
    'coveredAreaSQFT',
    'propertyType',
    'price',
  ];

  sortDirections: { [key: string]: 'asc' | 'desc' } = {};

  constructor(private apiServices: ApiServicesService,private router: Router){}

  ngOnInit() {
    this.getPropertyListForListView();
    this.dataSource = new MatTableDataSource(this.listings);
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

  toggleSortDirection(column: string) {
    this.sortDirections[column] = (this.sortDirections[column] === 'asc') ? 'desc' : 'asc';
    this.sort.active = column;
    this.sort.direction = this.sortDirections[column];
  }
  onRowClick(row: any) {
    this.router.navigate(['../property-detail', row.id]);
  }

}
