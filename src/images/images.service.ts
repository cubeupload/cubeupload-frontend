import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Constants } from './../shared/constants';
import { CUImage } from './../shared/models/cu-image.class';
import { CUFile } from './../shared/models/cu-file.class';
import { CUUser } from './../shared/models/cu-user.class';
import { CUAlbum } from './../shared/models/cu-album.class';

@Injectable()
export class ImagesService {

    constructor(private _http: Http) { }

    getImages(): Observable<CUImage[]> {
        return this._http.get(Constants.API_Images_Get())
            .map(response => response.json())
            .map((images: CUImage[]) => images.map((image: CUImage) => this.constructImage(image)));
    }


    getImageWithId(id: number): Observable<CUImage> {
        return this._http.get(Constants.API_Image_Get_With_ID(id))
        .map(response => this.constructImage(response.json()));
    }



    private constructImage(imageItem: CUImage): CUImage {
        return imageItem ? new CUImage(
            imageItem.id,
            imageItem.name,
            imageItem.description,
            imageItem.user,
            imageItem.imageUrl,
            123,
            imageItem.albums
        ) : null
    }

}