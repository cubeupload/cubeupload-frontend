import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CUImage } from '../../../shared/models/_cu-models.provider';
import { SelectAllDirective } from './../../directives/select-all.directive';

import { SharingOption, SharingOptionContext, QuickShare, FullShare } from '../../../shared/services/share/_sharing-options';
import { CUUserPreferences, CUSharingOption } from '../../../shared/models/cu-user-preferences.class';
import { FakeService } from '../../../shared/fake/fake.service';
import { PrefsService } from '../../../shared/services/prefs.service';


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
    sharingOptions: CUSharingOption[];

    constructor(private _fakeService: FakeService, private _prefs: PrefsService) { }

    ngOnInit() {
        this.simFakeProgress();
        this.getSharingOptions();
    }

    getSharingOptions(): void {
        this._prefs.getPreferences()
            .subscribe(response => {
                return this.sharingOptions = response.sharingOptions
            });
    }

    simFakeProgress(): void {
        this._fakeService.fakeUploadProgress(50)
            .do(progress => {
                if (this.progress === 100) {
                    this.progressComplete = true;
                }
            })
            .subscribe(progress => {
                return this.progress = progress;
            });
    }
}