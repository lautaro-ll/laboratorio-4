import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'long'
})
export class LongPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(value.length > 3){
      return value.slice(0,3) + "...";
    }
    else
      return value;
  }

}
