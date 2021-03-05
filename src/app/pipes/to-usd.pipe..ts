import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'toUSD'
})
export class ToUsdPipe implements PipeTransform {

  transform(value: number) {
    if (value && !isNaN(value)) {
      return (value * 0.002382);
    }
    return;

  }
}
