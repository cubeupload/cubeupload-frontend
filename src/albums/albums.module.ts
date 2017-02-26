import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { AlbumsComponent } from './albums.component';
import { AlbumComponent } from './album.component';
import { AlbumsService } from './albums.service';
import { albumsRouting } from './albums.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    albumsRouting
  ],
  declarations: [
    AlbumsComponent,
    AlbumComponent
  ],
  providers: [
    AlbumsService
  ]
})
export class AlbumsModule { }