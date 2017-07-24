import { Constants } from './../constants';
import { CUObject } from './cu-object.class';
import { CUFile } from './cu-file.class';
import { CUAlbum } from './cu-album.class';
import { CUUser } from './cu-user.class';

export class CUImage extends CUObject {
    imageUrl: string;
    thumbUrl: string;
    filesize: number;
    albums: CUAlbum[];

    constructor(
        id: string,
        name: string,
        description: string,
        user: CUUser,
        imageUrl: string,
        filesize: number,
        albums: CUAlbum[],
        createdAt: string,
        updatedAt: string
    ) {
        super(id, name, description, user, createdAt, updatedAt);
        this.imageUrl = imageUrl,
        this.thumbUrl = imageUrl,//this.thumbUrlForImage(imageUrl),
        this.filesize = filesize,
        this.albums = albums
    }


    thumbUrlForImage(imageUrl: string): string {
        let n = imageUrl.lastIndexOf('/');
        let result = imageUrl.substring(n + 1);
        let thumbPath = Constants.Image_Thumb_URL_Prepend + result;
        imageUrl = imageUrl.replace(result, thumbPath);
        return imageUrl;
    }
}