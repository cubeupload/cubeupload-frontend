import { SharingOption, SharingOptionContext, QuickShare, FullShare } from './sharing-options/_sharing-options';
import { Component, OnInit, Input } from '@angular/core';

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
        var context: SharingOptionContext = new SharingOptionContext(this.sharingOption);
        this.link = context.getLink('lolhi ');
    }
}