import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './albums.service';
import { CUImage, CUAlbum, CUUser, CUFile } from './../shared/models/_cu-models.provider';

@Component({
  selector: 'albums',
  templateUrl: './html/albums/albums.component.html'
})
export class AlbumsComponent implements OnInit {
  albums: CUAlbum[];

  constructor(private _albumsService: AlbumsService) { }

  ngOnInit() {
    this._albumsService.getAlbums()
      .subscribe(response => {
        return this.albums = response;
      });
  }

}