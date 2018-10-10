import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-search',
  templateUrl: './feed-search.component.html',
  styleUrls: ['./feed-search.component.css']
})
export class FeedSearchComponent implements OnInit {
  visibleImagesSearch: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
