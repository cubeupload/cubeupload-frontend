import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, RouterLinkActive } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap';

import { ImageGridComponent } from './components/images/image-grid.component';
import { ImageBitComponent } from './components/images/image-bit.component';
import { AlbumGridComponent } from './components/albums/album-grid.component';
import { AlbumBitComponent } from './components/albums/album-bit.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryImageComponent } from './components/gallery/gallery-image.component';
import { ProgressBitComponent } from './components/misc/progress-bit.component';
import { QuickShareComponent } from './components/sharing/quick-share.component';

import { SelectAllDirective } from './../shared/directives/select-all.directive';

import { PrefsService } from './services/prefs.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    DropdownModule.forRoot()
  ],
  declarations: [
    ImageGridComponent,
    ImageBitComponent,

    AlbumGridComponent,
    AlbumBitComponent,

    GalleryComponent,
    GalleryImageComponent,

    ProgressBitComponent,

    QuickShareComponent,

    SelectAllDirective
  ],
  exports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    DropdownModule,

    ImageGridComponent,
    ImageBitComponent,

    AlbumGridComponent,
    AlbumBitComponent,

    GalleryComponent,
    GalleryImageComponent,

    ProgressBitComponent,

    QuickShareComponent,

    SelectAllDirective
  ],
  providers: [
    PrefsService
  ]

})
export class SharedModule {
}