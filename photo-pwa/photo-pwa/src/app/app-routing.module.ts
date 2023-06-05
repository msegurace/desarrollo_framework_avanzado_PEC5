import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoComponent } from './components/photo/photo.component';
import { PhotosComponent } from './components/photos/photos.component';

const routes: Routes = [
  {path: '', component: PhotosComponent},
  {path: 'photo/:id', component: PhotoComponent},
  {path: '**', component: PhotosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
