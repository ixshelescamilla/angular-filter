import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText || searchText[0] === undefined) {
      return items;
    } else {
      let Param = searchText[1];
      let Text = searchText[0].toLowerCase();
      return items.filter(it => {
        return it[Param].toLowerCase().includes(Text);
      });
    }
  }

}
