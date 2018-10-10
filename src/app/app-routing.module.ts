import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FeedSearchComponent } from './feed-search/feed-search.component';




const app_routes: Routes = [
  {
    path: '', component: FeedComponent
  },
  {
    path: 'search', component: FeedSearchComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(app_routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}