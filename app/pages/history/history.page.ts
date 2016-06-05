import {Page} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/history/history.page.html',
})
export class HistoryPage {
  public sessions:Session[];

  constructor() {
    // Fill sessions with mock data
    this.sessions = [];
    for (let i = 0; i < 15; i++) {
      this.sessions.push(
        new Session(new Date(), "5 minutes")
      );
    }
  }
}

class Session {
  constructor(public date:Date, public duration:string) { }
}
