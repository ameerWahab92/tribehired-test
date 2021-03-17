import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comments',
  pure: false
})
export class CommentsPipe implements PipeTransform {

  // transform(items: any[], callback: (item: any) => boolean): any {
  //   if (!items || !callback) {
  //     return items;
  //   }
  //   return items.filter(item => {
  //     console.info("fdfdf", item)
  //     callback(item);
  //   });
  // }

  transform(value: any, input: number): any {
    if (input) {
      return value.filter(val => val.indexOf(input) >= 0)
    } else {
      return value;
    }
  }
}
