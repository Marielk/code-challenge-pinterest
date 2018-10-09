import { Component, OnInit, HostListener } from '@angular/core';
import { ImageServiceService } from '../image-service.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})


export class FeedComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])

  visibleImages = [];
  visibleImages2 = [];
  constructor(private imageService: ImageServiceService) {
    this.visibleImages = this.imageService.getImagesFetch();
    // console.log(this.visibleImages);
  }

  onScrollUp($event: Event) {
    this.visibleImages2 = this.imageService.getFectchAgain();
  }

  ngOnInit() {

  }

}

