import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
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
  defaultFilterPredicate = (data: any, filter: string) => true;
  fromAmount: number | undefined;
  toAmount: number | undefined;
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  sortDirection: boolean = true;
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
    this.sort.sortChange.subscribe(() => this.dataSource.sort = this.sort);
    this.sort.sort({ id: 'price', start: 'asc', disableClear: false });
  }
  customPriceSort(data: any[], sort: Sort): any[] {
    if (!sort.active || sort.direction === '') {
      return data;
    }
    return data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      const priceA = parseFloat(a['price']);
      const priceB = parseFloat(b['price']);

      return (priceA - priceB) * (isAsc ? 1 : -1);
    });
  }
  applySort(event: any) {
    const activeSortColumn = event.active;
    const direction = this.sortDirection ? 'asc' : 'desc';
    this.dataSource.data = this.customPriceSort(this.dataSource.data.slice(), { active: activeSortColumn, direction });
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
  applyPriceRangeFilter(fromAmount: string, toAmount: string) {
    const fromValue = parseFloat(fromAmount);
    const toValue = parseFloat(toAmount);

    if (!isNaN(fromValue) && !isNaN(toValue)) {
      this.dataSource.filterPredicate = (data: any) => {
        const price = parseFloat(data['price']);
        return price >= fromValue && price <= toValue;
      };
      this.dataSource.filter = 'customPriceFilter';
    } else {
      this.dataSource.filterPredicate = this.defaultFilterPredicate;
      this.dataSource.filter = '';
    }
  }
  onRowClick(row: any) {
    this.commonServices.navigateToDetails(row.id)
  }
}
