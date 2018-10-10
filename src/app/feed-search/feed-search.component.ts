import { Component, OnInit, Input, Injectable } from '@angular/core';
import { ImageServiceService } from '../image-service.service';

@Component({
  selector: 'app-feed-search',
  templateUrl: './feed-search.component.html',
  styleUrls: ['./feed-search.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class FeedSearchComponent implements OnInit {
  @Input () search ; // esto nos dice que el search sera un input
  visibleImagesSearch: any[] = [];
  imagesResult: any[] = [];
  constructor(private imageService: ImageServiceService) {
  }

  getSearchData(search) {
    this.visibleImagesSearch = this.imageService.getImagesSearch(search);
      if (this.visibleImagesSearch.length !== 0) {
        console.log(this.visibleImagesSearch);
      } else {
        console.log('not yet');
      }
  }
  getImages(search) {
    if (this.search !== undefined) {
      // console.log(this.search);
      this.visibleImagesSearch = this.imageService.getImagesSearch(search);
    }
  }
  ngOnInit() {
  }

}
