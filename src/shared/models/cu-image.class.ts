import { CUObject } from './cu-object.class';
import { CUFile } from './cu-file.class';
import { CUAlbum } from './cu-album.class';
import { CUUser } from './cu-user.class';

export class CUImage extends CUObject {
    image: CUImageResource;
    filesize: CUFile;
    albums: CUAlbum[];

    constructor(name: string, description: string, user: CUUser, image: CUImageResource, filesize: CUFile, albums: CUAlbum[]) {
        super(name, description, user);
        this.image = image,
        this.filesize = filesize,
        this.albums = albums
    }
}

export interface CUImageResource {
    url: string,
    thumbUrl: string
}