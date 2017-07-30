import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { uploadRouting } from './upload.routing';
import { SelectAllDirective } from './../shared/directives/select-all.directive';
import { UploadComponent } from './upload.component';
import { UploadGridComponent } from './upload-grid.component';
import { UploadBitComponent } from './upload-bit.component';
import { NgUploaderModule } from 'ngx-uploader';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    uploadRouting,
    NgUploaderModule
  ],
  declarations: [
    UploadComponent,
    UploadGridComponent,
    UploadBitComponent
  ]
})
export class UploadModule { }