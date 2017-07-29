import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Route, Router, NavigationEnd } from '@angular/router';
import { UploadService } from './shared/services/upload/upload.service';
import { ImagesService } from './images/images.service';
import { UploadNavService } from './shared/services/upload-nav.service';
import { ImagesComponent } from './images/images.component';
import { Observable } from 'rxjs';
import { CUImage } from './shared/models/_cu-models.provider';
import '../styles/style.scss';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes } from 'ngx-uploader';


@Component({
  selector: 'main-app',
  templateUrl: './html/app.component.html',
  styleUrls: ['./styles/component/app.scss'],
})
export class AppComponent implements OnInit {
  hideUpload: boolean;
  dragOver: boolean;
  uploadInput: EventEmitter<UploadInput>;
  files: UploadFile[] = [];
  humanizeBytes: Function;

  public constructor(
    private _uploadNavService: UploadNavService,
    private _uploadService: UploadService
  ) {
    this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
    this.humanizeBytes = humanizeBytes;
  }

  ngOnInit(): void {

    this._uploadService.uploads.subscribe(uploads => this.files = uploads);

    this._uploadNavService.hideUploadNav.subscribe(hide => {
      this.hideUpload = hide;
    });

  }

  onUploadOutput(output: UploadOutput): void {
    console.log(output); // lets output to see what's going on in the console

    if (output.type === 'allAddedToQueue') { // when all files added in queue

      // uncomment this if you want to auto upload files when added
      // this.startUpload();

    } else if (output.type === 'addedToQueue') {

      output.file['native'] = output.nativeFile;
      this._uploadService.addUpload(output.file);

    } else if (output.type === 'uploading') {

      // update current data in files array for uploading file
      this._uploadService.updateUpload(output.file);

    } else if (output.type === 'removed') {

      // remove file from array when removed
      this._uploadService.removeUpload(output.file);

    } else if (output.type === 'dragOver') { // drag over event
      this.dragOver = true;
    } else if (output.type === 'dragOut') { // drag out event
      this.dragOver = false;
    } else if (output.type === 'drop') { // on drop event
      this.dragOver = false;
    }
  }

  startUpload(): void {  // manually start uploading
    const event: UploadInput = {
      type: 'uploadAll',
      url: '/upload',
      method: 'POST',
      data: { foo: 'bar' },
      concurrency: 1 // set sequential uploading of files with concurrency 1
    }

    this.uploadInput.emit(event);
  }

  cancelUpload(id: string): void {
    this.uploadInput.emit({ type: 'cancel', id: id });
  }
}