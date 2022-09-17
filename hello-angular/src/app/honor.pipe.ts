import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'honor'
})
export class HonorPipe implements PipeTransform {

  transform(value: string, mode: string): string {
    let res: string = '';
    if (value) {
      switch(mode) {
        case 'A':
          res = `${value}님 A모드에유`;
          break;
        case 'B':
          res = `${value}님 B모드에유`;
          break;
        default:
          res = `${value} 님 ㅎㅇ`;
      }
    }
    return res;
  }

}
