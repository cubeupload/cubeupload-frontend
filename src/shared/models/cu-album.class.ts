import { CUObject } from './cu-object.class';
import { CUImage } from './cu-image.class';
import { CUUser } from './cu-user.class';

export class CUAlbum extends CUObject {
    images: CUImage[];

    constructor(id: string, name: string, description: string, user: CUUser, images: CUImage[]) {
        super(id, name, description, user);
        images = images;
    }
}