import { Injectable } from '@angular/core';
import { UploadFile } from 'ngx-uploader';
import { ImagesService } from './../../../images/images.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class UploadService {

    constructor() { }

    private _uploads: UploadFile[] = [];

    public readonly uploads: Observable<UploadFile[]> = Observable.of(this._uploads);


    addUpload(file: UploadFile) {
        this._uploads.push(file);
    }

    updateUpload(file: UploadFile) {
        const index = this._uploads.findIndex(file => file.id === file.id);
        this._uploads[index] = file;
    }

    removeUpload(file: UploadFile) {
        this._uploads = this._uploads.filter((file: UploadFile) => file !== file);
    }

}