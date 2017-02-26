import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Constants } from './../shared/constants';
import { CUImage, CUAlbum, CUUser, CUFile} from './../shared/models/_cu-models.provider';

@Injectable()
export class AlbumsService {

    constructor(private _http: Http) { }

    getAlbums(): Observable<CUAlbum[]> {
        return this._http.get(Constants.API_Albums_Get())
            .map(response => response.json())
            .map((albums: CUAlbum[]) => albums.map((album: CUAlbum) => this.constructAlbum(album)));
    }

    getAlbumWithId(id: number): Observable<CUAlbum> {
        return this._http.get(Constants.API_Album_Get_With_ID(id))
        .map(response => {
            return this.constructAlbum(response.json())
        });
    }

    private constructAlbum(albumItem: CUAlbum): CUAlbum {
        return albumItem ? new CUAlbum(
            albumItem.id,
            albumItem.name,
            albumItem.description,
            albumItem.user,
            albumItem.images,
            albumItem.albumUrl,
            albumItem.thumbUrl,
            albumItem.createdAt,
            albumItem.updatedAt
        ) : null
    }

}