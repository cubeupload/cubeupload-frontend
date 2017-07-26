import { Component, OnInit } from '@angular/core';
import { ImagesService } from './images.service';
import { ActivatedRoute, Route, Router, NavigationEnd } from '@angular/router';
import { CUImage } from './../shared/models/_cu-models.provider';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Component({
    selector: 'images',
    templateUrl: './html/images/images.component.html'
})
export class ImagesComponent implements OnInit {
    images: CUImage[];

    constructor(private _imagesService: ImagesService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _route: ActivatedRoute) { }

    ngOnInit() {
        this._imagesService.getImages().subscribe(images => this.images = images);
        this._router.events.subscribe(event => {
            console.log("event");
            if (event instanceof NavigationEnd) {
                console.log("Nav ", this._route.data.map(d => console.log(d)));
                // console.log("Nav2: ", this._route.data);
                this._activatedRoute.snapshot.data['hideUpload'];
                this._activatedRoute.data.subscribe(d => {
                    console.log(d.hideUpload);
                })
            }
        });
    }

    insertImage(image: CUImage) {
        this.images.push(image);
    }
}