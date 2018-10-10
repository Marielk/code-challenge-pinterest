import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FeedComponent } from './feed/feed.component';

import { observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {


  title = 'code-challenge-pinterest';

    ngOnInit() {
    }
}
