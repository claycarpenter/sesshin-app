import {Page} from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/timeInterval';
import {Subscription} from 'rxjs/Subscription';
import {TimerService} from '../../providers/timer.service';
import {DurationTimerService, TimerState} from '../../providers/duration-timer.service';


@Page({
  templateUrl: 'build/pages/meditate/meditate.page.html',
  providers: [TimerService, DurationTimerService],
})
export class MeditatePage {
  public timerState$:Observable<TimerState>;

  constructor(private _timerService:DurationTimerService) {
    this.timerState$ = this._timerService.timerState$;
  }

  public onClickStartPause() {
    this._timerService.toggleRunning();
  }

  public onClickStop() {
    this._timerService.stop();
  }
}
