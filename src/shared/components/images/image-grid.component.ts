import { Component, OnInit, Input } from '@angular/core';
import { CUImage} from '../../../shared/models/_cu-models.provider';

@Component({
    selector: 'image-grid',
    templateUrl: './html/shared/images/image-grid.component.html'
})
export class ImageGridComponent implements OnInit {
    @Input() images: CUImage[];

    constructor() { }

    ngOnInit() { }
}