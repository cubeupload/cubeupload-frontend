import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from './albums.service';
import { CUAlbum } from './../shared/models/_cu-models.provider';

@Component({
    selector: 'album',
    templateUrl: './html/albums/album.component.html'
})
export class AlbumComponent implements OnInit {
    album: CUAlbum;
    albumId: number;

    constructor(private _albumsService: AlbumsService, private _router: ActivatedRoute) {
        this.albumId = this._router.snapshot.params['id'];
    }

    ngOnInit() {
        console.log("album thing");
        this._albumsService.getAlbumWithId(this.albumId)
            .subscribe(response => {
                return this.album = response;
            });
    }
}