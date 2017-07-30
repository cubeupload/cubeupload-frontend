import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, RouterLinkActive } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';

import { ImageGridComponent } from './components/images/image-grid.component';
import { ImageBitComponent } from './components/images/image-bit.component';
import { AlbumGridComponent } from './components/albums/album-grid.component';
import { AlbumBitComponent } from './components/albums/album-bit.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryImageComponent } from './components/gallery/gallery-image.component';
import { ProgressBitComponent } from './components/misc/progress-bit.component';
import { DirectShareComponent } from './components/sharing/quick-share.component';

import { SelectAllDirective } from './../shared/directives/select-all.directive';
import { ThumbnailPipe } from './../shared/pipes/thumbnail.pipe';

import { PrefsService } from './services/prefs.service';
import { UploadNavService } from './services/upload-nav.service';
import { UploadService } from './services/upload/upload.service';
import { SharingOptionFactory } from './models/sharing/_sharing-options'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    ClipboardModule
  ],
  declarations: [
    ImageGridComponent,
    ImageBitComponent,
    AlbumGridComponent,
    AlbumBitComponent,
    GalleryComponent,
    GalleryImageComponent,
    ProgressBitComponent,
    DirectShareComponent,
    SelectAllDirective,
    ThumbnailPipe
    
  ],
  exports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    BsDropdownModule,

    ImageGridComponent,
    ImageBitComponent,

    AlbumGridComponent,
    AlbumBitComponent,

    GalleryComponent,
    GalleryImageComponent,

    ProgressBitComponent,

    DirectShareComponent,

    SelectAllDirective,
    ThumbnailPipe
  ],
  providers: [
    UploadService,
    PrefsService,
    SharingOptionFactory,
    UploadNavService
  ]

})
export class SharedModule {
}