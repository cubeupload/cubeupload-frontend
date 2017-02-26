import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { AlbumsService } from './albums.service';
import { albumsRouting } from './albums.routing';

@NgModule({
  imports: [
    CommonModule,
    albumsRouting
  ],
  declarations: [AlbumsComponent],
  providers: [
    AlbumsService
  ]
})
export class AlbumsModule { }