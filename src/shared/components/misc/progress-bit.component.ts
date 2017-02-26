import { Component, Input } from '@angular/core';

@Component({
    selector: 'progress-bit',
    templateUrl: './html/shared/misc/progress-bit.component.html'
})
export class ProgressBitComponent {
    @Input() progress: number;
    @Input() showText: boolean;
}