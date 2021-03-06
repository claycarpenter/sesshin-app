import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/timeInterval';
import {Subscription} from 'rxjs/Subscription';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable()
export class TimerService {
  public timer$:BehaviorSubject<number>;
  private _subscription:Subscription;
  private _isRunning:boolean = false;

  constructor() {
    this.timer$ = new BehaviorSubject<number>(0);
  }

  public get isRunning():boolean {
    return this._isRunning;
  }

  public start() {
    if (this.isRunning) {
      return;
    }

    const source = Observable.timer(0, 100)
        .timeInterval()
        .pluck('interval');

    this._subscription = source.subscribe(
      (x:number) => {
        this.timer$.next(x);
      },
      (err) => {
        console.log('Error: ' + err);
      }
    );

    this._isRunning = true;
  }

  public stop() {
    if (this.isRunning) {
      this._subscription.unsubscribe();
      this._isRunning = false;
    }
  }
}
