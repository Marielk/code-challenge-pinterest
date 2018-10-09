import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FeedComponent } from './feed/feed.component';
import { ImagePlaceComponent } from './feed/image-place/image-place.component';
import { ModalComponent } from './feed/modal/modal.component';
import { ImageServiceService } from './image-service.service';
import { HttpClientModule } from '@angular/common/http' ;

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FeedComponent,
    ImagePlaceComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ImageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
