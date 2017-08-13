import { SharingOption, SharingOptionInterface, DirectShare, SharingPage } from './../../models/sharing/_sharing-options';
import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUUserPreferences } from '../../../shared/models/cu-user-preferences.class';

@Component({
    selector: 'quick-share',
    templateUrl: './html/shared/sharing/quick-share.component.html'
})
export class DirectShareComponent implements OnInit {
    @Input() url: string;
    @Input() sharingOption: SharingOption;
    @Input() showCopyButton: boolean;
    link: string;
    focus: boolean;

    constructor() { }

    ngOnInit(): void {
        this.getLink();
    }

    getLink(): void {
        this.link = this.sharingOption.strategy.getLink(this.url);
    }

    onFocus(): void {
        this.focus = true;
    }

    onBlur(): void {
        this.focus = false;
    }
}