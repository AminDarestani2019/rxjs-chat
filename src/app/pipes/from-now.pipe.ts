import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'fromNow'
})
export class FromNowPipe implements PipeTransform {

  transform(value:Date): string {
    return moment(value).fromNow();
  }

}

export const fromNowPipeInjectables: Array<any> = [
  FromNowPipe
];
