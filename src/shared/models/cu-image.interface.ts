import { CUObject } from './cu-object.interface';
import { CUFile } from './cu-file.class';
import { CUAlbum } from './cu-album.interface';

export interface CUImage extends CUObject {
    filesize: CUFile,
    albums: CUAlbum[]

}