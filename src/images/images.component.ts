import { Component, OnInit } from '@angular/core';
import { ImagesService } from './images.service';
import { CUImage} from './../shared/models/_cu-models.provider';

@Component({
    selector: 'images',
    templateUrl: './html/images/images.component.html'
})
export class ImagesComponent implements OnInit {
    images: CUImage[];

    constructor(private _imagesService: ImagesService) { }

    ngOnInit() {
        this._imagesService.getImages()
            .subscribe(response => {
                return this.images = response;
            });
    }
}