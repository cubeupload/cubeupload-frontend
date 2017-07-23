import { SharingOption, SharingOptionInterface, QuickShare, FullShare } from './../../models/sharing/_sharing-options';
import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUUserPreferences } from '../../../shared/models/cu-user-preferences.class';

@Component({
    selector: 'quick-share',
    templateUrl: './html/shared/sharing/quick-share.component.html'
})
export class QuickShareComponent implements OnInit {
    @Input() url: string;
    @Input() sharingOption: SharingOption;
    link: string;

    constructor() { }

    ngOnInit(): void {
        this.getLink();
    }

    getLink(): void {
        this.link = this.sharingOption.strategy.getLink('lolhi');
    }
}