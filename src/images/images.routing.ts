import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate }   from '@angular/router';
import { ImagesComponent } from './images.component';
import { ImageComponent } from './image.component';

const appRoutes : Routes = 
[
    {
        path : 'images',
        component : ImagesComponent
    },
    {
        path : 'image/:id',
        component : ImageComponent
    },
];

export const appRoutingProviders: any[] = [];
export const imagesRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);