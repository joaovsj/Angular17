import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customString',
  standalone: true
})
export class CustomStringPipe implements PipeTransform {

  transform(value: string, args: string): unknown {

    if(args == "UPPER"){
      return value.toUpperCase();
    }

    if(args == "LOWER"){
      return value.toLowerCase();
    }
    return value;
  }

}
