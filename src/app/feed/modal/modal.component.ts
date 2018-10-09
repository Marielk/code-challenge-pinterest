import { Component, OnInit} from '@angular/core';
import { ImageServiceService } from '../../image-service.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private imageService: ImageServiceService) { }

  ngOnInit() {
  }

}
