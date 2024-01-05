import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone: true
})
export class AgePipe implements PipeTransform {

  transform(value: number): string {

    if(value >= 18)
      return "Adulto.";

    return "Menor de idade"
  }

}
