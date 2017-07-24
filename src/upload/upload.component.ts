import { Component, OnInit } from '@angular/core';
import { ImagesService } from './../images/images.service';
import { UploadService } from './../shared/services/upload/upload.service';
import { CUImage } from './../shared/models/_cu-models.provider';

@Component({
    selector: 'upload',
    templateUrl: './html/upload/upload.component.html'
})
export class UploadComponent implements OnInit {
    uploads: CUImage[];
    upload: boolean = false;
    url: string;

    constructor(private _imagesService: ImagesService, private _uploadService: UploadService) { }

    ngOnInit() {
        this._uploadService.uploads.subscribe(uploads => this.uploads = uploads);
    }

    addUpload(event: any) {
        Array.from(event.target.files).forEach(file => {
            this._uploadService.addUpload(file)
        });
    }

    uploadImages(): void {
        this.upload = !this.upload;
    }

}