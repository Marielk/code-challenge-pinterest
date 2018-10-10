import { Component, OnInit, Output, EventEmitter, HostListener, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) { }
  search: any;
  ngOnInit() {
  }

  public onKey(event: any): void {
    if (event.keyCode === 13) {
      this.search = event.target.value;
      // console.log(this.search);
      if (this.search === '' ) {
        this.router.navigate(['']);
      } else {
        this.router.navigate(['search']);
        this.writen.emit(this.search);
        // console.log(this.search);

        return this.search;
      }
    }

  }



}
