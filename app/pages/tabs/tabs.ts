import {Page} from 'ionic-angular';
import {MeditatePage} from '../meditate/meditate.page';
import {HistoryPage} from '../history/history.page';
import {SettingsPage} from '../settings/settings.page';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  meditateTabRoot: any = MeditatePage;
  historyTabRoot: any = HistoryPage;
  settingsTabRoot: any = SettingsPage;
}
