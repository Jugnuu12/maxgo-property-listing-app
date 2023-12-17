import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { Router } from '@angular/router';
import { CommonServicesService } from 'src/app/services/common-services.service';
import { SearchPipe } from '../../Pipes/search.pipe';


@Component({
  selector: 'app-property-list-view',
  templateUrl: './property-list-view.component.html',
  styleUrls: ['./property-list-view.component.scss'],
  providers: [SearchPipe],
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
  constructor(private apiServices: ApiServicesService, private router: Router, private commonServices: CommonServicesService) { }

  ngOnInit() {
    this.getPropertyListForListView();
    this.dataSource = new MatTableDataSource(this.listings);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const values = Object.values(data).join('').toLowerCase();
      return values.includes(filter.toLowerCase());
    };
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
  applySearch(event: any) {
    const filterValue = (event?.target as HTMLInputElement)?.value || '';
    const trimmedValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = trimmedValue;
  }

  onPageChange(event: PageEvent) {
    this.p = event.pageIndex + 1;
  }

  // common
  onRowClick(row: any) {
    this.commonServices.navigateToDetails(row.id)
  }
}
