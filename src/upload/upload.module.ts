import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { ThumbnailPipe } from './../shared/pipes/thumbnail.pipe';
import { uploadRouting } from './upload.routing';
import { SelectAllDirective } from './../shared/directives/select-all.directive';
import { UploadComponent } from './upload.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    uploadRouting,
    ThumbnailPipe
  ],
  declarations: [
    UploadComponent
  ],
  exports: [
    ThumbnailPipe
  ]
})
export class ImagesModule { }