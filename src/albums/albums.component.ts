import { Component, OnInit } from '@angular/core';
import { AlbumsService, CUAlbum, CUImage } from './albums.service';

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