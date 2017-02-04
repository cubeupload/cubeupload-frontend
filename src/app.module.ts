import { NgModule, ElementRef, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { AUTH_PROVIDERS, provideAuth, JwtHelper} from 'angular2-jwt';
import { UploadComponent } from './upload/upload.component'
import { SharedModule } from './shared/shared.module';
import { ImagesModule } from './images/images.module';
import { AlbumsModule } from './albums/albums.module';
import { fakeModuleProvider } from './shared/fake-backend.provider';


@NgModule({
  imports: [  
    routing,
    SharedModule,
    BrowserModule,
    ImagesModule,
    AlbumsModule,
  ],
  declarations: [
    AppComponent,
    UploadComponent
  ],
  providers: [
    appRoutingProviders,
    JwtHelper,
    provideAuth({
      headerName: 'Authorization',
      headerPrefix: 'Bearer',
      tokenName: 'id_token',
      tokenGetter: (() => localStorage.getItem('id_token')),
      globalHeaders: [{ 'Content-Type': 'application/json' }],
    }),
    fakeModuleProvider
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}