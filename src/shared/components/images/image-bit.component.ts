import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CUImage } from '../../../shared/models/_cu-models.provider';
import { SelectAllDirective } from './../../directives/select-all.directive';

import { SharingOption, SharingOptionInterface, DirectShare, SharingPage } from '../../../shared/models/sharing/_sharing-options';
import { CUUserPreferences } from '../../../shared/models/cu-user-preferences.class';
import { PrefsService } from '../../../shared/services/prefs.service';

@Component({
    selector: 'image-bit',
    templateUrl: './html/shared/images/image-bit.component.html',
    styleUrls: ['./styles/component/image-bit.scss'],
    providers: [SelectAllDirective]
})
export class ImageBitComponent implements OnInit {
    @Input() image: CUImage;
    sharingOptions: SharingOption[];

    constructor(private _prefs: PrefsService) { }

    ngOnInit() {
        this.getSharingOptions();
    }

    getSharingOptions(): void {
        this._prefs.getPreferences()
            .subscribe(response => {
                return this.sharingOptions = response.sharingOptions
            });
    }

}