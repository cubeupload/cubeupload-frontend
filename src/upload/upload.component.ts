import { Component, OnInit } from '@angular/core';
import { CUImage } from './../shared/models/cu-image.class';
import { ImagesService } from './../images/images.service';

@Component({
    selector: 'upload',
    templateUrl: './html/upload/upload.component.html'
})
export class UploadComponent implements OnInit {
    images: CUImage[];
    upload: boolean = false;

    constructor(private _imagesService: ImagesService) { }

    ngOnInit() {
        this._imagesService.getImages()
            .subscribe(response => this.images = response);
    }

    uploadImages(): void {
        this.upload = !this.upload;
    }
}