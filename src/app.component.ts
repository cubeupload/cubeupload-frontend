import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, NavigationEnd } from '@angular/router';
import { UploadService } from './shared/services/upload/upload.service';
import { ImagesService } from './images/images.service';
import { UploadNavService } from './shared/services/upload-nav.service';
import { ImagesComponent } from './images/images.component';
import { Observable } from 'rxjs';
import { CUImage } from './shared/models/_cu-models.provider';
import '../styles/style.scss';

@Component({
  selector: 'main-app',
  templateUrl: './html/app.component.html',
})
export class AppComponent implements OnInit {
  hideUpload: boolean;

  public constructor(
    private _uploadNavService: UploadNavService,
  ) { }

  ngOnInit(): void {

    this._uploadNavService.hideUploadNav.subscribe(hide => this.hideUpload = hide);

  }

}