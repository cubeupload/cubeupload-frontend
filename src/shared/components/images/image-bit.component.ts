import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CUImage } from '../../../shared/models/_cu-models.provider';
import { SelectAllDirective } from './../../directives/select-all.directive';

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

    constructor(private _fakeService: FakeService) { }

    ngOnInit() {
        this._fakeService.fakeUploadProgress(50)
            .do(progress => {
                console.log(progress);
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