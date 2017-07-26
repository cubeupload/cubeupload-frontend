import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate }   from '@angular/router';
import { AlbumsComponent } from './albums.component';
import { AlbumComponent } from './album.component';

const appRoutes : Routes = 
[
    {
        path : 'my-albums',
        component : AlbumsComponent,
        data: {
            hideUpload: false
        }
    },
    {
        path : 'album/:id',
        component : AlbumComponent,
        data: {
            hideUpload: false
        }
    },
];

export const appRoutingProviders: any[] = [];
export const albumsRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);