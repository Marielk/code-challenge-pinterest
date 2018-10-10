import { Component, OnInit, HostListener, Input, Injectable } from '@angular/core';
import { ImageServiceService } from '../image-service.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class FeedComponent implements OnInit {
  @HostListener('scroll', ['$event'])

  visibleImages: any[] = [];
  visibleImages2: any[] = [];
  values: string;
  constructor(private imageService: ImageServiceService) {

    this.visibleImages = this.imageService.getImagesFetch();

  }

  onScrollUp($event: Event) {
    const div = document.getElementById('main');
    console.log(div.scrollTop);
    const scroll = div.scrollTop;
    if (scroll === 2815) {
      this.visibleImages2 = this.imageService.getFectchAgain();
    }
  }

  desapear() {
    const place = document.getElementById('main');
    place.style.display = 'none';
  }

  show() {
    const place = document.getElementById('main');
    place.style.display = 'block';
  }

  ngOnInit() {

  }

}

