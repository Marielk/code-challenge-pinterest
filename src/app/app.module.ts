import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FeedComponent } from './feed/feed.component';
import { ImageServiceService } from './image-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FeedSearchComponent } from './feed-search/feed-search.component' ;

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FeedComponent,
    FeedSearchComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [ImageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
