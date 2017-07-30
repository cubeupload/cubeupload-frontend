import { Component, Input } from '@angular/core';

@Component({
    selector: 'upload-grid',
    templateUrl: './html/upload/upload-grid.component.html'
})
export class UploadGridComponent {
    @Input() uploads: any[]; // Add Type

    constructor() { }

}