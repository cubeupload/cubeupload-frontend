import { Component, OnInit } from '@angular/core';
import { UploadService } from './shared/services/upload/upload.service';
import { ImagesService } from './images/images.service';
import { ImagesComponent } from './images/images.component';
import { Observable } from 'rxjs';
import { CUImage} from './shared/models/_cu-models.provider';
import '../styles/style.scss';

@Component({
  selector: 'main-app',
  templateUrl: './html/app.component.html',
})
export class AppComponent implements OnInit {
  uploads: CUImage[];

  public constructor(private _uploadService: UploadService, private _imagesService: ImagesService) {
  }

  ngOnInit(): void {
    
  }

  addUpload(event){
    this._uploadService.addUpload(event);
  }


}