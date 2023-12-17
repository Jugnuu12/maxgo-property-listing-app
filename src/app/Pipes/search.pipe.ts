import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }
    debugger

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      const values = Object.values(item).join('').toLowerCase();
      return values.includes(searchText);
    });
  }
}
