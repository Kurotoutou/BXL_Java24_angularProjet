import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTimerPipe'
})
export class ToTimerPipePipe implements PipeTransform {

  transform(value: number): string {
    let minutes: number = Math.floor(value / 60);
    let secondes: number = value % 60;

    return `${minutes} minutes ${secondes} seconds`
  }

}
