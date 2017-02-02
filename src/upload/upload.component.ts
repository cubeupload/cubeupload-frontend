import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'upload',
    templateUrl: './html/upload/upload.component.html'
})
export class UploadComponent implements OnInit {
    constructor() { }

    ngOnInit() { 
        console.log("upload");
    }
}