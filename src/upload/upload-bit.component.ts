import { Component, Input, OnInit } from '@angular/core';
import { PrefsService } from './../shared/services/prefs.service';
import { CUUserPreferences } from './../shared/models/cu-user-preferences.class';
import { SharingOption, SharingOptionInterface, DirectShare, SharingPage } from './../shared/models/sharing/_sharing-options';

@Component({
    selector: 'upload-bit',
    templateUrl: './html/upload/upload-bit.component.html'
})
export class UploadBitComponent implements OnInit {
    @Input() upload: any; // Add Type
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