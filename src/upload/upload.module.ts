import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { uploadRouting } from './upload.routing';
import { SelectAllDirective } from './../shared/directives/select-all.directive';
import { UploadComponent } from './upload.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    uploadRouting
  ],
  declarations: [
    UploadComponent
  ],
  providers: [
  ]
})
export class ImagesModule { }