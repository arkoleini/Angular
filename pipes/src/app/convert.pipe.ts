import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
  standalone: true
})
export class ConvertPipe implements PipeTransform {

  transform(value: number, targetUnits: string): number {
    console.log("this is custom pipe");
    
    if (isNaN(value)) {
      return 0
    }

    switch (targetUnits.toLowerCase())
    {
      case 'km':
        return value * 1.609;
      case 'm':
          return value * 1.609 * 1000;
      case 'cm':
          return value * 1.609 * 1000 * 1000;
      default:
        return 0;
    }

    return 0;
  }
}