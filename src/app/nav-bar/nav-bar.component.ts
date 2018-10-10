import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { Injectable } from '@angular/core';

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
  @Output() writen: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  values: string;
  ngOnInit() {
  }

  public onKey(event: any) {
    this.values = event.target.value;
    this.writen.emit(this.values);
    return this.values;
  }



}
