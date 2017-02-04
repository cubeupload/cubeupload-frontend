import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, RouterLinkActive } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap';
import { ImageGridComponent } from './components/image-grid.component';
import { ImageBitComponent } from './components/image-bit.component';
import { SelectAllDirective } from './../shared/directives/select-all.directive';

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
    SelectAllDirective
  ]

})
export class SharedModule {
}