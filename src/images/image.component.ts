import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from './images.service';
import { CUImage} from './../shared/models/_cu-models.provider';

@Component({
    selector: 'image',
    templateUrl: './html/images/image.component.html'
})
export class ImageComponent implements OnInit {
    image: CUImage;
    imageId: number;

    constructor(private _imagesService: ImagesService, private _router: ActivatedRoute) { 
        this.imageId = this._router.snapshot.params['id'];
    }

    ngOnInit() {
        console.log("image thing");
        this._imagesService.getImageWithId(this.imageId)
            .subscribe(response => {
                return this.image = response;
            });
    }
}