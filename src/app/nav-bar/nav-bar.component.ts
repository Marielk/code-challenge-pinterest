import { Component, OnInit, Output, EventEmitter, HostListener, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FeedComponent } from '../feed/feed.component';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
@HostListener('keyup', ['$event'])
export class NavBarComponent implements OnInit {
  @Input() 'parentSearch';

  @Output() writen: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router, private feed: FeedComponent) { }
  search: any;
  ngOnInit() {
  }

  public onKey(event: any): void {
    if (this.search === '' ) {
      this.router.navigate(['']);
      this.feed.show();
    } else {
      this.router.navigate(['search']);
      this.writen.emit(this.search);
        if (event.keyCode === 13) {
          this.search = event.target.value;
          // console.log(this.search);
            return this.search;
          }
    }

  }



}
