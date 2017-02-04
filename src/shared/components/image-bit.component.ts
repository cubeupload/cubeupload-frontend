import { Component, OnInit, Input } from '@angular/core';
import { CUImage } from './../models/cu-image.class';
import { SelectAllDirective } from './../directives/select-all.directive';

@Component({
    selector: 'image-bit',
    templateUrl: './html/shared/image-bit.component.html',
    styleUrls: ['./styles/component/image-bit.scss'],
    providers: [SelectAllDirective]
})
export class ImageBitComponent implements OnInit {
    @Input() image: CUImage;

    constructor() { }

    ngOnInit() { }
}