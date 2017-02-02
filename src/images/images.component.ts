import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'images',
    templateUrl: './html/images/images.component.html'
})
export class ImagesComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log("images");
    }
}