import { Constants } from './../constants';
import { CUObject } from './cu-object.class';
import { CUFile } from './cu-file.class';
import { CUImage } from './cu-image.class';
import { CUUser } from './cu-user.class';

export class CUAlbum extends CUObject {
    albumUrl: string;
    thumbUrl: string;
    images: CUImage[];

    constructor(
        id: string,
        name: string,
        description: string,
        user: CUUser,
        images: CUImage[],
        albumUrl: string,
        thumbUrl: string,
        createdAt: string,
        updatedAt: string
    ) {
        super(id, name, description, user, createdAt, updatedAt);
        this.images = this.imagesFromArray(images);
        this.albumUrl = albumUrl;
        this.thumbUrl = thumbUrl || this.thumbUrlForAlbum(albumUrl);
    }

    imagesFromArray(images: CUImage[]): CUImage[] {
        return images.map(image => new CUImage(
            image.id,
            image.name,
            image.description,
            image.user,
            image.imageUrl,
            image.filesize,
            image.albums,
            image.createdAt,
            image.updatedAt
        ))
    }


    thumbUrlForAlbum(albumUrl: string): string {
        let n = albumUrl.lastIndexOf('/');
        let result = albumUrl.substring(n + 1);
        let thumbPath = Constants.Album_Thumb_URL_Prepend + result;
        albumUrl = albumUrl.replace(result, thumbPath);
        return albumUrl;
    }
}