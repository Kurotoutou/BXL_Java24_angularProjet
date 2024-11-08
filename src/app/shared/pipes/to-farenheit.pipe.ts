import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFarenheit'
})
export class ToFarenheitPipe implements PipeTransform {

  transform(value: number): string {
    return `${Math.round(value * 1.8 + 32)} °F`;
  }

}
