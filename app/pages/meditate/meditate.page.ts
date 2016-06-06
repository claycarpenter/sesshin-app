import {Page} from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/timeInterval';
import {Subscription} from 'rxjs/Subscription';
import {TimerService} from '../../providers/timer.service';
import {DurationTimerService} from '../../providers/duration-timer.service';


@Page({
  templateUrl: 'build/pages/meditate/meditate.page.html',
  providers: [TimerService, DurationTimerService],
})
export class MeditatePage {
  public duration$:Observable<number>;

  constructor(private _timerService:DurationTimerService) {
    this.duration$ = this._timerService.duration$;
  }

  public onClickStartPause() {
    this._timerService.toggleRunning();
  }

  public onClickStop() {
    this._timerService.stop();
  }

  public get isRunning():boolean {
    return this._timerService.isRunning;
  }
}
