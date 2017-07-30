import { Injectable } from '@angular/core';
import { UploadFile } from 'ngx-uploader';
import { ImagesService } from './../../../images/images.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/mergeAll';

@Injectable()
export class UploadService {

    constructor() { }

    private _uploadQueue: UploadFile[] = [];
    public readonly uploadQueue: Observable<UploadFile[]> = Observable.of(this._uploadQueue);

    addUpload(file: UploadFile) {
        this._uploadQueue.push(file);
    }

    updateUpload(file: UploadFile) {
        const index = this._uploadQueue.findIndex(upload => upload.id === file.id);
        this._uploadQueue[index] = file;
    }

    removeUpload(file: UploadFile) {
        this._uploadQueue = this._uploadQueue.filter((file: UploadFile) => file !== file);
    }

}