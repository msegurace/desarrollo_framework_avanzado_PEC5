import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http:HttpClient) { }

  getAllPhotos(): Observable<Photo[]>{
    return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos');
  }

  getPhotoById(id: String): Observable<Photo> {
    console.log('https://jsonplaceholder.typicode.com/photos?id=' + id );
    return this.http.get<Photo>('https://jsonplaceholder.typicode.com/photos?id=' + id );
  }
}
