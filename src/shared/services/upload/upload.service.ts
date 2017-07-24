import { Injectable } from '@angular/core';
import { CUImage } from './../../models/_cu-models.provider';
import { ImagesService } from './../../../images/images.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class UploadService {

    constructor() { }

    private _uploads: CUImage[] = [];

    public readonly uploads: Observable<CUImage[]> = Observable.of(this._uploads);


    addUpload(event:any) {
        this.getPreviewUrl(event).then(url => {
            this._uploads.push(new CUImage('123', 'New Upload', 'Add Description', null, url, null, null, null, null))
        });
    }

    getPreviewUrl(file: any) {
        return new Promise<any>((resolve, reject) => {
            if (file) {
                var reader = new FileReader();

                reader.onload = (event) => {
                    resolve(event.target['result']);
                }

                reader.readAsDataURL(file);
            }
        });
    }

}