import { SharingOption, SharingOptionContext, QuickShare, FullShare } from './../../services/share/_sharing-options';
import { Component, OnInit, Input } from '@angular/core';
import { CUUserPreferences, CUSharingOption } from '../../../shared/models/_cu-models.provider';

@Component({
    selector: 'quick-share',
    templateUrl: './html/shared/sharing/quick-share.component.html'
})
export class QuickShareComponent implements OnInit {
    @Input() url: string;
    @Input() sharingOption: CUSharingOption;
    link: string;

    constructor() { }

    ngOnInit(): void {
        this.getLink();
    }

    getLink(): void {
        var context: SharingOptionContext = new SharingOptionContext(this.sharingOption.strategy);
        this.link = context.getLink('lolhi ');
    }
}