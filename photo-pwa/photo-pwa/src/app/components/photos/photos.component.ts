import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo.interface';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: Photo[] = [];
  display: number;

  constructor(private photosService: PhotosService) {
    this.display = 1;
  }

  ngOnInit(): void {
    this.photosService.getAllPhotos().subscribe((p) => this.photos = p );  
  }

  changeDisplay(mode: number): void {
    this.display = mode;
  }
}
