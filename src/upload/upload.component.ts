import { Component, OnInit, EventEmitter } from '@angular/core';
import { ImagesService } from './../images/images.service';
import { UploadService } from './../shared/services/upload/upload.service';
import { CUUpload } from './../shared/models/_cu-models.provider';
import { ThumbnailPipe } from './../shared/pipes/thumbnail.pipe'
import { UploadOutput, UploadInput, UploadFile, humanizeBytes } from 'ngx-uploader';

@Component({
    selector: 'upload',
    templateUrl: './html/upload/upload.component.html'
})
export class UploadComponent implements OnInit {
    formData: FormData;
    files: UploadFile[] = [];
    uploadInput: EventEmitter<UploadInput>;
    humanizeBytes: Function;
    dragOver: boolean;

    constructor(private _uploadService: UploadService) {
        this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
        this.humanizeBytes = humanizeBytes;
    }

    ngOnInit(){
        console.info("Upload Init");
        this._uploadService.uploads.subscribe(uploads => this.files = uploads);
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