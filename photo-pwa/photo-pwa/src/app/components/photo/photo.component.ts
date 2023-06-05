import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from 'src/app/models/photo.interface';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  photo?: Photo;

  constructor(private photosService: PhotosService,
    private activatedRoute: ActivatedRoute,
    private router:Router){}

    ngOnInit(): void {
      const identifier= this.activatedRoute.snapshot.paramMap.get('id');
      console.log('Identifier --> ', identifier);

      this.photosService.getPhotoById(identifier!).subscribe((photo) => {
        if (!photo){
           this.router.navigateByUrl('/');
        }

        this.photo = photo;
        console.log('Photo --> ', this.photo);
      });
    }
}
