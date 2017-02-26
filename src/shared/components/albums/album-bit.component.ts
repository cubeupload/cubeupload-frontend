import { Component, OnInit, Input } from '@angular/core';
import { CUAlbum} from '../../../shared/models/_cu-models.provider';
import { SelectAllDirective } from './../../directives/select-all.directive';

@Component({
    selector: 'album-bit',
    templateUrl: './html/shared/albums/album-bit.component.html',
    styleUrls: ['./styles/component/album-bit.scss'],
    providers: [ SelectAllDirective ]
})
export class AlbumBitComponent implements OnInit {
    @Input() album: CUAlbum;

    constructor() { }

    ngOnInit() { }
}