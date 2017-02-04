import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from './images.component';
import { ImagesService } from './images.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ImagesComponent],
  providers: [ImagesService]
})
export class ImagesModule { }