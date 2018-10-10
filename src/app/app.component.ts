import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { observable } from 'rxjs';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FeedSearchComponent } from './feed-search/feed-search.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <app-nav-bar
            (writen)="updateFromChild($event)"></app-nav-bar>
  `
})
export class AppComponent  implements OnInit {

  constructor(private navComponent: NavBarComponent) { }
  search: any;
  title = 'code-challenge-pinterest';

  updateFromChild($event) {
    this.search = $event;
    // console.log(this.search);

  }
  // traer informacion del componente hijo add-tag

    ngOnInit() {
    }
}
