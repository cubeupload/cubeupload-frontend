import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate }   from '@angular/router';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { ImagesComponent } from './images/images.component';
import { AlbumsComponent } from './albums/albums.component';

const appRoutes : Routes = 
[
    {
        path : 'images',
        component : ImagesComponent,
        pathMatch: 'full'
    },
    {
        path : 'albums',
        component : AlbumsComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'images',
        pathMatch: 'full'
    }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);