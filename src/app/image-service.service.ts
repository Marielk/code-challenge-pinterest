import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ImageServiceService {
  visibleImages: any[] = [];
  visibleImages2: any[] = [];
  visibleImagesSearch: any[] = [];
  IMAGES: any[] = [];
  IMAGES2: any[] = [];
  IMAGESSearch: any[] = [];
  accesKey = 'client_id=f096278b5be3b39a1319858a4841c39c2fbc1e4a9be7dad87079617db9d9ec69';
  endPoint = 'https://api.unsplash.com/photos/?';
  params = '&per_page=20';
  pages = '&page=20';
  query = 'query=';

  constructor(private httpClient: HttpClient) {   }

  getImagesFetch() {
    this.httpClient.get(`${this.endPoint}` + `${this.accesKey}` + `${this.params}`).subscribe((data: any[]) => {
      console.log(data);
      data.forEach(img =>
        this.IMAGES.push(
          {
            'id': img.id,
            'url': img.urls.small
          }
        )
      );
    });
    return this.visibleImages = this.IMAGES;
  }

  getFectchAgain() {
    this.httpClient.get(`${this.endPoint}` + `${this.accesKey}` + `${this.params}` + `${this.pages}`).subscribe((data: any[]) => {
      // console.log(data);
      data.forEach(img =>
        this.IMAGES2.push(
          {
            'id': img.id,
            'url': img.urls.small
          }
        )
      );
    });
    return this.visibleImages2 = this.IMAGES2;
  }

  getImagesSearch(search) {
    const querySearch = `${this.query}` + `${search}`;
    this.httpClient.get(`${this.endPoint}` + `${querySearch}` + `${this.accesKey}` + `${this.params}`).subscribe((data: any[]) => {
      console.log(data);
      data.forEach(img =>
        this.IMAGESSearch.push(
          {
            'id': img.id,
            'url': img.urls.small
          }
        )
      );
    });
    return this.visibleImagesSearch = this.IMAGESSearch;
  }

}
