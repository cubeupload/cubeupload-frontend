import { Component, OnInit } from '@angular/core';
import { ImagesService } from './images.service';
import { CUImage} from './../shared/models/_cu-models.provider';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Component({
    selector: 'images',
    templateUrl: './html/images/images.component.html'
})
export class ImagesComponent implements OnInit {
    images: CUImage[];

    constructor(private _imagesService: ImagesService) { }

    ngOnInit() {
        this._imagesService.getImages().subscribe(images => this.images = images);
    }

    insertImage(image: CUImage){
        this.images.push(image);
    }
}