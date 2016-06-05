import {Page} from 'ionic-angular';
import {MeditatePage} from '../meditate/meditate.page';
import {HistoryPage} from '../history/history.page';
import {Page3} from '../page3/page3';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  meditateTabRoot: any = MeditatePage;
  historyTabRoot: any = HistoryPage;
  tab3Root: any = Page3;
}
