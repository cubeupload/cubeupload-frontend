import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ImagesComponent } from './images.component';
import { ImageComponent } from './image.component';

const appRoutes: Routes =
    [
        {
            path: 'my-images',
            component: ImagesComponent,
            data: { hideUpload: false }
        },
        {
            path: 'image/:id',
            component: ImageComponent,
            data: { hideUpload: false }
        },
    ];

export const appRoutingProviders: any[] = [];
export const imagesRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);