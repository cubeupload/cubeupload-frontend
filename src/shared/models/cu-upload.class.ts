import { Constants } from './../constants';
import { CUObject } from './cu-object.class';
import { CUFile } from './cu-file.class';
import { CUUser } from './cu-user.class';
import { CUImage } from './cu-image.class';
import { UploadFile } from 'ngx-uploader';

export class CUUpload extends CUObject {
    uploadFile: UploadFile;
    nativeFile: File;
    ticket: string;
    image: CUImage;

    constructor(
        id: string,
        name: string,
        user: CUUser, 
        createdAt: string,
        updatedAt: string,
        ticket: string, 
        uploadFile: UploadFile, 
        nativeFile: File, 
        image: CUImage
    ) {
        super(id, name, null, user, createdAt, updatedAt);
        this.ticket = ticket;
        this.uploadFile = uploadFile;
        this.nativeFile = nativeFile;
        this.image = image;
    }

}
