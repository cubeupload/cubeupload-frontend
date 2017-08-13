import { Component, Input, OnInit } from '@angular/core';
import { PrefsService } from './../shared/services/prefs.service';
import { CUUserPreferences } from './../shared/models/cu-user-preferences.class';
import { SharingOption, SharingOptionInterface, DirectShare, SharingPage, SharingPriority } from './../shared/models/sharing/_sharing-options';

@Component({
    selector: 'upload-bit',
    templateUrl: './html/upload/upload-bit.component.html'
})
export class UploadBitComponent implements OnInit {
    @Input() upload: any; // Add Type
    primarySharingOptions: SharingOption[];
    secondarySharingOptions: SharingOption[];

    constructor(private _prefs: PrefsService) { }

    ngOnInit() {
        this.getSharingOptions();
    }

    getSharingOptions(): void {
        this._prefs.getPreferences()
            .subscribe(response => {
                this.primarySharingOptions = response.sharingOptions.filter(option => option.priority === SharingPriority.Primary)
                this.secondarySharingOptions = response.sharingOptions.filter(option => option.priority === SharingPriority.Secondary)
            });
    }

}