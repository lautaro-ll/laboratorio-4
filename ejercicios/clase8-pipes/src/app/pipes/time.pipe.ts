import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: Date, type: string): string {
    switch (type) {
      case "s":
        return value.getSeconds().toString() + " segundos";
      case "m":
        return value.getMinutes().toString() + "minutos";
      case "h":
        return value.getHours().toString() + "horas";
    }
    return "";
  }

}
