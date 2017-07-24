import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Constants } from './../shared/constants';
import { CUImage, CUAlbum, CUUser, CUFile } from './../shared/models/_cu-models.provider';

@Injectable()
export class ImagesService {

    constructor(private _http: Http) { }

    getImages(): Observable<CUImage[]> {
        return this._http.get(Constants.API_Images_Get())
            .map(response => response.json())
            .map((images: CUImage[]) => images
                .map((image: CUImage) => this.constructImage(image))
            );
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
            imageItem.albums,
            imageItem.createdAt,
            imageItem.updatedAt
        ) : null
    }

}