import { Component, OnInit } from '@angular/core';
import { UploadNavService } from './shared/services/upload-nav.service';
import { Observable } from 'rxjs';
import '../styles/style.scss';


@Component({
  selector: 'main-app',
  templateUrl: './html/app.component.html',
})
export class AppComponent implements OnInit {
  // hideUpload: boolean;

  public constructor(
    private _uploadNavService: UploadNavService,
  ) {}

  ngOnInit(): void {

    // this._uploadNavService.hideUploadNav.subscribe(hide => {
    //   this.hideUpload = hide;
    // });

  }
}