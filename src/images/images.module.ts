import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { imagesRouting } from './images.routing';
import { ImagesComponent } from './images.component';
import { ImageComponent } from './image.component';
import { ImagesService } from './images.service';
import { ImageBitComponent } from './image-bit.component';
import { SelectAllDirective } from './../shared/directives/select-all.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    imagesRouting
  ],
  declarations: [
    ImagesComponent,
    ImageComponent,
    ImageBitComponent,
    SelectAllDirective
  ],
  providers: [
    ImagesService
    ]
})
export class ImagesModule { }