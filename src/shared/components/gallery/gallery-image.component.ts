import { Component, OnInit, Input } from '@angular/core';
import { CUImage} from '../../../shared/models/_cu-models.provider';

@Component({
    selector: 'gallery-image',
    templateUrl: './html/shared/gallery/gallery-image.component.html'
})
export class GalleryImageComponent implements OnInit {
    @Input() image: CUImage;

    constructor() { }

    ngOnInit() { }
}