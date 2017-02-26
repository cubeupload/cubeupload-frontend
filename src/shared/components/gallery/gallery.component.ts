import { Component, OnInit, Input } from '@angular/core';
import { CUImage} from '../../../shared/models/_cu-models.provider';

@Component({
    selector: 'gallery',
    templateUrl: './html/shared/gallery/gallery.component.html'
})
export class GalleryComponent implements OnInit {
    @Input() images: CUImage[];

    constructor() { }

    ngOnInit() { }
}