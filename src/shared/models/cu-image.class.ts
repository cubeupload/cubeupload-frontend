import { Constants } from './../constants';
import { CUObject } from './cu-object.class';
import { CUFile } from './cu-file.class';
import { CUAlbum } from './cu-album.class';
import { CUUser } from './cu-user.class';

export class CUImage extends CUObject {
    imageUrl: string;
    thumbUrl: string;
    filesize: CUFile;
    albums: CUAlbum[];

    constructor(id: number, name: string, description: string, user: CUUser, imageUrl: string, filesize: number, albums: CUAlbum[]) {
        super(id, name, description, user);
        this.imageUrl = imageUrl,
            this.thumbUrl = this.thumbUrlForImage(imageUrl),
            this.filesize = this.fileSize(filesize),
            this.albums = albums
    }

    fileSize(filesize: number): CUFile {
        return new CUFile(filesize);
    }

    thumbUrlForImage(imageUrl: string): string {
        let n = imageUrl.lastIndexOf('/');
        let result = imageUrl.substring(n + 1);
        let thumbPath = Constants.Image_Thumb_URL_Prepend + result;
        imageUrl = imageUrl.replace(result, thumbPath);
        return imageUrl;
    }
}