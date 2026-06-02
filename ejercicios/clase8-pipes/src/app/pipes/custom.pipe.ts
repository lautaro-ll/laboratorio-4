import { Pipe, PipeTransform, numberAttribute } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {    
    return value.toString().slice(0,2) + "." + value.toString().slice(3,6) + "." + value.toString().slice(6,9);
  }

}
