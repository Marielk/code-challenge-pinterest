import { Component, OnInit, HostListener, Input } from '@angular/core';
import { ImageServiceService } from '../image-service.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})


export class FeedComponent implements OnInit {
  @HostListener('scroll', ['$event'])
  
  visibleImages: any[] = [];
  visibleImages2: any[] = [];
  visibleImagesSearch: any[] = [];
  values: string;
  constructor(private imageService: ImageServiceService, private navBar: NavBarComponent) {

    this.visibleImages = this.imageService.getImagesFetch();
    this.values = this.navBar.onKey(event);
    this.visibleImagesSearch = this.imageService.getImagesSearch(this.values);
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

