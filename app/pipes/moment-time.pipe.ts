import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';


@Pipe({
  name: 'momentTime'
})
export class MomentTimePipe implements PipeTransform {
  public transform(durationMs:number):string {
    const momentDuration = moment.duration(durationMs);

    // Hack method to convert a Moment.Duration into a format-able Moment
    // Hack was proposed in this post:
    // https://github.com/moment/moment/issues/1048#issuecomment-165357838
    return moment(momentDuration._data).format('mm:ss');
  }
}
