import { Component, OnInit, Input } from '@angular/core';
import { CUAlbum } from '../../../shared/models/_cu-models.provider';

@Component({
    selector: 'album-grid',
    templateUrl: './html/shared/albums/album-grid.component.html'
})
export class AlbumGridComponent implements OnInit {
    @Input() albums: CUAlbum[];

    constructor() { }

    ngOnInit() { }
}