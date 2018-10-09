import { Component, OnInit, HostListener } from '@angular/core';
import { ImageServiceService } from '../image-service.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})


export class FeedComponent implements OnInit {
  @HostListener('scroll', ['$event'])

  visibleImages: any[] = [];
  visibleImages2: any[] = [];
  constructor(private imageService: ImageServiceService) {
    this.visibleImages = this.imageService.getImagesFetch();
    // console.log(this.visibleImages);
  }

  onScrollUp($event: Event) {
    const div = document.getElementById('main');
    console.log(div.scrollTop);
    const scroll = div.scrollTop;
    if (scroll === 2815) {
      this.visibleImages2 = this.imageService.getFectchAgain();
    }
  }

  ngOnInit() {

  }

}

