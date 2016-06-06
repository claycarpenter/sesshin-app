import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/timeInterval';
import {Subscription} from 'rxjs/Subscription';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {TimerService} from './timer.service';


@Injectable()
export class DurationTimerService {
  public duration$:BehaviorSubject<number>;
  private _timer$:Observable<number>;
  private _subscription:Subscription;
  private _isRunning:boolean = false;
  private _duration:number = 0;

  constructor(private _timerService:TimerService) {
    this.duration$ = new BehaviorSubject<number>(0);

    const source = this._timerService.timer$
      .scan((sum:number, currDuration:number):number => {return sum + currDuration;}, this._duration);

    this._subscription = source.subscribe(
      (x) => {
        this.duration$.next(x);
      },
      (err) => {
        console.log('Error: ' + err);
      }
    );
  }

  public get isRunning():boolean {
    return this._isRunning;
  }

  public toggleRunning() {
    if (this.isRunning) {
      this._stopTimer();
    } else {
      this._runTimer();
    }
  }

  private _runTimer() {
    if (this.isRunning) {
      return;
    }

    this._timerService.start();

    this._isRunning = true;
  }

  private _stopTimer() {
    if (this.isRunning) {
      this._timerService.stop();

      this._isRunning = false;
    }
  }

  public stop() {
    this._stopTimer();

    this._duration = 0;
  }
}
