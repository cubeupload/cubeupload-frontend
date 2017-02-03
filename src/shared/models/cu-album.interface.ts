import { CUObject } from './cu-object.interface';
import { CUImage } from './cu-image.interface';

export interface CUAlbum extends CUObject {
    images: CUImage[]
}