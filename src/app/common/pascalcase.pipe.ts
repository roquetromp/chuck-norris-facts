import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pascalcase'
})
export class PascalcasePipe implements PipeTransform {

  transform(value: string): string {
    return value[0].toUpperCase() + value.substr(1, value.length);
  }

}
