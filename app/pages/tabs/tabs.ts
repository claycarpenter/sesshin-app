import {Page} from 'ionic-angular';
import {MeditatePage} from '../meditate/meditate.page';
import {Page2} from '../page2/page2';
import {Page3} from '../page3/page3';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  meditateTabRoot: any = MeditatePage;
  tab2Root: any = Page2;
  tab3Root: any = Page3;
}
