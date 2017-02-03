import { CUObject } from './cu-object.class';
import { CUImage } from './cu-image.class';
import { CUUser } from './cu-user.class';

export class CUAlbum extends CUObject {
    images: CUImage[];

    constructor(name: string, description: string, user: CUUser, images: CUImage[]) {
        super(name, description, user);
        images = images;
    }
}