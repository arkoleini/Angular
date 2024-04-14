import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {
  
    transform(value: any, fliterString: string, propName: string): any {
    // If filter string is empty, return the original array
    if (!fliterString || fliterString.trim() === '') {
        return value;
    }
    
   const resultArray=[];
   for (const item of value) {
     if (item[propName].toLowerCase() === fliterString.toLowerCase()) {
       resultArray.push(item);
     }
   }

   return resultArray;
  }
}