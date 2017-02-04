import { Component, OnInit, Input } from '@angular/core';
import { CUImage } from './../models/cu-image.class';

@Component({
    selector: 'image-grid',
    templateUrl: './html/shared/image-grid.component.html'
})
export class ImageGridComponent implements OnInit {
    @Input() images: CUImage[];

    constructor() { }

    ngOnInit() { }
}