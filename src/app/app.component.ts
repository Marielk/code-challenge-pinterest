import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { observable } from 'rxjs';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FeedSearchComponent } from './feed-search/feed-search.component';
import { FeedComponent } from './feed/feed.component';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  implements OnInit {

  constructor(private navComponent: NavBarComponent, private feed: FeedComponent, private feedSearch: FeedSearchComponent) { }
  search: any;
  title = 'code-challenge-pinterest';

  // traer informacion del componente hijo
  updateFromChild($event) {
    this.search = $event;
    // console.log($event);
    if (this.search !== undefined) {
      // console.log(this.search);
      this.feed.desapear();
      // this.feedSearch.getSearchData(this.search);
    }
  }

    ngOnInit() {
    }
}
