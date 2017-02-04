import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { albumsRouting } from './albums.routing';

@NgModule({
  imports: [
    CommonModule,
    albumsRouting
  ],
  declarations: [AlbumsComponent]
})
export class AlbumsModule { }