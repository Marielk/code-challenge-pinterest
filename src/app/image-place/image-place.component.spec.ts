import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePlaceComponent } from './image-place.component';

describe('ImagePlaceComponent', () => {
  let component: ImagePlaceComponent;
  let fixture: ComponentFixture<ImagePlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagePlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
