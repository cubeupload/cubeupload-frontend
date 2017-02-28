import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CUImage } from '../../../shared/models/_cu-models.provider';
import { SelectAllDirective } from './../../directives/select-all.directive';

import { SharingOption, SharingOptionContext, QuickShare, FullShare } from '../../../shared/services/share/_sharing-options';
import { FakeService } from '../../../shared/fake/fake.service';

@Component({
    selector: 'image-bit',
    templateUrl: './html/shared/images/image-bit.component.html',
    styleUrls: ['./styles/component/image-bit.scss'],
    providers: [SelectAllDirective]
})
export class ImageBitComponent implements OnInit {
    @Input() image: CUImage;
    @Output() uploadProgress: EventEmitter<number> = new EventEmitter<number>();
    progress: number;
    progressComplete: boolean = false;
    quickShare: SharingOption;

    constructor(private _fakeService: FakeService) { 
        this.quickShare = new QuickShare(); //TODO Make User.getSharingOptions => array
    }

    ngOnInit() {
        this._fakeService.fakeUploadProgress(50)
            .do(progress => {
                if(this.progress === 100) {
                    this.progressComplete = true;
                }
            })
            .subscribe(progress => {
                return this.progress = progress;
            });
        this.uploadProgress
    }
}