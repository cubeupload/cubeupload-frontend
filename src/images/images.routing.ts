import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate }   from '@angular/router';
import { ImagesComponent } from './images.component';

const appRoutes : Routes = 
[
    {
        path : '',
        component : ImagesComponent
    },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forChild(appRoutes);