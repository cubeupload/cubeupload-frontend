import { Component, OnInit, EventEmitter } from '@angular/core';
import { ImagesService } from './../images/images.service';
import { UploadService } from './../shared/services/upload/upload.service';
import { CUUpload } from './../shared/models/_cu-models.provider';
import { ThumbnailPipe } from './../shared/pipes/thumbnail.pipe'
import { Constants } from './../shared/constants';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes } from 'ngx-uploader';

@Component({
    selector: 'upload',
    templateUrl: './html/upload/upload.component.html'
})
export class UploadComponent implements OnInit {
    formData: FormData;
    uploads: UploadFile[] = [];
    uploadInput: EventEmitter<UploadInput>;
    humanizeBytes: Function;
    dragOver: boolean;

    constructor(private _uploadService: UploadService) {
        this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
        this.humanizeBytes = humanizeBytes;
    }

    ngOnInit(){
        this._uploadService.uploadQueue.subscribe(uploads => this.uploads = uploads);
    }

    onUploadOutput(output: UploadOutput): void {
        console.log(output); // lets output to see what's going on in the console

        if (output.type === 'allAddedToQueue') { // when all files added in queue
            
            // uncomment this if you want to auto upload files when added
            this.startUpload();

        } else if (output.type === 'addedToQueue') {

            if (output.file.size > Constants.MAX_File_size()) {
                // TODO Make this actually reject the file
                console.warn("Your file is too large, noooo");
                // return;
            }
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
            url: 'https://alpha.cubeupload.com/api/upload/guest', //Constants.API_Upload_Guest(),
            method: 'POST',
            fieldName: 'img',
            // data: { foo: 'bar' },
            concurrency: 3 // set sequential uploading of files with concurrency 1
        }

        this.uploadInput.emit(event);
    }

    cancelUpload(id: string): void {
        this.uploadInput.emit({ type: 'cancel', id: id });
    }
}