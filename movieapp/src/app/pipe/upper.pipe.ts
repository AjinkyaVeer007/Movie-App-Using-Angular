import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper'
})
export class UpperPipe implements PipeTransform {
  transform(value:string): unknown {
    return value.toUpperCase();
  }
  
}
