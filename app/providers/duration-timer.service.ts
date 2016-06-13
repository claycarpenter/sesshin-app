import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/timeInterval';
import {Subscription} from 'rxjs/Subscription';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {TimerService} from './timer.service';


@Injectable()
export class DurationTimerService {
  public timerState$:BehaviorSubject<TimerState>;
  private _timer$:Observable<number>;
  private _subscription:Subscription;
  private _isRunning:boolean = false;
  private _duration:number = 0;

  constructor(private _timerService:TimerService) {
    this.timerState$ = new BehaviorSubject<TimerState>({isRunning: false, duration: 0});

    const source = this._timerService.timer$
      .map((incrementalDuration:number):number => { return this._duration + incrementalDuration; });

    const durationEmitter = this._emitDuration.bind(this);
    this._subscription = source.subscribe(
      (newDuration:number) => {
        this._duration = newDuration;

        durationEmitter();
      },
      (err) => {
        console.error('Error: ' + err);
      }
    );
  }

  // Is there any reason to expose this publicly? I don't think so...
  private get isRunning():boolean {
    return this._isRunning;
  }

  public toggleRunning() {
    if (this.isRunning) {
      this._stopTimer();
    } else {
      this._runTimer();
    }
  }

  public stop() {
    this._stopTimer();

    this._duration = 0;
    this._emitDuration();
  }

  private _runTimer() {
    if (this.isRunning) {
      return;
    }

    this._timerService.start();

    this._isRunning = true;

    this._emitDuration();
  }

  private _stopTimer() {
    if (this.isRunning) {
      this._timerService.stop();

      this._isRunning = false;
    }

    this._emitDuration();
  }

  private _emitDuration() {
    this.timerState$.next({
      isRunning: this.isRunning,
      duration: this._duration
    });
  }
}

export interface TimerState {
  isRunning: boolean;
  duration: number;
}
